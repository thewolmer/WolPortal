const headers = {
	'Content-Type': 'application/json',
	'Allow-Cross-Origin': '*',
	'X-Api-Identifier': process.env.NEXT_PUBLIC_API_IDENTIFIER as string,
};

interface Props {
	tags?: string[];
	revalidate?: number;
	searchParams?: Record<string, string | number | undefined>;
}
export const TmdbImageGet = async (uri: string, { tags, revalidate = 3600, searchParams }: Props) => {
	const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/images/tmdb${uri}`);
	if (searchParams) {
		for (const param of Object.keys(searchParams)) {
			const value = searchParams[param];
			if (value) {
				url.searchParams.append(param, value.toString());
			}
		}
	}
	return await fetch(url.toString(), {
		headers,
		next: { revalidate, tags },
	});
};

export const TmdbGet = async (uri: string, { tags, revalidate = 3600, searchParams }: Props) => {
	const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/info${uri}`);
	if (searchParams) {
		for (const param of Object.keys(searchParams)) {
			const value = searchParams[param];
			if (value) {
				url.searchParams.append(param, value.toString());
			}
		}
	}
	return await fetch(url.toString(), {
		headers,
		next: { revalidate, tags },
	});
};
