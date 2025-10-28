<script lang="ts">
	import { Sun, Moon, Search } from '@lucide/svelte';

	import { toggleMode } from 'mode-watcher';

	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	import { Spinner } from '$lib/components/ui/spinner';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="p-4 lg:p-9">
	<div class="max-w-7xl mx-auto gap-4 lg:gap-9 w-full flex flex-wrap sm:flex-nowrap">
		<main class="grow">
			<Drawer.Root>
				<Drawer.Trigger>Open</Drawer.Trigger>
				<Drawer.Content>
					<div class="p-4 lg:p-9 overflow-x-hidden overflow-y-auto">
						<div
							class="w-full max-w-7xl mx-auto flex gap-4 lg:gap-9 flex-wrap sm:flex-nowrap items-start"
						>
							<div class="max-w-52 shrink-0 w-full">
								<div class="relative pt-[150%] w-full">
									<a
										class="absolute inset-0 z-10"
										href="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto"
										aria-label="Title"
										target="_blank"
										rel="nofollow noopener noreferer"
									></a>
									<img
										class="absolute rounded-md inset-0"
										src="https://kinopoiskapiunofficial.tech/images/posters/kp/4365427.jpg?q_auto,f_auto,w_auto,dpr_auto"
										alt=""
									/>
								</div>
							</div>

							<Table.Root>
								<Table.Caption>надёжность данных не гарантирована</Table.Caption>
								<Table.Body>
									<Table.Row>
										<Table.Head>Оригинальное название</Table.Head>
										<Table.Cell>Wednesday</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Head>Русское название</Table.Head>
										<Table.Cell>Уэнздэй</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Head>Год</Table.Head>
										<Table.Cell>2022</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Head>Описание</Table.Head>
										<Table.Cell
											>Для выполнения новой миссии секретный агент должен завести поддельную семью.
											Но он и не подозревает, что его фиктивная жена — наёмная убийца, а удочеренная
											маленькая девочка — телепат, которая хочет, чтобы приёмные родители, несмотря
											ни на что, действительно были вместе.</Table.Cell
										>
									</Table.Row>
								</Table.Body>
							</Table.Root>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Root>

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

		<aside class="h-full max-w-sm w-full shrink-0 space-y-4">
			<header class="w-full items-center flex gap-4">
				<!-- <a class="inline-flex" href="/" aria-label="На главную">
					
				</a> -->

				<InputGroup.Root>
					<InputGroup.Input type="search" placeholder="поиск по названию&mldr;" />
					<InputGroup.Addon>
						<Search />
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

			<Select.Root type="single">
				<Select.Trigger class="w-full">Последние обновления</Select.Trigger>
				<Select.Content>
					<Select.Group>
						<Select.Label>Сортировка</Select.Label>
						<Select.Item value="recent">🔁 Последние обновления</Select.Item>
						<Select.Item value="hot">🔥 Сейчас смотрят</Select.Item>
						<Select.Item value="popular">🏆 Популярное</Select.Item>
					</Select.Group>
					<Select.Group>
						<Select.Label>Мои списки</Select.Label>
						<Select.Item value="1">👁️ Смотрю</Select.Item>
						<Select.Item value="2">⏩ В планах</Select.Item>
						<Select.Item value="3">✅ Просмотрено</Select.Item>
						<Select.Item value="4">🗑️ Брошено</Select.Item>
						<Select.Item value="5">⭐ Избранное</Select.Item>
					</Select.Group>
					<Select.Group>
						<Select.Label>Прочее</Select.Label>
						<Select.Item value="history">⌛ История просмотра</Select.Item>
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</aside>
	</div>
</div>
