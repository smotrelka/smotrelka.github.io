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

	interface SearchResponse<T = unknown> {
		hits: T[];
		query: string;
		processingTimeMs: number;
		limit: number;
		offset: number;
		hasMore?: boolean;
		estimatedTotalHits: number;
	}

	interface Media {
		id: number;
		group_id?: number;
		category?: string;
		original_title?: string;
		provider_title?: string;
		title_en?: string;
		title_ru?: string;
		alt_titles?: string[];
		year?: number;
		imdb_id?: text;
		kinopoisk_id?: number;
		kinopoisk_cover?: string;
		shikimori_id?: number;
		shikimori_cover?: string;
		mydramalist_cover?: string;
		worldart_id?: number;
		provider?: string;
		tmdb_id?: text;
		mydramalist_id?: text;
		description?: string;
	}

	interface EnrichedMedia extends Media {
		provider_ids: ProviderIds;
	}

	type ProviderIds = Record<
		ProviderKey,
		Record<SourceKey, Array<{ id: number | string; label?: string }>>
	>;
}

export {};
