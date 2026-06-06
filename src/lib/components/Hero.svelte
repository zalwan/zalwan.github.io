<script lang="ts">
	import { Code, IdCard, MessageCircle, Video } from '@lucide/svelte';
	import { ButtonLink } from '$lib';
	import data from '$lib/data';
	import Logos from './Logos.svelte';

	const { profileData, contactLinks, socialMediaLinks } = data.hero;
	type IconComponent = typeof Code;
	const iconMap: Record<string, IconComponent> = {
		github: Code,
		linkedin: IdCard,
		youtube: Video
	};
</script>

<section class="hero-photo-band">
	<img
		class="hero-photo-band__image"
		src={profileData.image.src}
		alt={profileData.image.alt}
		width="800"
		height="800"
		loading="eager"
	/>
	<div class="hero-photo-band__shade" aria-hidden="true"></div>

	<div class="container hero-photo-band__content">
		<p class="eyebrow reveal">{profileData.badge}</p>
		<h1 class="display-xl reveal">{profileData.fullName}</h1>
		<p class="copy-strong hero-photo-band__lead reveal">{profileData.description}</p>

		<div class="hero-photo-band__actions reveal">
			{#each contactLinks as contact (contact.url)}
				<ButtonLink href={contact.url} external>
					<MessageCircle class="cta-icon" aria-hidden="true" />
					{contact.text}
				</ButtonLink>
			{/each}

			<div class="hero-photo-band__social" aria-label="Social links">
				{#each socialMediaLinks as social (social.id)}
					{@const SocialIcon = iconMap[social.id]}
					<ButtonLink href={social.url} external variant="icon" ariaLabel={social.label}>
						{#if SocialIcon}
							<SocialIcon class="social-icon" aria-hidden="true" />
						{:else}
							<span class="caption">{social.label}</span>
						{/if}
					</ButtonLink>
				{/each}
			</div>
		</div>
	</div>
</section>

<Logos />

<style>
	.hero-photo-band {
		position: relative;
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: end;
		overflow: hidden;
		border-bottom: 1px solid var(--color-hairline);
		background: var(--color-canvas);
	}

	.hero-photo-band__image {
		position: absolute;
		inset-block: auto 0;
		inset-inline-end: 0;
		width: min(58rem, 82vw);
		height: min(58rem, 82vh);
		object-fit: contain;
		object-position: bottom right;
		opacity: 0.72;
	}

	.hero-photo-band__shade {
		position: absolute;
		inset: 0;
		background: rgb(0 0 0 / 0.5);
	}

	.hero-photo-band__content {
		position: relative;
		z-index: 1;
		display: grid;
		gap: var(--space-lg);
		padding-block: var(--space-section);
	}

	.hero-photo-band__lead {
		max-width: 44rem;
		font-size: 1.125rem;
	}

	.hero-photo-band__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-md);
	}

	.hero-photo-band__social {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	:global(.cta-icon),
	:global(.social-icon) {
		width: 1rem;
		height: 1rem;
	}

	@media (max-width: 47.9375rem) {
		.hero-photo-band {
			min-height: 42rem;
		}

		.hero-photo-band__image {
			width: 100vw;
			height: 28rem;
			opacity: 0.42;
			object-position: bottom center;
		}

		.hero-photo-band__content {
			align-content: end;
			padding-block: var(--space-xxl);
		}

		.hero-photo-band__actions,
		.hero-photo-band__social {
			width: 100%;
		}

		.hero-photo-band__social {
			justify-content: center;
		}
	}
</style>
