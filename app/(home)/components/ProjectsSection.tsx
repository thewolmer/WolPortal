/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import React from 'react';

import Reveal from '@/components/Animation/Reveal';
import { Link } from '@/components/Link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { fadeInUp } from '@/utils/animations';

const work = [
	{
		name: 'MXT',
		descrip:
			'MXT is a Technology Company based in the Isle of Man, British Isles. Since 2018 MXT has been specializing in developing blockchain applications & Payments processors.',
		link: 'https://mxt.im',
		logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119321509073264720/GrQs2oFi_400x400.png',
		start: 'OCT-2024',
		end: 'Present',
	},
	{
		name: 'Moonie Moo',
		descrip: 'Moonie Moo is Keith Chapman’s latest creation “Moonie Moo” as a Genesis Collection of 3,333 NFTs.',
		link: 'https://mooniemoo.io',
		logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119321509073264720/GrQs2oFi_400x400.png',
		start: 'Sep-2022',
		end: 'Apr-2024',
	},
	// {
	// 	name: 'ArmoBot by MXT',
	// 	descrip: 'Multipurpose web3 bot to supercharge web3 community',
	// 	link: 'https://armobot.xyz',
	// 	start: 'June-2023',
	// 	end: 'Apr-2024',
	// },
	// {
	// 	name: 'Iacon Labs',
	// 	descrip: 'Web3 Alpha community dedicated to exploring the endless possibilities of NFT technology.',
	// 	link: 'https://iaconlabs.com',
	// 	logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119319966898991175/kiQumrQ3_400x400.jpg',
	// 	start: 'Apr-2023',
	// 	end: 'May-2024',
	// },
	// {
	//   name: 'Jacks Originals',
	//   descrip:
	//     ' An NFT collection created to be a brand inside of the metaverse built on ERC-721 token technology on ethereum blockchain.',
	//   link: '',
	//   logo: 'https://cdn.discordapp.com/attachments/1060254254591393853/1060348982192242718/jacsorg.png',
	//   start: 'July-2022',
	//   end: 'Aug-2022',
	// },
	// {
	//   name: 'Seemeo app',
	//   descrip: 'A geo-social business networking application  that connects people and places locally.',
	//   link: '',
	//   logo: 'https://cdn.discordapp.com/attachments/1060254254591393853/1060348982737522748/semo.png',
	//   start: 'Aug-2022',
	//   end: 'Oct-2022',
	// },
];

export const ProjectsSection = () => (
	<section id="projects">
		<Reveal>
			<div>
				<div className="flex items-center justify-between gap-4">
					<h3 className="px-4 font-bold text-lg text-muted-foreground/50 uppercase">Work</h3>
				</div>
			</div>
			<div className="my-4 grid gap-2 md:grid-cols-2">
				{work.map((project) => (
					<motion.div variants={fadeInUp} key={project.name}>
						<Link href={project.link}>
							<Card className="h-full w-full transition hover:bg-muted/60">
								<CardHeader className="flex-row justify-between gap-2 p-0 px-6 py-2 pt-6 ">
									<span className="font-semibold text-sm md:text-lg">{project.name}</span>
									<span className="flex items-start font-mono text-secondary text-xs">
										{project.start} - {project.end}
									</span>
								</CardHeader>
								<CardContent className="font-mono text-muted-foreground text-sm">{project.descrip}</CardContent>
							</Card>
						</Link>
					</motion.div>
				))}
			</div>
		</Reveal>
	</section>
);
