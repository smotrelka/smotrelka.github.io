<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		stretchFirst?: boolean;
		gap?: string;
		padding?: string;
		colWidth?: string;
		children?: Snippet;
		onRefresh?: (refresh: () => void) => void;
	}

	let {
		stretchFirst = false,
		gap = '1em',
		padding = '0',
		colWidth = 'minmax(min(10em, 100%), 1fr)',
		children,
		onRefresh
	}: Props = $props();

	let grid = $state<HTMLDivElement | null>(null);
	let items = $state<HTMLElement[]>([]);
	let observer = $state<ResizeObserver | null>(null);
	let imageLoadCount = $state(0);

	function layout(): void {
		if (!grid || !items.length) return;

		const style = getComputedStyle(grid);
		const cols = style.gridTemplateColumns.split(' ').length;
		const rowGap = parseFloat(style.gridRowGap) || 0;

		// Reset margins
		items.forEach((item) => (item.style.marginTop = ''));

		// Apply masonry layout if multiple columns
		if (cols > 1) {
			items.slice(cols).forEach((item, i) => {
				const prevBottom = items[i].getBoundingClientRect().bottom;
				const currTop = item.getBoundingClientRect().top;
				item.style.marginTop = `${prevBottom + rowGap - currTop}px`;
			});
		}
	}

	async function updateItems(): Promise<void> {
		await tick();
		if (!grid) return;

		items = Array.from(grid.children).filter(
			(el): el is HTMLElement => el.nodeType === 1 && getComputedStyle(el).gridColumnEnd !== '-1'
		);

		// Setup image load listeners
		items.forEach((item) => {
			const images = item.querySelectorAll('img');
			images.forEach((img) => {
				if (!img.complete) {
					img.addEventListener(
						'load',
						() => {
							imageLoadCount++;
							requestAnimationFrame(layout);
						},
						{ once: true }
					);
				}
			});
		});

		requestAnimationFrame(layout);
	}

	onMount(() => {
		if (!grid) return;

		// Expose manual refresh function
		onRefresh?.(layout);

		updateItems();

		// Watch for changes with MutationObserver
		const mutationObserver = new MutationObserver(() => {
			updateItems();
		});

		mutationObserver.observe(grid, {
			childList: true,
			subtree: false
		});

		// Watch for size changes
		observer = new ResizeObserver(() => {
			requestAnimationFrame(layout);
		});
		observer.observe(grid);

		// Handle window resize
		window.addEventListener('resize', layout);

		return () => {
			mutationObserver.disconnect();
			observer?.disconnect();
			window.removeEventListener('resize', layout);
		};
	});

	// Trigger layout when image count changes
	$effect(() => {
		imageLoadCount;
		requestAnimationFrame(layout);
	});
</script>

<div
	bind:this={grid}
	class="masonry"
	class:stretch-first={stretchFirst}
	style:--gap={gap}
	style:--padding={padding}
	style:--col-width={colWidth}
>
	{@render children?.()}
</div>

<style>
	.masonry {
		display: grid;
		grid-template-columns: repeat(auto-fill, var(--col-width));
		justify-content: center;
		gap: var(--gap);
		padding: var(--padding);
	}

	.masonry > :global(*) {
		align-self: start;
	}

	.masonry.stretch-first > :global(*:first-child) {
		grid-column: 1 / -1;
	}
</style>
