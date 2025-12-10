export interface SearchOptions {
	limit?: number;
	offset?: number;
	providers?: string[];
	categories?: string[];
}

export interface SearchResult<T = unknown> {
	hits: T[];
	hasMore: boolean;
	processingTimeMs?: number;
	estimatedTotalHits?: number;
}

export interface MeilisearchResponse<T = unknown> {
	hits: T[];
	query: string;
	processingTimeMs: number;
	limit: number;
	offset: number;
	estimatedTotalHits: number;
}

const SOURCE_KEYS = ['imdb', 'kinopoisk', 'shikimori', 'tmdb', 'mydramalist', 'worldart'] as const;

export class MeilisearchClient {
	private baseUrl: string;
	private apiKey?: string;

	constructor(baseUrl: string, apiKey?: string) {
		this.baseUrl = baseUrl.replace(/\/$/, '');
		this.apiKey = apiKey;
	}

	async searchTitles(
		query: string,
		options: SearchOptions = {}
	): Promise<SearchResult<EnrichedMedia>> {
		const { limit = 30, offset = 0, providers = null, categories = null } = options;

		const filters = this.buildFilters(providers, categories);
		const fetchLimit = Math.min(limit * 5, 1000);

		const searchResults = await this.search<Media>(query, {
			limit: fetchLimit,
			offset: 0,
			sort: ['year:desc'],
			filter: filters.length ? filters.join(' AND ') : undefined
		});

		const enrichedHits = this.groupDuplicates(searchResults.hits);
		const paginated = enrichedHits.slice(offset, offset + limit);

		return {
			hits: paginated,
			hasMore: enrichedHits.length > offset + limit,
			estimatedTotalHits: enrichedHits.length
		};
	}

	private async search<T = unknown>(
		query: string,
		params: {
			limit?: number;
			offset?: number;
			filter?: string;
			attributesToRetrieve?: string[];
			attributesToHighlight?: string[];
			sort?: string[];
		} = {}
	): Promise<MeilisearchResponse<T>> {
		const url = `${this.baseUrl}/indexes/media/search`;

		const headers: Record<string, string> = {
			'Content-Type': 'application/json'
		};

		if (this.apiKey) {
			headers['Authorization'] = `Bearer ${this.apiKey}`;
		}

		const body = { q: query, ...params };

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify(body)
			});

			if (!response.ok) {
				const error = await response.json().catch(() => ({ message: response.statusText }));
				throw new Error(`Meilisearch error: ${error.message || response.statusText}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Meilisearch search failed:', error);
			throw error;
		}
	}

	private buildFilters(providers?: string[] | null, categories?: string[] | null): string[] {
		const filters: string[] = [];

		if (providers?.length) {
			filters.push(`provider IN [${providers.map((p) => `"${p}"`).join(',')}]`);
		}

		if (categories?.length) {
			filters.push(`category IN [${categories.map((c) => `"${c}"`).join(',')}]`);
		}

		return filters;
	}

	private groupDuplicates(hits: Media[]): EnrichedMedia[] {
		if (hits.length === 0) return [];

		const parent = new Int32Array(hits.length);
		for (let i = 0; i < hits.length; i++) parent[i] = i;

		const find = (i: number): number => {
			if (parent[i] !== i) parent[i] = find(parent[i]);
			return parent[i];
		};

		const union = (i: number, j: number) => {
			parent[find(i)] = find(j);
		};

		const idMaps = SOURCE_KEYS.map(() => new Map<string, number[]>());

		hits.forEach((h, i) => {
			const ids = [
				h.imdb_id,
				h.kinopoisk_id,
				h.shikimori_id,
				h.tmdb_id,
				h.mydramalist_id,
				h.worldart_id
			];
			ids.forEach((id, idx) => {
				if (id) {
					const key = String(id);
					const map = idMaps[idx];
					if (!map.has(key)) map.set(key, []);
					map.get(key)!.push(i);
				}
			});
		});

		idMaps.forEach((map) => {
			map.forEach((indices) => {
				for (let i = 1; i < indices.length; i++) {
					union(indices[0], indices[i]);
				}
			});
		});

		const normalizeProvider = (provider?: string): ProviderKey | undefined => {
			if (!provider) return undefined;
			if (provider.startsWith('lumex')) return 'lumex';
			if (provider.startsWith('kodik')) return 'kodik';
			if (provider.startsWith('turbo')) return 'turbo';
			if (provider.startsWith('flixcdn')) return 'flixcdn';
			return undefined;
		};

		const createEmptyProviderIds = (): ProviderIds => {
			const createSourceIds = () => ({
				imdb: [],
				kinopoisk: [],
				shikimori: [],
				tmdb: [],
				mydramalist: [],
				worldart: []
			});

			return {
				kodik: createSourceIds(),
				turbo: createSourceIds(),
				flixcdn: createSourceIds(),
				lumex: createSourceIds()
			};
		};

		const groups = new Map<number, { hit: Media; providers: ProviderIds }>();

		hits.forEach((h, i) => {
			const root = find(i);

			if (!groups.has(root)) {
				groups.set(root, { hit: h, providers: createEmptyProviderIds() });
			}

			const providerKey = normalizeProvider(h.provider);
			if (!providerKey) return;

			const group = groups.get(root)!;
			const label =
				h.provider_title ||
				h.title_ru ||
				h.title_en ||
				h.original_title ||
				h.alt_titles?.[0] ||
				'-' + (h.year ? ` (${h.year})` : '');

			const sourceIds = [
				h.imdb_id,
				h.kinopoisk_id,
				h.shikimori_id,
				h.tmdb_id,
				h.mydramalist_id,
				h.worldart_id
			];

			SOURCE_KEYS.forEach((sourceKey, idx) => {
				const val = sourceIds[idx];
				if (val) {
					const arr = group.providers[providerKey][sourceKey];
					if (!arr.some((item) => item.id === val)) {
						arr.push({ id: val, label });
					}
				}
			});
		});

		return Array.from(groups.values(), ({ hit, providers }) => ({
			...hit,
			provider_ids: providers
		}));
	}
}
