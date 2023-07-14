import axios, { AxiosError } from 'axios';

import { github } from '@constant/index';

import { Repos } from '@type/Repos';

interface ErrorResponse {
  status: number;
  statusText: string;
}

export const getRepos = async (): Promise<Repos[] | undefined> => {
  try {
    const response = await axios.get(`https://api.github.com/users/${github}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
      },
    });

    const { data } = response;

    return data;
  } catch (error: any) {
    // const { status, statusText } = error.response;
    console.error(error);
    return;
  }
};
