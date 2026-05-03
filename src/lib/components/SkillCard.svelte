<script lang="ts">
	import type { Skill } from '$lib/data/resume';

	let { skill }: { skill: Skill } = $props();
</script>

<div class="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/30 hover:bg-white/[0.07]">
	<h3 class="mb-4 text-base font-semibold text-white">{skill.name}</h3>
	<div class="flex flex-wrap gap-2">
		{#each skill.keywords as keyword}
			<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition hover:border-amber-400/30 hover:text-amber-300">
				{keyword}
			</span>
		{/each}
	</div>
</div>
