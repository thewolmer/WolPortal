import Header from '@/components/Layout/Header';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { RiGitRepositoryFill } from 'react-icons/ri';

export default function Loading() {
	return (
		<main className="container ">
			<Header title="Repositories" description="My public posts on github" />
			<div className=" flex w-full flex-col items-center justify-center gap-4 md:grid md:grid-cols-2">
				{[0, 1, 2, 3].map((repo) => (
					<Card key={repo} className="flex h-full w-full flex-col justify-between">
						<div className="w-full">
							<CardHeader className="w-full">
								<div className="flex w-full items-center space-x-2">
									<RiGitRepositoryFill size={22} className="text-secondary" />
									<Skeleton className="h-3 w-[40%]" />
								</div>
							</CardHeader>

							<CardContent className="w-full">
								<div className="w-full space-y-2">
									<Skeleton className="h-3 w-[80%]" />
									<Skeleton className="h-3 w-[85%]" />
									<Skeleton className="h-3 w-[75%]" />
									<Skeleton className="h-3 w-[80%]" />
								</div>
							</CardContent>
						</div>
						<CardFooter className="justify flex w-full flex-col items-start text-muted-foreground">
							<div className="flex w-full items-center justify-between">
								<span>Language:</span>
								<span>
									<Skeleton className="h-3 w-10" />
								</span>
							</div>
							<div className="flex w-full items-center justify-between">
								<span>License:</span>
								<span>
									<Skeleton className="h-3 w-10" />
								</span>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}
