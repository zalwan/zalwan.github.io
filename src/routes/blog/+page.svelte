<script lang="ts">
	import { BlogCard, Seo } from '$lib';
	import { absoluteUrl, breadcrumbJsonLd, webPageJsonLd } from '$lib/data/site';

	const pageTitle = 'Articles';
	const pageDescription =
		'Articles by Rizal Suryawan on AI agents, mobile development, frontend architecture, and engineering career growth.';

	let { data } = $props();

	const blogJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Zalwan Studio Articles',
		description: pageDescription,
		url: absoluteUrl('/blog'),
		blogPost: data.posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.description,
			datePublished: post.date,
			url: absoluteUrl(`/blog/${post.slug}`)
		}))
	});
</script>

<Seo
	title={pageTitle}
	description={pageDescription}
	path="/blog"
	tags={['AI', 'Mobile Development', 'Engineering Leadership']}
	jsonLd={[
		webPageJsonLd(pageTitle, pageDescription, '/blog'),
		blogJsonLd,
		breadcrumbJsonLd([
			{ name: 'Home', path: '/' },
			{ name: 'Articles', path: '/blog' }
		])
	]}
/>

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
