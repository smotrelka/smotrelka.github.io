import { browser } from '$app/environment';

interface Provider {
	label: string;
	priority: number;
	// Maps the internal ID type to the provider's specific URL parameter or path segment
	params: Partial<Record<ExternalIdKey, string>>;
	// Base URL or a template function
	transform: (id: string, param: string) => string;
}

export const ALIASES_KV: Record<string, string> = {
	turbo: 'Turbo',
	kodik: 'Kodik',
	lumex: 'Lumex',
	flixcdn: 'FlixCDN',
	movie: 'Фильм',
	series: 'Сериал',
	anime_movie: 'Аниме-фильм',
	anime_series: 'Аниме-сериал',
	cartoon: 'Мультфильм?',
	cartoon_movie: 'Мультфильм',
	cartoon_series: 'Мультсериал',
	show: 'ТВ-Шоу',
	released: 'Вышел',
	ongoing: 'Выходит',
	anons: 'Анонс',
	pg_13: 'pg13'
};

export const PROVIDERS: Record<ProviderKey, Provider> = {
	turbo: {
		label: 'Turbo',
		priority: 1,
		params: { kinopoisk_id: 'kinopoisk_id', imdb_id: 'imdb_id', worldart_id: 'worldart_id' },
		transform: (id, p) => `https://52dce3a2.obrut.show/embed/0MTM?${p}=${id}`
	},
	flixcdn: {
		label: 'FlixCDN',
		priority: 2,
		params: { kinopoisk_id: 'kinopoisk', imdb_id: 'imdb' },
		transform: (id, p) => `https://player0.flixcdn.space/show/${p}/${id}`
	},
	lumex: {
		label: 'Lumex',
		priority: 3,
		params: { kinopoisk_id: 'kp_id', imdb_id: 'imdb_id' },
		transform: (id, p) => `https://p.lumex.cloud/f8GoATHamU0d?${p}=${id}`
	},
	kodik: {
		label: 'Kodik',
		priority: 4,
		params: {
			kinopoisk_id: 'kinopoiskID',
			imdb_id: 'imdbID',
			worldart_id: 'worldartAnimationID',
			shikimori_id: 'shikimoriID',
			mydramalist_id: 'mydramalistID'
		},
		transform: (id, p) => `https://kodik.cc/find-player?${p}=${id}`
	}
};

export function normalizeProvider(provider: string): ProviderKey | null {
	const baseProvider = provider.split('/')[0];
	return baseProvider in PROVIDERS ? (baseProvider as ProviderKey) : null;
}

export function buildEmbedUrl(
	media: FullMedia,
	providerKey: ProviderKey,
	forcedIdType?: ExternalIdKey
): string | null {
	if (!media?.providers) return null;

	const provider = PROVIDERS[providerKey];
	if (!provider) return null;

	// 1. If a specific tab is selected, try to build that URL immediately
	if (forcedIdType && media.providers[providerKey][forcedIdType]) {
		const param = provider.params[forcedIdType];
		if (param) return provider.transform(String(media.providers[providerKey][forcedIdType]), param);
	}

	// 2. Otherwise, fallback to the first supported ID based on media data
	// We iterate through PROVIDER_MAP (the order you want to prioritize IDs)
	for (const key of Object.keys(provider.params) as ExternalIdKey[]) {
		const idValue = media.providers[providerKey][key];
		if (idValue) {
			return provider.transform(String(idValue), provider.params[key]!);
		}
	}

	return null;
}

// Get external source link
export function getSourceLink(idType: string, id: string | number, category?: string): string {
	const links: Record<string, (id: string | number) => string> = {
		imdb_id: (id) => `https://www.imdb.com/title/${id}/`,
		kinopoisk_id: (id) => `https://www.kinopoisk.ru/film/${id}/`,
		shikimori_id: (id) => `https://shikimori.one/animes/${id}`,
		tmdb_id: (id) => `https://www.themoviedb.org/movie/${id}`,
		mydramalist_id: (id) => `https://mydramalist.com/${id}`,
		worldart_id: (id) => {
			const isAnime = category?.includes('anime');
			return `http://www.world-art.ru/${isAnime ? 'animation/animation.php' : 'cinema/cinema.php'}?id=${id}`;
		}
	};
	return links[idType]?.(id) ?? '#';
}

export function formatTimeAgo(input: number | string | Date, locale = 'ru') {
	const targetDate = new Date(input);
	const now = new Date();

	const diffInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

	const units: Array<{
		unit: Intl.RelativeTimeFormatUnit;
		seconds: number;
	}> = [
		{ unit: 'year', seconds: 31536000 },
		{ unit: 'month', seconds: 2592000 },
		{ unit: 'day', seconds: 86400 },
		{ unit: 'hour', seconds: 3600 },
		{ unit: 'minute', seconds: 60 },
		{ unit: 'second', seconds: 1 }
	];

	for (const { unit, seconds } of units) {
		if (Math.abs(diffInSeconds) >= seconds || unit === 'second') {
			const value = Math.round(diffInSeconds / seconds);

			const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
			return rtf.format(value, unit);
		}
	}
}

export function formatFullDateTime(input: number | string | Date, locale = 'ru') {
	const date = new Date(input);

	const formatter = new Intl.DateTimeFormat(locale, {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour12: false
	});

	return formatter.format(date);
}

export function formatCompactNumber(number: number | string, locale = 'en') {
	const value = typeof number === 'string' ? parseFloat(number) : number;

	if (isNaN(value)) return '0';

	return new Intl.NumberFormat(locale, {
		notation: 'compact',
		compactDisplay: 'short',
		maximumFractionDigits: 0
	}).format(value);
}

export function loadLocalStorage<T>(key: string, defaultValue?: T): T | null {
	if (browser) {
		const item = localStorage.getItem(key);

		if (!item) {
			return defaultValue || null;
		}

		try {
			return item ? JSON.parse(item) : defaultValue || null;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	return null;
}
