<script lang="ts">
	import './layout.css';
	import { Footer, Header, MainWrapper, ThemeProvider } from '$lib';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/⚡" />
</svelte:head>

<ThemeProvider>
	<MainWrapper>
		<div class="grid min-h-screen grid-rows-[auto_1fr_auto] gap-10">
			<Header />
			<main>{@render children()}</main>
			<Footer />
		</div>
	</MainWrapper>
</ThemeProvider>
