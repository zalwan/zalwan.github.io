<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import data from '$lib/data';

	const { navItems } = data.navbar;
	const visibleItems = navItems.filter((item) => !item.disabled);
	const currentPath = $derived(page.url.pathname);
	const leftLinks = visibleItems.slice(0, 3);
	const rightLinks = visibleItems.slice(3);
</script>

<header class="site-nav">
	<nav class="container site-nav__inner" aria-label="Main navigation">
		<div class="site-nav__links" aria-label="Primary pages">
			{#each leftLinks as item (item.href)}
				<a
					class="nav-link"
					href={resolve(item.href)}
					aria-current={currentPath === item.href ? 'page' : undefined}
				>
					{item.title}
				</a>
			{/each}
		</div>

		<a class="site-nav__wordmark" href={resolve('/')} aria-label="Zalwan Studio home">Zalwan</a>

		<div class="site-nav__links site-nav__links--right" aria-label="Secondary pages">
			{#each rightLinks as item (item.href)}
				<a
					class="nav-link"
					href={resolve(item.href)}
					aria-current={currentPath === item.href ? 'page' : undefined}
				>
					{item.title}
				</a>
			{/each}
		</div>
	</nav>
</header>
