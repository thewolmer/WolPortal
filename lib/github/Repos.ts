'use server';
import { github } from '@/constants/global';

import type { Contributor } from '@/types/Contributor';
import type { Repos } from '@/types/Repos';
import { GithubGet } from './helper';

export const getRepos = async (): Promise<Repos[] | undefined> => {
	try {
		const res = await GithubGet(`/users/${github}/repos`, {
			revalidate: 0,
			searchParams: { sort: 'pushed', direction: 'desc' },
		});

		if (!res.ok) return;

		const data = await res.json();

		return data;
	} catch (error: unknown) {
		console.error(error);
		return;
	}
};

export const getRepoByName = async (repo: string): Promise<Repos | undefined> => {
	try {
		const res = await GithubGet(`/repos/${github}/${repo}`, {});

		if (!res.ok) return;

		const data = await res.json();

		return data;
	} catch (error: unknown) {
		console.error(error);
		return;
	}
};
export const getRepoContributors = async (repo: string): Promise<Contributor[] | undefined> => {
	try {
		const res = await GithubGet(`/repos/${github}/${repo}/contributors`, {});

		if (!res.ok) return;

		const data = await res.json();

		return data;
	} catch (error: unknown) {
		console.error(error);
		return;
	}
};

export const getRepoReadMe = async (repo: string): Promise<unknown | undefined> => {
	const headers = {
		Accept: 'application/vnd.github.html+json',
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	};
	try {
		const res = await fetch(`https://api.github.com/repos/thewolmer/${repo}/readme`, {
			headers,
		});
		if (!res.ok) return;
		return res.text();
	} catch (error: unknown) {
		console.error(error);
		return;
	}
};
