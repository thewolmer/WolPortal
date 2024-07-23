export interface StatsItem {
	movies: MoviesStatsItem;
	shows: ShowsStatsItem;
	seasons: SeasonsStatsItem;
	episodes: EpisodesStatsItem;
	network: NetworkStatsItem;
	ratings: RatingsStatsItem;
}

interface MoviesStatsItem {
	plays: number;
	watched: number;
	minutes: number;
	collected: number;
	ratings: number;
	comments: number;
}

interface ShowsStatsItem {
	watched: number;
	collected: number;
	ratings: number;
	comments: number;
}

interface SeasonsStatsItem {
	ratings: number;
	comments: number;
}

interface EpisodesStatsItem {
	plays: number;
	watched: number;
	minutes: number;
	collected: number;
	ratings: number;
	comments: number;
}

interface NetworkStatsItem {
	friends: number;
	followers: number;
	following: number;
}

interface RatingsStatsItem {
	total: number;
	distribution: DistributionStatsItem;
}

interface DistributionStatsItem {
	'1': number;
	'2': number;
	'3': number;
	'4': number;
	'5': number;
	'6': number;
	'7': number;
	'8': number;
	'9': number;
	'10': number;
}
