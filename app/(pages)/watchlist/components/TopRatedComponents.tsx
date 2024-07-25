import React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getRatings } from '@/lib/trakt/User';

import type { RatingsMovieItem, RatingsShowItem } from '@/types/trakt';
import { MovieCard } from './cards/MovieCard';
import { ShowCard } from './cards/ShowCard';

export const TopRatedComponent = async () => {
	const res = await getRatings({ rating: '10,9' });
	if (!res) {
		return <div>Failed to load movies</div>;
	}

	return (
		<div>
			<h3 className="px-4 font-bold font-mono text-lg text-primary">Top Rated Movies and Shows</h3>
			<Carousel className="w-full ">
				<CarouselContent className="-ml-1 w-full">
					{res.map((item) => {
						if (item.type === 'show') {
							const show = item as RatingsShowItem;
							return (
								<CarouselItem key={show.show?.ids.tmdb} className="w-full pl-1 md:basis-1/2 lg:basis-1/3">
									<div className="p-1">
										<ShowCard key={show.show.ids.trakt} show={show} />
									</div>
								</CarouselItem>
							);
						}
						if (item.type === 'movie') {
							const movie = item as RatingsMovieItem;
							return (
								<CarouselItem key={movie.movie.ids.tmdb} className="w-full pl-1 md:basis-1/2 lg:basis-1/3">
									<div className="p-1">
										<MovieCard key={movie.movie.ids.trakt} movie={movie} />
									</div>
								</CarouselItem>
							);
						}
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};
