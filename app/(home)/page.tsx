import { Link } from '@/components/Link';

import Reveal from '@/components/Animation/Reveal';
import { generateSeo } from '@/utils/generateSeo';

import { BitMoji } from './components/BitMoji';
import { LinkTab } from './components/LinkTab';
import { MeSection } from './components/MeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechUsed } from './components/TechUsed';

export const generateMetadata = () =>
	generateSeo({
		title: 'WolPortal',
		description:
			'Explore the website of Wolmer a.k.a Karan Rao, a young web developer with a passion for gaming, VFX, and Film-making. Browse for Web3 projects and much more! Contact to discuss potential projects.',
		url: '/',
	});

function Home() {
	return (
		<main className="container">
			<Reveal>
				<header className="flex flex-col justify-between py-10 md:flex-row md:items-center">
					<BitMoji />
					<div id="top" className="md:w-[66%]">
						<div className="space-y-2">
							<div className="">
								<p className="font-mono text-muted-foreground "> Hi, im Karan Rao</p>
								<h1 className="text-balance font-extrabold font-mono text-3xl text-primary">
									Web Developer and a Web3 Enthusiast
								</h1>
							</div>
							<div className="inline-block text-muted-foreground">
								<p className="whitespace-pre-line font-light font-mono">
									I build complex web apps using modern frameworks like
									<span className="nowrap mx-2">
										<Link className="cursor-help" href="https://nextjs.org">
											Next.js
										</Link>
									</span>
									<span className="">and</span>
									<span className="mx-2 flex-nowrap">
										<Link className="cursor-help" href="https://vuejs.org/?utm_source=wolmer.me">
											Vue.js
										</Link>
									</span>
									<span>and much more.</span>
								</p>
							</div>
							{/* <Lanyard /> */}
							<LinkTab />
						</div>
					</div>
				</header>
				<MeSection />
			</Reveal>
			<ProjectsSection />
			<TechUsed />
		</main>
	);
}

export default Home;
