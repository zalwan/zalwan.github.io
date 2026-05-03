<script lang="ts">
	import { Briefcase, ExternalLink } from '@lucide/svelte';
	import type { Experience } from '$lib/data/resume';

	let { experience }: { experience: Experience } = $props();

	const hasMultipleRoles = experience.roles.length > 1;
</script>

<div class="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/30 hover:bg-white/[0.07]">
	<div class="mb-4 flex items-start justify-between gap-3">
		<div class="flex items-start gap-3">
			<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
				<Briefcase class="h-5 w-5" />
			</div>
			<div>
				<h3 class="text-lg font-semibold text-white">
					{experience.company}
				</h3>
				{#if !hasMultipleRoles && experience.position}
					<p class="text-sm font-medium text-amber-400">{experience.position}</p>
				{/if}
				<p class="mt-0.5 text-xs text-white/50">{experience.location}</p>
			</div>
		</div>
		{#if experience.website}
			<a
				href={experience.website}
				target="_blank"
				rel="noreferrer"
				class="shrink-0 rounded-lg p-2 text-white/40 transition hover:bg-white/10 hover:text-amber-400"
				aria-label="Visit {experience.company} website"
			>
				<ExternalLink class="h-4 w-4" />
			</a>
		{/if}
	</div>

	{#if hasMultipleRoles}
		<div class="ml-5 border-l border-white/10 pl-5">
			{#each experience.roles as role, i}
				<div class="relative pb-6 {i === experience.roles.length - 1 ? 'pb-0' : ''}">
					<div class="absolute -left-[1.625rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-amber-400 bg-slate-950"></div>
					<p class="text-sm font-semibold text-white">{role.position}</p>
					<p class="mb-2 text-xs text-white/50">{role.period}</p>
					<p class="text-sm leading-relaxed text-white/60">{role.description}</p>
				</div>
			{/each}
		</div>
	{:else}
		<p class="mb-2 text-xs text-white/50">{experience.period}</p>
		{#if experience.roles.length === 1}
			<p class="text-sm leading-relaxed text-white/60">{experience.roles[0].description}</p>
		{:else if experience.description}
			<p class="text-sm leading-relaxed text-white/60">{experience.description}</p>
		{/if}
	{/if}
</div>
