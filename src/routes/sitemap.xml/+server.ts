import type { RequestHandler } from './$types';
import { getPosts } from '$lib/data/blog';
import { absoluteUrl } from '$lib/data/site';

export const prerender = true;

const staticPages = [
	{ path: '/', changefreq: 'monthly', priority: '1.0' },
	{ path: '/blog', changefreq: 'weekly', priority: '0.8' },
	{ path: '/projects', changefreq: 'monthly', priority: '0.8' },
	{ path: '/about', changefreq: 'monthly', priority: '0.7' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.6' }
];

function renderUrl({
	path,
	lastmod,
	changefreq,
	priority
}: {
	path: string;
	lastmod?: string;
	changefreq: string;
	priority: string;
}) {
	return [
		'  <url>',
		`    <loc>${absoluteUrl(path)}</loc>`,
		lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
		`    <changefreq>${changefreq}</changefreq>`,
		`    <priority>${priority}</priority>`,
		'  </url>'
	]
		.filter(Boolean)
		.join('\n');
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts();
	const urls = [
		...staticPages,
		...posts.map((post) => ({
			path: `/blog/${post.slug}`,
			lastmod: post.date,
			changefreq: 'monthly',
			priority: '0.7'
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(renderUrl).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
