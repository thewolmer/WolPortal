'use client';
import { useEffect, useState } from 'react';

import { Image } from '@/components/Image';
import { getNowPlaying } from '@/lib/spotify/getNowPlaying';

import type { Spotify } from '@/types/Lanyard';

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
			<div className="relative h-28 rounded-2xl bg-default px-10 shadow-2xl">
				<h2 className="flex justify-center p-2 text-center font-extrabold text-wolgray uppercase">
					Currently Not Listening on Spotify
				</h2>
				<div className="absolute right-0 bottom-0 z-0 flex items-center align-middle opacity-20">
					{/* <i className="bx bxl-spotify align-middle text-7xl" /> */}
				</div>
			</div>
		);
	}

	return (
		<>
			{spotifyData ? (
				<div className="relative h-28 rounded-2xl bg-default pl-20 shadow-2xl md:px-10 ">
					<h2 className="flex justify-end p-2 text-center font-extrabold text-sm text-wolgray uppercase md:justify-center md:text-md">
						Now Listening on Spotify
					</h2>
					<div>
						<div className="mx-auto flex w-1/2 flex-col items-center justify-center text-center text-neutral-300 tracking-wide md:text-base">
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
							className="rounded-l-2xl opacity-80"
						/>
					</div>
					<div className="absolute right-0 bottom-0 z-0 flex animate-pulse items-center align-middle">
						{/* <i className="bx bxl-spotify align-middle text-4xl text-[#737366]/20 md:text-7xl" /> */}
					</div>
				</div>
			) : (
				<div className="relative h-28 animate-pulse rounded-2xl bg-default px-10 shadow-2xl">
					<div className="absolute top-0 left-0 h-[112px] w-[112px] animate-pulse rounded-l-2xl bg-neutral-800 " />
				</div>
			)}
		</>
	);
};

export default NowPlaying;
