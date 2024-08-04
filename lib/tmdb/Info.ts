import type { TMDBMovieInfo, TMDBTvInfo } from '@/types/tmdb/info';
import { TmdbGet } from './helper';

export const getInfo = async (type: 'tv' | 'movie', id: string): Promise<TMDBMovieInfo | TMDBTvInfo | undefined> => {
	try {
		const res = await TmdbGet(`/${type}`, {
			revalidate: 3600,
			searchParams: {
				id,
			},
		});
		if (!res.ok) return;
		console.log(res);
		return res.json();
	} catch (error) {
		console.error('Error fetching images:', error);
	}
};
