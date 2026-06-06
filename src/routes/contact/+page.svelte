<script lang="ts">
	import { resolve } from '$app/paths';
	import { ButtonLink, data, SectionHeader } from '$lib';
	import { ArrowUpRight, IdCard, Mail, MapPin, MessageCircle, Phone, Globe } from '@lucide/svelte';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'Contact | Zalwan Studio';
	const pageDescription =
		'Get in touch with Rizal Suryawan for collaborations or project inquiries.';

	const { basics } = data.resume;
	const whatsappUrl = `https://wa.me/${basics.phone.replace(/\+/g, '')}?text=Hi%20Rizal,%20I%20found%20your%20web%20and%20would%20like%20to%20connect!`;

	const contactItems = [
		{
			icon: Mail,
			label: 'Email',
			value: basics.email,
			href: `mailto:${basics.email}`,
			external: false
		},
		{
			icon: Phone,
			label: 'Phone',
			value: basics.phone,
			href: whatsappUrl,
			external: true
		},
		{
			icon: MapPin,
			label: 'Location',
			value: basics.location,
			href: '',
			external: false
		},
		{
			icon: Globe,
			label: 'Website',
			value: basics.website.replace('https://', ''),
			href: basics.website,
			external: true
		},
		{
			icon: IdCard,
			label: 'LinkedIn',
			value: 'rizal-suryawan',
			href: basics.linkedin,
			external: true
		}
	];
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${siteUrl}/img/hero-img.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={`${siteUrl}/img/hero-img.png`} />
</svelte:head>

<div class="container section-stack">
	<section class="section">
		<SectionHeader
			eyebrow="Contact"
			title="Let's Connect"
			description="Reach out for collaborations, project inquiries, or a focused engineering conversation."
		/>

		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<div class="contact-list">
			{#each contactItems as item (item.label)}
				{@const ContactIcon = item.icon}
				{#if item.href}
					<a
						href={item.external || !item.href.startsWith('/')
							? item.href
							: resolve(item.href as '/')}
						target={item.external ? '_blank' : undefined}
						rel={item.external ? 'external noreferrer' : undefined}
						class="surface-card contact-row"
					>
						<span class="icon-frame">
							<ContactIcon class="contact-row__icon" aria-hidden="true" />
						</span>
						<span class="contact-row__content">
							<span class="caption">{item.label}</span>
							<span class="title-sm">{item.value}</span>
						</span>
						<ArrowUpRight class="contact-row__arrow" aria-hidden="true" />
					</a>
				{:else}
					<div class="surface-card contact-row">
						<span class="icon-frame">
							<ContactIcon class="contact-row__icon" aria-hidden="true" />
						</span>
						<span class="contact-row__content">
							<span class="caption">{item.label}</span>
							<span class="title-sm">{item.value}</span>
						</span>
					</div>
				{/if}
			{/each}
		</div>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->

		<div class="contact-cta">
			<ButtonLink href={whatsappUrl} external>
				<MessageCircle class="contact-row__icon" aria-hidden="true" />
				Chat on WhatsApp
			</ButtonLink>
		</div>
	</section>
</div>

<style>
	.contact-list {
		width: min(100%, 42rem);
		margin-inline: auto;
		display: grid;
		gap: var(--space-md);
	}

	.contact-row {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		text-decoration: none;
	}

	.contact-row__content {
		min-width: 0;
		display: grid;
		gap: var(--space-xxs);
	}

	.contact-row__content .title-sm {
		overflow-wrap: anywhere;
		text-transform: none;
	}

	:global(.contact-row__icon),
	:global(.contact-row__arrow) {
		width: 1rem;
		height: 1rem;
	}

	:global(.contact-row__arrow) {
		color: var(--color-muted);
		transition:
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.contact-row:hover :global(.contact-row__arrow) {
		color: var(--color-primary);
		transform: translate(1px, -1px);
	}

	.contact-cta {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 47.9375rem) {
		.contact-row {
			grid-template-columns: auto minmax(0, 1fr);
		}

		:global(.contact-row__arrow) {
			display: none;
		}
	}
</style>
