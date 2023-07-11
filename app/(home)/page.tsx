import Image from 'next/image';
import Link from 'next/link';

import { ContentGrid } from '@module/ContentGrid';

import LinkTab from './components/LinkTab';
import ProjectsSection from './components/ProjectsSection';
import TechUsed from './components/TechUsed';

export default function Home() {
  return (
    <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12 ">
      <header className="flex flex-col-reverse justify-between py-10 mx-4 my-16 rounded-md md:flex-row md:items-center">
        <div id="top" className="md:w-8/12">
          <div className="space-y-2">
            <div className="text-xl font-semibold md:text-3xl text-neutral-200">
              <h1>Self taught</h1>
              <h1>
                <a
                  href="https://www.w3schools.com/whatis/whatis_frontenddev.asp?utm_source=wolmer.me"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-b-2 cursor-help font-poppin border-neutral-500 text-neutral-500"
                >
                  Frontend
                </a>
                web developer
                <br /> and a Web3 enthusiast
              </h1>
            </div>
            <p className="space-x-2 text-wolgray font-poppin">
              Hi there, My e-name is Wolmer. I am a self taught web developer based in India. I build complex web apps
              using frameworks like
              <a
                href="https://vuejs.org/?utm_source=wolmer.me"
                target="_blank"
                rel="noreferrer noopener"
                className="description-link linked-white"
              >
                Vue.js
              </a>
              ,
              <a
                href="https://reactjs.org/?utm_source=wolmer.me"
                target="_blank"
                rel="noreferrer noopener"
                className="description-link linked-white"
              >
                React.js
              </a>
              ,
              <a
                href="https://tailwindcss.com/?utm_source=wolmer.me"
                target="_blank"
                rel="noreferrer noopener"
                className="description-link linked-white"
              >
                Tailwind CSS
              </a>
              and much more.
            </p>
            <LinkTab />
          </div>
        </div>
        <div className="mb-4 rounded-full md:mb-0">
          <div
            id="pfp-bg"
            className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-md select-none shadow-green-600"
          ></div>
        </div>
      </header>

      <section id="me" className="my-16">
        <h3 className="px-4 text-lg font-bold uppercase font-poppin text-neutral-700">Me</h3>
        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <Link href="repos">
            <ContentGrid
              description="Browse the list of my projects and open source github code here."
              title="Repositories"
            />
          </Link>
          <Link href="songs">
            <ContentGrid description="Music connects people. Check out my recently played songs." title="Songs" />
          </Link>
          <Link href="sponsor">
            <ContentGrid
              description="Want to support me and my work, so that i can create more cool stuff?"
              title="Sponsor"
            />
          </Link>
          <Link href="connect">
            <ContentGrid
              description="Need help with anything? Want to get in touch? Send me a message!"
              title="Contact"
            />
          </Link>
        </div>
      </section>
      <ProjectsSection />
      <TechUsed />
    </main>
  );
}
