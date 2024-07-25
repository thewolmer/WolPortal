'use client';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { StarIcon } from '@/components/icons/star';
import { Tooltip } from '@/components/tooltip';
import { useDetailsModel } from '@/hooks/use-details-model';
import { getImages } from '@/lib/tmdb/Images';
import { cn } from '@/lib/utils';
import type { RatingsShowItem, RecentShowsItem, WatchlistShowItem } from '@/types/trakt';
import { formatDate, formatDistanceStrict } from 'date-fns';
import React from 'react';
import useSWR from 'swr';

export const ShowCard = ({ show }: { show: RecentShowsItem | WatchlistShowItem | RatingsShowItem }) => {
	const swrKey = [`${show.show.ids.tmdb}`, 'movie', 'en', 'backdrops', 'w780'];

	const {
		data: image,
		isLoading,
		error,
	} = useSWR(
		swrKey,
		() =>
			getImages(show.show.ids.tmdb, {
				type: 'tv',
				language: 'en',
				image_type: 'backdrops',
				size: 'w780',
			}),
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			refreshWhenHidden: false,
			shouldRetryOnError: true,
		},
	);

	if (error) {
		console.error('Error fetching images:', error);
	}

	const onOpen = useDetailsModel((state) => state.onOpen);
	const isOpen = useDetailsModel((state) => state.isOpen);
	const onClose = useDetailsModel((state) => state.onClose);
	const setId = useDetailsModel((state) => state.setId);
	const setType = useDetailsModel((state) => state.setType);
	const handleClick = () => {
		setType('tv');
		setId(show.show.ids.tmdb);
		onOpen(!isOpen);
	};
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleClick}
			key={show.show.ids.trakt}
			className='group hover:-rotate-1 relative w-full cursor-pointer rounded-lg shadow-2xl transition-all duration-300 ease-in-out'
		>
			<Image
				src={isLoading ? '/images/fallback/fallback1.jpg' : (image?.src as string)}
				alt={show.show.title ? show.show.title : 'Show'}
				width={image?.width ? image.width : 288}
				height={image?.height ? image.height : 177}
				className={cn('rounded-lg md:aspect-auto md:h-[177px]', isLoading && 'opacity-50')}
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
				{(show as RecentShowsItem).last_watched_at && (
					<Tooltip
						align="end"
						content={`Watched: ${formatDate((show as RecentShowsItem).last_watched_at, 'PP')}`}
						className="text-sm"
					>
						<span className="capitalize">
							{formatDistanceStrict((show as RecentShowsItem).last_watched_at, new Date(), { addSuffix: true })}
						</span>
					</Tooltip>
				)}
				{(show as WatchlistShowItem).listed_at && (
					<Tooltip
						content={`Added: ${formatDate((show as WatchlistShowItem).listed_at, 'PP')}`}
						className="text-sm"
						align="end"
					>
						<span className="capitalize">Show</span>
					</Tooltip>
				)}
				{(show as RatingsShowItem).rated_at && (
					<Tooltip
						content={`Rated: ${formatDate((show as RatingsShowItem).rated_at, 'PP')}`}
						className="text-sm"
						align="end"
					>
						<span className="flex gap-1 capitalize">
							{(show as RatingsShowItem).rating}
							<StarIcon className="text-yellow-400" width={16} height={16} fill="#facc15" />
						</span>
					</Tooltip>
				)}
			</div>
		</div>
	);
};
