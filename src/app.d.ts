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
		alt_titles?: string[];
		backdrop?: string;
		category?: string;
		description?: string;
		genres?: string[];
		imdb_id?: text;
		imdb_rating?: number;
		imdb_votes?: number;
		kinopoisk_cover?: string;
		kinopoisk_id?: number;
		kinopoisk_rating?: number;
		kinopoisk_votes?: number;
		minimal_age?: number;
		mydramalist_cover?: string;
		mydramalist_id?: text;
		mydramalist_rating?: number;
		mydramalist_votes?: number;
		original_title?: string;
		provider_title?: string;
		provider?: string;
		rating_mpaa?: string[];
		shikimori_cover?: string;
		shikimori_id?: number;
		shikimori_rating?: number;
		shikimori_votes?: number;
		status?: string;
		title_en?: string;
		title_ru?: string;
		tmdb_id?: text;
		updated_at?: number;
		worldart_id?: number;
		year?: number;
	}

	interface MediaWithClusterId extends Media {
		cluster_id: string;
	}
}

export {};
