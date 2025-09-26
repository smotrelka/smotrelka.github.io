<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Смотрелка</title>

	<link rel="manifest" href="/manifest.webmanifest" />
	<meta name="theme-color" content="#6e11b0" />
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="192x192" href="/192.png" />
	<link rel="icon" type="image/png" sizes="512x512" href="/512.png" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/icon.png" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-title" content="Смотрелка" />
	<meta name="msapplication-TileColor" content="#6e11b0" />
</svelte:head>

{@render children?.()}
