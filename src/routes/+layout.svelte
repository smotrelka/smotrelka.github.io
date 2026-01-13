<script lang="ts">
	import '../app.css';

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
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-title" content="Смотрелка" />
	<meta name="msapplication-TileColor" content="#6e11b0" />

	<script type="text/javascript">
		(function (m, e, t, r, i, k, a) {
			m[i] =
				m[i] ||
				function () {
					(m[i].a = m[i].a || []).push(arguments);
				};
			m[i].l = 1 * new Date();
			for (var j = 0; j < document.scripts.length; j++) {
				if (document.scripts[j].src === r) {
					return;
				}
			}
			((k = e.createElement(t)),
				(a = e.getElementsByTagName(t)[0]),
				(k.async = 1),
				(k.src = r),
				a.parentNode.insertBefore(k, a));
		})(window, document, 'script', 'https://mc.webvisor.org/metrika/tag_ww.js', 'ym');

		ym(101945774, 'init', { clickmap: true, accurateTrackBounce: true, trackLinks: true });
	</script>
	<noscript
		><div>
			<img
				src="https://mc.yandex.ru/watch/101945774"
				style="position:absolute; left:-9999px;"
				alt=""
			/>
		</div></noscript
	>
</svelte:head>

{@render children?.()}
