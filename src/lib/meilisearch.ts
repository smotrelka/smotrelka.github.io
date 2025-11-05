const MEILI_URL = 'https://search.smotrelka.org'; // your Meilisearch host
const MEILI_KEY = 'public_search_key'; // use search-only key, NOT admin

interface MeiliSearchResponse<T> {
	hits: T[];
	offset: number;
	limit: number;
	estimatedTotalHits: number;
}

export interface MeiliSearchTitle {
	id: number;
	type: 'movie' | 'series';
	name: string;
	name_en?: string;
	name_ru?: string;
	names?: string[];
	year?: number;
	poster?: string;
	description?: string;
}

export async function searchTitles(query: string, limit = 10): Promise<MeiliSearchTitle[]> {
	if (!query.trim()) return [];

	const res = await fetch(`${MEILI_URL}/indexes/titles/search`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${MEILI_KEY}`
		},
		body: JSON.stringify({
			q: query,
			limit
		})
	});

	if (!res.ok) {
		console.error('Meilisearch error:', res.status, await res.text());
		return [];
	}

	const data = (await res.json()) as MeiliSearchResponse<MeiliSearchTitle>;
	return data.hits;
}
