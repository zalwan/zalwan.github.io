<script lang="ts">
	import type { Skill } from '$lib/data/resume';

	let { skill }: { skill: Skill } = $props();
</script>

<article class="surface-card skill-card">
	<h3 class="display-sm">{skill.name}</h3>
	<div class="tag-list">
		{#each skill.keywords as keyword (keyword)}
			<span class="tag">{keyword}</span>
		{/each}
	</div>
</article>

<style>
	.skill-card {
		display: grid;
		gap: var(--space-lg);
		padding: var(--space-lg);
	}
</style>
