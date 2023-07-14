import { discordId } from '@constant/index';

import { Spotify } from '@type/Lanyard';

export const getNowPlaying = async (): Promise<Spotify | undefined> => {
  const res = await fetch('/api/spotify/', {
    cache: 'default',
  });

  if (!res.ok) return;

  const data = await res.json();

  return data.data.now_playing;
};
