<script lang="ts">
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import { ALIASES_KV, formatFullDateTime, formatTimeAgo } from '$lib';
	import Player from '$lib/components/Player.svelte';
	import {
		Calendar,
		ChevronDown,
		ChevronRight,
		ExternalLink,
		EyeOff,
		History,
		Star,
		Tag
	} from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		media: BaseMedia;
	}

	let { media }: Props = $props();

	let isExpanded = $state(false);
	let isLoading = $state(false);
	let posterIndex = $state(0);

	let fullMedia = $state<FullMedia | null>(null);

	let embedUrl = $state<string | null>(null);

	$effect(() => {
		if (
			filteredProviders &&
			filteredProviders.length === 1 &&
			filteredProviders[0].items.length === 1
		) {
			embedUrl = filteredProviders[0].items[0].url;
		}
	});

	const filteredProviders = $derived(
		fullMedia?.providers
			.map((group) => {
				const hasShikimori = group.items.some((item) => item.idType === 'shikimori');

				return {
					...group,
					items: hasShikimori
						? group.items.filter((item) => item.idType === 'shikimori')
						: group.items
				};
			})
			.filter((group) => group.items.length > 0)
	);

	const showProviderAccordions = $derived(
		filteredProviders &&
			!(filteredProviders.length === 1 && filteredProviders[0].items.length === 1)
	);

	const poster = $derived(media.posters?.[posterIndex]);

	const rating = $derived(
		media.kinopoisk_rating ||
			media.imdb_rating ||
			media.shikimori_rating ||
			media.mydramalist_rating
	);

	function tryNextPoster() {
		posterIndex++;
	}

	async function toggleExpanded() {
		if (isExpanded) {
			isExpanded = false;
		} else {
			await loadMedia();
		}
	}

	async function loadMedia() {
		if (isLoading) {
			return;
		}

		isLoading = true;

		try {
			const response = await fetch(`${PUBLIC_API_BASE_URL}/api/media/${media.id}`);

			if (!response.ok) {
				console.error(response.body);
				alert('Failed to load media data');
				return;
			}

			const json = (await response.json()) as FullMedia;

			fullMedia = json;

			isExpanded = true;

			// TODO local storage history
		} catch (error) {
			console.error(error);
			isExpanded = false;
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="relative will-change-transform">
	<button
		type="button"
		class="group flex w-full cursor-pointer items-center justify-between p-4 text-left outline-offset-3 transition-[background-color] duration-300 hover:bg-violet-400/5 hover:duration-[0ms] focus:outline focus:outline-violet-500"
		onclick={toggleExpanded}
	>
		<span class="flex grow items-center gap-4">
			{#if poster}
				<img
					class="w-16 shrink-0 object-cover object-center"
					src={poster}
					alt={media.title}
					loading="lazy"
					onerror={tryNextPoster}
				/>
			{:else}
				<div class="inline-flex h-22 w-16 shrink-0 items-center justify-center bg-zinc-900">
					<EyeOff size={20} class="opacity-70" />
				</div>
			{/if}

			<span class="grow">
				<span class="block text-sm font-bold text-balance sm:text-lg"
					>{media.best_match_title || media.title}</span
				>
				<span class="block text-xs text-balance opacity-70 sm:text-sm">{media.subtitle}</span>

				<span
					class="mt-3 flex w-full flex-wrap items-center gap-3 text-xs text-zinc-300 sm:text-sm"
				>
					<span class="flex flex-wrap gap-4 text-xs">
						<!-- <span class="inline-flex items-center gap-1.5" title="Источник">
							<Play class="text-purple-600" size={16} />
							<span>{ALIASES_KV[media.provider as string] || media.provider}</span>
						</span> -->

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

						<!-- {#if media.status}
						<span class="rounded-md bg-white/10 px-2 py-1 text-zinc-300" title="Статус"
							>{ALIASES_KV[media.status] || media.status}</span
						>
					{/if} -->

						{#if media.updated_at}
							<span
								class="hidden items-center gap-1.5 md:inline-flex"
								title={`Последнее обновление: ${formatFullDateTime(media.updated_at)}`}
							>
								<History size={16} />
								<span>{formatTimeAgo(media.updated_at)}</span>
							</span>
						{/if}
					</span>

					<span class="flex flex-wrap gap-4">
						{#if fullMedia?.imdb_rating}
							<span
								class="inline-flex items-center gap-1.5 font-semibold text-[#DEB522]"
								title="Рейтинг IMDb"
							>
								<span class="text-bold">IMDb</span>
								<span>{fullMedia.imdb_rating.toFixed(2)}</span>
							</span>
						{/if}

						{#if fullMedia?.kinopoisk_rating}
							<span
								class="inline-flex items-center gap-1.5 font-semibold text-[#ff5500]"
								title="Рейтинг КиноПоиск"
							>
								<span class="text-bold">KP</span>
								<span>{fullMedia.kinopoisk_rating.toFixed(2)}</span>
							</span>
						{/if}

						{#if fullMedia?.shikimori_rating}
							<span
								class="inline-flex items-center gap-1.5 font-semibold text-[#55ACEF]"
								title="Рейтинг Shikimori"
							>
								<span class="text-bold">SM</span>
								<span>{fullMedia.shikimori_rating.toFixed(2)}</span>
							</span>
						{/if}

						{#if fullMedia?.mydramalist_rating}
							<span
								class="inline-flex items-center gap-1.5 font-semibold text-[#1675b6]"
								title="Рейтинг MyDramaList"
							>
								<span class="text-bold">MDL</span>
								<span>{fullMedia.mydramalist_rating.toFixed(2)}</span>
							</span>
						{/if}
					</span>
				</span>
			</span>
		</span>

		<span
			class="shrink-0 text-zinc-400 transition-transform group-hover:text-zinc-200 group-active:scale-90"
			class:rotate-90={isExpanded}
		>
			<ChevronRight />
		</span>
	</button>

	{#if isExpanded}
		<div class="relative space-y-4 p-4" transition:slide={{ duration: 150 }}>
			<div class="flex justify-between gap-3">
				<!-- {#if availableIds.length > 1}
					<div class="flex gap-2">
						{#each availableIds as key}
							<button
								class="rounded-full px-3 py-1 text-xs transition {activeTab === key
									? 'bg-white text-black'
									: 'text-zinc-400 hover:bg-zinc-800'}"
								onclick={() => (activeTab = key)}
							>
								{key.replace('_id', '').toUpperCase()}
							</button>
						{/each}
					</div>
				{/if} -->

				<!-- <div class="flex gap-2">
					<button
						type="button"
						class="rounded-full p-2 transition-colors hover:bg-white/10 active:scale-90"
						class:text-yellow-500={isPinned}
						class:text-zinc-400={!isPinned}
						title={isPinned ? 'Открепить' : 'Закрепить'}
						onclick={togglePin}
					>
						<Pin size={20} fill={isPinned ? 'currentColor' : 'none'} />
					</button>
				</div> -->
				<div class="w-full space-y-3">
					{#if fullMedia?.genres?.length}
						<div class="flex flex-wrap gap-2 text-xs">
							{#each fullMedia.genres as genre (genre)}
								<span class="bg-zinc-900 p-2">{genre}</span>
							{/each}
						</div>
					{/if}

					{#if fullMedia?.description}
						<div class="text-sm text-pretty opacity-70">
							{fullMedia.description}
						</div>
					{/if}

					{#if showProviderAccordions}
						<div class="divide-y divide-zinc-900">
							{#each filteredProviders as group (group.provider)}
								<details
									class="group"
									name={`providers-${media.id}`}
									ontoggle={(e) => {
										const details = e.target as HTMLDetailsElement;
										if (details.open && group.items.length === 1) {
											embedUrl = group.items[0].url;
										}
									}}
								>
									<summary
										class="flex cursor-pointer list-none items-center gap-3 py-2 opacity-70 transition-opacity hover:opacity-100"
									>
										<span class="w-6 text-right text-sm tabular-nums opacity-50">
											{group.items.length}
										</span>
										<span class="flex-1 font-medium">{group.label}</span>
										<ChevronDown
											size={16}
											class="opacity-50 transition-transform duration-200 group-open:rotate-180"
										/>
									</summary>

									<div class="pb-2">
										<ul class="">
											{#each group.items as item (item.id)}
												<li class="py-2 pl-9">
													<label class="group/item flex cursor-pointer items-start gap-3">
														<input
															type="radio"
															name="provider-url"
															value={item.url}
															bind:group={embedUrl}
															class="peer mt-1 accent-white"
														/>

														<div
															class="min-w-0 flex-1 opacity-60 transition-opacity group-hover/item:opacity-100 peer-checked:opacity-100"
														>
															<div class="font-medium">
																{item.title || 'Unknown Title'}
															</div>
															<div class="mt-0.5 text-sm opacity-70">
																{item.label}
															</div>
														</div>

														<a
															href={item.sourceLink}
															target="_blank"
															rel="external noopener noreferrer"
															onclick={(e) => e.stopPropagation()}
															class="shrink-0 p-1 opacity-40 transition-opacity hover:opacity-100"
															aria-label="Перейти на {item.label.split('#')[0]?.trim()}"
														>
															<ExternalLink size={14} />
														</a>
													</label>
												</li>
											{/each}
										</ul>
									</div>
								</details>
							{/each}
						</div>
					{/if}
				</div>
			</div>

			{#if embedUrl}
				<div class="relative bg-black" style="padding-top: 56.25%;">
					<Player {embedUrl} />
				</div>
			{/if}
		</div>
	{/if}
</div>
