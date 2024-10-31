'use client';
import Reveal from '@/components/Animation/Reveal';
import { Card } from '@/components/ui/card';
import React from 'react';
import { BiLogoNetlify } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import { RiSupabaseFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri';
import {
	SiBun,
	SiDiscord,
	SiFirebase,
	SiGithub,
	SiMongodb,
	SiNextdotjs,
	SiNotion,
	SiShadcnui,
	SiTypescript,
	SiVercel,
	SiZod,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const development = [
	{
		name: 'Typescript',
		icon: SiTypescript,
		color: '#2f74c0',
	},
	{
		name: 'Next.js',
		icon: SiNextdotjs,
		color: '#d2d2d2',
	},
	{
		name: 'Vue',
		icon: RiVuejsFill,
		color: '#41b883',
	},
	{
		name: 'Tailwind Css',
		icon: RiTailwindCssFill,
		color: '#4aafb4',
	},
	{
		name: 'NodeJs',
		icon: FaNodeJs,
		color: '#5e8c52',
	},
	{
		name: 'Bun',
		icon: SiBun,
		color: '#fbf0df',
	},
	{
		name: 'MongoDB',
		icon: SiMongodb,
		color: '#419432',
	},
];

const services = [
	{
		name: 'Github',
		icon: SiGithub,
		color: '#d2d2d2',
	},
	{
		name: 'Firebase',
		icon: SiFirebase,
		color: '#fcca3f',
	},
	{
		name: 'Netlify',
		icon: BiLogoNetlify,
		color: '#31b9bc',
	},
	{
		name: 'Vercel',
		icon: SiVercel,
		color: '#d2d2d2',
	},
	{
		name: 'Supabase',
		icon: RiSupabaseFill,
		color: '#34b078',
	},
	{
		name: 'Framer Motion',
		icon: TbBrandFramerMotion,
		color: '#d14ca8',
	},
	{
		name: 'Notion',
		icon: SiNotion,
		color: '#d2d2d2',
	},
	{
		name: 'Discord',
		icon: SiDiscord,
		color: '#5865f2',
	},
	{
		name: 'Zod',
		icon: SiZod,
		color: '#d2d2d2',
	},
	{
		name: 'Shadcn/ui',
		icon: SiShadcnui,
		color: '#d2d2d2',
	},
];

const TechUsed = () => (
	<Reveal>
		<section id="technologies" className="mt-6">
			<h3 className="px-4 font-bold text-lg text-neutral-700 uppercase ">Technologies I use</h3>
			<div className="mt-8 flex flex-col space-y-6">
				<section>
					<h5 className="mx-4 mb-4 border-neutral-600/10 border-b pb-2 font-medium text-lg text-neutral-600/70">
						Tech Stack
					</h5>

					<div className="grid grid-cols-2 gap-x-2 gap-y-2 px-4 md:grid-cols-3 lg:grid-cols-4">
						{development.map((item) => (
							<Card
								key={item.name}
								className="flex cursor-pointer select-none items-center space-x-2 overflow-hidden rounded-md p-3 transition-colors "
							>
								<div
									className={'flex items-center justify-center rounded-lg p-2 '}
									style={{ background: `${item.color}1A` }}
								>
									<item.icon className="text-xl" style={{ color: item.color }} />
								</div>
								<span className="flex-1 truncate font-semibold text-muted-foreground text-xs">{item.name}</span>
							</Card>
						))}
					</div>
				</section>
				<section>
					<h5 className="mx-4 mb-4 border-neutral-600/10 border-b pb-2 font-medium text-lg text-neutral-600/70">
						Services & Tools
					</h5>
					<div className="grid grid-cols-2 gap-x-2 gap-y-2 px-4 md:grid-cols-3 lg:grid-cols-4">
						{services.map((item) => (
							<Card
								key={item.name}
								className="flex cursor-pointer select-none items-center space-x-2 overflow-hidden rounded-md p-3"
							>
								<div
									className={'flex items-center justify-center rounded-md p-2 '}
									style={{ background: `${item.color}1A` }}
								>
									<item.icon className="text-xl" style={{ color: item.color }} />
								</div>
								<span className="flex-1 truncate font-semibold text-muted-foreground text-xs">{item.name}</span>
							</Card>
						))}
					</div>
				</section>
			</div>
		</section>
	</Reveal>
);

export default TechUsed;
