<script lang="ts">
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import Card from '$lib/components/Card.svelte';
	import Masonry from '$lib/components/Masonry.svelte';
	import Player from '$lib/components/Player.svelte';
	import ProviderSelect from '$lib/components/MediaSelect.svelte';
	import { Search, Loader } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import MediaSelect from '$lib/components/MediaSelect.svelte';
	import { buildEmbedUrl, normalizeProvider, PROVIDERS } from '$lib';

	let page: 'search' | 'watch' = $state('search');
	let searchQuery = $state('');
	let searchInputEl: HTMLInputElement | undefined = $state();
	let isSearching = $state(false);
	let searchResults: Media[] = $state([]);
	let activeTitle: Media | null = $state(null);
	let mediaList: Media[] = $state([]);
	let activeMedia: Media | null = $state(null);

	let debounceTimeout: ReturnType<typeof setTimeout>;
	let controller: AbortController | null;

	const embedUrl = $derived.by(() => {
		if (!activeMedia?.provider) return null;

		return buildEmbedUrl(activeMedia);
	});

	$effect(() => {
		if (activeTitle) {
			localStorage.setItem('recent_title', JSON.stringify(activeTitle));
		}
	});

	$inspect(activeMedia);

	onMount(() => {
		// const recentTitle = localStorage.getItem('recent_title');
		// if (recentTitle) {
		// 	const json = JSON.parse(recentTitle);
		// 	activeTitle = json as EnrichedMedia;
		// 	page = 'watch';
		// }
	});

	async function searchTitles(q: string) {
		if (!q.trim()) {
			searchResults = [];
			return;
		}

		isSearching = true;

		// Abort previous fetch
		if (controller) controller.abort();
		controller = new AbortController();

		try {
			const url = new URL(`${PUBLIC_API_BASE_URL}/api/search`);

			url.searchParams.set('q', q);

			const res = await fetch(url, {
				signal: controller.signal
			});

			if (!res.ok) throw new Error('Failed to fetch search results');

			const data: SearchResponse<Media> = await res.json();
			searchResults = data.hits ?? [];
		} catch (err: any) {
			if (err.name !== 'AbortError') console.error(err);
		} finally {
			isSearching = false;
		}
	}

	function onInputChange(e: Event) {
		const target = e.target as HTMLInputElement;
		searchQuery = target.value;

		clearTimeout(debounceTimeout);

		debounceTimeout = setTimeout(() => {
			searchTitles(searchQuery);
		}, 200);
	}

	async function handleCardClick(e: MouseEvent, item: Media) {
		e.preventDefault();

		if (!item.group_id) {
			console.error('Item has no group_id');
			return;
		}

		const url = new URL(`${PUBLIC_API_BASE_URL}/api/search`);

		url.searchParams.set('group_id', String(item.group_id));
		url.searchParams.set('limit', '100');

		const res = await fetch(url);

		if (!res.ok) {
			console.error('Failed to fetch media details');
			return;
		}

		activeMedia = item;

		const json: SearchResponse<Media> = await res.json();

		mediaList = json.hits ?? [];
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.key === 'k' || e.key === '/') && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			searchInputEl?.focus();
			return;
		}

		if (document.activeElement === searchInputEl) {
			return;
		}

		if (e.key.length > 1) {
			return;
		}

		searchInputEl?.focus();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<main class="mx-auto w-full max-w-5xl space-y-4 sm:p-4">
	{#if activeMedia}
		<div
			class="overflow-hidden rounded-lg"
			style="position: relative; width: 100%; padding-top: 57%; background: #000;"
		>
			<Player {embedUrl} />
		</div>
	{/if}

	{#if mediaList.length}
		<MediaSelect bind:activeMedia {mediaList} />
	{/if}

	<div>
		<div class="sticky top-0 z-10 bg-zinc-950 py-4">
			<div class="relative grow">
				<input
					name="search"
					type="search"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					class="peer w-full min-w-0 rounded-md bg-zinc-800 px-3 py-2 ps-9 pe-9 text-sm text-ellipsis outline-none focus-visible:border-violet-500 focus-visible:ring-3 focus-visible:ring-violet-500/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
					placeholder="начните вводить название&mldr;"
					bind:value={searchQuery}
					bind:this={searchInputEl}
					onfocus={() => (page = 'search')}
					oninput={onInputChange}
				/>

				<div
					class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 opacity-70 peer-disabled:opacity-50"
				>
					{#if isSearching}
						<Loader class="animate-spin" size={16} aria-hidden="true" role="presentation" />
					{:else}
						<Search size={16} aria-hidden="true" />
					{/if}
				</div>
			</div>
		</div>

		{#if searchQuery.trim().length}
			{#if searchResults.length}
				<Masonry>
					{#each searchResults as item (item.id)}
						<Card {item} onclick={(e) => handleCardClick(e, item)} />
					{/each}
				</Masonry>
			{:else if !isSearching}
				<p>😔 Увы, по Вашему запросу ничего не найдено</p>
			{/if}
		{:else}
			<div class="flex flex-wrap gap-2 text-xs">
				<button
					type="button"
					class="cursor-pointer rounded-full border border-zinc-800 px-3 py-2 select-none hover:border-zinc-700"
					onclick={(e) => {
						e.preventDefault();
						searchQuery = '#popular';
					}}>🏆 Популярное</button
				>
				<button
					type="button"
					class="cursor-pointer rounded-full border border-zinc-800 px-3 py-2 select-none hover:border-zinc-700"
					onclick={(e) => {
						e.preventDefault();
						searchQuery = '#hot';
					}}>🔥 Сейчас смотрят</button
				>
				<button
					type="button"
					class="cursor-pointer rounded-full border border-zinc-800 px-3 py-2 select-none hover:border-zinc-700"
					onclick={(e) => {
						e.preventDefault();
						searchQuery = '#history';
					}}>⏳ История</button
				>
			</div>
		{/if}
	</div>
</main>
