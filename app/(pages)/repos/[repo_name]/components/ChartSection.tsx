import { Card, CardContent } from '@/components/ui/card';
import { getRepoAllCommits } from '@/lib/github/Commits';
import { MdOutlineRunningWithErrors } from 'react-icons/md';
import { CommitsChart } from './CommitsChart';

export const ChartSection = async ({ name }: { name: string }) => {
	const activity = await getRepoAllCommits(name);
	if (!activity)
		return (
			<Card className="aspect-auto h-[250px] w-full">
				<CardContent className="flex h-full items-center justify-center">
					<div className="flex flex-row gap-2 ">
						<MdOutlineRunningWithErrors className="text-2xl text-destructive" />
						<p className="text-center text-destructive"> Failed to fetch Activities </p>
					</div>
				</CardContent>
			</Card>
		);
	return <CommitsChart data={activity} />;
};
