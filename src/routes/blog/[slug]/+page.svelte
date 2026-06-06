<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowLeft } from '@lucide/svelte';

	const siteUrl = 'https://zalwan.github.io';

	let { data } = $props();
	const post = $derived(data.post);

	const formattedDate = $derived(
		new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<svelte:head>
	<title>{post.title} | Zalwan Studio</title>
	<meta name="description" content={post.description} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta property="article:published_time" content={post.date} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
</svelte:head>

<article class="container blog-article">
	<a href={resolve('/blog')} class="button-link button-link--text blog-article__back">
		<ArrowLeft class="blog-article__back-icon" aria-hidden="true" />
		Back to articles
	</a>

	<header class="blog-article__header">
		<time class="date-label" datetime={post.date}>{formattedDate}</time>
		<h1 class="display-lg">{post.title}</h1>
		<p class="copy-strong readable">{post.description}</p>

		<div class="tag-list">
			{#each post.tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</header>

	<div class="hairline-top blog-article__body">
		<div class="prose prose-invert max-w-none">
			{#if post.content}
				{@const Content = post.content}
				<Content />
			{/if}
		</div>
	</div>
</article>

<style>
	.blog-article {
		display: grid;
		gap: var(--space-xl);
		padding-block: var(--space-section);
	}

	.blog-article__back {
		justify-self: start;
	}

	:global(.blog-article__back-icon) {
		width: 1rem;
		height: 1rem;
	}

	.blog-article__header {
		display: grid;
		gap: var(--space-md);
	}

	.blog-article__body {
		width: min(100%, 48rem);
		display: grid;
		gap: var(--space-xl);
		padding-top: var(--space-xl);
	}
</style>
