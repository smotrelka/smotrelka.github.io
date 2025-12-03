<script lang="ts">
	import { PUBLIC_MEILISEARCH_APIKEY, PUBLIC_MEILISEARCH_ENDPOINT } from '$env/static/public';
	import Card from '$lib/components/Card.svelte';
	import Masonry from '$lib/components/Masonry.svelte';
	import ProviderSelect from '$lib/components/ProviderSelect.svelte';
	import { MeilisearchClient } from '$lib/meilisearch';
	import { Search, Loader, ChevronLeft, Image, ChevronDown } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let page: 'search' | 'watch' = $state('search');
	let searchQuery = $state('');
	let searchInputEl: HTMLInputElement | undefined = $state();
	let isSearching = $state(false);
	let searchResults: EnrichedMedia[] = $state([]);
	let timeout: ReturnType<typeof setTimeout>;
	let activeTitle: EnrichedMedia | null = $state(null);
	let activeProvider: string | null = $state(null);
	let embedUrl: string | null = $state(null);

	$effect(() => {
		clearTimeout(timeout);

		const q = searchQuery.trim();

		if (!q) {
			searchResults = [];
			isSearching = false;
			return;
		}

		timeout = setTimeout(() => searchTitles(q), 100);
	});

	$effect(() => {
		if (activeTitle?.provider_ids) {
			activeProvider = Object.keys(activeTitle?.provider_ids)[0];
		}
	});

	$effect(() => {
		if (activeTitle) {
			localStorage.setItem('recent_title', JSON.stringify(activeTitle));
		}
	});

	onMount(() => {
		const recentTitle = localStorage.getItem('recent_title');

		if (recentTitle) {
			const json = JSON.parse(recentTitle);

			activeTitle = json as EnrichedMedia;
			page = 'watch';
		}
	});

	// const embedUrl = $derived.by(() => {
	// 	if (!activeTitle || !activeProvider) {
	// 		return null;
	// 	}

	// 	const ids = activeTitle.provider_ids[activeProvider];

	// 	const kinopoiskId = ids.kinopoisk_ids[0];
	// 	const imdbId = ids.imdb_ids[0];
	// 	const shikimoriId = ids.shikimori_ids[0];

	// 	if (activeProvider === 'kodik') {
	// 		const url = new URL('https://kodik.cc/find-player');

	// 		if (kinopoiskId) {
	// 			url.searchParams.set('kinopoiskID', String(kinopoiskId));
	// 		}

	// 		if (imdbId) {
	// 			url.searchParams.set('imdbId', String(imdbId));
	// 		}

	// 		return url.toString();
	// 	} else if (activeProvider === 'turbo') {
	// 		const url = new URL('https://52dce3a2.obrut.show/embed/0MTM');

	// 		if (kinopoiskId) {
	// 			url.searchParams.set('kinopoisk_id', String(kinopoiskId));
	// 		}

	// 		if (imdbId) {
	// 			url.searchParams.set('imdb_id', String(imdbId));
	// 		}

	// 		return url.toString();
	// 	}

	// 	return null;
	// });

	const meili = new MeilisearchClient(PUBLIC_MEILISEARCH_ENDPOINT, PUBLIC_MEILISEARCH_APIKEY);

	async function searchTitles(q: string) {
		if (!q.trim()) {
			searchResults = [];
			return;
		}

		const r = await meili.searchTitles(q, {
			limit: 20,
			offset: 0
		});

		searchResults = r.hits;
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

<header class="bg-zinc-900 flex items-center h-16 z-10 sticky top-0">
	<div class="max-w-5xl mx-auto w-full px-4 flex gap-2">
		{#if page !== 'watch' && activeTitle}
			<button
				type="button"
				class="rounded-md cursor-pointer hover:bg-zinc-700 duration-75 active:scale-95 transition-transform bg-zinc-800 p-2"
				onclick={(e) => {
					e.preventDefault();
					page = 'watch';
				}}
			>
				<ChevronLeft size={20} />
			</button>
		{/if}

		<div class="relative grow">
			<input
				name="search"
				type="search"
				autocomplete="off"
				autocorrect="off"
				autocapitalize="off"
				class="w-full min-w-0 rounded-md bg-zinc-800 px-3 py-2 text-sm outline-none text-ellipsis disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-violet-500 focus-visible:ring-violet-500/50 focus-visible:ring-3 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none peer ps-9 pe-9"
				placeholder="начните вводить название&mldr;"
				bind:value={searchQuery}
				bind:this={searchInputEl}
				onfocus={() => (page = 'search')}
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
</header>

<main class="">
	<div hidden={page === 'watch' ? false : true}>
		<div class="max-w-5xl mx-auto w-full sm:p-4 space-y-4">
			{#if activeTitle}
				<ProviderSelect
					bind:embedUrl
					providerIds={activeTitle.provider_ids}
					category={activeTitle.category}
				/>
			{/if}

			<div
				class="overflow-hidden rounded-lg"
				style="position: relative; width: 100%; padding-top: 57%; background: #000;"
			>
				<iframe
					title="title"
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
					width="100%"
					height="100%"
					src={embedUrl}
					frameborder="0"
					allowfullscreen
					allow="autoplay *; fullscreen *"
				></iframe>
			</div>
		</div>
	</div>

	<div hidden={page === 'search' ? false : true}>
		<div class="max-w-5xl mx-auto w-full p-4">
			{#if searchQuery.trim().length}
				{#if searchResults.length}
					<Masonry>
						{#each searchResults as item (item.id)}
							<Card
								{item}
								onclick={(e) => {
									e.preventDefault();
									activeTitle = item;
									page = 'watch';
									console.log(activeTitle);
								}}
							/>
						{/each}
					</Masonry>
				{:else if !isSearching}
					<p>😔 Увы, по Вашему запросу ничего не найдено</p>
				{/if}
			{:else}
				<div class="space-y-4">
					<div class="flex flex-wrap gap-2 text-xs">
						<button
							type="button"
							class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2"
							onclick={(e) => {
								e.preventDefault();
								searchQuery = '#popular';
							}}>🏆 Популярное</button
						>
						<button
							type="button"
							class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2"
							onclick={(e) => {
								e.preventDefault();
								searchQuery = '#hot';
							}}>🔥 Сейчас смотрят</button
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</main>
