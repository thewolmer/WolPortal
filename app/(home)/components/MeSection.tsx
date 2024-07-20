import { Link } from '@/components/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Links = [
	{
		label: 'Repositories',
		href: '/repos',
		description: 'Browse the list of my projects and open source github code here.',
	},
	{
		label: 'Songs',
		href: '/songs',
		description: 'Music connects people. Check out my recently played songs.',
	},
	{
		label: 'Blogs',
		href: '/blogs',
		description: 'Stories about my life, development, my experiences, and much more!',
	},
	{
		label: 'Contact',
		href: '/contact',
		description: 'Need help with anything? Want to get in touch? Send me a message!',
	},
];

export const MeSection = () => {
	return (
		<section id="me" className="my-16">
			<h3 className="px-4 font-bold text-lg text-primary uppercase">Me</h3>
			<div className="mt-4 grid gap-4 md:grid-cols-2">
				{Links.map((link) => (
					<Card key={link.label}>
						<Link href={link.href}>
							<CardHeader className='font-extrabold text-primary text-xl'> {link.label}</CardHeader>
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
