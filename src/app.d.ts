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

	interface MeiliSearchTitle {
		id: number;
		original_name: string;
		category?: string;
		name_en?: string;
		name_ru?: string;
		alt_names?: string[];
		year?: number;
		imdb_id?: text;
		kinopoisk_id?: number;
		shikimori_id?: number;
		worldart_id?: number;
		provider?: string;
		provider_id?: string;
		tmdb_id?: text;
		mydramalist_id?: text;
		cover?: string;
		description?: string;
	}
}

export {};
