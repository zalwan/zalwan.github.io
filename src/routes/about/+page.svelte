<script lang="ts">
	import { data, ExperienceCard, SkillCard } from '$lib';
	import { Globe } from '@lucide/svelte';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'About | Zalwan Studio';
	const pageDescription =
		'Learn about Rizal Suryawan — Software Engineer with 5+ years of experience building scalable web and mobile applications.';

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

<div class="space-y-16 py-12">
	<!-- Summary -->
	<section class="flex flex-col items-center text-center">
		<p
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100"
		>
			About Me
		</p>
		<h1 class="mb-6 text-4xl font-bold text-white md:text-5xl">Rizal Suryawan</h1>
		<p class="max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
			{summary}
		</p>
	</section>

	<!-- Experience -->
	<section>
		<h2 class="mb-8 text-center text-2xl font-bold text-white md:text-3xl">Experience</h2>
		<div class="mx-auto max-w-3xl space-y-6">
			{#each experience as exp}
				<ExperienceCard experience={exp} />
			{/each}
		</div>
	</section>

	<!-- Skills -->
	<section>
		<h2 class="mb-8 text-center text-2xl font-bold text-white md:text-3xl">Skills</h2>
		<div class="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each skills as skill}
				<SkillCard {skill} />
			{/each}
		</div>
	</section>

	<!-- Languages -->
	<section>
		<h2 class="mb-8 text-center text-2xl font-bold text-white md:text-3xl">Languages</h2>
		<div class="mx-auto flex max-w-3xl flex-wrap justify-center gap-6">
			{#each languages as lang}
				<div
					class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:border-amber-400/30 hover:bg-white/[0.07]"
				>
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400"
					>
						<Globe class="h-5 w-5" />
					</div>
					<div>
						<p class="text-sm font-semibold text-white">{lang.language}</p>
						<p class="text-xs text-white/50">{lang.fluency}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
