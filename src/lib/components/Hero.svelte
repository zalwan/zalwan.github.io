<script lang="ts">
	import data from '$lib/data';
	import Logos from './Logos.svelte';

	const { profileData, contactLinks, socialMediaLinks } = data.hero;
</script>

<section class="flex w-full flex-col items-center justify-center py-12">
	<div class="grid items-center gap-8 lg:grid-cols-2">
		<div class="order-last flex flex-col items-center text-center lg:order-first lg:items-start lg:text-left">
			<p class="hidden items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 lg:inline-flex">
				<span class="inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true"></span>
				{profileData.badge}
			</p>

			<h1 class="mt-6 text-4xl font-bold leading-tight lg:text-6xl">{profileData.heading}</h1>
			<h2 class="mb-6 text-4xl font-bold text-amber-500 lg:text-6xl">{profileData.fullName}</h2>
			<p class="mb-8 max-w-xl text-lg text-white/70 lg:text-xl">{profileData.description}</p>

			<div class="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
				{#each contactLinks as contact}
					<a
						class="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-amber-400/60 hover:bg-amber-400/10"
						href={contact.url}
						target="_blank"
						rel="noreferrer"
					>
						{contact.text}
					</a>
				{/each}
				{#each socialMediaLinks as social}
					<a
						class="hidden rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-400/60 hover:bg-amber-400/10 lg:inline-block"
						href={social.url}
						target="_blank"
						rel="noreferrer"
					>
						{social.label}
					</a>
				{/each}
			</div>
		</div>

		<div class="flex flex-col items-center gap-6">
			<p class="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 lg:hidden">
				<span class="inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true"></span>
				{profileData.badge}
			</p>
			<div class="relative mx-auto max-h-80 overflow-hidden rounded-full border-4 border-amber-700/40 bg-amber-600 shadow-2xl shadow-amber-700 lg:max-h-96">
				<img
					class="max-h-80 w-full object-contain lg:max-h-96"
					src={profileData.image.src}
					alt={profileData.image.alt}
					width="600"
					height="400"
					loading="eager"
				/>
				<svg class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30" aria-hidden="true">
					<defs>
						<linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stop-color="#ffffff" stop-opacity="0">
								<animate attributeName="offset" values="-1; 2" dur="3s" repeatCount="indefinite" />
							</stop>
							<stop offset="25%" stop-color="#ffffff" stop-opacity="0.5">
								<animate attributeName="offset" values="-0.75; 2.25" dur="3s" repeatCount="indefinite" />
							</stop>
							<stop offset="50%" stop-color="#ffffff" stop-opacity="0">
								<animate attributeName="offset" values="-0.5; 2.5" dur="3s" repeatCount="indefinite" />
							</stop>
						</linearGradient>
					</defs>
					<rect width="600" height="400" fill="url(#shimmer)" />
				</svg>
			</div>
		</div>
	</div>

	<Logos />
</section>
