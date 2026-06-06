<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	import type { Project } from '$lib/data/resume';

	let { project }: { project: Project } = $props();
</script>

<article class="surface-card project-card">
	<div class="project-card__top">
		<p class="date-label">{project.period}</p>
		{#if project.website}
			<a
				href={project.website}
				target="_blank"
				rel="external noreferrer"
				class="button-link button-link--icon"
				aria-label="Visit {project.name}"
			>
				<ExternalLink class="project-card__icon" aria-hidden="true" />
			</a>
		{/if}
	</div>

	<h3 class="display-sm">{project.name}</h3>
	<p class="copy-small">{project.description}</p>
</article>

<style>
	.project-card {
		min-height: 100%;
		display: grid;
		align-content: start;
		gap: var(--space-md);
		padding: var(--space-lg);
	}

	.project-card__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
	}

	:global(.project-card__icon) {
		width: 1rem;
		height: 1rem;
	}
</style>
