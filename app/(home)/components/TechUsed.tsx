import React from 'react';
import { BiLogoNetlify } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiSupabaseFill , RiTailwindCssFill , RiVuejsFill } from "react-icons/ri";
import { SiAmazonaws , SiBun , SiDiscord , SiFirebase , SiGithub , SiMongodb , SiNextdotjs , SiNotion , SiShadcnui , SiTypescript , SiVercel , SiZod } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";



const development = [
  {
    name: 'Typescript',
    icon: SiTypescript,
    color: '#2f74c0',
  },
  {
    name: 'React & Next',
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

]

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
    name: 'AWS',
    icon: SiAmazonaws,
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
]

const TechUsed = () => (
  <section id="technologies" className="mt-6">
    <h3 className="px-4 text-lg font-bold uppercase text-neutral-700  ">Technologies I use</h3>
    <div className="flex flex-col mt-8 space-y-6">
      <section>
        <h5 className="pb-2 mx-4 mb-4 text-lg font-medium border-b border-neutral-600/10 text-neutral-600/70">
          Tech Stack
        </h5>

        <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
          {development.map((item, index) => (
          <div key={index} className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className={'flex items-center justify-center p-2 rounded-lg ring-1 ring-black/5'} style={{background: `${item.color}1A`}}>
              <item.icon className="text-xl bx bxl-typescript" style={{color: item.color}}></item.icon>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">{item.name}</span>
          </div>
          ))}
         
        </div>
      </section>
      <section>
        <h5 className="pb-2 mx-4 mb-4 text-lg font-medium border-b border-neutral-600/10 text-neutral-600/70">
          Services & Tools
        </h5>
        <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
        {services.map((item, index) => (
          <div key={index} className="bg-neutral-600/10 hover:bg-[#202020] text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden hover:bg-neutral-600/15 text-white">
            <div className={'flex items-center justify-center p-2 rounded-lg ring-1 ring-black/5'} style={{background: `${item.color}1A`}}>
              <item.icon className="text-xl bx bxl-typescript" style={{color: item.color}}></item.icon>
            </div>
            <span className="flex-1 truncate text-neutral-500 ">{item.name}</span>
          </div>
          ))}
        </div>
      </section>
    </div>
  </section>
);

export default TechUsed;
