<script lang="ts">
	let { children } = $props();
</script>

<div class="relative mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8 lg:py-10">
	{@render children?.()}
</div>
