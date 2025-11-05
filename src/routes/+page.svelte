<script lang="ts">
	import {
		Sun,
		Moon,
		Search,
		House,
		PanelsTopLeft,
		Box,
		Clock,
		Sticker,
		Palette,
		Calendar
	} from '@lucide/svelte';

	import { toggleMode } from 'mode-watcher';

	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	// import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	import { Spinner } from '$lib/components/ui/spinner';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	import { ToggleGroup } from 'bits-ui';

	import { ScrollArea, Scrollbar } from '$lib/components/ui/scroll-area';
	// import { Tabs, Tabs.Content, TabsList, Tabs.Trigger } from '$lib/components/ui/tabs';

	import SearchCommand from '$lib/components/SearchCommand.svelte';

	let activeProvider: string | undefined = $state();

	let searchDialogOpen = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
			e.preventDefault();
			searchDialogOpen = true;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<div class="p-4 lg:p-9">
	<div class="max-w-5xl space-y-4 mx-auto w-full">
		<header class="w-full items-center flex gap-4">
			<!-- <a class="inline-flex" href="/" aria-label="На главную">
					
				</a> -->

			<SearchCommand />

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

		<!-- <main class="relative pt-[56.25%] w-full overflow-hidden border bg-muted/50 rounded-md">
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
		</main> -->

		<div class="w-full flex gap-4 flex-wrap sm:flex-nowrap items-start">
			<div class="bg-background overflow-hidden rounded-md border">
				<div class="relative w-full overflow-auto">
					<table class="w-full text-xs sm:text-sm">
						<tbody class="[&_tr:last-child]:border-0">
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
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
									>Доступные источники</td
								>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">
									<ToggleGroup.Root
										bind:value={activeProvider}
										type="single"
										class="flex items-center gap-1"
									>
										<ToggleGroup.Item
											aria-label="toggle bold"
											value="bold"
											class="rounded-full px-3 py-1 bg-background-alt hover:bg-muted active:bg-dark-10 data-[state=on]:bg-ring data-[state=off]:text-foreground-alt data-[state=on]:text-foreground active:data-[state=on]:bg-dark-10 inline-flex  items-center justify-center transition-all active:scale-[0.98]"
										>
											Kodik
										</ToggleGroup.Item>
										<ToggleGroup.Item
											aria-label="toggle italic"
											value="italic"
											class="rounded-full px-3 py-1 bg-background-alt hover:bg-muted active:bg-dark-10 data-[state=on]:bg-ring data-[state=off]:text-foreground-alt data-[state=on]:text-foreground active:data-[state=on]:bg-dark-10 inline-flex  items-center justify-center transition-all active:scale-[0.98]"
										>
											Turbo
										</ToggleGroup.Item>
										<ToggleGroup.Item
											aria-label="toggle strikethrough"
											value="strikethrough"
											class="rounded-full px-3 py-1 bg-background-alt hover:bg-muted active:bg-dark-10 data-[state=on]:bg-ring data-[state=off]:text-foreground-alt data-[state=on]:text-foreground active:data-[state=on]:bg-dark-10 inline-flex  items-center justify-center transition-all active:scale-[0.98]"
										>
											Lumex
										</ToggleGroup.Item>
									</ToggleGroup.Root>
								</td>
							</tr>
							<tr
								class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
							>
								<td colspan="2">
									<div
										style="position: relative; width: 100%; padding-top: 56.25%; background: #000;"
									>
										<iframe
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
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
									>Оригинальное название</td
								>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">Wednesday</td>
							</tr>
							<tr
								class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
							>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
									>Русское название</td
								>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">Уэнздэй</td>
							</tr>
							<tr
								class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
							>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
									>Год</td
								>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2">2022</td>
							</tr>
							<tr
								class="data-[state=selected]:bg-muted border-b transition-colors *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
							>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 bg-muted/50 py-2 font-medium"
									>Описание</td
								>
								<td class="p-3 align-top [&:has([role=checkbox])]:pr-0 py-2"
									>Для выполнения новой миссии секретный агент должен завести поддельную семью. Но
									он и не подозревает, что его фиктивная жена — наёмная убийца, а удочеренная
									маленькая девочка — телепат, которая хочет, чтобы приёмные родители, несмотря ни
									на что, действительно были вместе.</td
								>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
