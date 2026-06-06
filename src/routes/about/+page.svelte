<script lang="ts">
	import { data, ExperienceCard, SectionHeader, SkillCard } from '$lib';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'About | Zalwan Studio';
	const pageDescription =
		'Learn about Rizal Suryawan, a software engineer building scalable web and mobile applications.';

	const { summary, experience, skills, languages } = data.resume;
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
		<SectionHeader eyebrow="About" title="Rizal Suryawan" description={summary} />
	</section>

	<section class="section">
		<SectionHeader eyebrow="Career" title="Experience" tag="h2" />
		<div class="list-stack">
			{#each experience as exp (exp.id)}
				<ExperienceCard experience={exp} />
			{/each}
		</div>
	</section>

	<section class="section">
		<SectionHeader eyebrow="Capabilities" title="Skills" tag="h2" />
		<div class="card-grid card-grid--three">
			{#each skills as skill (skill.id)}
				<SkillCard {skill} />
			{/each}
		</div>
	</section>

	<section class="section">
		<SectionHeader eyebrow="Languages" title="Languages" tag="h2" />
		<div class="card-grid card-grid--two">
			{#each languages as lang (lang.id)}
				<article class="surface-card language-card">
					<p class="display-sm">{lang.language}</p>
					<p class="date-label">{lang.fluency}</p>
				</article>
			{/each}
		</div>
	</section>
</div>

<style>
	.list-stack {
		width: min(100%, 52rem);
		margin-inline: auto;
		display: grid;
		gap: var(--space-lg);
	}

	.card-grid {
		display: grid;
		gap: var(--space-lg);
	}

	.language-card {
		display: grid;
		gap: var(--space-xs);
		padding: var(--space-lg);
	}

	@media (min-width: 48rem) {
		.card-grid--two {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.card-grid--three {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
