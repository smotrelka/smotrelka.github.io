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

	interface Media {
		id: number;
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
		provider_ids: Record<string, ProviderIds>;
	}

	interface ProviderIds {
		imdb: ProviderId<string>[];
		kinopoisk: ProviderId<number>[];
		tmdb: ProviderId<string>[];
		mydramalist: ProviderId<string>[];
		shikimori: ProviderId<number>[];
		worldart: ProviderId<number>[];
	}

	interface ProviderId<T> {
		id: T;
		label?: string;
	}
}

export {};
