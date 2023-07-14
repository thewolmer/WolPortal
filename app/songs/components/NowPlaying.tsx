'use client';
import { useEffect, useState } from 'react';

import { getNowPlaying } from '@api/spotify/getNowPlaying';
import { Image } from '@element/Image';

import { Spotify } from '@type/Lanyard';

const NowPlaying = () => {
  const [spotifyData, setSpotifyData] = useState<Spotify | undefined>(undefined);

  const fetchNowPlaying = async () => {
    const response = await getNowPlaying();
    setSpotifyData(response);
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  const artists = spotifyData?.artist.split(';').slice(0, 2).join(';');

  if (spotifyData === null) {
    return (
      <div className="relative px-10 shadow-2xl h-28 rounded-2xl bg-default">
        <h2 className="flex justify-center p-2 font-extrabold text-center uppercase text-wolgray">
          Currently Not Listening on Spotify
        </h2>
        <div className="absolute bottom-0 right-0 z-0 flex items-center align-middle opacity-20">
          <i className="align-middle text-7xl bx bxl-spotify" aria-hidden="true"></i>
        </div>
      </div>
    );
  }

  return (
    <>
      {spotifyData ? (
        <div className="relative pl-20 shadow-2xl h-28 md:px-10 rounded-2xl bg-default ">
          <h2 className="flex justify-end p-2 text-sm font-extrabold text-center uppercase md:justify-center md:text-md text-wolgray">
            Now Listening on Spotify
          </h2>
          <div>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto tracking-wide text-center md:text-base  text-neutral-300">
              <h3 className="text-sm text-wolgray">{artists}</h3>
              <h3 className="text-wolwhite">{spotifyData.song}</h3>
            </div>
          </div>
          <div className="absolute top-0 left-0 ">
            <Image
              src={spotifyData.album_art_url}
              width={112}
              height={112}
              priority
              alt={spotifyData.album}
              className="opacity-80 rounded-l-2xl"
            />
          </div>
          <div className="absolute bottom-0 right-0 z-0 flex items-center align-middle animate-pulse">
            <i className="md:text-7xl text-4xl bx bxl-spotify align-middle text-[#737366]/20" aria-hidden="true"></i>
          </div>
        </div>
      ) : (
        <div className="relative px-10 shadow-2xl h-28 rounded-2xl bg-default animate-pulse">
          <div className="absolute w-[112px] h-[112px] bg-neutral-800 animate-pulse  top-0 left-0 rounded-l-2xl "></div>
        </div>
      )}
    </>
  );
};

export default NowPlaying;
