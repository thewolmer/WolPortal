import React from 'react';

import { getTopTracks } from '@api/spotify';
import ErrorComponent from '@module/ErrorComponent';
import Header from '@module/Header';
import { generateSeo } from '@util/generateSeo';

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
  // console.log(response);

  if (!response) {
    return <ErrorComponent />;
  }

  return (
    <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12">
      <Header title="Songs" description="My top songs activity on Spotify." />
      <NowPlaying />
      <TopTracks />
      <TopArtists />
    </main>
  );
};

export default Page;
