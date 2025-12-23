<script lang="ts">
	import { ALIASES_KV, buildEmbedUrl, formatFullDateTime, formatTimeAgo } from '$lib';
	import Player from '$lib/components/Player.svelte';
	import { Calendar, ChevronRight, History, Play, Star, Tag } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	let { media }: { media: Media } = $props();

	let isOpen = $state(false);
	let coverIndex = $state(0);
	let coverLoaded = $state(false);

	const ID_KEYS: ExternalIdKey[] = [
		'shikimori_id',
		'mydramalist_id',
		'kinopoisk_id',
		'imdb_id',
		'worldart_id'
	];

	const availableIds = ID_KEYS.filter((key) => media[key]);

	let activeTab = $state<ExternalIdKey | null>(availableIds[0] || null);

	const embedUrl = $derived(activeTab ? buildEmbedUrl(media, activeTab) : null);

	const title = $derived(
		media.provider_title ||
			media.title_ru ||
			media.title_en ||
			media.original_title ||
			media.alt_titles?.[0]
	);

	const covers = $derived(
		[media.shikimori_cover, media.mydramalist_cover, media.kinopoisk_cover].filter(Boolean)
	);

	const cover = $derived(covers[coverIndex]);

	const rating = $derived(
		media.kinopoisk_rating ||
			media.imdb_rating ||
			media.shikimori_rating ||
			media.mydramalist_rating
	);

	function tryNextCover() {
		coverLoaded = false;

		if (coverIndex < covers.length - 1) {
			coverIndex++;
		}
	}
</script>

<div class="relative overflow-hidden will-change-transform">
	<button
		type="button"
		class="group flex w-full cursor-pointer list-none items-center justify-between overflow-hidden p-4 text-left"
		onclick={() => (isOpen = !isOpen)}
	>
		{#if cover}
			<img
				class={{
					'absolute inset-0 -z-10 h-full w-full object-cover object-center blur-sm transition-opacity duration-500 ease-in-out': true,
					'opacity-0': !coverLoaded,
					'opacity-5 group-hover:opacity-10': coverLoaded
				}}
				src={cover}
				alt={title}
				loading="lazy"
				onerror={tryNextCover}
				onload={() => (coverLoaded = true)}
			/>
		{/if}

		<span>
			<span class="block text-sm font-bold text-balance sm:text-lg">{title}</span>
			<span class="mt-2 flex flex-wrap gap-4 text-xs text-zinc-300 sm:text-sm">
				<span class="inline-flex items-center gap-1.5" title="Источник">
					<Play class="text-purple-600" size={16} />
					<span>{ALIASES_KV[media.provider as string] || media.provider}</span>
				</span>

				{#if media.category}
					<span class="inline-flex items-center gap-1.5" title="Категория">
						<Tag class="text-rose-600" size={16} />
						<span>{ALIASES_KV[media.category] || media.category}</span>
					</span>
				{/if}

				{#if media.year}
					<span class="inline-flex items-center gap-1.5" title="Год производства / выхода">
						<Calendar size={16} />
						<span>{media.year}</span>
					</span>
				{/if}

				{#if rating}
					<span
						class="inline-flex items-center gap-1.5 font-semibold text-yellow-600"
						title="Рейтинг"
					>
						<Star size={16} />
						<span>{rating.toFixed(1)}</span>
					</span>
				{/if}

				{#if media.status}
					<span class="rounded-md bg-white/10 px-2 py-1 text-zinc-300" title="Статус"
						>{ALIASES_KV[media.status] || media.status}</span
					>
				{/if}

				{#if media.updated_at}
					{@const timestamp = media.updated_at * 1000}
					<span
						class="hidden items-center gap-1.5 md:inline-flex"
						title={`Последнее обновление: ${formatFullDateTime(timestamp)}`}
					>
						<History size={16} />
						<span>{formatTimeAgo(timestamp)}</span>
					</span>
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
		<div class="relative space-y-4 p-4" transition:slide={{ duration: 150 }}>
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
				<div class="relative bg-black" style="padding-top: 56.25%;">
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
