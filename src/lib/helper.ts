// const headers = { 'X-Api-Key': env.ARMOBOT_API_KEY as string, 'Content-Type': 'application/json' };

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
interface Props {
  tags?: string[];
  revalidate?: number;
  searchParams?: Record<string, string | number | undefined>;
}
export const getNotion = async (uri: string, { tags, revalidate = 0, searchParams }: Props) => {
  const url = new URL(`${baseUrl}${uri}`);
  if (searchParams) {
    for (const param of Object.keys(searchParams)) {
      const value = searchParams[param];
      if (value) {
        url.searchParams.append(param, value.toString());
      }
    }
  }
  return await fetch(url.toString(), {
    // headers,
    next: { revalidate, tags },
  });
};
