import { githubUsername } from '@constant/index';

import { Lanyard } from '@type/Lanyard';

export const getRepos = async (): Promise<Lanyard | undefined> => {
  const res = await fetch(`https://api.github.com/users/${githubUsername}/repos`, {
    cache: 'no-store',
  });

  if (!res.ok) return;

  const data = await res.json();

  return data;
};
