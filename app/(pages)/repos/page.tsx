import Header from '@/components/Layout/Header';
import { Link } from '@/components/Link';
import ErrorComponent from '@/components/modules/ErrorComponent';
import { Tooltip } from '@/components/tooltip';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getRepos } from '@/lib/github/Repos';
import { generateSeo } from '@/utils/generateSeo';
import { getLanguageIcon } from '@/utils/getLanguageIcon';
import React from 'react';
import { RiGitRepositoryFill } from 'react-icons/ri';

export const generateMetadata = () =>
	generateSeo({
		title: 'WolPortal // Repos',
		description: 'Browse through public GitHub repositories of Wolmer. Explore projects, code, and contributions.',
		url: '/repos',
	});

const Page = async () => {
	const repos = await getRepos();

	if (!repos) {
		return (
			<main className="container mx-auto mb-10 min-h-screen w-11/12 space-y-14 pb-8 sm:w-9/12 sm:pb-10 md:w-7/12">
				<Header title="Repositories" description="My public posts on GitHub" />
				<ErrorComponent
					content="Failed to fetch repository data"
					description="Please try to refresh the page and try again."
				/>
			</main>
		);
	}

	return (
		<>
			<Header title="Repositories" description="My public posts on github" />
			<div className="grid items-center justify-center gap-4 md:grid-cols-2">
				{repos.map((repo) => (
					<Link key={repo.id} href={`/repos/${repo.name}`} className="h-full w-full">
						<Card className="flex h-full w-full flex-col justify-between">
							<div>
								<CardHeader>
									<div className="flex items-center space-x-2">
										<RiGitRepositoryFill size={22} className="text-secondary" />
										<h3 className="items-center space-x-1 truncate text-primary ">
											<span className="text-foreground">{repo.owner.login}/</span>
											<span>{repo.name}</span>
											{repo.is_template && (
												<Tooltip content="This repository is a public template">
													<Badge variant={'secondary'}> Template</Badge>
												</Tooltip>
											)}
											{repo.fork && (
												<Tooltip content={`This repository is a not originally owned by ${repo.owner.login}`}>
													<Badge variant={'secondary'}> Forked</Badge>
												</Tooltip>
											)}
										</h3>
									</div>
								</CardHeader>

								<CardContent>
									<div className="space-y-2">
										<p className="line-clamp-3 text-muted-foreground">{repo.description}</p>
									</div>
								</CardContent>
							</div>
							<CardFooter className="justify flex w-full flex-col items-start text-muted-foreground">
								{/* <div className="flex w-full items-center justify-between">
									<span>Stars:</span> <span>{repo.watchers}</span>
								</div> */}
								<div className="flex w-full items-center justify-between">
									<span>Language:</span>
									{repo.language && (
										<span className="flex items-center justify-end text-xl opacity-75">
											<Tooltip content={repo.language}>{getLanguageIcon(repo.language)}</Tooltip>
										</span>
									)}
								</div>
								<div className="flex w-full items-center justify-between">
									<span>License:</span> <span>MIT</span>
								</div>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
};

export default Page;
