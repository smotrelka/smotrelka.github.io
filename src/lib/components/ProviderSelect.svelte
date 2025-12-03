<script lang="ts">
	import { ChevronDown, ExternalLink } from '@lucide/svelte';

	type ProviderKey = keyof ProviderIds;

	interface ProviderConfig {
		label: string;
		baseUrl: string;
		paramFormat: (source: string, id: string | number) => string;
	}

	interface EmbedOption {
		provider: string;
		config: ProviderConfig;
		source: ProviderKey;
		id: string | number;
		url: string;
		displayLabel: string;
		sortKey: string;
	}

	// Props
	let {
		embedUrl = $bindable(),
		providerIds,
		priorityOrder = ['turbo', 'lumex', 'kodik'],
		category
	}: {
		embedUrl?: string | null;
		providerIds: Record<string, ProviderIds>;
		priorityOrder?: string[];
		category?: string;
	} = $props();

	// Provider configurations
	const PROVIDER_CONFIGS: Record<string, ProviderConfig> = {
		kodik: {
			label: 'Kodik',
			baseUrl: 'https://kodik.cc/find-player?',
			paramFormat: (source, id) => `${source}ID=${id}`
		},
		lumex: {
			label: 'Lumex',
			baseUrl: 'https://p.lumex.cloud/f8GoATHamU0d?',
			paramFormat: (source, id) => (source === 'imdb' ? `imdb_id=${id}` : `kp_id=${id}`)
		},
		turbo: {
			label: 'Turbo',
			baseUrl: 'https://52dce3a2.obrut.show/embed/0MTM?',
			paramFormat: (source, id) => {
				if (source === 'worldart') return `worldart_id=${id}`;
				return source === 'imdb' ? `imdb_id=${id}` : `kinopoisk_id=${id}`;
			}
		},
		flixcdn: {
			label: 'FlixCDN',
			baseUrl: 'https://player0.flixcdn.space/show/',
			paramFormat: (source, id) => `${source}/${id}`
		}
	};

	const SOURCE_LABELS: Record<ProviderKey, string> = {
		imdb: 'IMDB',
		kinopoisk: 'КиноПоиск',
		shikimori: 'Shikimori',
		tmdb: 'TMDB',
		mydramalist: 'MyDramaList',
		worldart: 'World-Art'
	};

	const SOURCE_LINKS: Record<ProviderKey, (id: string | number) => string> = {
		imdb: (id) => `https://www.imdb.com/title/${id}/`,
		kinopoisk: (id) => `https://www.kinopoisk.ru/film/${id}/`,
		shikimori: (id) => `https://shikimori.one/animes/${id}`,
		tmdb: (id) => `https://www.themoviedb.org/movie/${id}`,
		mydramalist: (id) => `https://mydramalist.com/${id}`,
		worldart: (id) => {
			const isAnime =
				category === 'anime' ||
				category === 'anime_series' ||
				Object.values(providerIds).some((ids) => ids.shikimori?.length > 0);
			return `http://www.world-art.ru/${isAnime ? 'animation/animation.php' : 'cinema/cinema.php'}?id=${id}`;
		}
	};

	// Build all embed options
	const embedOptions = $derived.by(() => {
		const options: EmbedOption[] = [];

		for (const [provider, ids] of Object.entries(providerIds)) {
			const config = PROVIDER_CONFIGS[provider.startsWith('lumex:') ? 'lumex' : provider];
			if (!config) continue;

			const priority = priorityOrder.indexOf(provider);
			const priorityNum = priority === -1 ? 999 : priority;

			for (const [source, items] of Object.entries(ids)) {
				if (!items?.length) continue;

				for (const item of items) {
					const id = typeof item === 'object' ? item.id : item;
					const displayLabel = typeof item === 'object' && item.label ? item.label : String(id);
					const url = `${config.baseUrl}${config.paramFormat(source, id)}`;

					options.push({
						provider,
						config,
						source: source as ProviderKey,
						id,
						url,
						displayLabel,
						sortKey: `${priorityNum}_${displayLabel.toLowerCase()}`
					});
				}
			}
		}

		return options.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
	});

	// Group options by source
	const groupedOptions = $derived(
		embedOptions.reduce(
			(acc, option) => {
				if (!acc[option.source]) acc[option.source] = [];
				acc[option.source].push(option);
				return acc;
			},
			{} as Record<ProviderKey, EmbedOption[]>
		)
	);

	// Get selected option directly from embedUrl
	const selected = $derived(embedOptions.find((opt) => opt.url === embedUrl));

	// Initialize embedUrl with first option
	$effect(() => {
		if (!embedUrl && embedOptions.length > 0) {
			embedUrl = embedOptions[0].url;
		}
	});
</script>

<div class="flex gap-2">
	<div class="relative inline-flex">
		<select
			class="bg-zinc-900 min-w-0 text-ellipsis appearance-none w-full rounded-md px-3 pr-10 py-2"
			name="provider"
			bind:value={embedUrl}
		>
			{#each Object.entries(groupedOptions) as [source, options]}
				<optgroup label={SOURCE_LABELS[source as ProviderKey] || source.toUpperCase()}>
					{#each options as option}
						<option value={option.url}>
							[{option.config.label}] {option.displayLabel}
						</option>
					{/each}
				</optgroup>
			{/each}
		</select>

		<span class="absolute top-1/2 right-0 -translate-y-1/2 px-3 pointer-events-none">
			<ChevronDown size={16} />
		</span>
	</div>

	{#if selected}
		{@const externalLink = SOURCE_LINKS[selected.source]?.(selected.id)}
		{#if externalLink}
			<a
				href={externalLink}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex shrink-0 items-center gap-1 p-2 text-sm text-blue-400 hover:text-blue-300 transition-colors border rounded-md border-zinc-900"
			>
				<ExternalLink size={16} />
				<span>{SOURCE_LABELS[selected.source]}</span>
			</a>
		{/if}
	{/if}
</div>
