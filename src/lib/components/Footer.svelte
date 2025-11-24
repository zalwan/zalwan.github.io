<script lang="ts">
	import data from '$lib/data';

	const currentYear = new Date().getFullYear();
	const { socialMediaLinks } = data.hero;
	const { navItems } = data.navbar;

	const showSocial = false;
	const showNav = false;

	const footerClass = showSocial || showNav ? 'md:justify-between' : 'md:justify-center';
</script>

<footer
	class={`flex w-full flex-col gap-4 border-t border-white/10 pt-6
         text-sm text-white/70 md:flex-row md:items-center ${footerClass}`}
>
	{#if showSocial}
		<div class="flex flex-wrap items-center gap-3">
			{#each socialMediaLinks as social}
				<a
					class="rounded-full border border-white/10 px-3 py-1 transition hover:border-amber-300/50 hover:text-white"
					href={social.url}
					target="_blank"
					rel="noreferrer"
				>
					{social.label}
				</a>
			{/each}
		</div>
	{/if}

	{#if showNav}
		<div class="flex flex-wrap items-center gap-4 text-white/60">
			{#each navItems.filter((item) => !item.disabled) as item}
				<a class="transition hover:text-white" href={item.href}>{item.title}</a>
			{/each}
		</div>
	{/if}

	<p class="text-center text-white/60">
		Copy­right © 2022 - {currentYear} | &lt; Rizal Suryawan /&gt;
	</p>
</footer>
