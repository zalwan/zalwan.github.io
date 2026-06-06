<script lang="ts">
	import { data, ExperienceCard, Seo, SkillCard } from '$lib';
	import { breadcrumbJsonLd, personJsonLd, webPageJsonLd } from '$lib/data/site';
	import { Globe } from '@lucide/svelte';

	const pageTitle = 'About Rizal Suryawan';
	const pageDescription =
		'Learn about Rizal Suryawan, a Principal Engineer with 5+ years of experience building scalable web, mobile, and AI-powered applications.';

	const { summary, experience, skills, languages } = data.resume;
</script>

<Seo
	title={pageTitle}
	description={pageDescription}
	path="/about"
	type="profile"
	jsonLd={[
		personJsonLd,
		webPageJsonLd(pageTitle, pageDescription, '/about'),
		breadcrumbJsonLd([
			{ name: 'Home', path: '/' },
			{ name: 'About', path: '/about' }
		])
	]}
/>

<div class="space-y-12 py-8 sm:space-y-14 sm:py-10 lg:space-y-16 lg:py-12">
	<!-- Summary -->
	<section class="flex flex-col items-center text-center">
		<p
			class="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 sm:px-4 sm:tracking-[0.2em]"
		>
			About Me
		</p>
		<h1 class="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Rizal Suryawan</h1>
		<p class="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
			{summary}
		</p>
	</section>

	<!-- Experience -->
	<section>
		<h2 class="mb-6 text-center text-2xl font-bold text-white md:mb-8 md:text-3xl">Experience</h2>
		<div class="mx-auto max-w-3xl space-y-4 sm:space-y-5 md:space-y-6">
			{#each experience as exp (exp.id)}
				<ExperienceCard experience={exp} />
			{/each}
		</div>
	</section>

	<!-- Skills -->
	<section>
		<h2 class="mb-6 text-center text-2xl font-bold text-white md:mb-8 md:text-3xl">Skills</h2>
		<div class="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
			{#each skills as skill (skill.id)}
				<SkillCard {skill} />
			{/each}
		</div>
	</section>

	<!-- Languages -->
	<section>
		<h2 class="mb-6 text-center text-2xl font-bold text-white md:mb-8 md:text-3xl">Languages</h2>
		<div
			class="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-6"
		>
			{#each languages as lang (lang.id)}
				<div
					class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-amber-400/30 hover:bg-white/[0.07] sm:px-5 lg:px-6"
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
