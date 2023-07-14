/* eslint-disable @next/next/no-img-element */
import React from 'react';

const nftProjects = [
  {
    name: 'Moonie Moo',
    descrip: 'Keith Chapman’s latest creation “Moonie Moo” as a Genesis Collection of 7,777 NFTs.',
    link: 'https://mooniemoo.io?utm_source=wolmer.me',
    logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119321509073264720/GrQs2oFi_400x400.png',
    start: 'Sep-2022',
    end: 'Present',
  },
  {
    name: 'Iacon Labs',
    descrip: 'Web3 Alpha community dedicated to exploring the endless possibilities of NFT technology.',
    link: 'https://iaconlabs.com?utm_source=wolmer.me',
    logo: 'https://cdn.discordapp.com/attachments/933379220258820156/1119319966898991175/kiQumrQ3_400x400.jpg',
    start: 'Apr-2023',
    end: 'Present',
  },
  {
    name: 'Jacks Originals',
    descrip:
      ' An NFT collection created to be a brand inside of the metaverse built on ERC-721 token technology on ethereum blockchain.',
    link: 'https://jacksoriginals.me/?utm_source=wolmer.me',
    logo: 'https://cdn.discordapp.com/attachments/1060254254591393853/1060348982192242718/jacsorg.png',
    start: 'July-2022',
    end: 'Aug-2022',
  },
  {
    name: 'Seemeo app',
    descrip: 'A geo-social business networking application  that connects people and places locally.',
    link: 'https://www.seemeo.app/?utm_source=wolmer.me',
    logo: 'https://cdn.discordapp.com/attachments/1060254254591393853/1060348982737522748/semo.png',
    start: 'Aug-2022',
    end: 'Oct-2022',
  },
];
const webProjects = [
  {
    name: 'ArmoBot by MXT',
    descrip: 'Multipurpose web3 bot to supercharge web3 community',
    link: 'https://armobot.xyz?utm_source=wolmer.me',
    start: 'June-2023',
    end: '',
  },
  {
    name: 'Relink Library',
    descrip: 'A Digital Library for my university to access study materials, notes from anywhere on earth.',
    link: 'https://beta.relinklibrary.com?utm_source=wolmer.me',
    start: 'Nov-2022',
    end: '',
  },
  {
    name: 'Floor Price Discord bot',
    descrip: 'A discord bot to show floor price of NFT projects by changing nickname',
    link: 'https://github.com/thewolmer/nft-floor-price-stat-bot?utm_source=wolmer.me',
    start: 'Nov-2022',
    end: '',
  },
];

const ProjectsSection = () => (
  <section id="projects" className="grid gap-x-8 gap-y-24 md:grid-cols-2">
    <div>
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="px-4 text-lg font-bold uppercase text-neutral-700">Web-3 Projects</h3>
        </div>
      </div>
      <div className="grid gap-2 mt-4 space-y-2">
        {nftProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="flex items-center justify-between h-32 p-4 overflow-hidden transition-colors rounded-md cursor-pointer linked-white focus-ring bg-neutral-800/40"
            rel="noopener"
          >
            <div className="overflow-x-hidden text-white/30">
              <h2 className="font-medium truncate text-wolwhite">{project.name}</h2>
              <p className="pt-2 line-clamp-2">{project.descrip}</p>
              <p className="pt-2 text-sm ">
                {project.start} - {project.end}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
    {/*  */}
    <div>
      <div>
        <div className="flex items-center justify-between gap-4 ">
          <h3 className="px-4 text-lg font-bold uppercase text-neutral-700"> Dev Projects</h3>
        </div>
      </div>
      <div className="grid gap-2 mt-4 space-y-2">
        {webProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="flex items-center justify-between h-32 p-4 space-x-4 overflow-hidden transition-colors rounded-md cursor-pointer linked-white focus-ring bg-neutral-800/40"
            rel="noopener"
          >
            <div className="overflow-x-hidden text-white/30">
              <h2 className="font-medium truncate text-wolwhite">{project.name}</h2>
              <p className="pt-2 line-clamp-2">{project.descrip}</p>
              <p className="pt-2 text-sm ">
                {project.start} - {project.end}
              </p>
            </div>
            <div className="flex-shrink-0"></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
