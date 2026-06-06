<script lang="ts">
	import { absoluteUrl, site } from '$lib/data/site';

	type JsonLd = Record<string, unknown>;

	type Props = {
		title?: string;
		description?: string;
		path?: string;
		type?: 'website' | 'article' | 'profile';
		image?: string;
		imageAlt?: string;
		publishedTime?: string;
		modifiedTime?: string;
		tags?: string[];
		noindex?: boolean;
		jsonLd?: JsonLd | JsonLd[];
	};

	let {
		title = site.name,
		description = site.description,
		path = '/',
		type = 'website',
		image = site.image,
		imageAlt = site.imageAlt,
		publishedTime,
		modifiedTime,
		tags = [],
		noindex = false,
		jsonLd = []
	}: Props = $props();

	const fullTitle = $derived(title === site.name ? site.name : `${title} | ${site.name}`);
	const canonical = $derived(absoluteUrl(path));
	const imageUrl = $derived(absoluteUrl(image));
	const robots = $derived(noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
	const keywords = $derived([...site.keywords, ...tags].join(', '));
	const jsonLdItems = $derived(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
	const jsonLdScripts = $derived(
		jsonLdItems.map((item) => {
			const serializedJson = JSON.stringify(item).replace(/</g, '\\u003c');
			return `<script type="application/ld+json">${serializedJson}</` + 'script>';
		})
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<link rel="canonical" href={canonical} />

	<meta name="description" content={description} />
	<meta name="author" content={site.author} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content={robots} />
	<meta name="theme-color" content="#020617" />
	<meta name="color-scheme" content="dark" />
	<meta name="format-detection" content="telephone=no" />

	<meta property="og:locale" content={site.locale} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="800" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}
	{#each tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}

	{#each jsonLdScripts as jsonLdScript (jsonLdScript)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html jsonLdScript}
	{/each}
</svelte:head>
