import type { Component } from 'svelte';

export interface BlogPost {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
	content: Component;
}

type GlobEntry = {
	metadata: BlogPost;
	default: Component;
};

export async function getPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<GlobEntry>('/src/content/blog/*.svx', { eager: true });

	const posts: BlogPost[] = [];

	for (const [, module] of Object.entries(modules)) {
		const { metadata } = module;
		if (metadata.published) {
			posts.push(metadata);
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}

export async function getPost(slug: string): Promise<BlogPostWithContent | undefined> {
	const modules = import.meta.glob<GlobEntry>('/src/content/blog/*.svx', { eager: true });

	for (const [, module] of Object.entries(modules)) {
		const { metadata, default: content } = module;
		if (metadata.slug === slug && metadata.published) {
			return { ...metadata, content };
		}
	}

	return undefined;
}
