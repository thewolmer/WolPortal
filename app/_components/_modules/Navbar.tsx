import Image from 'next/image';
import React from 'react';

import { Link } from '@element/Link';

const Navbar = () => (
  <nav className="w-full pt-4">
    <div className="container relative w-11/12 px-4 mx-auto sm:w-9/12 md:w-7/12">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 w-10 h-10" aria-current="page">
          <Image
            src="/images/wollogovec.png"
            width={40}
            height={40}
            className="transition-transform rounded-md hover:animate-spin-slow ring-black ring-2 ring-opacity-5 sm:transform"
            alt="Logo"
          />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
