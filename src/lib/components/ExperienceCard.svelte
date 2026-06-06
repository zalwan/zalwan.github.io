<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	import type { Experience } from '$lib/data/resume';

	let { experience }: { experience: Experience } = $props();

	const hasMultipleRoles = $derived(experience.roles.length > 1);
</script>

<article class="surface-card experience-card">
	<div class="experience-card__header">
		<div>
			<h3 class="display-sm">{experience.company}</h3>
			{#if !hasMultipleRoles && experience.position}
				<p class="caption">{experience.position}</p>
			{/if}
			<p class="date-label">{experience.location}</p>
		</div>
		{#if experience.website}
			<a
				href={experience.website}
				target="_blank"
				rel="external noreferrer"
				class="button-link button-link--icon"
				aria-label="Visit {experience.company} website"
			>
				<ExternalLink class="experience-card__icon" aria-hidden="true" />
			</a>
		{/if}
	</div>

	{#if hasMultipleRoles}
		<div class="experience-card__timeline">
			{#each experience.roles as role (role.id)}
				<section class="experience-card__role">
					<p class="title-sm">{role.position}</p>
					<p class="date-label">{role.period}</p>
					<p class="copy-small">{role.description}</p>
				</section>
			{/each}
		</div>
	{:else}
		<p class="date-label">{experience.period}</p>
		{#if experience.roles.length === 1}
			<p class="copy-small">{experience.roles[0].description}</p>
		{:else if experience.description}
			<p class="copy-small">{experience.description}</p>
		{/if}
	{/if}
</article>

<style>
	.experience-card {
		display: grid;
		gap: var(--space-lg);
		padding: var(--space-lg);
	}

	.experience-card__header {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: var(--space-lg);
	}

	:global(.experience-card__icon) {
		width: 1rem;
		height: 1rem;
	}

	.experience-card__timeline {
		display: grid;
		border-left: 1px solid var(--color-hairline);
	}

	.experience-card__role {
		position: relative;
		display: grid;
		gap: var(--space-xs);
		padding: 0 0 var(--space-lg) var(--space-lg);
	}

	.experience-card__role:last-child {
		padding-bottom: 0;
	}

	.experience-card__role::before {
		position: absolute;
		top: 0.45rem;
		left: -0.28125rem;
		width: 0.5rem;
		height: 0.5rem;
		border: 1px solid var(--color-primary);
		border-radius: var(--radius-full);
		background: var(--color-canvas);
		content: '';
	}
</style>
