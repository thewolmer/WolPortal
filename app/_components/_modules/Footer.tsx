'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import { repository } from '@constant/index';
import { Image } from '@element/Image';
import { Link } from '@element/Link';

const Footer = () => {
  const pathname = usePathname();
  const isBlogRoute = pathname.startsWith('/blogs/') && pathname !== '/blogs/';
  console.log(isBlogRoute);
  return (
    <footer className="p-4 text-gray-200 rounded-lg shadow  md:px-6 md:py-8 bg-neutral-800 bg-grad">
      <div className="container w-11/12 pb-8 mx-auto sm:pb-10 sm:w-9/12 md:w-7/12">
        <div className="mb-10 sm:flex sm:items-center sm:justify-between">
          <Link href={isBlogRoute ? '/blogs' : '/'} className="flex items-center mb-4 sm:mb-0">
            <Image src="/images/wollogovec.png" width={40} height={30} className="mr-3 " alt="WolPortal Logo" />
            <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">WOLMER</span>
          </Link>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          This Website is Open Source{' '}
          <Link href={repository} className="linked-white">
            on Github
          </Link>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
