<script lang="ts">
	import { Footer, Header, MainWrapper, ThemeProvider } from '$lib';

	export let status: number;
	export let error: Error;

	const title = status === 404 ? 'Page not found' : 'Something went wrong';
</script>

<svelte:head>
	<title>{status} | {title}</title>
</svelte:head>

<ThemeProvider>
	<MainWrapper>
		<div class="grid min-h-screen grid-rows-[auto_1fr_auto] gap-10">
			<Header />
			<main class="flex flex-col items-center justify-center gap-6 text-center">
				<p class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
					Error {status}
				</p>
				<h1 class="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
				{#if error?.message}
					<p class="max-w-xl text-base text-white/60 md:text-lg">{error.message}</p>
				{/if}
				<div class="flex flex-wrap justify-center gap-3">
					<a class="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-300/30" href="/">
						Go home
					</a>
					<a class="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5" href="mailto:hello@zalwan.studio">
						Contact support
					</a>
				</div>
			</main>
			<Footer />
		</div>
	</MainWrapper>
</ThemeProvider>
