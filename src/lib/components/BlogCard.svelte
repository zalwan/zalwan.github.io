<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight } from '@lucide/svelte';
	import type { BlogPost } from '$lib/data/blog';

	let { post }: { post: BlogPost } = $props();

	const formattedDate = $derived(
		new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<a href={resolve('/blog/[slug]', { slug: post.slug })} class="surface-card article-card">
	<div class="article-card__meta">
		<time class="date-label" datetime={post.date}>{formattedDate}</time>
	</div>

	<h2 class="display-sm article-card__title">{post.title}</h2>
	<p class="copy-small article-card__copy">{post.description}</p>

	<div class="article-card__footer">
		<div class="tag-list">
			{#each post.tags.slice(0, 3) as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
		<ArrowUpRight class="article-card__icon" aria-hidden="true" />
	</div>
</a>

<style>
	.article-card {
		min-height: 100%;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		gap: var(--space-md);
		padding: var(--space-lg);
		text-decoration: none;
	}

	.article-card__meta {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.article-card__title {
		transition: opacity var(--transition-fast);
	}

	.article-card:hover .article-card__title {
		opacity: 0.78;
	}

	.article-card__copy {
		color: var(--color-body);
	}

	.article-card__footer {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-md);
		padding-top: var(--space-md);
		border-top: 1px solid var(--color-hairline);
	}

	:global(.article-card__icon) {
		width: 1rem;
		height: 1rem;
		flex: 0 0 auto;
		color: var(--color-muted);
		transition:
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.article-card:hover :global(.article-card__icon) {
		color: var(--color-primary);
		transform: translate(1px, -1px);
	}
</style>
