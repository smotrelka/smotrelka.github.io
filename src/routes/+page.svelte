<script lang="ts">
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import SearchResultItem from '$lib/components/SearchResultItem.svelte';
	import { Loader, Search } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const RESULTS_LIMIT = 20;

	let isSearching = $state(false);
	let searchQuery = $state('');
	let searchResults = $state<BaseMedia[]>([]);
	let isLoadingMore = $state(false);
	let hasMore = $state(false);
	let offset = $state(0);

	// Filters
	let provider = $state('');
	let category = $state('');

	let facets = $state<{
		provider?: Record<string, number>;
		category?: Record<string, number>;
		year?: Record<string, number>;
	}>({});

	let controller: AbortController | null = $state(null);

	async function fetchResults(currentOffset: number, append = false): Promise<void> {
		const url = new URL(`${PUBLIC_API_BASE_URL}/api/search`);

		url.searchParams.set('q', searchQuery);
		url.searchParams.set('limit', String(RESULTS_LIMIT));
		url.searchParams.set('offset', String(currentOffset));

		const response = await fetch(url, {
			signal: controller?.signal
		});

		if (!response.ok) {
			throw new Error(`Search failed: ${response.statusText}`);
		}

		const json = (await response.json()) as SearchResponse<BaseMedia>;

		// if (!append) {
		// 	facets = data.facetDistribution ?? {};
		// }

		searchResults = append ? [...searchResults, ...(json.media ?? [])] : (json.media ?? []);
		hasMore = (json.media?.length ?? 0) >= RESULTS_LIMIT;
		offset = currentOffset;
	}

	async function handleSearch(): Promise<void> {
		isSearching = true;

		controller?.abort();
		controller = new AbortController();

		try {
			await fetchResults(0, false);
		} catch (error) {
			if (error instanceof Error && error.name !== 'AbortError') {
				console.error('Search error:', error);
				searchResults = [];
			}
		} finally {
			isSearching = false;
		}
	}

	async function loadMore(): Promise<void> {
		if (isLoadingMore) return;

		isLoadingMore = true;

		try {
			await fetchResults(offset + RESULTS_LIMIT, true);
		} catch (error) {
			console.error('Load more error:', error);
		} finally {
			isLoadingMore = false;
		}
	}

	onMount(() => {
		handleSearch();
	});
</script>

<main class="mx-auto w-full max-w-6xl sm:space-y-6 sm:p-9">
	<!-- {#if pinnedMedia.length > 0}
		<div
			class="mb-6 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50"
			transition:fade
		>
			{#each pinnedMedia as media (media.id)}
				<SearchResultItem {media} />
			{/each}
		</div>
	{/if} -->

	<div class="space-y-4 py-4 sm:p-0">
		<div class="px-4 sm:p-0">
			<div class="relative">
				<input
					class="peer w-full border border-zinc-900 bg-zinc-900 py-3 pr-3 pl-10 focus-within:bg-zinc-950 hover:border-zinc-700 focus:border-violet-800 focus:outline-2 focus:outline-violet-500"
					type="text"
					placeholder="поиск фильмов и сериалов&mldr;"
					oninput={handleSearch}
					bind:value={searchQuery}
				/>

				<span
					class="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 px-3 opacity-80 peer-focus:opacity-100"
				>
					<Search size={20} />
				</span>
			</div>
		</div>

		<!-- <div
			class={{
				'flex w-full flex-wrap justify-between gap-x-6 gap-y-4 text-sm whitespace-nowrap contain-paint': true,
				'pointer-events-none opacity-60': isSearching
			}}
		>
			<div class="hide-scroll-bar inline-flex gap-2 overflow-x-auto px-4 sm:flex-wrap sm:p-0">
				{#each Object.entries(facets.provider || {}) as [opt, count] (opt)}
					<label class="inline-flex shrink-0 items-center gap-1 select-none">
						<input
							class="peer sr-only"
							type="checkbox"
							name="provider"
							value={opt}
							bind:group={provider}
							onchange={handleSearch}
						/>
						<span
							class="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-2 py-1 transition-transform duration-75 peer-focus:border-white hover:border-zinc-700 peer-focus:hover:border-zinc-300 active:scale-95"
						>
							{#if opt == provider}
								<X size={16} />
							{:else}
								<Play class="text-purple-600" size={16} />
							{/if}

							<span class="font-medium">{ALIASES_KV[opt] || opt}</span>

							{#if count}
								<span class="text-xs opacity-60">{formatCompactNumber(count)}</span>
							{/if}
						</span>
					</label>
				{/each}
			</div>

			<div class="hide-scroll-bar inline-flex gap-2 overflow-x-auto px-4 sm:flex-wrap sm:p-0">
				{#each Object.entries(facets.category || {}) as [opt, count] (opt)}
					<label class="inline-flex shrink-0 items-center gap-1 select-none">
						<input
							class="peer sr-only"
							type="checkbox"
							name="category"
							value={opt}
							bind:group={category}
							onchange={handleSearch}
						/>
						<span
							class="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-2 py-1 transition-transform duration-75 peer-focus:border-white hover:border-zinc-700 peer-focus:hover:border-zinc-300 active:scale-95"
						>
							{#if opt == category}
								<X size={16} />
							{:else}
								<Tag class="text-rose-600 " size={16} />
							{/if}

							<span class="font-medium">{ALIASES_KV[opt] || opt}</span>

							{#if count}
								<span class="text-xs opacity-60">{formatCompactNumber(count)}</span>
							{/if}
						</span>
					</label>
				{/each}
			</div>
		</div> -->
	</div>

	{#if searchResults.length}
		<div class="divide-y divide-zinc-900 border-y border-zinc-900 sm:border">
			{#each searchResults as media (media.id)}
				<SearchResultItem {media} />
			{/each}
		</div>
	{/if}

	{#if hasMore && !isSearching && searchResults.length > 0}
		<div class="flex justify-center p-4 sm:p-0">
			<button
				onclick={loadMore}
				disabled={isLoadingMore}
				class="relative cursor-pointer border border-zinc-800 bg-zinc-900 px-6 py-3 transition-transform hover:bg-zinc-800 active:scale-95 disabled:opacity-50"
			>
				<span class:opacity-0={isLoadingMore}>Загрузить ещё</span>

				{#if isLoadingMore}
					<Loader
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
					/>
				{/if}
			</button>
		</div>
	{/if}
</main>
