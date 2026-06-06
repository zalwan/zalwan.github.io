<script lang="ts">
	import data from '$lib/data';

	const { logos } = data.logo;
</script>

<section class="container logo-band" aria-labelledby="logo-band-title">
	<h2 id="logo-band-title" class="caption">Powered by</h2>
	<div class="logo-band__grid">
		{#each logos as logo (logo.src)}
			<div class="logo-band__item">
				<img
					src={logo.src}
					alt={logo.alt}
					width={logo.width}
					height={logo.height}
					loading="eager"
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.logo-band {
		display: grid;
		gap: var(--space-xl);
		padding-block: var(--space-xxl);
		border-bottom: 1px solid var(--color-hairline);
	}

	.logo-band__grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-lg);
		align-items: center;
	}

	.logo-band__item {
		display: grid;
		min-height: 5rem;
		place-items: center;
		border: 1px solid var(--color-hairline);
		background: var(--color-canvas);
		padding: var(--space-lg);
	}

	.logo-band__item img {
		max-height: 2.75rem;
		filter: grayscale(1) invert(1);
		opacity: 0.78;
		transition:
			opacity var(--transition-fast),
			transform var(--transition-fast);
	}

	.logo-band__item:hover img {
		opacity: 1;
		transform: translateY(-1px);
	}

	@media (max-width: 47.9375rem) {
		.logo-band__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
