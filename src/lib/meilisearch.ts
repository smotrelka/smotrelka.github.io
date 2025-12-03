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
		// Union-Find helper
		const parent = new Map<number, number>();
		const find = (i: number): number => {
			if (parent.get(i) !== i) {
				parent.set(i, find(parent.get(i)!));
			}
			return parent.get(i)!;
		};
		const union = (i: number, j: number) => {
			parent.set(find(i), find(j));
		};

		// Initialize each hit as its own group
		hits.forEach((_, i) => parent.set(i, i));

		// Build ID-to-indices maps
		const idMaps = {
			imdb: new Map<string, number[]>(),
			kinopoisk: new Map<string, number[]>(),
			tmdb: new Map<string, number[]>(),
			mydramalist: new Map<string, number[]>(),
			shikimori: new Map<string, number[]>(),
			worldart: new Map<string, number[]>()
		};

		hits.forEach((hit, i) => {
			if (hit.imdb_id) {
				if (!idMaps.imdb.has(hit.imdb_id)) idMaps.imdb.set(hit.imdb_id, []);
				idMaps.imdb.get(hit.imdb_id)!.push(i);
			}
			if (hit.kinopoisk_id) {
				if (!idMaps.kinopoisk.has(String(hit.kinopoisk_id)))
					idMaps.kinopoisk.set(String(hit.kinopoisk_id), []);
				idMaps.kinopoisk.get(String(hit.kinopoisk_id))!.push(i);
			}
			if (hit.tmdb_id) {
				if (!idMaps.tmdb.has(hit.tmdb_id)) idMaps.tmdb.set(hit.tmdb_id, []);
				idMaps.tmdb.get(hit.tmdb_id)!.push(i);
			}
			if (hit.mydramalist_id) {
				if (!idMaps.mydramalist.has(hit.mydramalist_id))
					idMaps.mydramalist.set(hit.mydramalist_id, []);
				idMaps.mydramalist.get(hit.mydramalist_id)!.push(i);
			}
			if (hit.shikimori_id) {
				if (!idMaps.shikimori.has(String(hit.shikimori_id)))
					idMaps.shikimori.set(String(hit.shikimori_id), []);
				idMaps.shikimori.get(String(hit.shikimori_id))!.push(i);
			}
			if (hit.worldart_id) {
				if (!idMaps.worldart.has(String(hit.worldart_id)))
					idMaps.worldart.set(String(hit.worldart_id), []);
				idMaps.worldart.get(String(hit.worldart_id))!.push(i);
			}
		});

		// Union all hits that share any ID
		Object.values(idMaps).forEach((map) => {
			map.forEach((indices) => {
				for (let i = 1; i < indices.length; i++) {
					union(indices[0], indices[i]);
				}
			});
		});

		// Group by root parent
		const groups = new Map<number, { hit: Media; idsByProvider: Map<string, ProviderIds> }>();

		hits.forEach((hit, i) => {
			const root = find(i);

			if (!groups.has(root)) {
				groups.set(root, {
					hit,
					idsByProvider: new Map()
				});
			}

			const group = groups.get(root)!;

			if (hit.provider) {
				if (!group.idsByProvider.has(hit.provider)) {
					group.idsByProvider.set(hit.provider, {
						imdb: [],
						kinopoisk: [],
						tmdb: [],
						mydramalist: [],
						shikimori: [],
						worldart: []
					});
				}

				const providerIds = group.idsByProvider.get(hit.provider)!;

				const labelParts: string[] = [];
				const title =
					hit.provider_title ||
					hit.title_ru ||
					hit.title_en ||
					hit.original_title ||
					hit.alt_titles?.[0];

				if (title) {
					labelParts.push(title);
				} else {
					labelParts.push('-');
				}

				if (hit.year) {
					labelParts.push(`(${hit.year})`);
				}

				const label = labelParts.join(' ');

				if (hit.imdb_id && providerIds.imdb.findIndex((i) => i.id === hit.imdb_id) === -1) {
					providerIds.imdb.push({ id: hit.imdb_id, label });
				}

				if (
					hit.kinopoisk_id &&
					providerIds.kinopoisk.findIndex((i) => i.id === hit.kinopoisk_id) === -1
				) {
					providerIds.kinopoisk.push({ id: hit.kinopoisk_id, label });
				}

				if (
					hit.shikimori_id &&
					providerIds.shikimori.findIndex((i) => i.id === hit.shikimori_id) === -1
				) {
					providerIds.shikimori.push({ id: hit.shikimori_id, label });
				}

				if (
					hit.mydramalist_id &&
					providerIds.mydramalist.findIndex((i) => i.id === hit.mydramalist_id) === -1
				) {
					providerIds.mydramalist.push({ id: hit.mydramalist_id, label });
				}

				if (
					hit.worldart_id &&
					providerIds.worldart.findIndex((i) => i.id === hit.worldart_id) === -1
				) {
					providerIds.worldart.push({ id: hit.worldart_id, label });
				}

				if (hit.tmdb_id && providerIds.tmdb.findIndex((i) => i.id === hit.tmdb_id) === -1) {
					providerIds.tmdb.push({ id: hit.tmdb_id, label });
				}
			}
		});

		return Array.from(groups.values()).map(({ hit, idsByProvider }) => ({
			...hit,
			provider_ids: Object.fromEntries(idsByProvider)
		}));
	}
}
