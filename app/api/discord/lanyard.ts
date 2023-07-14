import { discordId } from '@constant/index';

import { Lanyard } from '@type/Lanyard';

export const getDiscordStatus = async (): Promise<Lanyard | undefined> => {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`, {
    cache: 'no-store',
  });

  if (!res.ok) return;

  const data = await res.json();

  return data.data;
};
