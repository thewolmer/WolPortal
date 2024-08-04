'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { repository } from '@/constants/global';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../Modules/ThemeToggle';
import { buttonVariants } from '../ui/button';

const Footer = () => {
	const pathname = usePathname();
	const isBlogRoute = pathname.startsWith('/blogs/') && pathname !== '/blogs/';
	return (
		<footer className="mt-10 shadow md:px-6 md:py-8">
			<div className="container mx-auto w-11/12 pb-8 sm:w-9/12 sm:pb-10 md:w-7/12">
				<hr className="my-6 border-accent sm:mx-auto lg:my-8" />
				<div className="mb-10 sm:flex sm:items-center sm:justify-between">
					<Link href={isBlogRoute ? '/blogs' : '/'} className="mb-4 flex items-center sm:mb-0">
						<Image
							src="/images/logo/logo-base-256x256.png"
							width={40}
							height={30}
							className="mr-3 "
							alt="WolPortal Logo"
						/>
					</Link>
					<span className="self-center whitespace-nowrap font-semibold text-sm ">
						This Website is Open Source
						<Link href={repository} className={cn(buttonVariants({ variant: 'link' }), 'px-1 py-0')}>
							on Github
						</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
