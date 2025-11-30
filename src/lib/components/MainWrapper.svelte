<script lang="ts">
	let { children } = $props();
</script>

<div class="relative mx-auto max-w-6xl px-6 py-10">
	<div
		class="pointer-events-none absolute top-12 right-4 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl sm:top-16 sm:right-8 md:right-10 md:h-56 md:w-56 lg:right-12 lg:h-64 lg:w-64"
	></div>
	<div
		class="pointer-events-none absolute bottom-6 left-4 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl sm:bottom-10 sm:left-8 md:left-10 md:h-48 md:w-48 lg:left-12 lg:h-52 lg:w-52"
	></div>

	{@render children?.()}
</div>
