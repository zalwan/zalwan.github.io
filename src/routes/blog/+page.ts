import type { PageLoad } from './$types';
import { getPosts } from '$lib/data/blog';

export const load: PageLoad = async () => {
	const posts = await getPosts();
	return { posts };
};
