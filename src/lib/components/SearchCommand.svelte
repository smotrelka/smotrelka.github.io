<script lang="ts">
	import { Search, LoaderCircle } from '@lucide/svelte';
	import type { SearchResponse } from 'meilisearch';
	import { onMount } from 'svelte';

	interface MeiliSearchTitle {
		id: number;
		type: 'movie' | 'series';
		original_name: string;
		name_en?: string;
		name_ru?: string;
		alt_names?: string[];
		year?: number;
		cover?: string;
		description?: string;
	}

	const MEILI_URL = 'http://127.0.0.1:7700';
	const MEILI_KEY = 'public_search_key';

	let inputEl: HTMLInputElement | undefined;
	let query = $state('');
	let results: MeiliSearchTitle[] = $state([]);
	let loading = $state(false);
	let controller: AbortController | null = null;

	let timeout: ReturnType<typeof setTimeout>;
	let loadingDelay: ReturnType<typeof setTimeout>;

	$effect(() => {
		clearTimeout(timeout);

		const q = query.trim();

		if (!q) {
			results = [];
			loading = false;
			return;
		}

		timeout = setTimeout(() => searchTitles(q), 100);
	});

	async function searchTitles(q: string) {
		if (!q.trim()) {
			results = [];
			return;
		}

		if (controller) {
			controller.abort();
		}

		const start = performance.now();

		controller = new AbortController();
		loading = true;

		try {
			const res = await fetch(`${MEILI_URL}/indexes/titles/search`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${MEILI_KEY}`
				},
				body: JSON.stringify({
					q,
					limit: 20
				}),
				signal: controller.signal
			});

			if (!res.ok) throw new Error(await res.text());

			const data = (await res.json()) as SearchResponse<MeiliSearchTitle>;
			results = data.hits;
		} catch (err) {
			if ((err as any).name !== 'AbortError') {
				console.error(err);
				results = [];
			}
		} finally {
			const elapsed = performance.now() - start;
			const minDuration = 300;
			const delay = Math.max(0, minDuration - elapsed);

			setTimeout(() => (loading = false), delay);
		}
	}
</script>

<div class="space-y-4">
	<div class="relative">
		<input
			name="search"
			autocomplete="off"
			autocorrect="off"
			autocapitalize="off"
			class="border-input file:text-foreground placeholder:text-muted-foreground/70 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none peer ps-9 pe-9"
			type="search"
			placeholder="начните вводить название&mldr;"
			bind:value={query}
			bind:this={inputEl}
		/>

		<div
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 opacity-70 peer-disabled:opacity-50"
		>
			{#if loading}
				<LoaderCircle class="animate-spin" size={16} aria-hidden="true" role="presentation" />
			{:else}
				<Search size={16} aria-hidden="true" />
			{/if}
		</div>
	</div>

	{#if results.length}
		<ul
			class="grid gap-3 grid-cols-[repeat(auto-fill,minmax(90px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] text-xs sm:text-sm lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"
		>
			{#each results as i (i.id)}
				<li>
					{#if i.cover}
						<img class="rounded-sm" src={i.cover} alt={i.name_ru || i.name_en || i.original_name} />
					{/if}

					<p class="font-medium line-clamp-2 mt-2">
						{i.name_ru || i.name_en || i.original_name || i.alt_names?.[0]}
					</p>

					<div class="flex gap-2 mt-1 flex-wrap text-xs">
						<div class="rounded-full px-2 py-1 bg-zinc-200 dark:bg-zinc-900">{i.year}</div>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
