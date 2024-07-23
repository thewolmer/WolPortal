import Header from '@/components/Layout/Header';

import React from 'react';
import { RecentMoviesComponent } from './components/RecentMoviesComponent';
import { RecentShowsComponent } from './components/RecentShowsComponent';
import { Stats } from './components/Stats';
import { TopRatedComponent } from './components/TopRatedComponents';
import { WatchlistComponent } from './components/WatchListComponent';

const page = async () => {
	return (
		<>
			<Header title="Movies and Shows" description="Track of my watched movies, TV shows and Watchlist" />
			<section className="flex min-h-screen flex-col gap-16">
				<RecentMoviesComponent />
				<RecentShowsComponent />
				<Stats />
				<WatchlistComponent />
				<TopRatedComponent />
			</section>
		</>
	);
};

export default page;
