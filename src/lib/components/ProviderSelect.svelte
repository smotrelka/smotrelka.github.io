<script lang="ts">
	import { ChevronDown, ExternalLink } from '@lucide/svelte';

	interface Props {
		embedUrl?: string | null;
		providerIds: ProviderIds;
		priorityOrder?: string[];
		category?: string;
	}

	let {
		embedUrl = $bindable(),
		providerIds,
		priorityOrder = ['turbo', 'lumex', 'kodik'],
		category
	}: Props = $props();

	const PROVIDERS = {
		kodik: {
			label: 'Kodik',
			base: 'https://kodik.cc/find-player?',
			param: (src: string, id: string | number) => `${src}ID=${id}`
		},
		lumex: {
			label: 'Lumex',
			base: 'https://p.lumex.cloud/f8GoATHamU0d?',
			param: (src: string, id: string | number) =>
				src === 'imdb' ? `imdb_id=${id}` : `kp_id=${id}`
		},
		turbo: {
			label: 'Turbo',
			base: 'https://52dce3a2.obrut.show/embed/0MTM?',
			param: (src: string, id: string | number) =>
				src === 'worldart'
					? `worldart_id=${id}`
					: src === 'imdb'
						? `imdb_id=${id}`
						: `kinopoisk_id=${id}`
		},
		flixcdn: {
			label: 'FlixCDN',
			base: 'https://player0.flixcdn.space/show/',
			param: (src: string, id: string | number) => `${src}/${id}`
		}
	} as const;

	const SOURCES = {
		imdb: { label: 'IMDB', link: (id: string | number) => `https://www.imdb.com/title/${id}/` },
		kinopoisk: {
			label: 'КиноПоиск',
			link: (id: string | number) => `https://www.kinopoisk.ru/film/${id}/`
		},
		shikimori: {
			label: 'Shikimori',
			link: (id: string | number) => `https://shikimori.one/animes/${id}`
		},
		tmdb: {
			label: 'TMDB',
			link: (id: string | number) => `https://www.themoviedb.org/movie/${id}`
		},
		mydramalist: {
			label: 'MyDramaList',
			link: (id: string | number) => `https://mydramalist.com/${id}`
		},
		worldart: {
			label: 'World-Art',
			link: (id: string | number) => {
				const isAnime =
					category?.includes('anime') ||
					Object.values(providerIds).some((ids) => ids.shikimori?.length);
				return `http://www.world-art.ru/${isAnime ? 'animation/animation.php' : 'cinema/cinema.php'}?id=${id}`;
			}
		}
	} as const;

	// Build options grouped by provider
	const options = $derived.by(() => {
		const groups = new Map<
			string,
			Array<{ label: string; url: string; sourceKey: SourceKey; id: string | number }>
		>();

		for (const [providerKey, ids] of Object.entries(providerIds)) {
			const providerName = providerKey.startsWith('lumex:') ? 'lumex' : providerKey;
			const provider = PROVIDERS[providerName as keyof typeof PROVIDERS];
			if (!provider) continue;

			const priority = priorityOrder.indexOf(providerKey);
			const sortKey = priority === -1 ? `999_${providerName}` : `${priority}_${providerName}`;

			for (const [sourceKey, items] of Object.entries(ids)) {
				if (!items?.length) continue;

				for (const item of items) {
					const id = typeof item === 'object' ? item.id : item;
					const label = typeof item === 'object' && item.label ? item.label : String(id);
					const url = provider.base + provider.param(sourceKey, id);

					if (!groups.has(sortKey)) {
						groups.set(sortKey, []);
					}
					groups.get(sortKey)!.push({
						label,
						url,
						sourceKey: sourceKey as SourceKey,
						id
					});
				}
			}
		}

		return Array.from(groups.entries())
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([key, items]) => {
				const providerName = key.split('_')[1];
				return {
					provider: PROVIDERS[providerName as keyof typeof PROVIDERS]?.label || providerName,
					items
				};
			});
	});

	// Find selected option for external link
	const selected = $derived(options.flatMap((g) => g.items).find((opt) => opt.url === embedUrl));

	// Initialize with first option
	$effect(() => {
		if (!embedUrl && options[0]?.items[0]) {
			embedUrl = options[0].items[0].url;
		}
	});
</script>

<div class="p-4 sm:p-0">
	<div class="flex gap-2 flex-wrap">
		<div class="relative inline-flex text-ellipsis not-sm:w-full">
			<select
				bind:value={embedUrl}
				class="bg-zinc-900 text-ellipsis not-sm:w-full appearance-none rounded-md px-3 pr-10 py-2 min-w-0"
			>
				{#each options as group}
					<optgroup label={group.provider}>
						{#each group.items as option}
							<option value={option.url}>{option.label}</option>
						{/each}
					</optgroup>
				{/each}
			</select>

			<span class="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
				<ChevronDown size={16} />
			</span>
		</div>

		{#if selected}
			{@const link = SOURCES[selected.sourceKey]?.link(selected.id)}
			{#if link}
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex shrink-0 items-center gap-1 p-2 text-sm text-blue-400 hover:text-blue-300 transition-colors border border-zinc-900 rounded-md"
				>
					<ExternalLink size={16} />
					<span>{SOURCES[selected.sourceKey].label}</span>
				</a>
			{/if}
		{/if}
	</div>
</div>
