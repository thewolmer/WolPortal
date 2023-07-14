import React from 'react';

import { github, instagram, linkedin, opensea, snapchat, spotify, twitter } from '@constant/index';
import { Link } from '@element/Link';
import { ContentGrid } from '@module/ContentGrid';
import Header from '@module/Header';
import { generateSeo } from '@util/generateSeo';

export const generateMetadata = () =>
  generateSeo({
    title: 'Contact // WolPortal',
    description: 'Get in touch with Wolmer',
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
  {
    label: 'Instagram',
    description: 'Follow me on Instagram',
    link: `https://instagram.com/${instagram}`,
  },
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
  <main className="container w-11/12 min-h-screen pb-8 mx-auto text-neutral-600 sm:pb-10 sm:w-9/12 md:w-7/12">
    <Header title="Connect" description="If you have any questions, feel free to contact me." />
    <div className="grid gap-2 mt-4 md:gap-4 md:grid-cols-2">
      {links.map((link, index) => (
        <Link href={link.link} key={index}>
          <ContentGrid title={link.label} description={link.description} />
        </Link>
      ))}
    </div>
  </main>
);

export default page;
