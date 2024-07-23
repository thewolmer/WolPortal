import { PopcornIcon } from '@/components/icons/popcorn';
import { Tv02Icon } from '@/components/icons/tv';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getStats } from '@/lib/trakt/User';
import { formatMinutes } from '@/utils/FormatMinutes';
import { formatDuration, minutesToHours } from 'date-fns';
import React from 'react';

export const Stats = async () => {
	const stats = await getStats();
	if (!stats) {
		return <div>Failed to load stats</div>;
	}
	return (
		<Card>
			<CardHeader className="flex flex-row justify-between">
				<div className="flex items-center justify-center gap-2">
					<PopcornIcon width={50} height={50} className="text-2xl text-pink-500" />
					<div className="flex flex-col">
						<span>Movie Watchtime</span>
						<span className="text-muted-foreground text-sm">{formatMinutes(stats?.movies.minutes)}</span>
						<span className="text-muted-foreground text-sm">Total {stats.movies.watched} Movies</span>
					</div>
				</div>
				<div className="flex items-center justify-center gap-2">
					<Tv02Icon width={50} height={50} className="text-2xl text-green-500" />
					<div className="flex flex-col">
						<span>Shows Watchtime</span>
						<span className="text-muted-foreground text-sm">{formatMinutes(stats?.episodes.minutes)}</span>
						<span className="text-muted-foreground text-sm">Total {stats.shows.watched} Movies</span>
					</div>
				</div>
				<div />
				<div />
			</CardHeader>
		</Card>
	);
};
