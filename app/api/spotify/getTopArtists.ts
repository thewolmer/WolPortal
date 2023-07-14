import { Artists } from '@type/Artists';

const apiUrl = process.env.SPOTIFY_API_URL;

export const getTopArtists = async (): Promise<Artists[] | undefined> => {
  const res = await fetch(`https://${apiUrl}/usersTop?type=artists&time_range=medium_term&perPage=10&page=1`, {
    next: { revalidate: 21600 },
  });

  if (!res.ok) return;

  const data = await res.json();

  return data.items;
};
