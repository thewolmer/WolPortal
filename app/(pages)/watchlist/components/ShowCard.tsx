'use client';

import { Image } from '@/components/image';
import { Tooltip } from '@/components/tooltip';
import { getImages } from '@/lib/tmdb/Images';
import type { RecentShowsItem } from '@/types/trakt';
import { formatDate, formatDistanceStrict } from 'date-fns';
import React from 'react';
import useSWR from 'swr';

export const ShowCard = ({ show }: { show: RecentShowsItem }) => {
	const swrKey = [`${show.show.ids.tmdb}`, 'movie', 'en', 'backdrops', 'w780'];

	const { data: image, error } = useSWR(swrKey, () =>
		getImages(show.show.ids.tmdb, {
			type: 'tv',
			language: 'en',
			image_type: 'backdrops',
			size: 'w780',
		}),
	);

	if (error) {
		console.error('Error fetching images:', error);
	}

	return (
		<div
			key={show.show.ids.trakt}
			className="group hover:-rotate-1 relative w-full rounded-lg shadow-2xl transition-all duration-300 ease-in-out"
		>
			<Image
				src={image?.src as string}
				alt={show.show.title ? show.show.title : 'Show'}
				width={image?.width ? image.width : 288}
				height={image?.height ? image.height : 177}
				className="rounded-lg md:aspect-auto md:h-[177px]"
			/>

			<div className="absolute bottom-0 z-10 h-full w-full rounded-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
				<div className="flex h-full w-full items-end rounded-lg bg-gradient-to-b from-background/10 via-background/50 to-background p-4">
					<div className="translate-y-6 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
						<h4 className="font-bold font-geist">{show.show.title}</h4>
						<p className="text-muted-foreground text-sm">{show.show.year}</p>
					</div>
				</div>
			</div>
			<div className="absolute top-1 right-2 z-20 rounded-lg bg-black/30 px-2 py-1 font-semibold text-white/80 text-xs backdrop-blur-md">
				<Tooltip content={formatDate(show.last_watched_at, 'PP')} className="text-sm">
					<span className="capitalize">
						{formatDistanceStrict(show.last_watched_at, new Date(), { addSuffix: true })}
					</span>
				</Tooltip>
			</div>
		</div>
	);
};
