import React from 'react';

import Header from '@/components/Layout/Header';
import { Link } from '@/components/Link';
import { ContentGrid } from '@/components/modules/ContentGrid';
import { github, instagram, linkedin, opensea, snapchat, spotify, twitter } from '@/constants/global';
import { generateSeo } from '@/utils/generateSeo';

export const generateMetadata = () =>
	generateSeo({
		title: 'WolPortal // Contact',
		description: 'Connect with Wolmer on various social platforms. Stay updated on my latest activities and reach out.',
		url: '/contact',
	});

const links = [
	{
		label: 'Twitter',
		description: 'Follow me on twitter',
		link: `https://twitter.com/${twitter}`,
	},
	{
		label: 'Github',
		description: 'Follow me on GitHub',
		link: `https://github.com/${github}`,
	},
	{
		label: 'LinkedIn',
		description: 'Say hi! on LinkedIn',
		link: `https://www.linkedin.com/in/${linkedin}`,
	},
	// {
	//   label: 'Instagram',
	//   description: 'Follow me on Instagram',
	//   link: `https://instagram.com/${instagram}`,
	// },
	{
		label: 'Spotify',
		description: 'Follow me on Spotify',
		link: `https://open.spotify.com/user/${spotify}`,
	},
	{
		label: 'Snapchat',
		description: 'Send Request on Snapchat',
		link: `https://snapchat.com/add/${snapchat}`,
	},
];

const page = () => (
	<>
		<Header title="Connect" description="If you have any questions, feel free to contact me." />
		<div className="mt-4 grid gap-2 md:grid-cols-2 md:gap-4">
			{links.map((link, index) => (
				<Link href={link.link} key={link.label}>
					<ContentGrid title={link.label} description={link.description} />
				</Link>
			))}
		</div>
	</>
);

export default page;
