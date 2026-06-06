import type { RequestHandler } from './$types';
import { absoluteUrl, site } from '$lib/data/site';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		`Host: ${site.url.replace('https://', '')}`,
		`Sitemap: ${absoluteUrl('/sitemap.xml')}`
	].join('\n');

	return new Response(body, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
