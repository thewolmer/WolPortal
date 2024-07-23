const headers = {
	'Content-Type': 'application/json',
	'trakt-api-key': `${process.env.TRAKT_CLIENT_ID}`,
	'trakt-api-version': '2',
};

interface Props {
	tags?: string[];
	revalidate?: number;
	searchParams?: Record<string, string | number | undefined>;
}
export const TraktGet = async (uri: string, { tags, revalidate = 3600, searchParams }: Props) => {
	const url = new URL(`https://api.trakt.tv${uri}`);
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
