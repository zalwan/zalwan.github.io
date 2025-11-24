<script lang="ts">
	export let status: number;
	export let error: Error;

	const title = status === 404 ? 'Page not found' : 'Something went wrong';
	const description =
		status === 404
			? 'The page you are looking for does not exist. Head back home or reach out.'
			: 'An unexpected error occurred. Please try again or contact support.';
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

<section class="flex flex-col items-center justify-center gap-6 py-16 text-center">
	<p class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
		Error {status}
	</p>
	<h1 class="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
	{#if error?.message}
		<p class="max-w-xl text-base text-white/60 md:text-lg">{error.message}</p>
	{/if}
	<div class="flex flex-wrap justify-center gap-3">
		<a class="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-300/30" href="/">
			Go home
		</a>
		<a class="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5" href="mailto:hello@zalwan.studio">
			Contact support
		</a>
	</div>
</section>
