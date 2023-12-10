import { base } from '$app/paths'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { slug }, fetch }) {
	const number = slug.split('-').pop()

	try {
		const res = await fetch(`${base}/api/blog/${number}.json`) // Use string interpolation here
		const discussion = await res.json()
		return {
			discussion
		}
	} catch (error) {
		console.log(error)
		// Handle the error if necessary
	}
}
