<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import SearchResultItem from '$lib/components/SearchResultItem.svelte';
	import { onMount } from 'svelte';

	const limit = 20;

	let isSearching = $state(false);
	let searchQuery = $state('поднятие');
	let searchResults: Media[] = $state(getCachedSearchResults());
	let isLoadingMore = $state(false);
	let hasMore = $state(false);
	let offset = $state(0);

	// Filters
	let provider = $state('');
	let category = $state('');
	let yearFrom = $state<number | null>(null);
	let yearTo = $state<number | null>(null);

	let facets = $state<{
		provider?: Record<string, number>;
		category?: Record<string, number>;
		year?: Record<string, number>;
	}>({});

	$effect(() => {
		localStorage.setItem('search_results_cache', JSON.stringify(searchResults));
	});

	let controller: AbortController | null = $state(null);

	async function fetchResults(currentOffset: number, append = false): Promise<void> {
		if (!searchQuery) {
			searchResults = [];
			return;
		}

		const url = new URL(`${PUBLIC_API_BASE_URL}/api/search`);
		url.searchParams.set('q', searchQuery);
		url.searchParams.set('limit', limit.toString());
		url.searchParams.set('offset', currentOffset.toString());

		if (provider) url.searchParams.set('provider', provider);
		if (category) url.searchParams.set('category', category);
		if (yearFrom) url.searchParams.set('year_from', yearFrom.toString());
		if (yearTo) url.searchParams.set('year_to', yearTo.toString());

		const response = await fetch(url, controller?.signal ? { signal: controller.signal } : {});

		if (!response.ok) {
			throw new Error(`Search failed: ${response.statusText}`);
		}

		const data: SearchResponse<Media> = await response.json();

		if (!append) {
			facets = data.facetDistribution ?? {};
		}

		searchResults = append ? [...searchResults, ...(data.hits ?? [])] : (data.hits ?? []);
		hasMore = (data.hits?.length ?? 0) >= limit;
		offset = currentOffset;
	}

	async function handleSearch(): Promise<void> {
		isSearching = true;

		if (controller) {
			controller.abort();
		}

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
		if (!searchQuery || isLoadingMore) return;

		isLoadingMore = true;

		try {
			await fetchResults(offset + limit, true);
		} catch (error) {
			console.error('Load more error:', error);
		} finally {
			isLoadingMore = false;
		}
	}

	function clearFilters(): void {
		provider = '';
		category = '';
		yearFrom = null;
		yearTo = null;
		handleSearch();
	}

	function getCachedSearchResults(): Media[] {
		if (browser) {
			const cached = localStorage.getItem('search_results_cache');
			return cached ? JSON.parse(cached) : [];
		}

		return [];
	}
</script>

<main class="mx-auto w-full max-w-6xl space-y-6 p-4 sm:p-9">
	<div class="flex flex-wrap items-end gap-4">
		<div class="flex flex-col gap-1">
			<span class="text-xs text-zinc-400">Поиск</span>
			<input
				class="rounded border border-zinc-800 bg-zinc-900 p-3"
				type="text"
				oninput={handleSearch}
				bind:value={searchQuery}
			/>
		</div>

		<div class="flex flex-col gap-1">
			<span class="text-xs text-zinc-400">Провайдер</span>
			<select bind:value={provider} onchange={handleSearch} class="">
				<option value=""
					>Все ({Object.values(facets.provider ?? {}).reduce((a, b) => a + b, 0)})</option
				>
				{#each Object.keys(facets.provider || {}) as opt}
					<option value={opt}>{opt} ({facets.provider?.[opt]})</option>
				{/each}
			</select>
		</div>

		<div class="flex flex-col gap-1">
			<span class="text-xs text-zinc-400">Категория</span>
			<select bind:value={category} onchange={handleSearch} class="">
				<option value="">Все</option>
				{#each Object.keys(facets.category || {}) as opt}
					<option value={opt}>{opt} ({facets.category?.[opt]})</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="divide-y divide-zinc-900 rounded-lg border border-zinc-900">
		{#if searchResults.length === 0 && searchQuery.trim() !== ''}
			<p class="p-4">Ничего не найдено.</p>
		{:else}
			{#each searchResults as media (media.id)}
				<SearchResultItem {media} />
			{/each}
		{/if}
	</div>

	{#if hasMore && !isSearching && searchResults.length > 0}
		<div class="flex justify-center">
			<button
				onclick={loadMore}
				disabled={isLoadingMore}
				class="rounded border border-zinc-800 bg-zinc-900 px-6 py-3 hover:bg-zinc-800 disabled:opacity-50"
			>
				{isLoadingMore ? 'Загрузка...' : 'Загрузить ещё'}
			</button>
		</div>
	{/if}
</main>
