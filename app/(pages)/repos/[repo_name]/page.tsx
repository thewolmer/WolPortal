import Header from '@/components/Layout/Header';
import { Link } from '@/components/link';

import { Tooltip } from '@/components/tooltip';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getRepoByName } from '@/lib/github/Repos';
import { getLanguageIcon } from '@/utils/getLanguageIcon';
import clsx from 'clsx';
import { formatDate, formatDistance } from 'date-fns';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { ChartSection } from './components/ChartSection';
import { CommitsAccordion } from './components/CommitsAccordion';
import { ContributorsSection } from './components/ContributorsSection';
import { ChartSkeleton } from './components/LoadingFallback';
import { ContributorsSkeleton } from './components/LoadingFallback';
import { ReadmeSkeleton } from './components/LoadingFallback';
import { CommitsAccordionSkeleton } from './components/LoadingFallback';
import { ReadmeSection } from './components/ReadmeSection';

interface Props {
	params: {
		repo_name: string;
	};
}
const page = async ({ params }: Props) => {
	const name = params.repo_name;
	const data = await getRepoByName(name);
	if (!data) return notFound();

	return (
		<>
			<Header title={data.full_name} description="About the repo" />
			<section className="flex min-h-screen flex-col gap-5">
				<Suspense fallback={<ChartSkeleton />}>
					<ChartSection name={name} />
				</Suspense>
				<section className="flex w-full flex-col-reverse justify-between gap-5 md:flex-row">
					<Suspense fallback={<ReadmeSkeleton />}>
						<ReadmeSection name={name} />
					</Suspense>
					<div className="flex w-full flex-col gap-5 md:w-2/6">
						<Card>
							<CardHeader>
								<CardTitle className="font-mono text-lg">
									{data.name}{' '}
									{data.is_template && (
										<Tooltip content="This repository is a public template.">
											<Badge variant={'secondary'}> Template</Badge>
										</Tooltip>
									)}
									{data.fork && (
										<Tooltip content={`This repository is a not originally owned by ${data.owner.login}`}>
											<Badge variant={'secondary'}> Forked</Badge>
										</Tooltip>
									)}
								</CardTitle>
								<CardDescription>{data.description}</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-5">
								<div className="flex flex-col gap-2 text-muted-foreground text-sm *:flex *:flex-row *:justify-between">
									<div>
										<span> Language: </span> <span>{getLanguageIcon(data.language as string)}</span>
									</div>
									<div>
										<span> Last Update: </span>
										<span>
											<Tooltip content={formatDate(data.updated_at, 'PPpp')}>
												<span className="capitalize">
													{formatDistance(data.updated_at, new Date(), { addSuffix: true })}
												</span>
											</Tooltip>
										</span>
									</div>
									<div>
										<span>Stars:</span> <span>{data.watchers_count}</span>
									</div>
								</div>
								<Suspense fallback={<ContributorsSkeleton />}>
									<ContributorsSection name={name} />
								</Suspense>
								<div className="mx-auto flex w-1/2 flex-col items-center justify-center gap-3">
									<Link href={data.html_url} className={clsx(buttonVariants({ variant: 'ghost' }))}>
										<SiGithub size={22} /> <span className="ml-2">View on Github</span>
									</Link>
									{data.homepage && (
										<Link href={data.homepage} className={clsx(buttonVariants({ variant: 'outline' }))}>
											<MdOutlineArrowOutward size={22} /> <span className="ml-2">Visit Website</span>
										</Link>
									)}
								</div>
							</CardContent>
						</Card>
						<Suspense fallback={<CommitsAccordionSkeleton />}>
							<CommitsAccordion name={name} />
						</Suspense>
					</div>
				</section>
			</section>
		</>
	);
};
export default page;
