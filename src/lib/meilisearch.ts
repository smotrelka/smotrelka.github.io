export interface SearchOptions {
	limit?: number;
	offset?: number;
	providers?: string[];
	categories?: string[];
}

export interface SearchResult<T = unknown> {
	hits: T[];
	nextCursor: string | null;
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

type Hit = MeiliSearchTitle;

// meilisearch-client.ts
export class MeilisearchClient {
	private baseUrl: string;
	private apiKey?: string;

	constructor(baseUrl: string, apiKey?: string) {
		this.baseUrl = baseUrl.replace(/\/$/, '');
		this.apiKey = apiKey;
	}

	async searchTitles(query: string, options: SearchOptions = {}): Promise<SearchResult<Hit>> {
		const { limit = 30, offset = 0, providers = null, categories = null } = options;

		const filters = this.buildFilters(providers, categories);

		const fetchLimit = Math.min(limit * 5, 1000);

		const searchResults = await this.search<Hit>(query, {
			limit: fetchLimit,
			offset: 0,
			filter: filters.length ? filters.join(' AND ') : undefined
		});

		const deduplicated = this.deduplicateResults(searchResults.hits);
		const paginated = deduplicated.slice(offset, offset + limit);

		return {
			hits: paginated,
			nextCursor: null,
			hasMore: deduplicated.length > offset + limit,
			estimatedTotalHits: deduplicated.length
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
		const url = `${this.baseUrl}/indexes/titles/search`;

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

	private getExternalId(hit: Hit): string {
		return hit.imdb_id
			? `imdb:${hit.imdb_id}`
			: hit.kinopoisk_id
				? `kp:${hit.kinopoisk_id}`
				: hit.mydramalist_id
					? `mdl:${hit.mydramalist_id}`
					: hit.shikimori_id
						? `shiki:${hit.shikimori_id}`
						: hit.tmdb_id
							? `tmdb:${hit.tmdb_id}`
							: hit.worldart_id
								? `wa:${hit.worldart_id}`
								: `${hit.provider}:${hit.provider_id}`;
	}

	private deduplicateResults(hits: Hit[]): Hit[] {
		const map = new Map<string, Hit>();

		for (const hit of hits) {
			const externalId = this.getExternalId(hit);

			if (!map.has(externalId)) {
				map.set(externalId, hit);
			}
		}

		return Array.from(map.values());
	}
}
