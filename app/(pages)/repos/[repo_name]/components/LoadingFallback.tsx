import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CalendarIcon, GitCommitVerticalIcon, UserIcon } from 'lucide-react';

export const ChartSkeleton = () => {
	return (
		<Card>
			<CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
				<div className="grid flex-1 gap-1 text-center sm:text-left">
					<CardTitle className="font-mono">Repository Activity</CardTitle>
					<CardDescription className="font-mono">
						Showing total commits since the creation of this repo.
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<div className="aspect-auto h-[250px] w-full">
					<Skeleton className="h-full" />
				</div>
			</CardContent>
		</Card>
	);
};

export const ContributorsSkeleton = () => {
	return (
		<div className="">
			<h4 className="mb-2 font-mono">Contributors</h4>
			<div className="flex flex-wrap gap-2">
				{[1, 2, 3].map((index) => (
					<Skeleton key={index} className="h-[30px] w-[30px] rounded-full" />
				))}
			</div>
		</div>
	);
};

export const ReadmeSkeleton = () => {
	const skeletons = Array.from({ length: 20 }, () => Math.floor(Math.random() * 41) + 60);
	return (
		<div className='flex w-full flex-col gap-5 md:w-4/6'>
			<h2 className="font-bold font-mono text-primary text-xl">README.md</h2>
			<article className="mx-auto w-full space-y-2">
				<Skeleton className="h-8 w-full" />
				{skeletons.map((width, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Skeleton key={index} className={' h-4 w-full'} style={{ width: `${width}%` }} />
				))}
			</article>
		</div>
	);
};

export const CommitsAccordionSkeleton = () => {
	return (
		<Card className="w-full">
			<Accordion type="single" collapsible className="w-full p-4">
				<AccordionItem value="item-1">
					<AccordionTrigger> Recent Commits</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-5">
						{[1, 2, 3, 4, 5].map((commit) => (
							<div key={commit} className="space-y-4 text-sm">
								<div className="space-y-2">
									<div className="flex w-full flex-col items-start text-muted-foreground">
										<div className="flex w-full items-center justify-start gap-1 md:w-fit">
											<UserIcon className="h-4 w-4" />
											<Skeleton className="h-2 w-6" />
										</div>
										<div className="flex w-full items-center justify-start gap-1">
											<CalendarIcon className="h-3 w-3" />

											<span className="text-xs capitalize">
												<Skeleton className="h-2 w-6" />
											</span>
										</div>
									</div>
									<div className="flex items-center gap-2 text-wrap">
										<div className="flex">
											<GitCommitVerticalIcon className="h-4 w-4 text-muted-foreground" />
										</div>
										<Skeleton className="h-2 w-20" />
										<Skeleton className="h-2 w-20" />
										<Skeleton className="h-2 w-20" />
									</div>
								</div>
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	);
};
