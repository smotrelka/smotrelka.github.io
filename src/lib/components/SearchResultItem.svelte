<script lang="ts">
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import { ALIASES_KV, formatFullDateTime, formatTimeAgo } from '$lib';
	import Player from '$lib/components/Player.svelte';
	import {
		Calendar,
		CalendarClock,
		ChevronDown,
		CircleAlert,
		ClockPlus,
		ExternalLink,
		EyeOff,
		History,
		Loader,
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
		class={{
			'group relative z-10 flex w-full flex-wrap justify-between gap-4 p-4 text-left outline-offset-3 transition-[background-color] duration-300 not-disabled:cursor-pointer hover:duration-[0ms] focus:outline focus:outline-violet-500': true
		}}
		onclick={toggleExpanded}
		disabled={isLoading}
	>
		<span class="flex grow items-center gap-4">
			<div
				class="relative inline-flex h-22 w-16 shrink-0 items-center justify-center overflow-hidden bg-zinc-900"
			>
				<EyeOff size={20} class="opacity-70" />

				{#if poster}
					<img
						class="absolute inset-0 z-10 h-full w-full bg-zinc-900 object-cover object-center"
						src={poster}
						alt={media.title}
						loading="lazy"
						onerror={tryNextPoster}
					/>
				{/if}
			</div>

			<span class="grow">
				<span
					class="block text-sm font-bold text-balance group-hover:text-violet-400 sm:text-lg"
					class:text-violet-400={isExpanded}>{media.title}</span
				>

				<span class="mt-1 block text-xs text-balance opacity-70 sm:text-sm">{media.subtitle}</span>

				<span
					class="mt-4 flex w-full flex-wrap items-center gap-3 text-xs text-zinc-300 sm:text-sm"
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
					</span>
				</span>
			</span>
		</span>

		<span class="flex grow flex-wrap items-start justify-between gap-2 text-xs sm:grow-0">
			<span class="flex flex-wrap">
				{#if fullMedia?.imdb_rating}
					<span
						class="inline-flex items-center gap-1.5 bg-yellow-500/10 px-2 py-1 font-semibold text-yellow-500"
						title="Рейтинг IMDb"
					>
						<span class="text-bold">IMDb</span>
						<span>{fullMedia.imdb_rating.toFixed(2)}</span>
					</span>
				{/if}

				{#if fullMedia?.kinopoisk_rating}
					<span
						class="inline-flex items-center gap-1.5 bg-orange-500/10 px-2 py-1 font-semibold text-orange-500"
						title="Рейтинг КиноПоиск"
					>
						<span class="text-bold">KP</span>
						<span>{fullMedia.kinopoisk_rating.toFixed(2)}</span>
					</span>
				{/if}

				{#if fullMedia?.shikimori_rating}
					<span
						class="inline-flex items-center gap-1.5 bg-sky-500/10 px-2 py-1 font-semibold text-sky-500"
						title="Рейтинг Shikimori"
					>
						<span class="text-bold">SHIKI</span>
						<span>{fullMedia.shikimori_rating.toFixed(2)}</span>
					</span>
				{/if}

				{#if fullMedia?.mydramalist_rating}
					<span
						class="inline-flex items-center gap-1.5 bg-blue-500/10 px-2 py-1 font-semibold text-blue-500"
						title="Рейтинг MyDramaList"
					>
						<span class="text-bold">MDL</span>
						<span>{fullMedia.mydramalist_rating.toFixed(2)}</span>
					</span>
				{/if}
			</span>

			<span
				class={{
					'shrink-0 p-1 transition-transform group-active:scale-90': true,
					'bg-violet-400 text-black ': isExpanded,
					'bg-zinc-900 text-zinc-400 group-hover:text-white': !isExpanded
				}}
			>
				{#if isLoading}
					<Loader size={16} class="animate-spin" />
				{:else}
					<ChevronDown size={16} class={{ 'rotate-180': isExpanded }} />
				{/if}
			</span>
		</span>
	</button>

	{#if isExpanded}
		<div class="relative" transition:slide={{ duration: 150 }}>
			<div class="flex justify-between gap-3 space-y-4 p-4 pt-0">
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
					<div class="flex flex-wrap justify-between gap-x-6 gap-y-3">
						<div class="flex flex-wrap gap-2 text-xs">
							<span
								class="inline-flex items-center gap-1.5 border border-zinc-900 p-2"
								title={formatFullDateTime(media.created_at)}
							>
								<ClockPlus size={14} />

								<span
									>Добавлено: <span class="font-semibold">{formatTimeAgo(media.created_at)}</span
									></span
								>
							</span>

							<span
								class="inline-flex items-center gap-1.5 border border-zinc-900 p-2"
								title={formatFullDateTime(media.updated_at)}
							>
								<History size={14} />

								<span
									>Обновлено: <span class="font-semibold">{formatTimeAgo(media.updated_at)}</span
									></span
								>
							</span>

							{#if fullMedia?.next_episode_at}
								<span
									class="inline-flex items-center gap-1.5 border border-zinc-900 p-2"
									title={formatFullDateTime(fullMedia.next_episode_at)}
								>
									<CalendarClock size={14} />
									<span
										>Следующий эпизод: <span class="font-semibold"
											>{formatTimeAgo(fullMedia.next_episode_at)}</span
										></span
									>
								</span>
							{/if}

							{#if fullMedia?.rating_mpaa || fullMedia?.minimal_age}
								<span
									class="inline-flex items-center gap-1.5 border border-zinc-900 p-2 uppercase"
									class:text-red-400={fullMedia &&
										(fullMedia.rating_mpaa?.toLowerCase().startsWith('r') ||
											(fullMedia.minimal_age && fullMedia.minimal_age >= 18))}
									title="Возрастное ограничение"
								>
									<CircleAlert size={14} />

									{#if fullMedia?.rating_mpaa && fullMedia?.minimal_age}
										<span
											>{ALIASES_KV[fullMedia.rating_mpaa] || fullMedia.rating_mpaa} ({fullMedia.minimal_age}+)</span
										>
									{:else if fullMedia.rating_mpaa}
										<span>{ALIASES_KV[fullMedia.rating_mpaa] || fullMedia.rating_mpaa}</span>
									{:else}
										<span>{fullMedia.minimal_age}+</span>
									{/if}
								</span>
							{/if}
						</div>

						<div class="flex flex-wrap gap-2">
							{#if fullMedia?.countries?.length}
								<div class="flex flex-wrap gap-2 text-xs">
									{#each fullMedia.countries as i (i)}
										<span class="bg-zinc-900 p-2">{i}</span>
									{/each}
								</div>
							{/if}

							{#if fullMedia?.genres?.length}
								<div class="flex flex-wrap gap-2 text-xs">
									{#each fullMedia.genres as i (i)}
										<span class="border border-zinc-900 p-2">{i}</span>
									{/each}
								</div>
							{/if}
						</div>
					</div>

					{#if fullMedia?.description}
						<div class="text-sm text-pretty opacity-70 transition-opacity hover:opacity-100">
							{fullMedia.description}
						</div>
					{/if}

					{#if fullMedia?.tagline}
						<div class="text-sm text-pretty italic opacity-70 transition-opacity hover:opacity-100">
							&mdash; {fullMedia.tagline}
						</div>
					{/if}
				</div>
			</div>

			{#if showProviderAccordions}
				<div class="divide-y divide-zinc-900">
					{#each filteredProviders as group (group.provider)}
						<details
							class="group"
							name={`providers-${media.id}`}
							ontoggle={(e) => {
								const details = e.target as HTMLDetailsElement;
								if (details.open) {
									embedUrl = group.items[0].url;
								}
							}}
						>
							<summary
								class="flex cursor-pointer list-none items-center gap-3 py-3 pr-4 opacity-70 transition-opacity hover:opacity-100"
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
										<li class="py-2 pr-3 pl-9">
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
													<ExternalLink size={16} />
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

			{#if embedUrl}
				<div class="relative bg-black" style="padding-top: 56.25%;" tabindex="-1">
					<Player {embedUrl} />
				</div>
			{/if}
		</div>
	{/if}
</div>
