<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const status = $derived(page.status);
	const error = $derived(page.error);
	const title = $derived(status === 404 ? 'Page not found' : 'Something went wrong');
	const description = $derived(
		status === 404
			? 'The page you are looking for does not exist. Head back home or reach out.'
			: 'An unexpected error occurred. Please try again or contact support.'
	);
	const siteUrl = 'https://zalwan.github.io';
</script>

<svelte:head>
	<title>{status} | {title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={`${status} | ${title}`} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${status} | ${title}`} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
</svelte:head>

<section class="container error-page">
	<p class="eyebrow">Error {status}</p>
	<h1 class="display-lg">{title}</h1>
	{#if error?.message}
		<p class="copy readable">{error.message}</p>
	{/if}
	<div class="error-page__actions">
		<a class="button-link" href={resolve('/')}>Go home</a>
		<a class="button-link button-link--text" href="mailto:hello@zalwan.studio">Contact support</a>
	</div>
</section>

<style>
	.error-page {
		min-height: 32rem;
		display: grid;
		align-content: center;
		justify-items: center;
		gap: var(--space-lg);
		padding-block: var(--space-section);
		text-align: center;
	}

	.error-page__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-md);
	}
</style>
