<script lang="ts">
	import { base } from '$app/paths';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'text' | 'icon';

	let {
		href,
		external = false,
		variant = 'primary',
		ariaLabel,
		children
	}: {
		href: string;
		external?: boolean;
		variant?: Variant;
		ariaLabel?: string;
		children?: Snippet;
	} = $props();

	const target = $derived(external ? '_blank' : undefined);
	const rel = $derived(external ? 'external noreferrer' : undefined);
	const resolvedHref = $derived(external || !href.startsWith('/') ? href : `${base}${href}`);
	const className = $derived(`button-link button-link--${variant}`);
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a class={className} href={resolvedHref} {target} {rel} aria-label={ariaLabel}>
	{@render children?.()}
</a>
