<script lang="ts">
	import { Sun, Moon, Search } from '@lucide/svelte';

	import { toggleMode } from 'mode-watcher';

	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	import { Spinner } from '$lib/components/ui/spinner';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="min-h-dvh w-full overflow-x-hidden p-4 lg:p-9 max-w-3xl mx-auto space-y-4">
	<header class="w-full items-center flex gap-4 lg:gap-6">
		<!-- <a class="inline-flex" href="/" aria-label="На главную">
			
		</a> -->

		<InputGroup.Root>
			<InputGroup.Input type="search" placeholder="поиск по названию&mldr;" />
			<InputGroup.Addon>
				<Search />
			</InputGroup.Addon>
			<InputGroup.Addon align="inline-end">
				<Spinner />
			</InputGroup.Addon>
			<!-- <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon> -->
		</InputGroup.Root>

		<Button onclick={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</header>

	<main class="space-y-6">
		<Card.Root class="p-0">
			<Card.Content class="p-0 overflow-hidden">
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
			</Card.Content>
		</Card.Root>

		<Tabs.Root value="recent">
			<Tabs.List class="mx-auto">
				<Tabs.Trigger value="recent">Последнее</Tabs.Trigger>
				<Tabs.Trigger value="popular">Популярное</Tabs.Trigger>
				<Separator class="mx-2" orientation="vertical" />
				<Tabs.Trigger value="history">История</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content class="animate-in fade-in duration-300" value="recent">
				<div
					class="grid-cols-[repeat(auto-fill,minmax(90px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid gap-4"
				>
					{#each [1, 2, 3, 4, 5] as i}
						<article class="space-y-2 text-sm">
							<div class="relative pt-[150%] w-full">
								<a class="absolute inset-0 z-10" href="/" aria-label="Title"></a>
								<img
									class="absolute rounded-md inset-0"
									src="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto"
									alt=""
								/>
							</div>

							<div class="space-y-1">
								<p class="font-bold line-clamp-2">Уэнздэй</p>
								<p class="opacity-80 text-ellipsis">2022, сериал</p>
							</div>
						</article>
					{/each}
				</div>
			</Tabs.Content>
			<Tabs.Content class="animate-in fade-in duration-300" value="popular">2</Tabs.Content>
			<Tabs.Content class="animate-in fade-in duration-300" value="history">3</Tabs.Content>
		</Tabs.Root>
	</main>
</div>
