import React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getRecentMovies } from '@/lib/trakt/User';
import { MovieCard } from './MovieCard';

export const RecentMoviesComponent = async () => {
	const movies = await getRecentMovies({ limit: 30 });
	if (!movies) {
		return <div>Failed to load movies</div>;
	}
	return (
		<div>
			<h3 className="px-4 font-bold font-mono text-lg text-primary">Recently Watched Movies</h3>
			<Carousel className="w-full ">
				<CarouselContent className="-ml-1 w-full">
					{movies.map((movie) => {
						return (
							<CarouselItem key={movie.id} className="w-full pl-1 md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<MovieCard key={movie.movie.ids.trakt} movie={movie} />
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
