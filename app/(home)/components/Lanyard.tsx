'use client';

import React, { Suspense, useEffect, useState } from 'react';

import { getDiscordStatus } from '@/lib/discord';

import type { Lanyard } from '@/types/Lanyard';

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
			const artistSliced = artist?.split(';').slice(0, 2).join(';');
			return (
				<div className="flex items-center gap-2 text-wolgray ">
					<span className="flex animate-pulse items-center justify-center">
						<i className="bx bxl-spotify text-2xl text-[#4eef3c]" />
					</span>

					<p className="nowrap space-x-2 overflow-hidden text-ellipsis">
						<span>Listening to</span>
						<span className="font-bold">{song}</span> by
						<span className="">{artistSliced}</span>
					</p>
				</div>
			);
		}
		switch (status?.discord_status) {
			case 'online':
				return (
					<div className="flex items-center gap-2 text-wolgray">
						<i className="bx bx-radio-circle-marked animate-pulse text-2xl text-[#3ba45c]" />
						<p className="inline">
							<span className="animate-pulse "> Online </span>
							on discord
						</p>
					</div>
				);
			case 'idle':
				return (
					<div className="flex items-center gap-2 text-wolgray">
						<i className="bx bxs-moon animate-pulse text-2xl text-[#faa61a] text-md" />
						<p className="inline">
							<span className="animate-pulse "> AKF </span>
							on discord
						</p>
					</div>
				);
			case 'dnd':
				return (
					<div className="flex items-center gap-2 text-wolgray">
						<i className="bx bx-radio-circle animate-pulse text-2xl text-[#e64821] text-md" />
						<p className="inline">
							<span className="">DND on discord</span>
						</p>
					</div>
				);
			default:
				return (
					<div className="flex items-center gap-2 text-wolgray">
						<i className="bx bx-radio-circle animate-pulse text-2xl text-[#747f8d] text-md" />
						<p className="inline">
							<span className="">Offline</span>
						</p>
					</div>
				);
		}
	};

	return (
		<div>
			{loading ? (
				<div className="flex animate-pulse space-x-2 pt-2">
					<div className="ml-1 inline-flex animate-pulse rounded-full bg-neutral-700 p-2" />
					<div className="inline-flex animate-pulse rounded-full bg-neutral-700 px-14 py-2" />
				</div>
			) : (
				<Suspense
					fallback={
						<div className="flex animate-pulse space-x-2 pt-2">
							<div className="ml-1 inline-flex animate-pulse rounded-full bg-neutral-700 p-2" />
							<div className="inline-flex animate-pulse rounded-full bg-neutral-700 px-14 py-2" />
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
