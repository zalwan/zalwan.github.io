import type { PageLoad, EntryGenerator } from './$types';
import { getPost, getPosts } from '$lib/data/blog';
import { error } from '@sveltejs/kit';

export const entries: EntryGenerator = async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = async ({ params }) => {
	const post = await getPost(params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return { post };
};
