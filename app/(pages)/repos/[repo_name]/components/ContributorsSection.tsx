import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Tooltip } from '@/components/tooltip';
import { getRepoContributors } from '@/lib/github/Repos';
import React from 'react';

export const ContributorsSection = async ({ name }: { name: string }) => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	const contributors = await getRepoContributors(name);
	if (!contributors)
		return (
			<div className="">
				<h4 className="mb-2 font-mono">Contributors</h4>
				<div className="flex flex-wrap gap-2">
					<p className="text-destructive text-sm"> !! Something went wrong while fetching contributors.</p>
				</div>
			</div>
		);
	return (
		<div className="">
			<h4 className="mb-2 font-mono">Contributors</h4>
			<div className="flex flex-wrap gap-2">
				{contributors.map((contributor) => (
					<Tooltip key={contributor.id} content={contributor.login}>
						<Link href={contributor.html_url} className="flex items-center gap-2">
							<Image
								src={contributor.avatar_url}
								alt={contributor.login}
								width={30}
								height={30}
								className="rounded-full"
							/>
						</Link>
					</Tooltip>
				))}
			</div>
		</div>
	);
};
