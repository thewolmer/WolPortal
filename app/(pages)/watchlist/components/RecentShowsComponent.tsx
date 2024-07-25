import React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getRecentShows } from '@/lib/trakt/User';

import { ShowCard } from './cards/ShowCard';

export const RecentShowsComponent = async () => {
	const shows = await getRecentShows({});
	if (!shows) {
		return <div>Failed to load movies</div>;
	}
	return (
		<div>
			<h3 className="px-4 font-bold font-mono text-lg text-primary">Recently Watched TV Shows</h3>
			<Carousel className="w-full ">
				<CarouselContent className="-ml-1 w-full">
					{shows.map((show) => {
						return (
							<CarouselItem key={show.show.ids.tmdb} className="w-full pl-1 md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<ShowCard key={show.show.ids.trakt} show={show} />
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};
