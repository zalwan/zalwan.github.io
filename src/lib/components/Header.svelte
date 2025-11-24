<script lang="ts">
	import { page } from '$app/stores';
	import data from '$lib/data';

	const { navItems } = data.navbar;
	$: currentPath = $page.url.pathname;
</script>

<header
	class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur"
>
	<div class="flex items-center gap-3">
		<div
			class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-amber-300 via-orange-500 to-pink-600 text-lg font-bold text-black"
		>
			Z
		</div>
		<div>
			<p class="text-lg font-semibold">Zalwan Studio</p>
			<p class="text-sm text-white/60">Web experiences with a spark.</p>
		</div>
	</div>
	<nav class="flex items-center gap-4 text-sm text-white/75 sm:gap-6">
		{#each navItems.filter((item) => !item.disabled) as item}
			<a
				class="transition hover:text-white"
				class:text-amber-300={currentPath === item.href}
				href={item.href}
				aria-current={currentPath === item.href ? 'page' : undefined}
			>
				<span class="sm:hidden">{item.emoji}</span>
				<span class="hidden sm:inline">{item.title}</span>
			</a>
		{/each}
	</nav>
	<button
		class="rounded-full border border-amber-300/50 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-400/20"
	>
		Start a project
	</button>
</header>
