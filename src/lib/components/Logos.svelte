<script lang="ts">
	import data from '$lib/data';

	const { logos } = data.logo;
</script>

<div class="flex flex-col items-center justify-center pt-24 pb-14">
	<h3 class="mb-20 animate-pulse text-xl font-bold uppercase text-white/60 lg:mb-6">powered by</h3>
	<div class="flex flex-col items-center gap-10 lg:flex-row">
		{#each logos as logo}
			<div class="grid place-items-center">
				<img
					class="dark:invert"
					src={logo.src}
					alt={logo.alt}
					width={logo.width}
					height={logo.height}
					loading="eager"
				/>
			</div>
		{/each}
	</div>
</div>
