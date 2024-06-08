/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import React from 'react';

import Reveal from '@animation/Reveal';
import { Link } from '@element/Link';
import { fadeInUp } from '@util/animations';

const nftProjects = [
  {
    name: 'Moonie Moo',
    descrip: 'Keith Chapman’s latest creation “Moonie Moo” as a Genesis Collection of 7,777 NFTs.',
    link: 'https://mooniemoo.io',
    logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119321509073264720/GrQs2oFi_400x400.png',
    start: 'Sep-2022',
    end: 'Apr-2024',
  },
  {
    name: 'ArmoBot by MXT',
    descrip: 'Multipurpose web3 bot to supercharge web3 community',
    link: 'https://armobot.xyz',
    start: 'June-2023',
    end: 'Apr-2024',
  },
  {
    name: 'Iacon Labs',
    descrip: 'Web3 Alpha community dedicated to exploring the endless possibilities of NFT technology.',
    link: 'https://iaconlabs.com',
    logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119319966898991175/kiQumrQ3_400x400.jpg',
    start: 'Apr-2023',
    end: 'May-2024',
  },
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
const webProjects = [
  {
    name: 'AI powered Tweet Emotion Analysis',
    descrip: 'A web app to analyze the sentiment of tweets and Text.',
    link: 'https://spill-the-tea-ai.vercel.app/',
    start: '',
    end: 'Jun-2024',

  },
  {
    name: 'Iacon Labs Website',
    descrip: 'Modern and minimalistic website for Iacon Labs community using the latest web technologies.',
    link: 'https://iaconlabs.com/',
    start: '',
    end: 'Feb-2024',

  },
  {
    name: 'Plexolyt E-commerce',
    descrip: 'A fullstack e-commerce site along with dashboard.',
    link: 'https://plexolyt.com/',
    start: '',
    end: 'May-2024',
  },
  {
    name: 'Floor Price Discord bot',
    descrip: 'A discord bot to show floor price of NFT projects by changing nickname',
    link: 'https://github.com/thewolmer/nft-floor-price-stat-bot',
    start: '',
    end: 'Apr-2023',
  },
  {
    name: 'Relink Library',
    descrip: 'A Digital Library for my university to access study materials, notes from anywhere on earth.',
    link: 'https://beta.relinklibrary.com/',
    start: '',
    end: 'Nov-2022',
  },
];

const ProjectsSection = () => (
  <section id="projects" className="grid gap-x-8 gap-y-24 md:grid-cols-2">
    <Reveal>
      <div>
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="px-4 text-lg font-bold uppercase text-neutral-700">Web-3 Contribution</h3>
          </div>
        </div>
        <div className="grid gap-2 mt-4 space-y-2">
          {nftProjects.map((project, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="flex items-center justify-between h-32 p-4 overflow-hidden transition-colors rounded-md cursor-pointer linked-white focus-ring bg-neutral-800/40"
            >
              <Link href={project.link}>
                <div className="overflow-x-hidden text-white/30">
                  <h2 className="font-medium truncate text-wolwhite">{project.name}</h2>
                  <p className="pt-2 line-clamp-2">{project.descrip}</p>
                  <p className="pt-2 text-sm ">
                    {project.start} - {project.end}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
    {/*  */}
    <Reveal>
      <div>
        <div>
          <div className="flex items-center justify-between gap-4 ">
            <h3 className="px-4 text-lg font-bold uppercase text-neutral-700"> Dev Projects</h3>
          </div>
        </div>
        <div className="grid gap-2 mt-4 space-y-2">
          {webProjects.map((project, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="flex items-center justify-between h-32 p-4 overflow-hidden transition-colors rounded-md cursor-pointer linked-white focus-ring bg-neutral-800/40"
            >
              <Link href={project.link}>
                <div className="overflow-x-hidden text-white/30">
                  <h2 className="font-medium truncate text-wolwhite">{project.name}</h2>
                  <p className="pt-2 line-clamp-2">{project.descrip}</p>
                  <p className="pt-2 text-sm ">
                    {project.start} - {project.end}
                  </p>
                </div>
                <div className="flex-shrink-0"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default ProjectsSection;
