// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type SourceKey = 'imdb' | 'kinopoisk' | 'shikimori' | 'tmdb' | 'mydramalist' | 'worldart';
	type ProviderKey = 'kodik' | 'turbo' | 'flixcdn' | 'lumex';
	type ExternalIdKey =
		| 'kinopoisk_id'
		| 'imdb_id'
		| 'worldart_id'
		| 'shikimori_id'
		| 'mydramalist_id';

	interface SearchResponse<T = unknown> {
		hits: T[];
		query: string;
		processingTimeMs: number;
		limit: number;
		offset: number;
		hasMore?: boolean;
		estimatedTotalHits: number;
		facetDistribution: Record<string, Record<string, number>>;
		facetStats: Record<string, { min: number; max: number; avg: number; sum: number }>;
	}

	interface Media {
		id: number;
		category?: string;
		original_title?: string;
		provider_title?: string;
		title_en?: string;
		title_ru?: string;
		alt_titles?: string[];
		status?: string;
		rating_mpaa?: string[];
		genres?: string[];
		year?: number;
		minimal_age?: number;
		backdrop?: string;
		imdb_id?: text;
		imdb_rating?: number;
		imdb_votes?: number;
		kinopoisk_id?: number;
		kinopoisk_cover?: string;
		kinopoisk_rating?: number;
		kinopoisk_votes?: number;
		shikimori_id?: number;
		shikimori_rating?: number;
		shikimori_votes?: number;
		shikimori_cover?: string;
		mydramalist_cover?: string;
		mydramalist_rating?: number;
		mydramalist_votes?: number;
		worldart_id?: number;
		provider?: string;
		tmdb_id?: text;
		mydramalist_id?: text;
		description?: string;
	}

	interface MediaWithClusterId extends Media {
		cluster_id: string;
	}
}

export {};
