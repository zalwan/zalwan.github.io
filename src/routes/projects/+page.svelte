<script lang="ts">
	import { data, ProjectCard, Seo } from '$lib';
	import { breadcrumbJsonLd, projectCollectionJsonLd, webPageJsonLd } from '$lib/data/site';

	const pageTitle = 'Projects';
	const pageDescription =
		'Explore projects by Rizal Suryawan across AI agents, mobile apps, web platforms, developer tools, and sustainability technology.';

	const { projects } = data.resume;
</script>

<Seo
	title={pageTitle}
	description={pageDescription}
	path="/projects"
	jsonLd={[
		webPageJsonLd(pageTitle, pageDescription, '/projects'),
		projectCollectionJsonLd,
		breadcrumbJsonLd([
			{ name: 'Home', path: '/' },
			{ name: 'Projects', path: '/projects' }
		])
	]}
/>

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
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
