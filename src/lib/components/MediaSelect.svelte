<script lang="ts">
	import { buildEmbedUrl, normalizeProvider, PROVIDERS, type ProviderKey } from '$lib';
	import { getMediaCover, getSourceLink, getSourceLabel } from '$lib/index';
	import {
		Check,
		ChevronRight,
		ExternalLink,
		Star,
		MonitorPlay,
		Hash,
		Calendar,
		Clock,
		Film,
		Tag,
		CalendarDays,
		PlayCircle,
		Layers,
		Zap,
		Eye
	} from '@lucide/svelte';
	import Player from '$lib/components/Player.svelte';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		mediaList: any[];
		activeMedia?: any | null;
	}

	let { mediaList = [], activeMedia = $bindable() }: Props = $props();

	let selectedIdType = $state<string | null>(null);
	let expanded = $state<Set<string>>(new Set());

	const formatRating = (val: number | null) => (val ? val.toFixed(1) : null);
	const formatDate = (dateString: string) => {
		if (!dateString) return null;
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
	};

	// Format ID type display names
	const formatIdTypeLabel = (idType: string) => {
		const labels: Record<string, string> = {
			kinopoisk_id: 'Kinopoisk',
			imdb_id: 'IMDb',
			tmdb_id: 'TMDB',
			shikimori_id: 'Shikimori',
			kp_id: 'KP',
			mdl_id: 'MyDramaList'
		};
		return labels[idType] || idType.replace('_', ' ');
	};

	const providerOptions = $derived.by(() => {
		const grouped = new Map<ProviderKey, any>();
		for (const media of mediaList) {
			const pKey = normalizeProvider(media.provider!);
			if (!pKey || !PROVIDERS[pKey]) continue;
			if (!grouped.has(pKey)) {
				grouped.set(pKey, { ...PROVIDERS[pKey], key: pKey, items: [] });
			}
			grouped.get(pKey).items.push(media);
		}

		// Calculate unique items for each provider
		const providers = Array.from(grouped.values()).sort((a, b) => a.priority - b.priority);

		// Add uniqueItems count to each provider
		return providers.map((provider) => {
			const uniqueIds = new Set<string>();

			provider.supportedIds.forEach((idType: string) => {
				provider.items.forEach((item: any) => {
					const id = item[idType];
					if (id) {
						uniqueIds.add(`${idType}:${id}`);
					}
				});
			});

			return {
				...provider,
				uniqueItems: uniqueIds.size
			};
		});
	});

	const embedUrl = $derived.by(() => {
		if (!activeMedia) return null;
		return buildEmbedUrl(activeMedia);
	});

	function handleSelect(media: any, idType: string) {
		// If clicking on already active item, collapse it
		if (isIdActive(media.id, idType)) {
			activeMedia = null;
			selectedIdType = null;
		} else {
			activeMedia = media;
			selectedIdType = idType;
		}
		// Ensure provider is expanded when selecting
		const providerKey = normalizeProvider(media.provider!);
		if (providerKey && !expanded.has(providerKey)) {
			expanded.add(providerKey);
			expanded = new Set(expanded);
		}
	}

	function isIdActive(mediaId: number, idType: string) {
		return activeMedia?.id === mediaId && selectedIdType === idType;
	}

	function toggleProvider(key: string) {
		const next = new Set(expanded);
		next.has(key) ? next.delete(key) : next.add(key);
		expanded = next;
	}
</script>

<div class="flex flex-col gap-6">
	<!-- Horizontal Provider Cards -->
	<div class="">
		{#each providerOptions as provider (provider.key)}
			{@const isExpanded = expanded.has(provider.key)}
			{@const hasContent = provider.supportedIds.some(
				(idType: string) => provider.items.filter((m: any) => !!m[idType]).length > 0
			)}

			<div
				class="rounded-xl border transition-all duration-200 hover:border-zinc-700 {isExpanded
					? 'border-violet-500/50 bg-linear-to-b  from-violet-900/10 to-violet-900/5 ring-1 ring-violet-500/30'
					: 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/70'}"
			>
				<!-- Provider Card Header -->
				<button
					type="button"
					onclick={() => toggleProvider(provider.key)}
					onkeydown={(e) =>
						e.key === 'Enter' || e.key === ' ' ? toggleProvider(provider.key) : null}
					class="w-full rounded-xl p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
					disabled={!hasContent}
					aria-expanded={isExpanded}
				>
					<div class="flex items-start justify-between">
						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg {isExpanded
									? 'bg-linear-to-br from-violet-600 to-violet-700'
									: 'bg-zinc-800 group-hover:bg-zinc-700'}"
							>
								<MonitorPlay size={18} class={isExpanded ? 'text-white' : 'text-zinc-400'} />
							</div>

							<div class="flex flex-col items-start">
								<span class="text-lg font-bold text-white">{provider.label}</span>
								<div class="mt-1 flex items-center gap-3">
									<span
										class="text-sm font-medium {isExpanded ? 'text-violet-300' : 'text-zinc-500'}"
									>
										{provider.uniqueItems}
										{provider.uniqueItems === 1 ? 'source' : 'sources'}
									</span>
									{#if provider.items[0]?.quality}
										<span
											class="flex items-center gap-1 rounded-full bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-400"
										>
											<Layers size={10} />
											{provider.items[0].quality}
										</span>
									{/if}
								</div>
							</div>
						</div>

						<ChevronRight
							size={20}
							class="text-zinc-500 transition-transform duration-200 {isExpanded
								? 'rotate-90 text-violet-400'
								: ''}"
						/>
					</div>

					{#if !hasContent}
						<div class="mt-4 rounded-lg bg-zinc-900/50 p-3">
							<span class="text-sm text-zinc-500">No content available</span>
						</div>
					{/if}
				</button>

				<!-- Provider Content Panel -->
				{#if isExpanded && hasContent}
					<div
						transition:slide={{ duration: 300, easing: cubicOut }}
						class="overflow-hidden border-t border-zinc-800/50"
					>
						<div class="">
							<div class="space-y-4">
								{#each provider.supportedIds as idType}
									{@const filteredItems = provider.items.filter((m: any) => !!m[idType])}

									{#if filteredItems.length > 0}
										<section class="p-4">
											<!-- ID Type Header -->
											<div class="mb-3 flex items-center justify-between">
												<h4
													class="flex items-center gap-2 text-sm font-semibold tracking-wider text-zinc-400 uppercase"
												>
													<Hash size={16} />
													{formatIdTypeLabel(idType)} IDs
												</h4>
												<span class="text-sm text-zinc-500">
													{filteredItems.length}
													{filteredItems.length === 1 ? 'item' : 'items'}
												</span>
											</div>

											<!-- Media Items List -->
											<div class="space-y-3">
												{#each filteredItems as media (media.id)}
													{@const extId = media[idType]}
													{@const isActive = isIdActive(media.id, idType)}

													<article
														class="overflow-hidden rounded-lg border transition-all hover:border-zinc-700 hover:bg-zinc-800/20 {isActive
															? 'border-violet-500/50 bg-linear-to-r from-violet-900/10 to-violet-900/5 ring-1 ring-violet-500/30'
															: 'border-zinc-800 bg-zinc-900/50'}"
													>
														<button
															type="button"
															onclick={() => handleSelect(media, idType)}
															onkeydown={(e) =>
																e.key === 'Enter' || e.key === ' '
																	? handleSelect(media, idType)
																	: null}
															class="w-full p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
															aria-pressed={isActive}
														>
															<div class="flex items-start gap-4">
																<!-- Poster -->
																<div
																	class="relative aspect-2/3 h-20 shrink-0 overflow-hidden rounded-md bg-zinc-800 shadow-lg"
																>
																	<img
																		src={getMediaCover(media)}
																		alt={`Cover for ${media.provider_title || media.title_ru}`}
																		class="h-full w-full object-cover transition-transform group-hover:scale-105"
																		loading="lazy"
																	/>
																	{#if isActive}
																		<div class="absolute inset-0 bg-violet-900/30"></div>
																	{/if}
																</div>

																<!-- Media Info -->
																<div class="flex min-w-0 flex-1 flex-col gap-2">
																	<div class="flex items-start justify-between">
																		<div class="min-w-0">
																			<h5
																				class="truncate text-base font-bold text-zinc-100 group-hover:text-white"
																			>
																				{media.provider_title || media.title_ru}
																			</h5>
																			<div class="mt-1 flex items-center gap-2">
																				<span
																					class="rounded bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-400"
																				>
																					{formatIdTypeLabel(idType)}: {extId}
																				</span>
																				{#if media.kinopoisk_rating || media.imdb_rating}
																					<div
																						class="flex items-center gap-1 rounded-lg bg-linear-to-r from-amber-900/40 to-amber-800/30 px-2 py-1"
																					>
																						<Star size={12} class="text-amber-400" />
																						<span class="text-sm font-bold text-amber-400">
																							{formatRating(
																								media.kinopoisk_rating || media.imdb_rating
																							)}
																						</span>
																					</div>
																				{/if}
																			</div>
																		</div>
																		{#if isActive}
																			<div
																				class="flex shrink-0 items-center gap-1.5 rounded-lg bg-linear-to-r from-violet-700/40 to-violet-600/30 px-3 py-1.5"
																			>
																				<Check size={13} class="text-violet-300" />
																				<span class="text-sm font-medium text-violet-300"
																					>Selected</span
																				>
																			</div>
																		{/if}
																	</div>

																	<!-- Metadata -->
																	<div
																		class="flex flex-wrap items-center gap-2 text-sm text-zinc-500"
																	>
																		{#if media.year}
																			<div class="flex items-center gap-1.5">
																				<Calendar size={12} />
																				<span>{media.year}</span>
																			</div>
																		{/if}
																		{#if media.quality}
																			<div class="flex items-center gap-1.5">
																				<Layers size={12} />
																				<span>{media.quality}</span>
																			</div>
																		{/if}
																		{#if media.genres?.length}
																			<span class="mx-1">•</span>
																			<div class="flex items-center gap-1.5">
																				<Tag size={12} />
																				<span>{media.genres.slice(0, 2).join(', ')}</span>
																			</div>
																		{/if}
																	</div>
																</div>
															</div>
														</button>
													</article>

													<!-- Player Preview Panel -->
													{#if activeMedia && selectedIdType && isActive}
														<div
															transition:slide={{ duration: 250 }}
															class="rounded-xl border border-zinc-800 bg-linear-to-b from-zinc-950/50 to-black/60 p-6"
														>
															<div class="mb-6 flex items-center justify-between">
																<div class="flex items-center gap-4">
																	<div
																		class="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-violet-600 to-violet-700"
																	>
																		<PlayCircle size={20} class="text-white" />
																	</div>
																	<div>
																		<h3 class="text-xl font-bold text-white">Player Preview</h3>
																		<p class="text-sm text-zinc-400">
																			Currently playing: {activeMedia.provider_title ||
																				activeMedia.title_ru}
																		</p>
																	</div>
																</div>

																<div class="flex items-center gap-4">
																	{#if activeMedia.quality}
																		<div
																			class="flex items-center gap-2 rounded-full bg-linear-to-r from-violet-800/40 to-purple-800/30 px-4 py-2 text-sm font-medium text-violet-300"
																		>
																			<Layers size={14} />
																			{activeMedia.quality}
																		</div>
																	{/if}

																	<a
																		href={getSourceLink(
																			selectedIdType,
																			activeMedia[selectedIdType],
																			activeMedia.category
																		)}
																		target="_blank"
																		rel="noopener noreferrer"
																		class="flex items-center gap-2 rounded-lg border border-zinc-700 bg-linear-to-r from-zinc-800/80 to-zinc-900/60 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:from-zinc-700 hover:to-zinc-800 hover:text-white"
																		title="Open on {getSourceLabel(selectedIdType)}"
																	>
																		<ExternalLink size={16} />
																		Open on {getSourceLabel(selectedIdType)}
																	</a>
																</div>
															</div>

															<!-- Player -->
															<div
																class="overflow-hidden rounded-lg border border-zinc-800 bg-black shadow-2xl"
															>
																<div class="relative aspect-video">
																	<Player {embedUrl} />
																</div>
																{#if activeMedia.updated_at}
																	<div
																		class="flex items-center justify-between border-t border-zinc-800/50 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-500"
																	>
																		<div class="flex items-center gap-2">
																			<span class="font-medium text-zinc-400"
																				>Current Selection</span
																			>
																			<span class="text-violet-300">•</span>
																			<span
																				>{activeMedia.provider_title || activeMedia.title_ru}</span
																			>
																		</div>
																		<div class="flex items-center gap-1.5">
																			<CalendarDays size={14} />
																			<span>Updated: {formatDate(activeMedia.updated_at)}</span>
																		</div>
																	</div>
																{/if}
															</div>
														</div>
													{/if}
												{/each}
											</div>
										</section>
									{/if}
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
