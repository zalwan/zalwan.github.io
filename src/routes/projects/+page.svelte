<script lang="ts">
	import { data, ProjectCard } from '$lib';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'Projects | Zalwan Studio';
	const pageDescription =
		'Explore projects by Rizal Suryawan — AI agents, mobile apps, web platforms, and more.';

	const { projects } = data.resume;
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
			Portfolio
		</p>
		<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">Projects</h1>
		<p class="mx-auto max-w-2xl text-lg text-white/60">
			A selection of projects I've built — from AI-powered platforms and mobile apps to web
			applications and developer tools.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
