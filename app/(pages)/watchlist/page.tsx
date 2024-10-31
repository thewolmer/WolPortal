import Header from '@/components/Layout/Header';

import React from 'react';

import { generateSeo } from '@/utils/generateSeo';
import { Attribution } from './components/Attribution';
import { Stats } from './components/Cards/Stats';
import { RecentMoviesComponent } from './components/RecentMoviesComponent';
import { RecentShowsComponent } from './components/RecentShowsComponent';
import { TopRatedComponent } from './components/TopRatedComponents';
import { WatchlistComponent } from './components/WatchListComponent';

export const generateMetadata = () =>
	generateSeo({
		title: 'Watchlist // WolPortal',
		description: 'A track of watched movies, shows and a watchlist.',
		url: '/watchlist',
	});

const page = async () => {
	return (
		<>
			<Header title="Movies and Shows" description="Track of my watched movies, TV shows and Watchlist" />
			<section className="no-select flex min-h-screen flex-col gap-16">
				<RecentMoviesComponent />
				<RecentShowsComponent />
				<Stats />
				<WatchlistComponent />
				<TopRatedComponent />
				<Attribution />
			</section>
		</>
	);
};

export default page;
