import { github } from '@constant/global';

import { Repos } from '@type/Repos';

export const getRepos = async (): Promise<Repos[] | undefined> => {
  try {
    const res = await fetch(`https://api.github.com/users/${github}/repos?sort=pushed&direction=desc`, {
      cache: 'no-store',
    });

    if (!res.ok) return;

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    console.error(error);
    return;
  }
};
