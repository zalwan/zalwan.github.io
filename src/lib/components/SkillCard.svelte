<script lang="ts">
	import type { Skill } from '$lib/data/resume';

	let { skill }: { skill: Skill } = $props();
</script>

<div
	class="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-400/30 hover:bg-white/[0.07] sm:p-5 lg:p-6"
>
	<h3 class="mb-3 text-base font-semibold text-white sm:mb-4">{skill.name}</h3>
	<div class="flex flex-wrap gap-1.5 sm:gap-2">
		{#each skill.keywords as keyword (keyword)}
			<span
				class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70 transition hover:border-amber-400/30 hover:text-amber-300 sm:px-3"
			>
				{keyword}
			</span>
		{/each}
	</div>
</div>
