import Reveal from '@/components/Animation/Reveal';
import Header from '@/components/Layout/Header';
import { Link } from '@/components/Link';
import ErrorComponent from '@/components/Modules/ErrorComponent';
import { Tooltip } from '@/components/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
	Dialog,
	DialogClose,
	DialogContainer,
	DialogContent,
	DialogDescription,
	DialogImage,
	DialogSubtitle,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/primitive-modal';
import { getRepos } from '@/lib/github/Repos';
import { cn } from '@/lib/utils';
import { generateSeo } from '@/utils/generateSeo';
import { getLanguageIcon } from '@/utils/getLanguageIcon';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { RiGitRepositoryFill } from 'react-icons/ri';

type Project = {
	name: string;
	subtitle: string;
	image: string;
	description: string;
	website: string;
	repo: string;
};

const projects = [
	{
		name: 'Jam Icons',
		subtitle: 'React Icon Library',
		image: '/assets/projects/jamicons.png',
		description: 'A collection of icons for React applications.',
		website: 'https://jamicons.wolmer.me',
		repo: 'https://github.com/thewolmer/jam-icons',
	},
];

export const generateMetadata = () =>
	generateSeo({
		title: 'Projects // WolPortal',
		description: 'Browse some *not so cool* projects',
		url: '/projects',
	});

const Page = async () => {
	return (
		<>
			<Header title="Projects" description="Some *not so cool* projects by me" />
			<Reveal>
				<div className="grid items-center justify-center gap-4 md:grid-cols-2">
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
			</Reveal>
		</>
	);
};

const ProjectCard = ({ project }: { project: Project; key: string }) => {
	return (
		<Dialog
			transition={{
				type: 'spring',
				bounce: 0.05,
				duration: 0.25,
			}}
		>
			<DialogTrigger
				style={{
					borderRadius: '12px',
				}}
				className="flex flex-col overflow-hidden border bg-card transition-colors duration-300 hover:bg-muted"
			>
				<DialogImage src={project.image} alt={project.name} className="h-48 w-full object-cover" />
				<div className="flex flex-grow flex-row items-end justify-between p-2">
					<div>
						<DialogTitle className="text-card-foreground">{project.name}</DialogTitle>
						<DialogSubtitle className="text-muted-foreground">{project.subtitle}</DialogSubtitle>
					</div>
					<Button type="button" variant={'secondary'} aria-label="Open dialog">
						<PlusIcon size={12} />
					</Button>
				</div>
			</DialogTrigger>
			<DialogContainer>
				<DialogContent
					style={{
						borderRadius: '24px',
					}}
					className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border bg-card sm:w-[500px] "
				>
					<DialogImage src={project.image} alt={project.name} className="h-full w-full" />
					<div className="p-6">
						<DialogTitle className="text-2xl text-card-foreground">{project.name}</DialogTitle>
						<DialogSubtitle className="text-muted-foreground">{project.subtitle}</DialogSubtitle>
						<DialogDescription
							disableLayoutAnimation
							variants={{
								initial: { opacity: 0, scale: 0.8, y: 100 },
								animate: { opacity: 1, scale: 1, y: 0 },
								exit: { opacity: 0, scale: 0.8, y: 100 },
							}}
						>
							<p className="mt-2 text-muted-foreground">{project.description}</p>
							<div className="mt-4 flex space-x-2">
								<Link
									href={project.repo}
									className={cn(buttonVariants({ variant: 'secondary' }))}
									aria-label="Visit repository"
								>
									Repository
								</Link>
								<Link
									href={project.website}
									className={cn(buttonVariants({ variant: 'secondary' }))}
									aria-label="Visit website"
								>
									Website
								</Link>
							</div>
						</DialogDescription>
					</div>
					<DialogClose className="text-zinc-50" />
				</DialogContent>
			</DialogContainer>
		</Dialog>
	);
};

export default Page;
