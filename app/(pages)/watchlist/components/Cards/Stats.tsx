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
		<div className="flex w-full justify-between gap-5">
			<Card className="w-full">
				<CardHeader>
					<div className="flex items-center justify-center gap-2">
						<PopcornIcon width={50} height={50} className="text-2xl text-pink-500" />
						<div className="flex flex-col">
							<span className="font-semibold text-accent-foreground tracking-wider">Movies Watchtime</span>
							<span className="font-mono text-muted-foreground text-xs">{formatMinutes(stats?.movies.minutes)}</span>
							<span className="font-mono text-muted-foreground text-xs">Total {stats.movies.watched}* Movies</span>
						</div>
					</div>
				</CardHeader>
			</Card>
			<Card className="w-full">
				<CardHeader>
					<div className="flex flex-row-reverse items-center justify-center gap-2">
						<Tv02Icon width={50} height={50} className="text-2xl text-green-500" />
						<div className="flex flex-col">
							<span className="font-semibold text-accent-foreground tracking-wider">Shows Watchtime</span>
							<span className="font-mono text-muted-foreground text-xs">{formatMinutes(stats?.episodes.minutes)}</span>
							<span className="font-mono text-muted-foreground text-xs">Total {stats.shows.watched}* Shows</span>
						</div>
					</div>
				</CardHeader>
			</Card>
		</div>
	);
};
