'use client';
import { Image } from '@/components/Image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/ui/drawer';
import { useDetailsModel } from '@/hooks/use-details-model';
import { getInfo } from '@/lib/tmdb/Info';
import type { TMDBMovieInfo, TMDBTvInfo } from '@/types/tmdb/info';
import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useSWR from 'swr';

export const DetailsModel = () => {
	const isOpen = useDetailsModel((state) => state.isOpen);
	const onOpen = useDetailsModel((state) => state.onOpen);
	const onClose = useDetailsModel((state) => state.onClose);
	const id = useDetailsModel((state) => state.id);
	const type = useDetailsModel((state) => state.type);
	const [showPoster, setShowPoster] = useState(false);

	const { data, isLoading } = useSWR(type && id ? [type, id] : null, () => getInfo(type, id.toString()), {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		refreshWhenHidden: false,
		shouldRetryOnError: true,
	});

	const onOpenChange = (open: boolean) => {
		if (open) {
			onOpen(isOpen);
		} else {
			onClose();
		}
	};

	if (isLoading || !data)
		return (
			<Dialog open={isOpen} onOpenChange={onOpenChange}>
				<DialogContent className="">
					<DialogHeader>
						<DialogTitle>Loading...</DialogTitle>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);

	if (type === 'movie') {
		const item = data as TMDBMovieInfo;
		return (
			<>
				<div className="hidden md:flex">
					<Dialog open={isOpen} onOpenChange={onOpenChange}>
						<DialogContent className="h-[75vh] max-w-5xl p-10">
							<DialogHeader className="relative h-full w-full">
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
									style={{ objectFit: 'cover' }}
									fill
									className="absolute rounded-md"
									alt={item.title}
								/>

								{!showPoster ? (
									<Button
										className="absolute top-2 left-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(true)}
									>
										Show Poster
									</Button>
								) : (
									<Button
										className="absolute top-2 left-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(false)}
									>
										Hide Poster
									</Button>
								)}
								<AnimatePresence>
									{showPoster && (
										<motion.div
											initial={{ filter: 'blur(8px)', opacity: 0 }}
											animate={{ filter: 'blur(0px)', opacity: 1 }}
											exit={{ filter: 'blur(8px)', opacity: 0 }}
											transition={{ duration: 0.2, ease: 'circInOut' }}
											className=" -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-20 rounded-md shadow-2xl"
										>
											<Image
												src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
												width={230}
												height={230}
												alt={item.title}
												className="rounded-md shadow-2xl"
											/>
										</motion.div>
									)}
								</AnimatePresence>
								<div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-background" />
								<div className="absolute right-0 bottom-0 left-0 px-20">
									<DialogTitle className="flex justify-between text-2xl">
										<div>
											{item.title} <span className="text-sm">{item.release_date.split('-').at(0)}</span>
										</div>
									</DialogTitle>
									<div>
										{item.genres.map((genre) => (
											<Badge key={genre.id} variant={'outline'} className="px-1">
												{genre.name}
											</Badge>
										))}
									</div>
									<DialogDescription className="line-clamp-3 px-1">{item.overview}</DialogDescription>
								</div>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
				<div className="flex md:hidden">
					<Drawer open={isOpen} onOpenChange={onOpenChange}>
						<DrawerContent className="h-[80vh]">
							<DrawerHeader>
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
									style={{ objectFit: 'cover' }}
									fill
									className="-z-10 absolute rounded-t-md"
									alt={item.title}
								/>
								{!showPoster ? (
									<Button
										className="absolute top-6 right-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(true)}
									>
										Show Poster
									</Button>
								) : (
									<Button
										className="absolute top-6 right-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(false)}
									>
										Hide Poster
									</Button>
								)}
								<AnimatePresence>
									{showPoster && (
										<motion.div
											initial={{ filter: 'blur(8px)', opacity: 0 }}
											animate={{ filter: 'blur(0px)', opacity: 1 }}
											exit={{ filter: 'blur(8px)', opacity: 0 }}
											transition={{ duration: 0.2, ease: 'circInOut' }}
											className=" -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-20 rounded-md shadow-2xl"
										>
											<Image
												src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
												width={230}
												height={230}
												alt={item.title}
												className="rounded-md shadow-2xl"
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</DrawerHeader>
							<DrawerFooter className="bg-gradient-to-b from-transparent to-background">
								<div className="px-5">
									<DialogTitle className="flex justify-between text-2xl">
										<div>{item.title}</div>
									</DialogTitle>
									<div>
										{item.genres.map((genre) => (
											<Badge key={genre.id} variant={'outline'} className="px-1">
												{genre.name}
											</Badge>
										))}
									</div>
									<DialogDescription className="line-clamp-3 px-1">{item.overview}</DialogDescription>
								</div>
								<DrawerClose>
									<Button className="w-full">OK</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</>
		);
	}

	if (type === 'tv') {
		const item = data as TMDBTvInfo;
		return (
			<>
				<div className="hidden md:flex">
					<Dialog open={isOpen} onOpenChange={onOpenChange}>
						<DialogContent className="h-[75vh] max-w-5xl">
							<DialogHeader className="relative h-full w-full">
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
									style={{ objectFit: 'cover' }}
									fill
									className="absolute rounded-md"
									alt={item.name}
								/>

								{!showPoster ? (
									<Button
										className="absolute top-2 left-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(true)}
									>
										Show Poster
									</Button>
								) : (
									<Button
										className="absolute top-2 left-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(false)}
									>
										Hide Poster
									</Button>
								)}
								<AnimatePresence>
									{showPoster && (
										<motion.div
											initial={{ filter: 'blur(8px)', opacity: 0 }}
											animate={{ filter: 'blur(0px)', opacity: 1 }}
											exit={{ filter: 'blur(8px)', opacity: 0 }}
											transition={{ duration: 0.2, ease: 'circInOut' }}
											className=" -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-20 rounded-md shadow-2xl"
										>
											<Image
												src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
												width={230}
												height={230}
												alt={item.name}
												className="rounded-md shadow-2xl"
											/>
										</motion.div>
									)}
								</AnimatePresence>
								<div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-background" />
								<div className="absolute right-0 bottom-0 left-0 px-20">
									<DialogTitle className="flex justify-between text-2xl">
										<div>{item.name}</div>
									</DialogTitle>
									<div>
										{item.genres.map((genre) => (
											<Badge key={genre.id} variant={'outline'} className="px-1">
												{genre.name}
											</Badge>
										))}
									</div>
									<DialogDescription className="line-clamp-3 px-1">{item.overview}</DialogDescription>
								</div>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
				<div className="flex md:hidden">
					<Drawer open={isOpen} onOpenChange={onOpenChange}>
						<DrawerContent className="h-[80vh]">
							<DrawerHeader>
								<Image
									src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
									style={{ objectFit: 'cover' }}
									fill
									className="-z-10 absolute rounded-t-md"
									alt={item.name}
								/>
								{!showPoster ? (
									<Button
										className="absolute top-6 right-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(true)}
									>
										Show Poster
									</Button>
								) : (
									<Button
										className="absolute top-6 right-2 z-20"
										variant={'outline'}
										size={'sm'}
										onClick={() => setShowPoster(false)}
									>
										Hide Poster
									</Button>
								)}
								<AnimatePresence>
									{showPoster && (
										<motion.div
											initial={{ filter: 'blur(8px)', opacity: 0 }}
											animate={{ filter: 'blur(0px)', opacity: 1 }}
											exit={{ filter: 'blur(8px)', opacity: 0 }}
											transition={{ duration: 0.2, ease: 'circInOut' }}
											className=" -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-20 rounded-md shadow-2xl"
										>
											<Image
												src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
												width={230}
												height={230}
												alt={item.name}
												className="rounded-md shadow-2xl"
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</DrawerHeader>
							<DrawerFooter className="bg-gradient-to-b from-transparent to-background">
								<div className="px-5">
									<DialogTitle className="flex justify-between text-2xl">
										<div>{item.name}</div>
									</DialogTitle>
									<div>
										{item.genres.map((genre) => (
											<Badge key={genre.id} variant={'outline'} className="px-1">
												{genre.name}
											</Badge>
										))}
									</div>
									<DialogDescription className="line-clamp-3 px-1">{item.overview}</DialogDescription>
								</div>
								<DrawerClose>
									<Button className="w-full">OK</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</>
		);
	}
};
