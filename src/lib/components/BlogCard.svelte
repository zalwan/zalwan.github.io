<script lang="ts">
	import { Calendar, ArrowUpRight, Tag } from '@lucide/svelte';
	import type { BlogPost } from '$lib/data/blog';

	let { post }: { post: BlogPost } = $props();

	const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<a
	href="/blog/{post.slug}"
	class="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/30 hover:bg-white/[0.07]"
>
	<div class="mb-3 flex items-center gap-2 text-xs text-white/40">
		<Calendar class="h-3.5 w-3.5" />
		<time datetime={post.date}>{formattedDate}</time>
	</div>

	<h2
		class="mb-2 text-lg font-semibold text-white transition group-hover:text-amber-300"
	>
		{post.title}
	</h2>

	<p class="mb-4 flex-1 text-sm leading-relaxed text-white/60">
		{post.description}
	</p>

	<div class="flex items-center justify-between">
		<div class="flex flex-wrap gap-1.5">
			{#each post.tags.slice(0, 3) as tag}
				<span
					class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/50"
				>
					<Tag class="h-2.5 w-2.5" />
					{tag}
				</span>
			{/each}
		</div>
		<ArrowUpRight
			class="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-amber-400"
		/>
	</div>
</a>
