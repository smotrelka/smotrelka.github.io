<script lang="ts">
</script>

<div class="root">
	<header>
		<a href="/" aria-label="На главную">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5.76 0a3.6 3.6 0 0 1 3.38 2.3 2.86 2.86 0 0 1 1.74 5.4l.01.14a2.86 2.86 0 0 1-3.82 2.69 2.84 2.84 0 0 1-4.78-2.1c0-.91.42-1.71 1.07-2.24a3.5 3.5 0 0 1-1.22-2.65A3.58 3.58 0 0 1 5.76 0ZM8.4 11.75a2.91 2.91 0 0 1 2.82 3.66 2.89 2.89 0 0 1-2.15 5.34 3.54 3.54 0 1 1-5.55-3.2 2.98 2.98 0 0 1 1.8-5.4c.44 0 .85.09 1.22.25.5-.4 1.15-.65 1.86-.65Zm7.01-6.11a2.39 2.39 0 0 1 2.42 2.35c0 .24-.04.47-.1.68a3.8 3.8 0 0 1 1.62-.36 3.62 3.62 0 0 1 3.69 3.55 3.62 3.62 0 0 1-4.36 3.48l.02.31c0 1.7-1.25 3.07-2.78 3.07-1.54 0-2.79-1.37-2.79-3.07 0-.77.26-1.47.68-2l-.32.01A2.71 2.71 0 0 1 10.75 11a2.7 2.7 0 0 1 2.27-2.63 2.39 2.39 0 0 1 2.39-2.72Zm.28 6.95h.05l-.01-.05-.04.05Z"
					fill="currentColor"
				/></svg
			>
		</a>

		<div class="search-wrapper">
			<input class="search" type="text" placeholder="Начните вводить название..." />
		</div>
	</header>

	<main>
		<!-- <div class="menu">
			<button type="button">Мне повезёт</button>
			<button type="button">Поиск аниме по кадру</button>
		</div> -->
	</main>
</div>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		font-family: system-ui, Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	:global(html) {
		font-size: 16px;
	}

	:global(body) {
		overflow: hidden;
	}

	.root {
		padding: 1rem;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	main {
		overflow: hidden auto;
		width: 100%;
	}

	.menu {
		flex-wrap: wrap;
		gap: 1rem;
		display: flex;
	}

	input {
		width: 100%;
		padding: 0.75rem;
		border-radius: 9999px;
	}
</style>
