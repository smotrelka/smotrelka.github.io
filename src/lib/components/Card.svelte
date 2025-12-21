<script lang="ts">
	import { Image } from '@lucide/svelte';

	interface Props {
		item: Media;
		onclick: (event: MouseEvent) => void;
	}

	let { item, onclick }: Props = $props();

	let imageLoaded = $state(false);
	let imageError = $state(false);

	const cover = $derived(item.mydramalist_cover || item.shikimori_cover || item.kinopoisk_cover);

	const showPlaceholder = $derived(!cover || !imageLoaded || imageError);

	const CATEGORY_MAP: Record<string, string> = {
		anime_movie: 'Аниме',
		anime_series: 'Аниме',
		series: 'Сериал',
		movie: 'Фильм',
		show: 'Шоу'
	};
</script>

<button type="button" class="group w-full cursor-pointer text-left outline-none" {onclick}>
	<span class="relative block">
		<!-- Placeholder (shown when no cover, loading, or error) -->
		{#if showPlaceholder}
			<span class="relative block w-full rounded-sm bg-zinc-900 pt-[150%]">
				<span class="absolute inset-0 flex items-center justify-center opacity-70">
					<Image size={24} />
				</span>
			</span>
		{/if}

		<!-- Image -->
		{#if cover}
			<img
				class="w-full rounded-sm transition-opacity duration-200"
				class:opacity-0={!imageLoaded}
				class:absolute={!imageLoaded}
				class:inset-0={!imageLoaded}
				src={cover}
				alt={item.title_ru || item.title_en || item.original_title}
				loading="lazy"
				onload={() => (imageLoaded = true)}
				onerror={() => (imageError = true)}
			/>
		{/if}
	</span>

	<span class="mt-2 block font-semibold text-balance group-hover:text-violet-500">
		{item.title_ru || item.title_en || item.original_title || item.alt_titles?.[0]}
	</span>

	<span class="mt-2 flex flex-wrap gap-2 text-xs">
		{#if item.year}
			<span class="rounded-md bg-zinc-900 px-2 py-1 dark:bg-zinc-900">
				{item.year}
			</span>
		{/if}

		{#if item.category}
			<span class="rounded-md bg-zinc-900 px-2 py-1 dark:bg-zinc-900">
				{CATEGORY_MAP[item.category] || item.category}
			</span>
		{/if}
	</span>
</button>
