<script lang="ts">
	import { Hero, Seo } from '$lib';
	import { personJsonLd, site, webPageJsonLd, websiteJsonLd } from '$lib/data/site';

	const pageDescription =
		'Portfolio and studio of Rizal Suryawan, crafting fast, expressive web experiences across AI, mobile, and full-stack products.';
</script>

<Seo
	title={site.name}
	description={pageDescription}
	path="/"
	jsonLd={[websiteJsonLd, personJsonLd, webPageJsonLd(site.name, pageDescription, '/')]}
/>

<Hero />
