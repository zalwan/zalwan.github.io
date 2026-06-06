<script lang="ts">
	import { BlogCard, SectionHeader } from '$lib';

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

<div class="container section-stack">
	<section class="section">
		<SectionHeader
			eyebrow="Journal"
			title="Articles"
			description="Notes, stories, and insights on AI, mobile development, and engineering career growth."
		/>

		{#if data.posts.length > 0}
			<div class="article-grid">
				{#each data.posts as post (post.slug)}
					<BlogCard {post} />
				{/each}
			</div>
		{:else}
			<p class="copy muted empty-state">No articles yet. Check back soon.</p>
		{/if}
	</section>
</div>

<style>
	.article-grid {
		display: grid;
		gap: var(--space-lg);
	}

	.empty-state {
		text-align: center;
	}

	@media (min-width: 48rem) {
		.article-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.article-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
