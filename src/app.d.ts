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
	type ExternalIdKey = 'kinopoisk' | 'imdb' | 'worldart' | 'shikimori' | 'mydramalist';

	interface SearchResponse<T = unknown> {
		took: number;
		limit: number;
		offset: number;
		query: string;
		media: T[];
	}

	interface BaseMedia {
		id: number;
		title: string | null;
		subtitle: string | null;
		best_match_title?: string;
		year: number | null;
		category: string | null;
		posters: string[];
		created_at: number;
		updated_at: number;

		imdb_rating?: number;
		imdb_votes?: number;

		kinopoisk_rating?: number;
		kinopoisk_votes?: number;

		mydramalist_rating?: number;
		mydramalist_votes?: number;

		shikimori_rating?: number;
		shikimori_votes?: number;
	}

	interface FullMedia extends BaseMedia {
		backdrop?: string;
		description?: string;
		genres?: string[];

		status: string | null;
		tagline: string | null;
		trailer_url: string | null;
		description: string | null;
		rating_mpaa: string | null;
		minimal_age: number | null;
		backdrop: string | null;
		quality: string | null;
		last_season: number | null;
		last_episode: number | null;
		episodes_total: number | null;
		episodes_aired: number | null;
		imdb_rating: number | null;
		imdb_votes: number | null;
		kinopoisk_rating: number | null;
		kinopoisk_votes: number | null;
		mydramalist_rating: number | null;
		mydramalist_votes: number | null;
		shikimori_rating: number | null;
		shikimori_votes: number | null;
		shikimori_kind: string | null;
		aired_at: string | null;
		released_at: string | null;
		next_episode_at: number | null;
		alt_titles: string[];
		actors: string[];
		composers: string[];
		countries: string[];
		designers: string[];
		directors: string[];
		editors: string[];
		genres: string[];
		licensors: string[];
		operators: string[];
		producers: string[];
		studios: string[];
		tags: string[];
		writers: string[];
		posters: string[];
		providers: ProviderGroup[];
	}

	interface ProviderGroup {
		provider: ProviderKey;
		label: string;
		priority: number;
		items: ProviderItem[];
	}

	interface ProviderItem {
		id: string; // The actual external ID value (e.g., "123456")
		idType: ExternalIdKey; // Which ID type (e.g., "shikimori")
		url: string; // Transformed embed URL
		label: string; // Display label (e.g., "Shikimori #123456")
		title?: string; // Associated scraped item title
		scrapedItemId?: number; // Reference to the scraped item
		sourceLink: string; // Link to the original source (IMDb, Shikimori, etc.)
	}
}

export {};
