<script lang="ts">
	import { Search, Loader, ChevronLeft } from '@lucide/svelte';
	import { ScrollArea } from 'bits-ui';
	import type { SearchResponse } from 'meilisearch';

	const MEILI_URL = 'http://127.0.0.1:7700';
	const MEILI_KEY = 'public_search_key';

	let page: 'search' | 'watch' = $state('search');
	let searchQuery = $state('');
	let searchInputEl: HTMLInputElement | undefined = $state();
	let isSearching = $state(false);
	let searchResults: MeiliSearchTitle[] = $state([]);
	let controller: AbortController | null = null;
	let timeout: ReturnType<typeof setTimeout>;
	let activeTitle: MeiliSearchTitle | null = $state(null);

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

	async function searchTitles(q: string) {
		if (!q.trim()) {
			searchResults = [];
			return;
		}

		if (controller) {
			controller.abort();
		}

		const start = performance.now();

		controller = new AbortController();
		isSearching = true;

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
			searchResults = data.hits;
		} catch (err) {
			if ((err as any).name !== 'AbortError') {
				console.error(err);
				searchResults = [];
			}
		} finally {
			const elapsed = performance.now() - start;
			const minDuration = 300;
			const delay = Math.max(0, minDuration - elapsed);

			setTimeout(() => (isSearching = false), delay);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
			e.preventDefault();

			searchInputEl?.focus();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="h-dvh overflow-hidden w-full">
	<header class="bg-zinc-900 flex items-center h-16 z-10 relative">
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
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					class="w-full min-w-0 rounded-md bg-zinc-800 px-3 py-2 text-sm outline-none text-ellipsis disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-violet-500 focus-visible:ring-violet-500/50 focus-visible:ring-3 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none peer ps-9 pe-9"
					type="search"
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
		<ScrollArea.Root>
			<ScrollArea.Viewport style="max-height: calc(100dvh - 4rem);">
				<div hidden={page === 'watch' ? false : true}>
					<div class="relative pt-[56.25%] w-full overflow-hidden">
						<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.76 0a3.6 3.6 0 0 1 3.38 2.3 2.86 2.86 0 0 1 1.74 5.4l.01.14a2.86 2.86 0 0 1-3.82 2.69 2.84 2.84 0 0 1-4.78-2.1c0-.91.42-1.71 1.07-2.24a3.5 3.5 0 0 1-1.22-2.65A3.58 3.58 0 0 1 5.76 0ZM8.4 11.75a2.91 2.91 0 0 1 2.82 3.66 2.89 2.89 0 0 1-2.15 5.34 3.54 3.54 0 1 1-5.55-3.2 2.98 2.98 0 0 1 1.8-5.4c.44 0 .85.09 1.22.25.5-.4 1.15-.65 1.86-.65Zm7.01-6.11a2.39 2.39 0 0 1 2.42 2.35c0 .24-.04.47-.1.68a3.8 3.8 0 0 1 1.62-.36 3.62 3.62 0 0 1 3.69 3.55 3.62 3.62 0 0 1-4.36 3.48l.02.31c0 1.7-1.25 3.07-2.78 3.07-1.54 0-2.79-1.37-2.79-3.07 0-.77.26-1.47.68-2l-.32.01A2.71 2.71 0 0 1 10.75 11a2.7 2.7 0 0 1 2.27-2.63 2.39 2.39 0 0 1 2.39-2.72Zm.28 6.95h.05l-.01-.05-.04.05Z"
									fill="currentColor"
								/></svg
							>
						</span>
					</div>

					<div
						class="w-full max-w-5xl overflow-x-hidden overflow-y-auto max-h-full mx-auto flex gap-4 flex-wrap sm:flex-nowrap items-start"
					>
						<div class="bg-background overflow-hidden rounded-md border">
							<div class="relative w-full overflow-auto">
								<table class="w-full text-xs sm:text-sm">
									<tbody class="[&_tr:last-child]:border-0">
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td colspan="2">
												<div
													style="position: relative; width: 100%; padding-top: 56.25%; background: #000;"
												>
													<iframe
														title="title"
														style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
														width="100%"
														height="100%"
														src="https://52dce3a2.obrut.show/embed/0MTM/content/wUDM5ATM"
														frameborder="0"
														allow="*"
														allowfullscreen
													></iframe>
												</div>
											</td>
										</tr>
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td
												class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
												>Доступные источники</td
											>
											<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2"> </td>
										</tr>
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td colspan="2" class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">
												<div class="max-w-16 shrink-0 w-full">
													<div class="relative pt-[150%] w-full">
														<a
															class="absolute inset-0 z-10"
															href="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto"
															aria-label="Title"
															target="_blank"
															rel="nofollow noopener noreferer"
														></a>
														<img
															class="absolute rounded-sm inset-0"
															src="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto"
															alt=""
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td
												class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
												>Оригинальное название</td
											>
											<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">Wednesday</td>
										</tr>
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td
												class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
												>Русское название</td
											>
											<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">Уэнздэй</td>
										</tr>
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td
												class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
												>Год</td
											>
											<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">2022</td>
										</tr>
										<tr
											class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
										>
											<td
												class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
												>Описание</td
											>
											<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2"
												>Для выполнения новой миссии секретный агент должен завести поддельную
												семью. Но он и не подозревает, что его фиктивная жена — наёмная убийца, а
												удочеренная маленькая девочка — телепат, которая хочет, чтобы приёмные
												родители, несмотря ни на что, действительно были вместе.</td
											>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div hidden={page === 'search' ? false : true}>
					<div class="max-w-5xl mx-auto w-full p-4">
						{#if searchQuery.trim().length}
							{#if searchResults.length}
								<ul
									class="grid gap-3 grid-cols-[repeat(auto-fill,minmax(90px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] text-xs sm:text-sm lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"
								>
									{#each searchResults as i (i.id)}
										<li>
											<button
												type="button"
												class="group cursor-pointer"
												onclick={(e) => {
													e.preventDefault();
													activeTitle = i;
													page = 'watch';
												}}
											>
												{#if i.cover}
													<img
														class="rounded-sm w-full"
														src={i.cover}
														alt={i.name_ru || i.name_en || i.original_name}
													/>
												{/if}

												<p class="font-medium line-clamp-2 mt-2 group-hover:text-violet-500">
													{i.name_ru || i.name_en || i.original_name || i.alt_names?.[0]}
												</p>

												<div class="flex gap-2 mt-1 flex-wrap text-xs">
													<div class="rounded-full px-2 py-1 bg-zinc-900 dark:bg-zinc-900">
														{i.year}
													</div>
												</div>
											</button>
										</li>
									{/each}
								</ul>
							{:else if !isSearching}
								<p>😔 Увы, по Вашему запросу ничего не найдено</p>
							{/if}
						{:else}
							<div class="flex flex-wrap gap-2 text-xs">
								<button
									type="button"
									class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2"
									onclick={(e) => {
										e.preventDefault();
										searchQuery = '#popular';
									}}>Популярное за всё время</button
								>
								<button
									type="button"
									class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2"
									onclick={(e) => {
										e.preventDefault();
										searchQuery = '#popular_24h';
									}}>Популярное за 24ч</button
								>
								<button
									type="button"
									class="rounded-full border border-zinc-800 hover:border-zinc-700 select-none px-3 py-2"
									onclick={(e) => {
										e.preventDefault();
										searchQuery = '#hot';
									}}>Сейчас смотрят</button
								>
							</div>
						{/if}
					</div>
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar
				orientation="vertical"
				class="data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 flex w-4 touch-none select-none rounded-full p-1 transition-all duration-200 hover:w-5"
			>
				<ScrollArea.Thumb class="bg-zinc-800 flex-1 rounded-full" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>
	</main>
</div>
