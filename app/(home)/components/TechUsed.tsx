'use client';
import Reveal from '@/components/Animation/Reveal';
import { Card } from '@/components/ui/card';
import React from 'react';
import { BiLogoNetlify } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiSupabaseFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri';
import {
    SiBun,
    SiDiscord,
    SiExpo,
    SiFirebase,
    SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiNotion,
    SiReactquery,
    SiShadcnui,
    SiSwift,
    SiTypescript,
    SiVercel,
    SiZod,
} from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandReactNative } from 'react-icons/tb';
import { Link } from '@/components/Link/Link'; // added

const development = [
    {
        name: 'Typescript',
        icon: SiTypescript,
        color: '#2f74c0',
        href: 'https://www.typescriptlang.org/',
    },
    {
        name: 'Go Lang',
        icon: FaGolang,
        color: '#67CFDE',
        href: 'https://go.dev/',
    },
    {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: '#d2d2d2',
        href: 'https://nextjs.org/',
    },
    {
        name: 'Vue',
        icon: RiVuejsFill,
        color: '#41b883',
        href: 'https://vuejs.org/',
    },
    {
        name: 'Expo React Native',
        icon: SiExpo,
        color: '#d2d2d2',
        href: 'https://expo.dev/',
    },
    {
        name: 'Swift UI',
        icon: SiSwift,
        color: '#05A3EB',
        href: 'https://developer.apple.com/documentation/swiftui/',
    },

    {
        name: 'Tailwind Css',
        icon: RiTailwindCssFill,
        color: '#4aafb4',
        href: 'https://tailwindcss.com/',
    },
    {
        name: 'Framer Motion',
        icon: TbBrandFramerMotion,
        color: '#d14ca8',
        href: 'https://www.framer.com/motion/',
    },
    {
        name: 'Tanstack Query',
        icon: SiReactquery,
        color: '#F73E51',
        href: 'https://tanstack.com/query/latest',
    },
    {
        name: 'Supabase',
        icon: RiSupabaseFill,
        color: '#34b078',
        href: 'https://supabase.com/',
    },

    {
        name: 'Zod',
        icon: SiZod,
        color: '#d2d2d2',
        href: 'https://zod.dev/',
    },
    {
        name: 'Shadcn/ui',
        icon: SiShadcnui,
        color: '#d2d2d2',
        href: 'https://ui.shadcn.com/',
    },
];

export const TechUsed = () => (
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
                            <Link key={item.name} href={item.href} className="block">
                                <Card className="flex cursor-pointer select-none items-center space-x-2 overflow-hidden rounded-md p-3 transition-colors ">
                                    <div
                                        className={'flex items-center justify-center rounded-lg p-2 '}
                                        style={{ background: `${item.color}1A` }}
                                    >
                                        <item.icon className="text-xl" style={{ color: item.color }} />
                                    </div>
                                    <span className="flex-1 truncate font-semibold text-muted-foreground text-xs">{item.name}</span>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    </Reveal>
);
