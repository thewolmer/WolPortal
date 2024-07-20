import { Image } from '@/components/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const header = (
		<header>
			<div className="relative my-6 rounded-md p-8 text-center ">
				<Image src="/assets/Texture-by-Justin-Rands.webp" alt="pattern" className="z-10 rounded-md opacity-70" fill />
				<h1 className="z-0 font-extrabold text-2xl text-wolwhite">Wol Blogs</h1>
				<p className="text-slate-300" />
			</div>
		</header>
	);

	return (
		<main className="relative mx-auto min-h-screen max-w-2xl overflow-hidden px-6 md:overflow-visible">
			<div className="absolute top-60 left-4 h-52 w-[900px] rotate-45 bg-[#4b828f] opacity-10 blur-3xl " />

			{header}
			{children}
		</main>
	);
}
