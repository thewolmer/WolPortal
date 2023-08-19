import { Image } from '@element/Image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div className="relative p-8 my-6 text-center rounded-md ">
        <Image
          src="/assets/Texture-by-Justin-Rands.webp"
          alt="pattern"
          className="z-10 rounded-md opacity-70"
          fill
        ></Image>
        <h1 className="z-0 text-2xl font-extrabold text-wolwhite">Wol Blogs</h1>
        <p className="text-slate-300"></p>
      </div>
    </header>
  );

  return (
    <main className="relative max-w-2xl min-h-screen px-6 mx-auto overflow-hidden md:overflow-visible">
      <div className="w-[900px] h-52 bg-[#4b828f] absolute top-60 left-4 blur-3xl opacity-10 rotate-45 "></div>

      {header}
      {children}
    </main>
  );
}
