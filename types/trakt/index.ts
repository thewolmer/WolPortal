export * from './stats';
interface BaseItem {
	id: number;
	type: 'movie' | 'show';
}

type Ids = {
	trakt: number;
	slug: string;
	tvdb: number | null;
	imdb: string;
	tmdb: number;
	tvrage: number | null;
};

interface ShowItem extends BaseItem {
	show: {
		title: string;
		year: number;
		ids: Ids;
	};
}

interface MovieItem extends BaseItem {
	movie: {
		title: string;
		year: number;
		ids: Ids;
	};
}

type Item = ShowItem | MovieItem;

export type WatchlistItem = Item & {
	rank: number;
	listed_at: string;
	notes: string | null;
};

export type RecentMoviesItem = MovieItem & {
	watched_at: string;
	action: 'watch' | 'scrobble' | 'checkin';
};

export type RecentShowsItem = Omit<ShowItem, 'type' | 'id'> & {
	plays: number;
	last_watched_at: string;
	last_updated_at: string;
	reset_at: null;
};

export type RatingsItem = Omit<Item, 'id'> & {
	rated_at: string;
	rating: number;
};
