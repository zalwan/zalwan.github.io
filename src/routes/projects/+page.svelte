<script lang="ts">
	import { data, ProjectCard, SectionHeader } from '$lib';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'Projects | Zalwan Studio';
	const pageDescription =
		'Explore projects by Rizal Suryawan across AI agents, mobile apps, web platforms, and developer tools.';

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

<div class="container section-stack">
	<section class="section">
		<SectionHeader
			eyebrow="Portfolio"
			title="Projects"
			description="A selection of systems, products, and tools built across AI, mobile, web applications, and developer platforms."
		/>
		<div class="project-grid">
			{#each projects as project (project.id)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</div>

<style>
	.project-grid {
		display: grid;
		gap: var(--space-lg);
	}

	@media (min-width: 48rem) {
		.project-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 72rem) {
		.project-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
