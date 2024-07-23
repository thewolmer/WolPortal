'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { repository } from '@/constants/global';
import { ThemeToggle } from '../modules/ThemeToggle';

const Footer = () => {
	const pathname = usePathname();
	const isBlogRoute = pathname.startsWith('/blogs/') && pathname !== '/blogs/';
	return (
		<footer className="rounded-lg bg-grad bg-neutral-800 p-4 text-gray-200 shadow md:px-6 md:py-8">
			<div className="container mx-auto w-11/12 pb-8 sm:w-9/12 sm:pb-10 md:w-7/12">
				<div className="mb-10 sm:flex sm:items-center sm:justify-between">
					<Link href={isBlogRoute ? '/blogs' : '/'} className="mb-4 flex items-center sm:mb-0">
						<Image src="/images/wollogovec.png" width={40} height={30} className="mr-3 " alt="WolPortal Logo" />
						<span className="self-center whitespace-nowrap font-semibold text-2xl text-white">WOLMER</span>
					</Link>
				</div>
				<hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
				<span className="block text-gray-400 text-sm sm:text-center">
					This Website is Open Source{' '}
					<Link href={repository} className="linked-white">
						on Github
					</Link>
					<ThemeToggle />
				</span>
			</div>
		</footer>
	);
};

export default Footer;
