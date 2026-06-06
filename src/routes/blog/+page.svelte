<script lang="ts">
	import { BlogCard } from '$lib';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'Blog | Zalwan Studio';
	const pageDescription =
		'Notes, stories, and insights on AI, mobile development, and engineering career growth.';

	let { data } = $props();
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
</svelte:head>

<div class="py-12">
	<div class="mb-12 text-center">
		<p
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100"
		>
			Blog
		</p>
		<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">Articles</h1>
		<p class="mx-auto max-w-2xl text-lg text-white/60">
			Notes, stories, and insights on AI, mobile development, and engineering career growth.
		</p>
	</div>

	{#if data.posts.length > 0}
		<div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		</div>
	{:else}
		<p class="text-center text-white/50">No articles yet. Check back soon.</p>
	{/if}
</div>
