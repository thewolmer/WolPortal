import React from 'react';

import Header from '@/components/Layout/Header';
import ErrorComponent from '@/components/Modules/ErrorComponent';
import { getTopTracks } from '@/lib/spotify';
import { generateSeo } from '@/utils/generateSeo';

import NowPlaying from './components/NowPlaying';
import TopArtists from './components/TopArtists';
import TopTracks from './components/TopTracks';

export const generateMetadata = () =>
	generateSeo({
		title: 'WolPortal // Songs',
		description: 'Explore the collection of most played songs by Wolmer. Discover his musical tastes and favorites.',
		url: '/songs',
	});

const Page = async () => {
	const response = await getTopTracks();

	if (!response) {
		return <ErrorComponent />;
	}

	return (
		<>
			<Header title="Songs" description="My top songs activity on Spotify." />
			<NowPlaying />
			<TopTracks />
			<TopArtists />
		</>
	);
};

export default Page;
