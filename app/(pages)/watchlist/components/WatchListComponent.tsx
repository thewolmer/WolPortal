import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getWatchList } from '@/lib/trakt/User';

import type { WatchlistMovieItem, WatchlistShowItem } from '@/types/trakt';
import { MovieCard } from './cards/MovieCard';
import { ShowCard } from './cards/ShowCard';

export const WatchlistComponent = async () => {
	const res = await getWatchList({ limit: 15 });
	if (!res) {
		return <div>Failed to load movies</div>;
	}

	return (
		<div>
			<h3 className="px-4 font-bold font-mono text-lg text-primary">Watchlist</h3>
			<Carousel className="w-full ">
				<CarouselContent className="-ml-1 w-full">
					{res.map((item) => {
						if (item.type === 'show') {
							const show = item as WatchlistShowItem;
							return (
								<CarouselItem key={show.show?.ids.tmdb} className="w-full pl-1 md:basis-1/2 lg:basis-1/3">
									<div className="p-1">
										<ShowCard key={show.show.ids.trakt} show={show} />
									</div>
								</CarouselItem>
							);
						}
						if (item.type === 'movie') {
							const movie = item as WatchlistMovieItem;
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
