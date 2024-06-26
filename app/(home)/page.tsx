import Link from 'next/link';

import Reveal from '@animation/Reveal';
import { ContentGrid } from '@module/ContentGrid';
import { generateSeo } from '@util/generateSeo';

import Lanyard from './components/Lanyard';
import LinkTab from './components/LinkTab';
import ProjectsSection from './components/ProjectsSection';
import TechUsed from './components/TechUsed';

export const generateMetadata = () =>
  generateSeo({
    title: 'WolPortal',
    description:
      'Explore the website of Wolmer a.k.a Karan Rao, a young web developer with a passion for gaming, VFX, and Film-making. Browse for Web3 projects and much more! Contact to discuss potential projects.',
    url: '/',
  });

function Home() {
  return (
    <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12 ">
      <Reveal>
        <header className="flex flex-col-reverse justify-between py-10 mx-4 my-16 rounded-md md:flex-row md:items-center">
          <div id="top" className="md:w-8/12">
            <div className="space-y-2">
              <div className="text-xl font-extrabold md:text-3xl text-white/75">
                <h1>Self taught</h1>
                <h1 className="space-x-2">
                  {/* <a
                    href="https://www.w3schools.com/whatis/whatis_frontenddev.asp?utm_source=wolmer.me"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-b-1 cursor-help border-neutral-500 text-neutral-500"
                  >
                    Frontend
                  </a> */}
                  <span className="border-b-1 cursor-help border-neutral-500 text-neutral-500">web developer</span>
                  <br /> and a Web3 enthusiast
                </h1>
              </div>
              <div className="inline-block text-wolgray">
                <p className="whitespace-pre-line">
                  Hi there, My name is <span className="text-wolwhite/75">Karan Rao</span>. I am a self-taught web
                  developer based in India. I build complex web apps using frameworks like
                  <span className="ml-1 nowrap">
                    <a
                      href="https://nextjs.org/?utm_source=wolmer.me"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mr-2 description-link linked-white"
                    >
                      Next.js
                    </a>
                  </span>
                  <span className="nowrap">
                    <a
                      href="https://vuejs.org/?utm_source=wolmer.me"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mr-2 description-link linked-white"
                    >
                      Vue.js
                    </a>
                  </span>
                  <span className="nowrap">
                    <a
                      href="https://tailwindcss.com/?utm_source=wolmer.me"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mr-2 description-link linked-white"
                    >
                      Tailwind CSS
                    </a>
                  </span>
                  <span>and much more.</span>
                </p>
              </div>

              <Lanyard />
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
          <h3 className="px-4 text-lg font-bold uppercase text-neutral-700">Me</h3>
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
            <Link href="blogs">
              <ContentGrid
                description="Stories about my life, development, my experiences, and much more!"
                title="Blogs"
              />
            </Link>
            <Link href="contact">
              <ContentGrid
                description="Need help with anything? Want to get in touch? Send me a message!"
                title="Contact"
              />
            </Link>
          </div>
        </section>
      </Reveal>
      <ProjectsSection />
      <TechUsed />
    </main>
  );
}

export default Home;
