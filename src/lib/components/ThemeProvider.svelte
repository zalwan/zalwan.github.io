<script lang="ts">
	let { children } = $props();
</script>

<div class="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-black text-white">
	{@render children?.()}
</div>
