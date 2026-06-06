<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { ArrowUpRight, Menu, X } from '@lucide/svelte';
	import data from '$lib/data';

	const { navItems } = data.navbar;
	const currentPath = $derived(page.url.pathname);
	let isMenuOpen = $state(false);

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="sticky top-3 z-50">
	<div
		class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5 md:px-6"
	>
		<a href={resolve('/')} class="flex min-w-0 items-center gap-3" onclick={closeMenu}>
			<div
				class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-amber-300 via-orange-500 to-pink-600 text-base font-bold text-black sm:h-12 sm:w-12 sm:text-lg"
			>
				Z
			</div>
			<div class="min-w-0">
				<p class="truncate text-base font-semibold sm:text-lg">Zalwan Studio</p>
				<p class="hidden text-sm text-white/60 sm:block">Web experiences with a spark.</p>
			</div>
		</a>

		<nav
			class="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-white/70 md:flex"
		>
			{#each navItems.filter((item) => !item.disabled) as item (item.href)}
				<a
					class="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
					class:bg-amber-400={currentPath === item.href}
					class:text-slate-950={currentPath === item.href}
					class:hover:bg-amber-300={currentPath === item.href}
					href={resolve(item.href)}
					aria-current={currentPath === item.href ? 'page' : undefined}
				>
					{item.title}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<a
				class="hidden items-center gap-2 rounded-full border border-amber-300/50 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-400/20 lg:inline-flex"
				href={resolve('/contact')}
			>
				Start a project
				<ArrowUpRight class="h-4 w-4" aria-hidden="true" />
			</a>
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-amber-300/50 hover:bg-amber-400/10 md:hidden"
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-navigation"
				onclick={() => (isMenuOpen = !isMenuOpen)}
			>
				{#if isMenuOpen}
					<X class="h-5 w-5" aria-hidden="true" />
				{:else}
					<Menu class="h-5 w-5" aria-hidden="true" />
				{/if}
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<div
			id="mobile-navigation"
			class="absolute top-[calc(100%+0.5rem)] right-0 left-0 rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
		>
			<nav class="grid gap-1 text-sm text-white/75">
				{#each navItems.filter((item) => !item.disabled) as item (item.href)}
					<a
						class="flex items-center justify-between rounded-xl px-4 py-3 font-medium transition hover:bg-white/10 hover:text-white"
						class:bg-amber-400={currentPath === item.href}
						class:text-slate-950={currentPath === item.href}
						href={resolve(item.href)}
						aria-current={currentPath === item.href ? 'page' : undefined}
						onclick={closeMenu}
					>
						{item.title}
						{#if currentPath === item.href}
							<span class="text-xs font-semibold uppercase tracking-wider">Current</span>
						{/if}
					</a>
				{/each}
			</nav>
			<a
				class="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300/50 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-400/20"
				href={resolve('/contact')}
				onclick={closeMenu}
			>
				Start a project
				<ArrowUpRight class="h-4 w-4" aria-hidden="true" />
			</a>
		</div>
	{/if}
</header>
