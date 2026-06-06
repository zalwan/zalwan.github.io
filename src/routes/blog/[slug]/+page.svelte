<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowLeft, Calendar, Tag } from '@lucide/svelte';

	const siteUrl = 'https://zalwan.github.io';

	let { data } = $props();
	const post = $derived(data.post);

	const formattedDate = $derived(
		new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<svelte:head>
	<title>{post.title} | Zalwan Studio</title>
	<meta name="description" content={post.description} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta property="article:published_time" content={post.date} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
</svelte:head>

<article class="py-12">
	<!-- Back link -->
	<a
		href={resolve('/blog')}
		class="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-amber-400"
	>
		<ArrowLeft class="h-4 w-4" />
		Back to articles
	</a>

	<!-- Header -->
	<header class="mb-10">
		<div class="mb-4 flex items-center gap-3 text-sm text-white/40">
			<Calendar class="h-4 w-4" />
			<time datetime={post.date}>{formattedDate}</time>
		</div>

		<h1 class="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
			{post.title}
		</h1>

		<p class="mb-6 text-lg text-white/60">{post.description}</p>

		<div class="flex flex-wrap gap-2">
			{#each post.tags as tag (tag)}
				<span
					class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
				>
					<Tag class="h-3 w-3" />
					{tag}
				</span>
			{/each}
		</div>
	</header>

	<!-- Divider -->
	<hr class="mb-10 border-white/10" />

	<!-- Content -->
	<div
		class="prose prose-invert prose-amber mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-h3:text-xl prose-p:text-white/70 prose-p:leading-relaxed prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:rounded prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-white/10 prose-pre:bg-slate-900 prose-li:text-white/70 prose-table:text-white/70 prose-th:text-white prose-td:border-white/10 prose-th:border-white/10 prose-hr:border-white/10 prose-blockquote:border-amber-400/40 prose-blockquote:text-white/60"
	>
		{#if post.content}
			{@const Content = post.content}
			<Content />
		{/if}
	</div>
</article>
