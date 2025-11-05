<script lang="ts">
	import { Command } from 'bits-ui';
	import { Loader, Sticker, Sun, Palette, Search } from '@lucide/svelte';
	import type { SearchResponse } from 'meilisearch';

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

	let query = $state('');
	let results: MeiliSearchTitle[] = $state([]);
	let loading = $state(false);
	let controller: AbortController | null = null;
	let timeout: ReturnType<typeof setTimeout>;
	let isFocused = $state(false);

	$effect(() => {
		clearTimeout(timeout);

		const q = query.trim();
		if (!q) {
			results = [];
			loading = false;
			return;
		}

		timeout = setTimeout(() => searchTitles(q), 200);
	});

	async function searchTitles(q: string) {
		if (!q.trim()) {
			results = [];
			return;
		}

		if (controller) {
			controller.abort();
		}

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
					limit: 10
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
			loading = false;
		}
	}

	function handleSelect(item: MeiliSearchTitle) {
		console.log('Selected:', item);
		isFocused = false;
		// Handle selection here
	}

	function handleSuggestion(type: string) {
		console.log('Suggestion clicked:', type);
		isFocused = false;
		// Handle suggestion here
	}
</script>

<div
	class="divide-border bg-popover text-popover-foreground border-muted flex h-full w-full flex-col divide-y self-start rounded-xl border relative grow"
>
	<Command.Root shouldFilter={false}>
		<div class="flex items-center relative">
			<span
				class="absolute text-muted-foreground/80 top-1/2 -translate-y-1/2 left-3 pointer-events-none"
				aria-hidden="true"
			>
				<Search size={16} aria-hidden="true" />
			</span>

			<Command.Input
				class="border-input grow hover:bg-accent/40 hover:text-accent-foreground dark:hover:bg-input/50 bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 inline-flex rounded-lg border pr-3 pl-8 py-2 text-sm focus-visible:ring-[3px] focus-visible:outline-hidden"
				bind:value={query}
				placeholder="найти&mldr;"
				onfocus={() => (isFocused = true)}
				onblur={() => (isFocused = false)}
			/>
		</div>

		{#if isFocused}
			<div class="absolute top-full w-full bg-white dark:bg-muted z-50 max-h-96 overflow-hidden">
				<Command.List class="max-h-96 overflow-y-auto p-2">
					<Command.Viewport>
						{#if results.length > 0}
							<Command.Group>
								<!-- <Command.GroupHeading class="px-3 pt-2 pb-2 text-xs text-gray-500">
								Results
							</Command.GroupHeading> -->
								<Command.GroupItems>
									{#each results as item (item.id)}
										<Command.Item
											value={item.id.toString()}
											onSelect={() => handleSelect(item)}
											class="px-3 py-2 rounded-md cursor-pointer transition-colors data-highlighted:bg-ring data-selected:bg-ring flex items-center gap-3"
										>
											{#if item.cover}
												<img
													src={item.cover}
													alt={item.name_ru || item.name_en || item.original_name}
													class="h-12 w-8 rounded-sm object-cover shrink-0"
												/>
											{/if}
											<div class="min-w-0">
												<div class="font-medium text-gray-900 truncate">
													{item.name_ru || item.name_en || item.original_name}
													{#if item.year}
														<span class="text-gray-500 ml-1">({item.year})</span>
													{/if}
												</div>
												<div class="text-sm text-gray-600">
													{item.type === 'movie' ? 'фильм' : 'сериал'}
												</div>
											</div>
										</Command.Item>
									{/each}
								</Command.GroupItems>
							</Command.Group>
						{:else if query && !loading}
							<Command.Empty class="py-8 px-4 text-center text-gray-400 text-sm">
								No results found.
							</Command.Empty>
						{:else if !query}
							<Command.Group>
								<Command.GroupHeading class="px-3 pt-2 pb-2 text-xs text-gray-500">
									Suggestions
								</Command.GroupHeading>
								<Command.GroupItems>
									<Command.Item
										onSelect={() => handleSuggestion('popular')}
										class="px-3 py-2 rounded-md cursor-pointer transition-colors data-[highlighted]:bg-gray-100 data-[selected]:bg-indigo-100 flex items-center gap-2"
									>
										<Sticker class="w-4 h-4" /> Популярное
									</Command.Item>
									<Command.Item
										onSelect={() => handleSuggestion('new')}
										class="px-3 py-2 rounded-md cursor-pointer transition-colors data-[highlighted]:bg-gray-100 data-[selected]:bg-indigo-100 flex items-center gap-2"
									>
										<Sun class="w-4 h-4" /> Новинки
									</Command.Item>
									<Command.Item
										onSelect={() => handleSuggestion('random')}
										class="px-3 py-2 rounded-md cursor-pointer transition-colors data-[highlighted]:bg-gray-100 data-[selected]:bg-indigo-100 flex items-center gap-2"
									>
										<Palette class="w-4 h-4" /> Случайное
									</Command.Item>
								</Command.GroupItems>
							</Command.Group>
						{/if}
					</Command.Viewport>
				</Command.List>
			</div>
		{/if}
	</Command.Root>
</div>
