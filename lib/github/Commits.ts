'use server';
import { github } from '@/constants/global';
import type { CommitType } from '@/types/github/Commit';
import { GithubGet } from './helper';

export const getRepoAllCommits = async (repo: string): Promise<CommitType[] | undefined> => {
	try {
		const commits: CommitType[] = [];
		let page = 1;
		while (true) {
			const res = await GithubGet(`/repos/${github}/${repo}/commits`, { searchParams: { page } });
			if (!res.ok) break;
			const data = await res.json();
			if (!data.length) break;
			commits.push(...data);
			page++;
		}
		const data = commits;
		return data;
	} catch (error: unknown) {
		console.error(error);
		return;
	}
};

type props = {
	page: number;
};
export const getRepoCommits = async (repo: string, { page }: props): Promise<CommitType[] | undefined> => {
	try {
		const data = await GithubGet(`/repos/${github}/${repo}/commits`, { searchParams: { page } });
		if (!data.ok) return;
		return await data.json();
	} catch (error: unknown) {
		console.error(error);
		return;
	}
};
