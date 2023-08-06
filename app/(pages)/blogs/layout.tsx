import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div className="p-8 my-6 text-center rounded-md bg-lime-600/10">
        <h1 className="text-2xl font-extrabold text-wolwhite">Wol Blogs</h1>
        <p className="text-slate-300"></p>
      </div>
    </header>
  );

  return (
    <main className="max-w-2xl min-h-screen px-6 mx-auto">
      {header}
      {children}
    </main>
  );
}
