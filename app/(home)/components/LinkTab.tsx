import React from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGithub , SiLinkedin } from "react-icons/si";

import { email, github, linkedin, twitter } from '@constant/global';
import { Link } from '@element/Link';


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
]

const LinkTab = () => (
  <div className="flex items-center mt-4 space-x-2 rounded-md text-wolgray">
    <div className="flex flex-wrap items-center justify-between w-4/5 pt-6 pb-16 mx-auto text-4xl lg:pb-0 lg:w-full">
      {Links.map((link, index) => (
        <Link key={index} href={link.link}>
        <link.icon className="transition duration-200 text-2xl text-wolgray hover:text-wolwhite"></link.icon>
      </Link>
        
      ))}
     
    </div>
  </div>
);

export default LinkTab;
