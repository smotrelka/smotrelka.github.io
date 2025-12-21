<script lang="ts">
	import { normalizeProvider, PROVIDERS } from '$lib';
	import { Check } from '@lucide/svelte';

	interface Props {
		activeMedia?: Media | null;
		mediaList?: Media[];
	}

	let { activeMedia = $bindable(), mediaList = [] }: Props = $props();

	const uniqueMediaList = $derived.by(() => {
		const seenByProvider = new Map<string, Set<string>>();

		return mediaList
			.filter((media) => {
				const provider = normalizeProvider(media.provider!) || 'unknown';

				// Initialize Set for this provider if not exists
				if (!seenByProvider.has(provider)) {
					seenByProvider.set(provider, new Set());
				}

				const seen = seenByProvider.get(provider)!;

				// All IDs that should be unique within each provider
				const ids = [media.shikimori_id, media.mydramalist_id, media.worldart_id].filter(Boolean);

				// Check if any of these IDs have been seen for this provider
				for (const id of ids) {
					const key = String(id);
					if (seen.has(key)) {
						return false; // Skip this item
					}
				}

				// Add all IDs to the seen set for this provider
				ids.forEach((id) => seen.add(String(id)));
				return true;
			})
			.map((media) => ({
				...media,
				title:
					media.provider_title ||
					media.title_ru ||
					media.original_title ||
					media.title_en ||
					media.alt_titles?.[0]
			}))
			.sort((a, b) => {
				if (a.title && b.title) {
					return a.title.localeCompare(b.title);
				}

				return 0;
			})
			.sort((a, b) => {
				const providerA = normalizeProvider(a.provider!);
				const providerB = normalizeProvider(b.provider!);

				const priorityA = providerA ? PROVIDERS[providerA].priority : 999;
				const priorityB = providerB ? PROVIDERS[providerB].priority : 999;

				return priorityA - priorityB;
			});
	});
</script>

<details class="mb-4 rounded-md border border-zinc-800 bg-zinc-900">
	<summary class="cursor-pointer px-4 py-2 font-medium hover:bg-zinc-800">
		Выбор источника
	</summary>

	{#each uniqueMediaList as media (media.id)}
		<button
			type="button"
			class="flex w-full cursor-pointer items-center gap-2 truncate px-4 py-2 text-left hover:bg-zinc-800"
			onclick={(e) => {
				e.preventDefault();
				activeMedia = media;
			}}
		>
			<span class="inline-block truncate sm:w-1/12">
				<span class="truncate rounded-md bg-zinc-800 px-2 py-1 text-sm"
					>{PROVIDERS[normalizeProvider(media.provider!)!]!.label}</span
				>
			</span>
			<span class="truncate"
				>{media.title}
				{media.year ? `(${media.year})` : ''}</span
			>

			{#if activeMedia && activeMedia.id === media.id}
				<span class="ms-auto shrink-0">
					<Check size={16} />
				</span>
			{/if}
		</button>
	{/each}
</details>
