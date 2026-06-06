<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="site-surface">
	<div class="site-shell">
		<Header />
		<main class="site-main">
			{@render children?.()}
		</main>
		<Footer />
	</div>
</div>
