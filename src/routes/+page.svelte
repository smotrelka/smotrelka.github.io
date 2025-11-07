<script lang="ts">
	import {
		Sun,
		Moon,
		Search,
		Play,
		Flame,
		Trophy,
		Settings,
		Plus,
		Ellipsis,
		UserCircle,
		Podcast,
		ChevronRight,
		Check
	} from '@lucide/svelte';

	import { toggleMode } from 'mode-watcher';

	// import * as InputGroup from '$lib/components/ui/input-group/index.js';
	// import * as Card from '$lib/components/ui/card/index.js';
	// import * as Select from '$lib/components/ui/select/index.js';
	// import * as Drawer from '$lib/components/ui/drawer/index.js';
	// import * as Table from '$lib/components/ui/table/index.js';

	// import { Spinner } from '$lib/components/ui/spinner';
	// import { Button } from '$lib/components/ui/button';
	// import { Separator } from '$lib/components/ui/separator';

	import { ToggleGroup, Tabs, Button, DropdownMenu } from 'bits-ui';

	import { ScrollArea, Scrollbar } from '$lib/components/ui/scroll-area';
	// import { Tabs, Tabs.Content, TabsList, Tabs.Trigger } from '$lib/components/ui/tabs';

	import SearchCommand from '$lib/components/SearchCommand.svelte';

	let activeProvider: string | undefined = $state();

	let apiUrl = $state('api.smotrelka.github.io');
	let activeTab = $state('watch');

	let searchDialogOpen = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
			e.preventDefault();
			searchDialogOpen = true;
		}
	}

	$effect(() => {
		if (activeTab === 'search') {
			setTimeout(() => {
				const content = document.querySelector(
					`[role="tabpanel"][data-value="search"][data-state="active"]`
				);
				const firstInput = content?.querySelector('input, textarea, select') as HTMLElement;
				firstInput?.focus();
			});
		}
	});
</script>

<svelte:document onkeydown={handleKeydown} />

<div class="p-4 lg:p-9">
	<div class="max-w-5xl space-y-4 mx-auto w-full">
		<div class="">
			<Tabs.Root class="space-y-4" bind:value={activeTab}>
				<ScrollArea>
					<div class="flex gap-3">
						<Tabs.List
							class="inline-flex w-fit items-center justify-center text-zinc-700 dark:text-zinc-400 rounded-lg p-1 gap-1 bg-zinc-100 dark:bg-zinc-900"
						>
							<Tabs.Trigger
								value="watch"
								class="data-[state=inactive]:hover:text-zinc-950 data-[state=inactive]:dark:hover:text-zinc-50 focus-visible:border-ring gap-1.5 focus-visible:ring-ring/50 aria-selected:text-foreground inline-flex items-center justify-center px-4 py-2 text-sm font-medium whitespace-nowrap outline-hidden transition-all focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-950 rounded-md data-[state=active]:shadow-none"
							>
								<Play class="opacity-70" size={16} aria-hidden="true" />
								Просмотр
							</Tabs.Trigger>
							<Tabs.Trigger
								value="search"
								class="data-[state=inactive]:hover:text-zinc-950 data-[state=inactive]:dark:hover:text-zinc-50 focus-visible:border-ring gap-1.5 focus-visible:ring-ring/50 aria-selected:text-foreground inline-flex items-center justify-center px-4 py-2 text-sm font-medium whitespace-nowrap outline-hidden transition-all focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-950 rounded-md data-[state=active]:shadow-none"
							>
								<Search class="opacity-70" size={16} aria-hidden="true" />
								Поиск
							</Tabs.Trigger>
							<Tabs.Trigger
								value="popular"
								class="data-[state=inactive]:hover:text-zinc-950 data-[state=inactive]:dark:hover:text-zinc-50 focus-visible:border-ring gap-1.5 focus-visible:ring-ring/50 aria-selected:text-foreground inline-flex items-center justify-center px-4 py-2 text-sm font-medium whitespace-nowrap outline-hidden transition-all focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-950 rounded-md data-[state=active]:shadow-none"
							>
								<Trophy class="opacity-70" size={16} aria-hidden="true" />
								Популярное
							</Tabs.Trigger>
							<Tabs.Trigger
								value="hot"
								class="data-[state=inactive]:hover:text-zinc-950 data-[state=inactive]:dark:hover:text-zinc-50 focus-visible:border-ring gap-1.5 focus-visible:ring-ring/50 aria-selected:text-foreground inline-flex items-center justify-center px-4 py-2 text-sm font-medium whitespace-nowrap outline-hidden transition-all focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-950 rounded-md data-[state=active]:shadow-none"
							>
								<Flame class="opacity-70" size={16} aria-hidden="true" />
								Сейчас смотрят
							</Tabs.Trigger>
							<Tabs.Trigger
								value="settings"
								class="data-[state=inactive]:hover:text-zinc-950 data-[state=inactive]:dark:hover:text-zinc-50 focus-visible:border-ring gap-1.5 focus-visible:ring-ring/50 aria-selected:text-foreground inline-flex items-center justify-center px-4 py-2 text-sm font-medium whitespace-nowrap outline-hidden transition-all focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-950 rounded-md data-[state=active]:shadow-none"
							>
								<Settings class="opacity-70" size={16} aria-hidden="true" />
								Настройки
							</Tabs.Trigger>
						</Tabs.List>

						<!-- <Button onclick={toggleMode}>
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button> -->

						<DropdownMenu.Root>
							<DropdownMenu.Trigger
								class="border-input text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 select-none items-center justify-center rounded-full border text-sm font-medium active:scale-[0.98]"
							>
								<Ellipsis class="text-foreground h-6 w-6" />
							</DropdownMenu.Trigger>
							<DropdownMenu.Portal>
								<DropdownMenu.Content
									class="border-muted bg-background shadow-popover outline-hidden focus-visible:outline-hidden w-[229px] rounded-xl border px-1 py-1.5"
									sideOffset={8}
								>
									<DropdownMenu.Item
										class="rounded-button data-highlighted:bg-muted ring-0! ring-transparent! flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium focus-visible:outline-none"
									>
										<div class="flex items-center">
											<UserCircle class="text-foreground-alt mr-2 size-5" />
											Profile
										</div>
										<div class="ml-auto flex items-center gap-px">
											<kbd
												class="rounded-button border-dark-10 bg-background-alt text-muted-foreground shadow-kbd inline-flex size-5 items-center justify-center border text-xs"
											>
												⌘
											</kbd>
											<kbd
												class="rounded-button border-dark-10 bg-background-alt text-muted-foreground shadow-kbd inline-flex size-5 items-center justify-center border text-[10px]"
											>
												P
											</kbd>
										</div>
									</DropdownMenu.Item>
									<DropdownMenu.Item
										class="rounded-button data-highlighted:bg-muted ring-0! ring-transparent! flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium focus-visible:outline-none"
									>
										<div class="flex items-center">
											<Settings class="text-foreground-alt mr-2 size-5" />
											Settings
										</div>
										<div class="ml-auto flex items-center gap-px">
											<kbd
												class="rounded-button border-dark-10 bg-background-alt text-muted-foreground shadow-kbd inline-flex size-5 items-center justify-center border text-xs"
											>
												⌘
											</kbd>
											<kbd
												class="rounded-button border-dark-10 bg-background-alt text-muted-foreground shadow-kbd inline-flex size-5 items-center justify-center border text-[10px]"
											>
												S
											</kbd>
										</div>
									</DropdownMenu.Item>
									<DropdownMenu.Sub>
										<DropdownMenu.SubTrigger
											class="rounded-button data-highlighted:bg-muted data-[state=open]:bg-muted ring-0! ring-transparent! flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium focus-visible:outline-none"
										>
											<div class="flex items-center">
												<Podcast class="text-foreground-alt mr-2 size-5" />
												Источник
											</div>
											<div class="ml-auto flex items-center gap-px">
												<ChevronRight class="text-foreground-alt size-5" />
											</div>
										</DropdownMenu.SubTrigger>
										<DropdownMenu.Portal>
											<DropdownMenu.SubContent
												class="border-muted bg-background shadow-popover ring-0! ring-transparent! w-[209px] rounded-xl border px-1 py-1.5 outline-none"
												sideOffset={10}
											>
												<DropdownMenu.RadioGroup bind:value={apiUrl}>
													<DropdownMenu.RadioItem
														value="huntabyte"
														class="rounded-button data-highlighted:bg-muted ring-0! ring-transparent! flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium focus-visible:outline-none"
													>
														{#snippet children({ checked })}
															api.smotrelka.github.io
															{#if checked}
																<Check class="ml-auto size-4" />
															{/if}
														{/snippet}
													</DropdownMenu.RadioItem>
												</DropdownMenu.RadioGroup>
											</DropdownMenu.SubContent>
										</DropdownMenu.Portal>
									</DropdownMenu.Sub>
								</DropdownMenu.Content>
							</DropdownMenu.Portal>
						</DropdownMenu.Root>
					</div>
					<Scrollbar orientation="horizontal" />
				</ScrollArea>
				<Tabs.Content value="watch">
					<div class="w-full flex gap-4 flex-wrap sm:flex-nowrap items-start">
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
				</Tabs.Content>
				<Tabs.Content value="search" tabindex={1}>
					<SearchCommand />
				</Tabs.Content>
				<Tabs.Content value="popular">
					<p class="text-muted-foreground p-4 pt-1 text-center text-xs">
						*здесь будет популярные тайтлы*
					</p>
				</Tabs.Content>
				<Tabs.Content value="hot">
					<p class="text-muted-foreground p-4 pt-1 text-center text-xs">
						*здесь будут горячие тайтлы*
					</p>
				</Tabs.Content>
			</Tabs.Root>
		</div>

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
	</div>
</div>
