<script lang="ts">
	import { ExternalLink, Folder } from '@lucide/svelte';
	import type { Project } from '$lib/data/resume';

	let { project }: { project: Project } = $props();
</script>

<div class="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/30 hover:bg-white/[0.07]">
	<div class="mb-3 flex items-start justify-between gap-3">
		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
			<Folder class="h-5 w-5" />
		</div>
		{#if project.website}
			<a
				href={project.website}
				target="_blank"
				rel="noreferrer"
				class="shrink-0 rounded-lg p-2 text-white/40 transition hover:bg-white/10 hover:text-amber-400"
				aria-label="Visit {project.name}"
			>
				<ExternalLink class="h-4 w-4" />
			</a>
		{/if}
	</div>

	<h3 class="mb-1 text-base font-semibold text-white group-hover:text-amber-300 transition">
		{project.name}
	</h3>
	<p class="mb-3 text-xs font-medium text-amber-400/70">{project.period}</p>
	<p class="flex-1 text-sm leading-relaxed text-white/60">{project.description}</p>
</div>
