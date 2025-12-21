interface Provider {
	label: string;
	priority: number;
	buildUrl: (id: number, query: string) => string;
	supportedIds: string[];
}

export const PROVIDERS: Record<string, Provider> = {
	turbo: {
		label: 'Turbo',
		priority: 1,
		supportedIds: ['kinopoisk_id', 'imdb_id', 'worldart_id'],
		buildUrl: (id, query) => `https://52dce3a2.obrut.show/embed/0MTM?${query}=${id}`
	},

	flixcdn: {
		label: 'FlixCDN',
		priority: 2,
		supportedIds: ['kinopoisk_id', 'imdb_id'],
		buildUrl: (id, query) => {
			const type = query === 'kinopoisk_id' ? 'kinopoisk' : 'imdb';
			return `https://player0.flixcdn.space/show/${type}/${id}`;
		}
	},

	lumex: {
		label: 'Lumex',
		priority: 3,
		supportedIds: ['kinopoisk_id', 'imdb_id'],
		buildUrl: (id, query) => {
			const param = query === 'kinopoisk_id' ? 'kp_id' : 'imdb_id';
			return `https://p.lumex.cloud/f8GoATHamU0d?${param}=${id}`;
		}
	},

	kodik: {
		label: 'Kodik',
		priority: 4,
		supportedIds: ['kinopoisk_id', 'imdb_id', 'worldart_id', 'shikimori_id', 'mydramalist_id'],
		buildUrl: (id, query) => {
			const paramMap: Record<string, string> = {
				kinopoisk_id: 'kinopoiskID',
				imdb_id: 'imdbID',
				worldart_id: 'worldartAnimationID',
				shikimori_id: 'shikimoriID',
				mydramalist_id: 'mydramalistID'
			};
			const param = paramMap[query] || query;
			return `https://kodik.cc/find-player?${param}=${id}`;
		}
	}
};

// Helper to get available IDs from media data
function getAvailableIds(media: Media): Array<[number, string]> {
	const ids: Array<[number, string]> = [];

	if (media.shikimori_id) ids.push([media.shikimori_id, 'shikimori_id']);
	if (media.mydramalist_id) ids.push([media.mydramalist_id, 'mydramalist_id']);
	if (media.worldart_id) ids.push([media.worldart_id, 'worldart_id']);
	if (media.kinopoisk_id) ids.push([media.kinopoisk_id, 'kinopoisk_id']);
	if (media.imdb_id) ids.push([media.imdb_id, 'imdb_id']);

	return ids;
}

// Main function to build embed URL
export function buildEmbedUrl(media: Media): string | null {
	if (!media?.provider) return null;

	const providerKey = normalizeProvider(media.provider);
	if (!providerKey) return null;

	const provider = PROVIDERS[providerKey];
	if (!provider) return null;

	const availableIds = getAvailableIds(media);

	// Find first matching ID that provider supports
	for (const [id, idType] of availableIds) {
		if (provider.supportedIds.includes(idType)) {
			return provider.buildUrl(id, idType);
		}
	}

	return null;
}

export type ProviderKey = keyof typeof PROVIDERS;

export const normalizeProvider = (provider: string): ProviderKey | null => {
	const baseProvider = provider.split('/')[0];
	return baseProvider in PROVIDERS ? (baseProvider as ProviderKey) : null;
};
