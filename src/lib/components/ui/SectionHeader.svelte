<script lang="ts">
	type HeadingTag = 'h1' | 'h2' | 'h3';
	type Align = 'left' | 'center';

	let {
		eyebrow,
		title,
		description = '',
		tag = 'h1',
		align = 'center'
	}: {
		eyebrow?: string;
		title: string;
		description?: string;
		tag?: HeadingTag;
		align?: Align;
	} = $props();

	const className = $derived(`section-header section-header--${align}`);
	const titleClass = $derived(tag === 'h1' ? 'display-lg' : 'display-md');
</script>

<div class={className}>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	<svelte:element this={tag} class={titleClass}>{title}</svelte:element>
	{#if description}
		<p class="copy section-header__copy">{description}</p>
	{/if}
</div>
