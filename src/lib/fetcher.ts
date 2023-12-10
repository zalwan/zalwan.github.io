import { GITHUB_TOKEN } from '$env/static/private'

type FetcherResponse = {
	data?: any // Sesuaikan dengan struktur data yang diharapkan dari respons GraphQL
	errors?: any[] // Jika respons juga dapat mengandung error
}

const fetcher = async (query: string, variables: any, fetch: any): Promise<any> => {
	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `bearer ${GITHUB_TOKEN}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query, variables })
		})

		const { data }: FetcherResponse = await res.json()
		return data
	} catch (error: any) {
		console.log(error)
		throw error
	}
}

export default fetcher
