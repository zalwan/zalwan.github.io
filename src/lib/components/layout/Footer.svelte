<script lang="ts">
	import { resolve } from '$app/paths';
	import data from '$lib/data';

	const currentYear = new Date().getFullYear();
	const { socialMediaLinks } = data.hero;
	const { navItems } = data.navbar;
	const { basics } = data.resume;
</script>

<footer class="hairline-top">
	<div class="container footer-grid">
		<div class="footer-brand">
			<p class="site-nav__wordmark">Zalwan</p>
			<p class="copy-small muted">
				Design and engineering for fast, intentional web experiences by Rizal Suryawan.
			</p>
		</div>

		<nav class="footer-column" aria-label="Footer navigation">
			<p class="caption">Navigate</p>
			{#each navItems.filter((item) => !item.disabled) as item (item.href)}
				<a class="nav-link" href={resolve(item.href)}>{item.title}</a>
			{/each}
		</nav>

		<div class="footer-column">
			<p class="caption">Connect</p>
			<a class="nav-link" href={`mailto:${basics.email}`}>{basics.email}</a>
			{#each socialMediaLinks as social (social.id)}
				<a class="nav-link" href={social.url} target="_blank" rel="external noreferrer">
					{social.label}
				</a>
			{/each}
		</div>
	</div>

	<div class="container footer-bottom">
		<p class="copy-small muted">Copyright © 2022 - {currentYear} | Rizal Suryawan</p>
	</div>
</footer>

<style>
	footer {
		padding-block: var(--space-xxl) var(--space-xl);
	}

	.footer-grid {
		display: grid;
		gap: var(--space-xl);
	}

	.footer-brand {
		display: grid;
		gap: var(--space-md);
		max-width: 28rem;
	}

	.footer-column {
		display: grid;
		align-content: start;
		gap: var(--space-sm);
	}

	.footer-bottom {
		margin-top: var(--space-xl);
		padding-top: var(--space-lg);
		border-top: 1px solid var(--color-hairline);
		text-align: center;
	}

	@media (min-width: 48rem) {
		.footer-grid {
			grid-template-columns: minmax(0, 1fr) auto auto;
			align-items: start;
		}
	}
</style>
