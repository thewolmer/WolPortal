import Header from '@/components/Layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
	ChartSkeleton,
	CommitsAccordionSkeleton,
	ContributorsSkeleton,
	ReadmeSkeleton,
} from './components/LoadingFallback';

export default function Loading() {
	return (
		<>
			<Header title={'thewolmer/'} description="About the repo" />
			<section className="flex min-h-screen flex-col gap-5">
				<ChartSkeleton />

				<section className='flex w-full flex-col justify-between gap-5 md:flex-row'>
					<ReadmeSkeleton />
					<div className='flex w-full flex-col gap-5 md:w-2/6'>
						<Card>
							<CardHeader>
								<CardTitle className="font-mono text-lg">
									<Skeleton className="h-4 w-[90%]" />
								</CardTitle>
								<CardDescription className="space-y-2">
									<Skeleton className="h-3 w-[80%]" />
									<Skeleton className="h-3 w-[70%]" />
									<Skeleton className="h-3 w-[85%]" />
									<Skeleton className="h-3 w-[85%]" />
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-5">
								<div className="flex flex-col gap-2 text-sm *:flex *:flex-row *:justify-between">
									<div>
										<span>Stars:</span>{' '}
										<span>
											<Skeleton className="h-3 w-6" />
										</span>
									</div>
									<div>
										<span> Language: </span>
										<span>
											<Skeleton className="h-3 w-6" />
										</span>
									</div>
								</div>
								<ContributorsSkeleton />

								<div className="mx-auto flex w-1/2 flex-col items-center justify-center gap-3">
									<Skeleton className="h-6 w-[100%]" />
									<Skeleton className="h-6 w-[100%]" />
								</div>
							</CardContent>
						</Card>
						<CommitsAccordionSkeleton />
					</div>
				</section>
			</section>
		</>
	);
}
