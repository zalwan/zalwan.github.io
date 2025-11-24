<script lang="ts">
	let { children } = $props();
</script>

<div class="relative mx-auto max-w-6xl px-6 py-10">
	<div class="pointer-events-none absolute -right-16 top-16 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl"></div>
	<div class="pointer-events-none absolute -left-24 bottom-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"></div>

	{@render children?.()}
</div>
