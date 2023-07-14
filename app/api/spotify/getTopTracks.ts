import { Tracks } from '@type/Tracks';

const apiUrl = process.env.SPOTIFY_TOKEN;

export const getTopTracks = async (): Promise<Tracks[] | undefined> => {
  const res = await fetch(`https://${apiUrl}/usersTop?type=tracks&time_range=short_term&perPage=10&page=1`, {
    next: { revalidate: 21600 },
  });

  if (!res.ok) return;

  const data = await res.json();

  return data.items;
};
