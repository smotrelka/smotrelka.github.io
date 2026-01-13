<script lang="ts">
	interface Props {
		embedUrl: string | null;
	}

	let { embedUrl }: Props = $props();
</script>

<iframe
	title="Smotrelka"
	style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
	width="100%"
	height="100%"
	src={embedUrl}
	frameborder="0"
	allowfullscreen
	allow="autoplay *; fullscreen *; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	tabindex="-1"
></iframe>
