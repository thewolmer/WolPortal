import { Link } from '@/components/Link';
import { Tooltip } from '@/components/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { getRepoCommits } from '@/lib/github/Commits';
import { formatDate, formatDistance } from 'date-fns';
import { CalendarIcon, GitCommitVerticalIcon, Github, UserIcon } from 'lucide-react';
import React from 'react';

export const CommitsAccordion = async ({ name }: { name: string }) => {
	let page = 1;
	let activity = await getRepoCommits(name, { page: 1 });
	const handleNext = async () => {
		page++;
		activity = await getRepoCommits(name, { page });
	};
	if (!activity)
		return (
			<Card className="w-full">
				<Accordion type="single" collapsible className="w-full p-4">
					<AccordionItem value="item-1">
						<AccordionTrigger> Recent Commits</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-5">
							<p className="text-destructive text-sm"> !! Failed to fetch commits for this repo.</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Card>
		);
	return (
		<Card className="w-full">
			<Accordion type="single" collapsible className="w-full p-4">
				<AccordionItem value="item-1">
					<AccordionTrigger> Recent Commits</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-5">
						{activity.map((commit) => (
							<div key={commit.node_id} className="space-y-4 text-sm">
								<div className="space-y-2">
									<div className="flex w-full flex-col items-start text-muted-foreground">
										<div className="flex w-full items-center justify-start gap-1 md:w-fit">
											<UserIcon className="h-4 w-4" />
											<span>{commit.commit.author.name}</span>
										</div>
										<div className="flex w-full items-center justify-start gap-1">
											<CalendarIcon className="h-3 w-3" />
											<Tooltip content={formatDate(commit.commit.author.date, 'PPpp')}>
												<span className="text-xs capitalize">
													{formatDistance(commit.commit.author.date, new Date(), { addSuffix: true })}
												</span>
											</Tooltip>
										</div>
									</div>
									<div className="flex items-center gap-2 text-wrap">
										<div className="flex">
											<GitCommitVerticalIcon className="h-4 w-4 text-muted-foreground" />
										</div>
										<Link
											className="line-clamp-5 text-balance text-accent-foreground underline underline-offset-4"
											href={commit.html_url}
										>
											{commit.commit.message}
										</Link>
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
