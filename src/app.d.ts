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
		type: 'movie' | 'series';
		original_name: string;
		name_en?: string;
		name_ru?: string;
		alt_names?: string[];
		year?: number;
		cover?: string;
		description?: string;
	}
}

export {};
