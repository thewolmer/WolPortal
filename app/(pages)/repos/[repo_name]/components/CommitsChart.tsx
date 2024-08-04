'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import type { CommitType } from '@/types/github/Commit';

export const getCommitsCountPerDate = (commits: CommitType[]) => {
	const commitCounts: Record<string, number> = {};

	const reversedCommits = commits.reverse();

	for (const commit of reversedCommits) {
		const date = commit.commit.author.date.split('T')[0];
		commitCounts[date] = (commitCounts[date] || 0) + 1;
	}

	return Object.entries(commitCounts).map(([date, commits]) => ({ date, commits }));
};

const chartConfig = {
	commits: {
		label: 'Commits',
	},
} satisfies ChartConfig;

export function CommitsChart({ data }: { data: CommitType[] }) {
	const filteredData = getCommitsCountPerDate(data);
	return (
		<Card>
			<CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
				<div className="grid flex-1 gap-1 text-center sm:text-left">
					<CardTitle className="font-mono text-sm md:text-base">Repository Activity</CardTitle>
					<CardDescription className="font-mono">
						Showing total commits since the creation of this repo.
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value: string) => {
								const date = new Date(value);
								return date.toLocaleDateString('en-IN', {
									month: 'short',
									day: 'numeric',
									year: '2-digit',
								});
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={(value: string) => {
										return new Date(value).toLocaleDateString('en-IN', {
											month: 'short',
											day: 'numeric',
											year: '2-digit',
										});
									}}
									indicator="dot"
								/>
							}
						/>
						<Area
							dataKey="commits"
							type="monotone"
							fill="hsl(var(--background)"
							stroke="hsl(var(--primary))"
							stackId="a"
						/>

						<ChartLegend content={<ChartLegendContent />} />
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
