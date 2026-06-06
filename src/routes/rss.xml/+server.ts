import type { RequestHandler } from './$types';
import { getPosts } from '$lib/data/blog';
import { absoluteUrl, site } from '$lib/data/site';

export const prerender = true;

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts();
	const latestPostDate = posts[0]?.date ?? new Date().toISOString();

	const items = posts
		.map((post) => {
			const url = absoluteUrl(`/blog/${post.slug}`);

			return [
				'    <item>',
				`      <title>${escapeXml(post.title)}</title>`,
				`      <link>${url}</link>`,
				`      <guid isPermaLink="true">${url}</guid>`,
				`      <description>${escapeXml(post.description)}</description>`,
				`      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
				`      <category>${post.tags.map(escapeXml).join('</category><category>')}</category>`,
				'    </item>'
			].join('\n');
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} Articles</title>
    <link>${absoluteUrl('/blog')}</link>
    <description>${escapeXml(site.description)}</description>
    <language>${site.language}</language>
    <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

	return new Response(body, {
		headers: {
			'content-type': 'application/rss+xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
