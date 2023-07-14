'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { getDiscordStatus } from '@api/discord';

import { Lanyard } from '@type/Lanyard';

const LanyardComponent = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<Lanyard | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiscordStatus();
      setStatus(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderStatus = () => {
    if (status?.listening_to_spotify) {
      const { artist, song, album } = status.spotify;
      return (
        <div className="flex items-center gap-2 text-wolgray ">
          <span className="flex items-center justify-center animate-pulse">
            <i className="text-2xl bx bxl-spotify text-[#4eef3c]" aria-hidden="true"></i>
          </span>

          <p className="space-x-2 overflow-hidden nowrap text-ellipsis">
            <span>Listening to</span>
            <span className="font-bold">{song}</span> by
            <span className="">{artist.length > 22 ? `${artist.slice(0, 22)}...` : artist}</span>
          </p>
        </div>
      );
    } else {
      switch (status?.discord_status) {
        case 'online':
          return (
            <div className="flex items-center gap-2 text-wolgray">
              <i className="text-2xl bx bx-radio-circle-marked animate-pulse text-[#3ba45c]"></i>
              <p className="inline">
                <span className="animate-pulse "> Online </span>
                on discord
              </p>
            </div>
          );
        case 'idle':
          return (
            <div className="flex items-center gap-2 text-wolgray">
              <i className="text-2xl bx bxs-moon text-md animate-pulse text-[#faa61a]"></i>
              <p className="inline">
                <span className="animate-pulse "> AKF </span>
                on discord
              </p>
            </div>
          );
        case 'dnd':
          return (
            <div className="flex items-center gap-2 text-wolgray">
              <i className="text-2xl bx bx-radio-circle text-md animate-pulse text-[#e64821]"></i>
              <p className="inline">
                <span className="">DND on discord</span>
              </p>
            </div>
          );
        default:
          return (
            <div className="flex items-center gap-2 text-wolgray">
              <i className="text-2xl bx bx-radio-circle text-md animate-pulse text-[#747f8d]"></i>
              <p className="inline">
                <span className="">Offline</span>
              </p>
            </div>
          );
      }
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex pt-2 space-x-2 animate-pulse">
          <div className="inline-flex p-2 ml-1 rounded-full bg-neutral-700 animate-pulse"></div>
          <div className="inline-flex py-2 rounded-full bg-neutral-700 px-14 animate-pulse"></div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex pt-2 space-x-2 animate-pulse">
              <div className="inline-flex p-2 ml-1 rounded-full bg-neutral-700 animate-pulse"></div>
              <div className="inline-flex py-2 rounded-full bg-neutral-700 px-14 animate-pulse"></div>
            </div>
          }
        >
          {renderStatus()}
        </Suspense>
      )}
    </div>
  );
};

export default LanyardComponent;
