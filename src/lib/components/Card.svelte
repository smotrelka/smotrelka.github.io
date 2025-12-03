<script lang="ts">
	import { Image } from '@lucide/svelte';

	interface Props {
		item: EnrichedMedia;
		onclick: (event: MouseEvent) => void;
	}

	let { item, onclick }: Props = $props();

	let imageLoaded = $state(false);
	let imageError = $state(false);

	const cover = $derived(item.mydramalist_cover || item.shikimori_cover || item.kinopoisk_cover);

	const showPlaceholder = $derived(!cover || !imageLoaded || imageError);
</script>

<button type="button" class="group w-full text-left cursor-pointer outline-none" {onclick}>
	<span class="block relative">
		<!-- Placeholder (shown when no cover, loading, or error) -->
		{#if showPlaceholder}
			<span class="bg-zinc-900 block rounded-sm pt-[150%] relative w-full">
				<span class="absolute inset-0 flex justify-center items-center opacity-70">
					<Image size={24} />
				</span>
			</span>
		{/if}

		<!-- Image -->
		{#if cover}
			<img
				class="rounded-sm w-full transition-opacity duration-200"
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

	<span class="font-semibold text-balance block mt-2 group-hover:text-violet-500">
		{item.title_ru || item.title_en || item.original_title || item.alt_titles?.[0]}
	</span>

	<span class="flex gap-2 mt-2 flex-wrap text-xs">
		<span class="rounded-md px-2 py-1 bg-zinc-900 dark:bg-zinc-900">
			{item.year}
		</span>

		{#if item.category}
			<span class="rounded-md px-2 py-1 bg-zinc-900 dark:bg-zinc-900">
				{item.category}
			</span>
		{/if}
	</span>
</button>
