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

	import { ScrollArea, Scrollbar } from '$lib/components/ui/scroll-area';
	// import { Tabs, Tabs.Content, TabsList, Tabs.Trigger } from '$lib/components/ui/tabs';

	import { Tabs, Command, Dialog } from 'bits-ui';

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

			<Dialog.Root bind:open={searchDialogOpen}>
				<Dialog.Trigger
					class="border-input hover:bg-accent/40 hover:text-accent-foreground dark:hover:bg-input/50 bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 inline-flex rounded-lg border px-3 py-2 text-sm focus-visible:ring-[3px] focus-visible:outline-hidden"
				>
					<span class="flex grow items-center">
						<Search class="text-muted-foreground/80 me-2" size={16} aria-hidden="true" />
						<span class="text-muted-foreground/70 font-normal">найти&mldr;</span>
					</span>

					<kbd
						class="border-border bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex items-center rounded border px-2 font-[inherit] font-medium"
					>
						/
					</kbd>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay
						class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
					/>
					<Dialog.Content
						class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] sm:max-w-lg md:w-full"
					>
						<Dialog.Title class="sr-only">Command Menu</Dialog.Title>
						<Dialog.Description class="sr-only">
							This is the command menu. Use the arrow keys to navigate and press ⌘K to open the
							search bar.
						</Dialog.Description>
						<Command.Root
							class="divide-border border-muted bg-background flex h-full w-full flex-col divide-y self-start overflow-hidden rounded-xl border"
						>
							<Command.Input
								class="focus-override bg-background placeholder:text-foreground-alt/50 focus:outline-hidden inline-flex truncate px-4 py-3 text-sm transition-colors focus:ring-0"
								placeholder="Search for something..."
							/>
							<Command.List class="max-h-[280px] overflow-y-auto overflow-x-hidden px-2 pb-2">
								<Command.Viewport>
									<Command.Empty
										class="text-muted-foreground flex w-full items-center justify-center pb-6 pt-8 text-sm"
									>
										No results found.
									</Command.Empty>
									<Command.Group>
										<Command.GroupHeading class="text-muted-foreground px-3 pb-2 pt-4 text-xs">
											Suggestions
										</Command.GroupHeading>
										<Command.GroupItems>
											<Command.Item
												class="rounded-button data-selected:bg-muted outline-hidden flex h-10 cursor-pointer select-none items-center gap-2 px-3 py-2.5 text-sm capitalize"
												keywords={['getting started', 'tutorial']}
											>
												<Sticker class="size-4" />
												Introduction
											</Command.Item>
											<Command.Item
												class="rounded-button data-selected:bg-muted outline-hidden flex h-10 cursor-pointer select-none items-center gap-2 px-3 py-2.5 text-sm capitalize"
												keywords={['child', 'custom element', 'snippets']}
											>
												<Sun class="size-4 " />
												Delegation
											</Command.Item>
											<Command.Item
												class="rounded-button data-selected:bg-muted outline-hidden flex h-10 cursor-pointer select-none items-center gap-2 px-3 py-2.5 text-sm capitalize"
												keywords={['css', 'theme', 'colors', 'fonts', 'tailwind']}
											>
												<Palette class="size-4" />
												Styling
											</Command.Item>
										</Command.GroupItems>
									</Command.Group>
									<Command.Separator />
									<Command.Group>
										<Command.GroupHeading class="text-muted-foreground px-3 pb-2 pt-4 text-xs">
											Components
										</Command.GroupHeading>
										<Command.GroupItems>
											<Command.Item
												class="rounded-button data-selected:bg-muted outline-hidden flex h-10 cursor-pointer select-none items-center gap-2 px-3 py-2.5 text-sm capitalize"
												keywords={['dates', 'times']}
											>
												<Calendar class="size-4" />
												Calendar
											</Command.Item>
										</Command.GroupItems>
									</Command.Group>
								</Command.Viewport>
							</Command.List>
						</Command.Root>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>

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

		<main>
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
		</main>

		<div class="w-full flex gap-4 flex-wrap sm:flex-nowrap items-start">
			<div class="bg-background overflow-hidden rounded-md border">
				<div class="relative w-full overflow-auto">
					<table class="w-full text-sm">
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
