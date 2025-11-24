<script lang="ts">
	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'About | Zalwan Studio';
	const pageDescription = 'Learn about Rizal Suryawan, the studio ethos, and how we build.';
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

<section class="flex flex-col items-center justify-center gap-4 py-24 text-center">
	<p class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
		About
	</p>
	<h1 class="text-4xl font-semibold text-white md:text-5xl">Learn more soon</h1>
	<p class="max-w-xl text-base text-white/60 md:text-lg">I’m writing a short story about the studio and process. Stay tuned.</p>
</section>
