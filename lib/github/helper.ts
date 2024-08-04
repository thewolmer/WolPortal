const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.GITHUB_TOKEN}` };

interface Props {
	tags?: string[];
	revalidate?: number;
	searchParams?: Record<string, string | number | undefined>;
}
export const GithubGet = async (uri: string, { tags, revalidate = 3600, searchParams }: Props) => {
	const url = new URL(`https://api.github.com${uri}`);
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
