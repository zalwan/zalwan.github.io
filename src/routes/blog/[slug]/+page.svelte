<script>
	export let data
	$: ({ discussion } = data)
</script>

<section
	class="rounded-xl border border-[#2c2c2c] bg-[#212121] px-4 py-3 text-white shadow shadow-black/25"
>
	<h1 class=" mb-2 text-5xl font-bold text-amber-600">{discussion.title}</h1>
	<p>
		{@html discussion.bodyHTML}
	</p>
</section>
