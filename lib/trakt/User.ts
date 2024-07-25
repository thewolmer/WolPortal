import type { RatingsItem, RecentMoviesItem, RecentShowsItem, StatsItem, WatchlistItem } from '@/types/trakt';
import { TraktGet } from './helper';

type paginationProps = {
	page?: number;
	limit?: number;
};

export const getStats = async (): Promise<StatsItem | undefined> => {
	try {
		const res = await TraktGet('/users/thewolmer/stats', {
			revalidate: 3600,
		});
		if (!res.ok) return;
		return res.json();
	} catch (error) {
		console.log(error);
		return;
	}
};

export const getRecentMovies = async ({
	page = 1,
	limit = 15,
}: paginationProps): Promise<RecentMoviesItem[] | undefined> => {
	try {
		const res = await TraktGet('/users/thewolmer/history/movies', {
			revalidate: 3600,
			searchParams: {
				page,
				limit,
			},
		});
		if (!res.ok) return;
		return res.json();
	} catch (error) {
		console.log(error);
		return;
	}
};

export const getRecentShows = async ({
	page = 1,
	limit = 15,
}: paginationProps): Promise<RecentShowsItem[] | undefined> => {
	try {
		const res = await TraktGet('/users/thewolmer/watched/shows', {
			revalidate: 3600,
			searchParams: {
				extended: 'noseasons',
			},
		});
		if (!res.ok) return;
		const unsorted = await res.json();
		return unsorted.slice(0, limit);
	} catch (error) {
		console.log(error);
		return;
	}
};

interface WatchlistProps extends paginationProps {
	type?: 'movies' | 'shows' | 'seasons ' | 'episodes' | 'all';
	sort?: 'added' | 'rank' | 'title' | 'released' | 'runtime' | 'popularity' | 'percentage' | 'votes';
}

export const getWatchList = async ({
	page = 1,
	limit = 15,
	type = 'all',
	sort = 'added',
}: WatchlistProps): Promise<WatchlistItem[] | undefined> => {
	try {
		const res = await TraktGet(`/users/thewolmer/watchlist/${type}/${sort}`, {
			revalidate: 3600,
			searchParams: {
				page,
				limit,
			},
		});
		if (!res.ok) return;
		return res.json();
	} catch (error) {
		console.log(error);
		return;
	}
};

interface RatingsProps extends paginationProps {
	type?: 'movies' | 'shows' | 'seasons ' | 'episodes' | 'all';
	rating: string;
}

export const getRatings = async ({
	page = 1,
	limit = 15,
	type = 'all',
	rating,
}: RatingsProps): Promise<RatingsItem[] | undefined> => {
	try {
		const res = await TraktGet(`/users/thewolmer/ratings/${type}/${rating}`, {
			revalidate: 3600,
			searchParams: {
				page,
				limit,
			},
		});
		if (!res.ok) return;
		const unsorted = await res.json();

		// sort by rating in dec order
		const sorted = unsorted.sort((a: RatingsItem, b: RatingsItem) => b.rating - a.rating);
		return sorted;
	} catch (error) {
		console.log(error);
		return;
	}
};
