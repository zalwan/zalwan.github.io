import { basics, projects, summary } from './resume';
import { navItems } from './navbar';
import { socialMediaLinks } from './hero';
import type { BlogPost } from './blog';

export const site = {
	name: 'Zalwan Studio',
	url: 'https://zalwan.github.io',
	locale: 'en_US',
	language: 'en',
	author: basics.name,
	tagline: 'Design and engineering for fast, intentional web experiences.',
	description:
		'Portfolio and studio of Rizal Suryawan, a Principal Engineer building fast, scalable web, mobile, and AI-powered products.',
	image: '/img/hero-img.png',
	imageAlt: `${basics.name} portrait`,
	keywords: [
		'Rizal Suryawan',
		'Zalwan Studio',
		'Principal Engineer',
		'Software Engineer',
		'Frontend Engineer',
		'Full Stack Engineer',
		'SvelteKit',
		'AI agents',
		'Flutter',
		'Indonesia'
	]
} as const;

export function absoluteUrl(path = '/') {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `${site.url}${normalizedPath}`;
}

export const visibleNavItems = navItems.filter((item) => !item.disabled);

export const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: basics.name,
	url: site.url,
	image: absoluteUrl('/img/hero-img.png'),
	jobTitle: 'Principal Engineer',
	description: summary,
	email: basics.email,
	telephone: basics.phone,
	address: {
		'@type': 'PostalAddress',
		addressCountry: basics.location
	},
	sameAs: [basics.website, basics.linkedin, ...socialMediaLinks.map((link) => link.url)]
};

export const websiteJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: site.name,
	url: site.url,
	description: site.description,
	inLanguage: site.language,
	publisher: {
		'@type': 'Person',
		name: basics.name
	}
};

export function webPageJsonLd(title: string, description: string, path: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url: absoluteUrl(path),
		inLanguage: site.language,
		isPartOf: {
			'@type': 'WebSite',
			name: site.name,
			url: site.url
		},
		about: {
			'@type': 'Person',
			name: basics.name
		}
	};
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	};
}

export const projectCollectionJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: 'Projects by Rizal Suryawan',
	description: 'Selected AI, mobile, web platform, and developer-tool projects.',
	itemListElement: projects.map((project, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		item: {
			'@type': 'CreativeWork',
			name: project.name,
			description: project.description,
			url: project.website || absoluteUrl('/projects')
		}
	}))
};

export function articleJsonLd(post: BlogPost) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.date,
		image: absoluteUrl(site.image),
		url: absoluteUrl(`/blog/${post.slug}`),
		keywords: post.tags.join(', '),
		author: {
			'@type': 'Person',
			name: basics.name,
			url: site.url
		},
		publisher: {
			'@type': 'Person',
			name: basics.name,
			url: site.url
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': absoluteUrl(`/blog/${post.slug}`)
		}
	};
}
