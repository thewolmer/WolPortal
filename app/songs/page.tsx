import React from 'react';

import { getTopTracks } from '@api/spotify';
import { Image } from '@element/Image';
import { Link } from '@element/Link';
import ErrorComponent from '@module/ErrorComponent';
import Header from '@module/Header';

import { Tracks } from '@type/Tracks';

import NowPlaying from './components/NowPlaying';

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
      <section className="flex flex-col">
        <h1 className="py-5 text-3xl font-bold text-center text-wolgray">TOP PLAYED</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {response.map((item: Tracks) => (
            <Link href={item.external_urls.spotify} key={item.id} rel="noreferrer noopener">
              <div className="flex justify-between h-full p-4 transition-colors rounded-lg cursor-pointer linked-white focus-ring text-neutral-500 bg-neutral-800/40">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="items-center text-wolwhite text-md display-inline"> {item.name}</h3>
                  </div>
                  <p className="ml-2 text-neutral-500">
                    by {Array.isArray(item.artists) ? item.artists[0].name : item.artists.name}
                  </p>
                </div>

                <div className="items-center inline-block mt-2 ">
                  <Image
                    src={item.album.images[2].url}
                    width={50}
                    height={50}
                    alt={item.album.name}
                    className="rounded-md shadow- 4xl opacity-70 w-64px"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
