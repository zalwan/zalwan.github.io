<script lang="ts">
	const siteUrl = 'https://zalwan.github.io';
	import { Hero } from '$lib';
</script>

<svelte:head>
	<title>Zalwan Studio</title>
	<meta name="description" content="Portfolio and studio of Rizal Suryawan, crafting fast, expressive web experiences." />
	<meta property="og:title" content="Zalwan Studio" />
	<meta property="og:description" content="Portfolio and studio of Rizal Suryawan, crafting fast, expressive web experiences." />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Zalwan Studio" />
	<meta name="twitter:description" content="Portfolio and studio of Rizal Suryawan, crafting fast, expressive web experiences." />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
</svelte:head>

<Hero />
