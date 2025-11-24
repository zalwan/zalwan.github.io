<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { Footer, Header, MainWrapper, ThemeProvider } from '$lib';

	const siteUrl = 'https://zalwan.github.io';
	const siteName = 'Zalwan Studio';
	const defaultDescription =
		'Design and engineering for fast, intentional web experiences by Rizal Suryawan.';

	let { children } = $props();

	const canonical = $derived(siteUrl + page.url.pathname);
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/⚡" />
	<link rel="canonical" href={canonical} />
	<meta name="description" content={defaultDescription} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
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
