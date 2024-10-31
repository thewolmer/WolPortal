import { Link } from '@/components/Link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Links = [
	{
		label: 'Repositories',
		href: '/repos',
		description: ' Check out my github repositories that i have been working on.',
	},
	{
		label: 'Projects',
		href: '/projects',
		description: 'View some of my *not so cool* personal projects.',
	},
	{
		label: 'Contact',
		href: '/contact',
		description: 'Contact me for potential projects or collaborations.',
	},
	{
		label: 'Watchlist',
		href: '/watchlist',
		description: 'Movies and TV shows I have watched and recommend to you.',
	},
];

export const MeSection = () => {
	return (
		<section id="me" className="my-16">
			<h3 className="px-4 font-bold text-lg text-primary uppercase">Me</h3>
			<div className="mt-4 grid gap-4 md:grid-cols-2">
				{Links.map((link) => (
					<Card key={link.label} className="transition hover:bg-muted/60">
						<Link href={link.href}>
							<CardHeader className="font-extrabold text-primary text-xl"> {link.label}</CardHeader>
							<CardContent className="font-mono text-muted-foreground tracking-tight">
								<p>{link.description}</p>
							</CardContent>
						</Link>
					</Card>
				))}
			</div>
		</section>
	);
};
