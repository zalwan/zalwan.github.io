<script lang="ts">
	import { data } from '$lib';
	import { Mail, Phone, MapPin, Globe, IdCard, MessageCircle, ArrowUpRight } from '@lucide/svelte';

	const siteUrl = 'https://zalwan.github.io';
	const pageTitle = 'Contact | Zalwan Studio';
	const pageDescription =
		'Get in touch with Rizal Suryawan for collaborations or project inquiries.';

	const { basics } = data.resume;

	const contactItems = [
		{
			icon: Mail,
			label: 'Email',
			value: basics.email,
			href: `mailto:${basics.email}`
		},
		{
			icon: Phone,
			label: 'Phone',
			value: basics.phone,
			href: `https://wa.me/${basics.phone.replace(/\+/g, '')}`
		},
		{
			icon: MapPin,
			label: 'Location',
			value: basics.location,
			href: ''
		},
		{
			icon: Globe,
			label: 'Website',
			value: basics.website.replace('https://', ''),
			href: basics.website
		},
		{
			icon: IdCard,
			label: 'LinkedIn',
			value: 'rizal-suryawan',
			href: basics.linkedin
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

<div class="py-12">
	<div class="mb-12 text-center">
		<p
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100"
		>
			Contact
		</p>
		<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">Let's Connect</h1>
		<p class="mx-auto max-w-2xl text-lg text-white/60">
			Feel free to reach out for collaborations, project inquiries, or just to say hello.
		</p>
	</div>

	<div class="mx-auto max-w-2xl space-y-4">
		{#each contactItems as item (item.label)}
			{@const ContactIcon = item.icon}
			{#if item.href}
				<a
					href={item.href}
					target="_blank"
					rel="external noreferrer"
					class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/30 hover:bg-white/[0.07]"
				>
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400"
					>
						<ContactIcon class="h-5 w-5" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-medium uppercase tracking-wider text-white/40">{item.label}</p>
						<p
							class="truncate text-sm font-semibold text-white group-hover:text-amber-300 transition"
						>
							{item.value}
						</p>
					</div>
					<ArrowUpRight
						class="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-amber-400"
					/>
				</a>
			{:else}
				<div
					class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/30 hover:bg-white/[0.07]"
				>
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400"
					>
						<ContactIcon class="h-5 w-5" />
					</div>
					<div class="min-w-0 flex-1">
						<p class="text-xs font-medium uppercase tracking-wider text-white/40">{item.label}</p>
						<p
							class="truncate text-sm font-semibold text-white group-hover:text-amber-300 transition"
						>
							{item.value}
						</p>
					</div>
				</div>
			{/if}
		{/each}
	</div>

	<!-- CTA -->
	<div class="mt-12 text-center">
		<a
			class="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-8 py-4 text-sm font-semibold text-amber-100 transition hover:bg-amber-400/20 hover:border-amber-400/60"
			href="https://wa.me/{basics.phone.replace(
				/\+/g,
				''
			)}?text=Hi%20Rizal,%20I%20found%20your%20web%20and%20would%20like%20to%20connect!"
			target="_blank"
			rel="external noreferrer"
		>
			<MessageCircle class="h-4 w-4" />
			Chat on WhatsApp
		</a>
	</div>
</div>
