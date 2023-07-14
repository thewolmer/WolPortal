'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Link } from '@element/Link';

const Navbar = () => {
  const pathname = usePathname();
  const isBlogRoute = pathname.startsWith('/blogs/') && pathname !== '/blogs/';
  return (
    <nav className="w-full pt-4">
      <div className="container relative w-11/12 px-4 mx-auto sm:w-9/12 md:w-7/12">
        <div className="flex items-center justify-between">
          <Link href={isBlogRoute ? '/blogs' : '/'} aria-current="page">
            <div className="flex flex-row items-center flex-shrink-0 w-10 h-10 space-x-4">
              <Image
                src="/images/wollogovec.png"
                width={40}
                height={40}
                className="transition-transform rounded-md hover:animate-spin-slow ring-black ring-2 ring-opacity-5"
                alt="Logo"
              />
              {isBlogRoute && <span className="font-extrabold text-neutral-400">BLOGS</span>}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
