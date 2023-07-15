import { discord } from '@constant/global';

import { Spotify } from '@type/Lanyard';

export const getNowPlaying = async (): Promise<Spotify | undefined> => {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${discord}`, {
    cache: 'no-store',
  });

  if (!res.ok) return;

  const data = await res.json();

  return data.data.spotify;
};
