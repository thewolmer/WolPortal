'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Link } from '@/components/Link';

const Navbar = () => {
	const pathname = usePathname();
	const isBlogRoute = pathname.startsWith('/blogs/') && pathname !== '/blogs/';
	return (
		<nav className="w-full pt-4">
			<div className="container relative mx-auto w-11/12 px-4 sm:w-9/12 md:w-7/12">
				<div className="flex items-center justify-between">
					<Link href={isBlogRoute ? '/blogs' : '/'} aria-current="page">
						<div className="flex h-10 w-10 flex-shrink-0 flex-row items-center space-x-4">
							<Image
								src="/images/wollogovec.png"
								width={40}
								height={40}
								className="rounded-md ring-2 ring-black ring-opacity-5 transition-transform hover:animate-spin-slow"
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
