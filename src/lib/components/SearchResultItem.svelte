<script lang="ts">
	import { buildEmbedUrl, normalizeProvider, PROVIDERS } from '$lib';
	import Player from '$lib/components/Player.svelte';
	import { ChevronRight } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	let { media }: { media: Media } = $props();

	let isOpen = $state(false);
	let coverLoadError = $state(false);

	// Define which IDs we look for
	const ID_KEYS: ExternalIdKey[] = [
		'shikimori_id',
		'mydramalist_id',
		'kinopoisk_id',
		'imdb_id',
		'worldart_id'
	];

	// Get IDs available on this specific media object
	const availableIds = ID_KEYS.filter((key) => media[key]);

	// VALID placement of $state: at the top level of the component
	let activeTab = $state<ExternalIdKey | null>(availableIds[0] || null);

	const providerLabel = $derived(
		PROVIDERS[normalizeProvider(media.provider!)!]?.label || media.provider
	);

	const embedUrl = $derived(activeTab ? buildEmbedUrl(media, activeTab) : null);

	const title = $derived(
		media.provider_title ||
			media.title_ru ||
			media.title_en ||
			media.original_title ||
			media.alt_titles?.[0]
	);

	const cover = $derived(media.mydramalist_cover || media.shikimori_cover || media.kinopoisk_cover);
	const rating = $derived(
		media.kinopoisk_rating ||
			media.imdb_rating ||
			media.shikimori_rating ||
			media.mydramalist_rating
	);
</script>

<div class="relative overflow-hidden">
	<button
		type="button"
		class="group flex w-full cursor-pointer list-none items-center justify-between overflow-hidden p-4 text-left"
		onclick={() => (isOpen = !isOpen)}
	>
		{#if cover && !coverLoadError}
			<img
				class="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-5 blur-sm group-hover:opacity-10"
				src={cover}
				alt={title}
				loading="lazy"
				onerror={() => (coverLoadError = true)}
			/>
		{/if}

		<span>
			<span class="block text-sm font-bold text-balance sm:text-lg">{title}</span>
			<span class="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm">
				<span class="rounded-md bg-white/10 px-2 py-1 text-zinc-300">{providerLabel}</span>

				{#if media.year}
					<span class="rounded-md bg-white/10 px-2 py-1 text-zinc-300">{media.year}</span>
				{/if}

				{#if rating}
					<span class="rounded-md bg-amber-300/10 px-2 py-1 font-bold text-yellow-700"
						>{rating.toFixed(1)}</span
					>
				{/if}

				{#if media.status}
					<span class="rounded-md bg-white/10 px-2 py-1 text-zinc-300">{media.status}</span>
				{/if}
			</span>
		</span>

		<span
			class="shrink-0 text-zinc-400 transition-transform group-hover:text-zinc-200 group-active:scale-90"
			class:rotate-90={isOpen}
		>
			<ChevronRight />
		</span>
	</button>

	{#if isOpen}
		<div class="relative space-y-4 p-4" transition:slide>
			{#if availableIds.length > 1}
				<div class="flex gap-2 border-b border-zinc-800 pb-2">
					{#each availableIds as key}
						<button
							class="rounded px-3 py-1 text-xs transition {activeTab === key
								? 'bg-white text-black'
								: 'text-zinc-400 hover:bg-zinc-800'}"
							onclick={() => (activeTab = key)}
						>
							{key.replace('_id', '').toUpperCase()}
						</button>
					{/each}
				</div>
			{/if}

			{#if embedUrl}
				<div style="padding-top: 56.25%; position: relative; background-color: #000;">
					<Player {embedUrl} />
				</div>
			{:else}
				<div class="rounded bg-zinc-900/50 p-8 text-center text-zinc-600">
					Плеер недоступен для этого ID
				</div>
			{/if}
		</div>
	{/if}
</div>
