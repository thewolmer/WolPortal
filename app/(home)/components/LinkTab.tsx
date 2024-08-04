import React from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { Link } from '@/components/Link';
import { email, github, linkedin, twitter } from '@/constants/global';

const Links = [
	{
		name: 'Twitter',
		link: `https://twitter.com/${twitter}`,
		icon: RiTwitterXFill,
	},
	{
		name: 'Github',
		link: `https://github.com/${github}`,
		icon: SiGithub,
	},
	{
		name: 'Linkedin',
		link: `https://www.linkedin.com/in/${linkedin}/`,
		icon: SiLinkedin,
	},
	{
		name: 'Email',
		link: `mailto:${email}`,
		icon: MdAlternateEmail,
	},
];

const LinkTab = () => (
	<div className="mr-8 flex items-center space-x-2 rounded-md py-5">
		<div className="mx-auto flex w-full flex-wrap items-center justify-between text-4xl">
			{Links.map((link, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Link key={index} href={link.link}>
					<link.icon className='text-2xl text-accent-foreground transition duration-200 hover:scale-105 hover:text-primary hover:text-wolwhite' />
				</Link>
			))}
		</div>
	</div>
);

export default LinkTab;
