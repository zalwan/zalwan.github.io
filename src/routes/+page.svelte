<script lang="ts">
	import { Footer, Header, Hero, MainWrapper, ThemeProvider } from '$lib';
</script>

<svelte:head>
	<title>Zalwan Studio</title>
</svelte:head>

<ThemeProvider>
	<MainWrapper>
		<div class="grid min-h-screen grid-rows-[auto_1fr_auto] gap-10">
			<Header />
			<main>
				<Hero />
			</main>
			<Footer />
		</div>
	</MainWrapper>
</ThemeProvider>
