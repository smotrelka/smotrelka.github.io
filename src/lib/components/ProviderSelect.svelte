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

	const options = $derived.by(() => {
		const allItems: Array<{
			label: string;
			url: string;
			providerKey: string;
			providerLabel: string;
			sourceKey: SourceKey;
			id: string | number;
		}> = [];

		for (const [providerKeyRaw, ids] of Object.entries(providerIds)) {
			const providerKey = providerKeyRaw.startsWith('lumex') ? 'lumex' : providerKeyRaw;
			const provider = PROVIDERS[providerKey as keyof typeof PROVIDERS];
			if (!provider) continue;

			for (const [sourceKey, items] of Object.entries(ids)) {
				if (!items?.length) continue;

				for (const item of items) {
					const id = typeof item === 'object' ? item.id : item;
					const label = typeof item === 'object' && item.label ? item.label : String(id);
					const url = provider.base + provider.param(sourceKey, id);

					allItems.push({
						label,
						url,
						providerKey,
						providerLabel: provider.label,
						sourceKey: sourceKey as SourceKey,
						id
					});
				}
			}
		}

		allItems.sort((a, b) => a.label.localeCompare(b.label));

		const groupsMap = new Map<string, typeof allItems>();
		for (const item of allItems) {
			if (!groupsMap.has(item.providerKey)) groupsMap.set(item.providerKey, []);
			groupsMap.get(item.providerKey)!.push(item);
		}

		return Array.from(groupsMap.entries())
			.sort(([a], [b]) => {
				const pa = priorityOrder.indexOf(a);
				const pb = priorityOrder.indexOf(b);
				return (pa === -1 ? 999 : pa) - (pb === -1 ? 999 : pb);
			})
			.map(([_, items]) => ({
				provider: items[0].providerLabel,
				items
			}));
	});

	const selected = $derived(options.flatMap((g) => g.items).find((opt) => opt.url === embedUrl));

	$effect(() => {
		if (!embedUrl && options[0]?.items[0]) {
			embedUrl = options[0].items[0].url;
		}
	});
</script>

<div class="p-4 sm:p-0">
	<div class="flex flex-wrap gap-2">
		<div class="relative inline-flex text-ellipsis not-sm:w-full">
			<select
				bind:value={embedUrl}
				class="min-w-0 appearance-none rounded-md bg-zinc-900 px-3 py-2 pr-10 text-ellipsis not-sm:w-full"
			>
				{#each options as group}
					<optgroup label={group.provider}>
						{#each group.items as option}
							<option value={option.url}>{option.label}</option>
						{/each}
					</optgroup>
				{/each}
			</select>

			<span class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
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
					class="inline-flex shrink-0 items-center gap-1 rounded-md border border-zinc-900 p-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
				>
					<ExternalLink size={16} />
					<span>{SOURCES[selected.sourceKey].label}</span>
				</a>
			{/if}
		{/if}
	</div>
</div>
