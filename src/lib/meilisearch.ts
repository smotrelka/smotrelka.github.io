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

		const body = {
			q: query,
			...params
		};

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
		// union-find
		const parent = new Map<number, number>();
		const find = (i: number): number => {
			if (parent.get(i) !== i) parent.set(i, find(parent.get(i)!));
			return parent.get(i)!;
		};
		const union = (i: number, j: number) => parent.set(find(i), find(j));

		hits.forEach((_, i) => parent.set(i, i));

		// maps for dedupe
		const maps: Record<SourceKey, Map<string, number[]>> = {
			imdb: new Map(),
			kinopoisk: new Map(),
			shikimori: new Map(),
			tmdb: new Map(),
			mydramalist: new Map(),
			worldart: new Map()
		};

		const pushMap = (key: SourceKey, val?: string | number | null, idx?: number) => {
			if (!val) return;
			const s = String(val);
			if (!maps[key].has(s)) maps[key].set(s, []);
			maps[key].get(s)!.push(idx!);
		};

		hits.forEach((h, i) => {
			pushMap('imdb', h.imdb_id, i);
			pushMap('kinopoisk', h.kinopoisk_id, i);
			pushMap('tmdb', h.tmdb_id, i);
			pushMap('mydramalist', h.mydramalist_id, i);
			pushMap('shikimori', h.shikimori_id, i);
			pushMap('worldart', h.worldart_id, i);
		});

		Object.values(maps).forEach((map) =>
			map.forEach((arr) => arr.reduce((a, b) => (union(a, b), a), arr[0]))
		);

		// build enriched
		const groups = new Map<number, { hit: Media; providers: ProviderIds }>();

		hits.forEach((h, i) => {
			const root = find(i);

			if (!groups.has(root)) {
				const empty: ProviderIds = {
					kodik: {
						imdb: [],
						kinopoisk: [],
						shikimori: [],
						tmdb: [],
						mydramalist: [],
						worldart: []
					},
					turbo: {
						imdb: [],
						kinopoisk: [],
						shikimori: [],
						tmdb: [],
						mydramalist: [],
						worldart: []
					},
					flixcdn: {
						imdb: [],
						kinopoisk: [],
						shikimori: [],
						tmdb: [],
						mydramalist: [],
						worldart: []
					},
					lumex: { imdb: [], kinopoisk: [], shikimori: [], tmdb: [], mydramalist: [], worldart: [] }
				};

				groups.set(root, { hit: h, providers: empty });
			}

			if (!h.provider) return;

			const group = groups.get(root)!;
			const ids = group.providers[h.provider as ProviderKey];

			const label =
				[h.provider_title, h.title_ru, h.title_en, h.original_title, h.alt_titles?.[0]].find(
					Boolean
				) || '-' + (h.year ? ` (${h.year})` : '');

			const push = (key: SourceKey, val?: string | number | null) => {
				if (!val) return;
				if (!ids[key].some((i) => i.id === val)) ids[key].push({ id: val, label });
			};

			push('imdb', h.imdb_id);
			push('kinopoisk', h.kinopoisk_id);
			push('shikimori', h.shikimori_id);
			push('tmdb', h.tmdb_id);
			push('mydramalist', h.mydramalist_id);
			push('worldart', h.worldart_id);
		});

		return [...groups.values()].map(({ hit, providers }) => ({
			...hit,
			provider_ids: providers
		}));
	}
}
