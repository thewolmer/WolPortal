'use client';

import { Image } from '@/components/Image';
import { discord } from '@/constants/global';
import { useLanyard } from '@/hooks/use-lanyard';
import type { LanyardData } from '@/types/lanyard';
import { formatDistanceToNow } from 'date-fns';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import { RiRadioButtonLine } from 'react-icons/ri';

const TRANSITION = {
	type: 'spring',
	bounce: 1,
	duration: 0.3,
	stiffness: 85,
};

export const LanyardPC = () => {
	const { presence, error } = useLanyard(discord);
	const [isHovered, setHovered] = useState(false);
	if (!presence) return null;

	const data = presence as LanyardData;

	// const data = {
	// 	kv: {},
	// 	spotify: {
	// 		track_id: '1y1rQTkWmrZdJmjwuK07GC',
	// 		timestamps: {
	// 			start: 1722467661891,
	// 			end: 1722467896613,
	// 		},
	// 		album: 'Kaise Hua (From "Kabir Singh")',
	// 		album_art_url: 'https://i.scdn.co/image/ab67616d0000b273ce1f4349305971b5beb75fcd',
	// 		artist: 'Vishal Mishra; Manoj Muntashir',
	// 		song: 'Kaise Hua (From "Kabir Singh")',
	// 	},
	// 	discord_user: {
	// 		id: '932865250930360331',
	// 		username: 'thewolmer',
	// 		avatar: '16611f934505dfe461eecd3bb7c16438',
	// 		discriminator: '0',
	// 		bot: false,
	// 		clan: null,
	// 		global_name: 'Wolmer',
	// 		avatar_decoration_data: null,
	// 		display_name: 'Wolmer',
	// 		public_flags: 4194368,
	// 	},
	// 	activities: [
	// 		{
	// 			flags: 48,
	// 			id: 'spotify:1',
	// 			name: 'Spotify',
	// 			type: 2,
	// 			state: 'Vishal Mishra; Manoj Muntashir',
	// 			session_id: '40b6a2f71d4d8e3444286ff1934073f9',
	// 			details: 'Kaise Hua (From "Kabir Singh")',
	// 			timestamps: {
	// 				start: 1722467661891,
	// 				end: 1722467896613,
	// 			},
	// 			assets: {
	// 				large_image: 'spotify:ab67616d0000b273ce1f4349305971b5beb75fcd',
	// 				large_text: 'Kaise Hua (From "Kabir Singh")',
	// 			},
	// 			sync_id: '1y1rQTkWmrZdJmjwuK07GC',
	// 			created_at: 1722467663735,
	// 			party: {
	// 				id: 'spotify:932865250930360331',
	// 			},
	// 		},
	// 		{
	// 			id: '7ae9c8de7f60b440',
	// 			name: 'Visual Studio Code',
	// 			type: 0,
	// 			state: '📂: WolPortal',
	// 			timestamps: {
	// 				start: 1722466433070,
	// 			},
	// 			application_id: '383226320970055681',
	// 			assets: {
	// 				large_image: '565945769320775680',
	// 				large_text: 'Editing a TSX file',
	// 				small_image: '565945770067623946',
	// 				small_text: 'Visual Studio Code',
	// 			},
	// 			created_at: 1722466434050,
	// 		},
	// 	],
	// 	discord_status: 'online',
	// 	active_on_discord_web: false,
	// 	active_on_discord_desktop: true,
	// 	active_on_discord_mobile: false,
	// 	listening_to_spotify: false,

	// 	success: true,
	// };

	const { activities } = data;

	const isPlayingSpotify = data.listening_to_spotify;
	const spotify = activities?.find((activity) => activity.name === 'Spotify');
	const activity = activities?.filter((activity) => activity.name !== 'Spotify');

	if (data.discord_status === 'offline') return null;

	return (
		<MotionConfig transition={TRANSITION}>
			<motion.div
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={{
					hidden: {
						opacity: 0,
					},
					exit: {
						opacity: 0,
					},
					visible: {
						opacity: 1,
					},
				}}
				transition={{
					delay: 0.3,
					duration: 0.7,
				}}
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
			>
				{isPlayingSpotify && spotify && !activity[0] && (
					<StatusCard
						isHovered={isHovered}
						img={data.spotify.album_art_url as string}
						title={'Listening to Spotify'}
						line1={spotify?.details as string}
						line2={spotify?.state as string}
						timestamp={data.spotify.timestamps.start}
					/>
				)}
				{activity[0] && activities[0].platform !== 'ps5' && (
					<StatusCard
						isHovered={isHovered}
						img={`https://cdn.discordapp.com/app-assets/${activity[0].application_id}/${activity[0].assets.large_image}.png`}
						title={activity[0].name}
						line1={activity[0].assets.large_text as string}
						line2={activity[0].state as string}
						timestamp={activity[0].timestamps.start}
					/>
				)}
				{activity[0] && activities[0].platform === 'ps5' && (
					<StatusCard
						isHovered={isHovered}
						img={activity[0].assets.small_image?.replace(/^mp:external\/.+?\/https\//, 'https://') as string}
						title={'Playing a game on PS5'}
						line1={activity[0].name}
						line2={activity[0].state as string}
						timestamp={activity[0].timestamps.start}
					/>
				)}
				{activities.length === 0 && !isPlayingSpotify && data.discord_status !== 'offline' && (
					<StatusCard
						isHovered={isHovered}
						img={'https://images.beta.cosmos.so/d70558fa-e630-4cbe-9ea2-c673b4ee9a14?format=jpeg'}
						title={'Online on Discord'}
						line1={'Just chilling..'}
						line2={'No activity detected'}
						timestamp={Date.now()}
					/>
				)}
			</motion.div>
		</MotionConfig>
	);
};

const StatusCard = ({
	isHovered,
	img,
	title,
	line1,
	line2,
	timestamp,
}: { isHovered: boolean; img: string; title: string; line1: string; line2: string; timestamp: number }) => {
	const start = new Date(timestamp);
	return (
		<AnimatePresence mode="popLayout">
			{!isHovered ? (
				<motion.div
					layout
					layoutId="container"
					className="group relative right-6 bottom-6 z-20 hidden h-fit w-full max-w-xs cursor-pointer flex-col gap-3 rounded-md bg-white/5 p-4 shadow-xl backdrop-blur-md backdrop-opacity-30 md:fixed md:flex"
				>
					<motion.div className="flex h-full items-center gap-5 overflow-hidden">
						<motion.div layoutId="status-image" className="aspect-square h-16 w-16 rounded-md">
							<Image src={img} alt="Status" width={350} height={350} className="h-16 w-16 rounded-sm" />
						</motion.div>
						<div className="w-full">
							<motion.div
								layoutId="status-title"
								initial="hidden"
								animate="visible"
								exit="exit"
								variants={{
									hidden: {
										opacity: 0,
										y: 50,
									},
									exit: {
										opacity: 0,
										y: 50,
									},
									visible: {
										opacity: 1,
										y: 0,
									},
								}}
								transition={{
									delay: 0.3,
								}}
								className="flex w-full flex-nowrap items-center overflow-hidden text-ellipsis font-bold text-muted-foreground"
							>
								<RiRadioButtonLine className="mr-1 animate-pulse text-green-500" />
								<span className="text-nowrap text-sm">{title}</span>
							</motion.div>
							<motion.div
								layoutId="status-details"
								initial="hidden"
								animate="visible"
								exit="exit"
								variants={{
									hidden: {
										opacity: 0,
										y: 50,
									},
									exit: {
										opacity: 0,
										y: 50,
									},
									visible: {
										opacity: 1,
										y: 0,
									},
								}}
								transition={{
									delay: 0.3,
								}}
							>
								<p className="line-clamp-1 text-muted-foreground/70 text-sm">{line1}</p>
								<p className="line-clamp-1 text-muted-foreground/70 text-xs">{line2}</p>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			) : (
				<motion.div
					layout
					layoutId="container"
					className="group relative right-6 bottom-6 z-20 hidden h-fit w-full max-w-xs cursor-pointer flex-col gap-3 rounded-md bg-white/5 p-4 shadow-xl backdrop-blur-md backdrop-opacity-30 hover:scale-110 md:fixed md:flex"
				>
					<motion.div
						layoutId="status-title"
						className="flex w-full flex-nowrap items-center overflow-hidden text-ellipsis font-bold text-muted-foreground"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={{
							hidden: {
								opacity: 0,
								y: 50,
							},
							exit: {
								opacity: 0,
								y: 50,
							},
							visible: {
								opacity: 1,
								y: 0,
							},
						}}
						transition={{
							delay: 0.3,
						}}
					>
						<RiRadioButtonLine className="mr-1 animate-pulse text-green-500" />
						<span className="text-nowrap text-sm">{title}</span>
					</motion.div>
					<motion.div className="flex flex-col items-center gap-5 overflow-hidden">
						<motion.div layoutId="status-image" className="aspect-square h-full w-full">
							<Image priority src={img} alt="Status" width={350} height={350} className="h-full w-full rounded-md" />
						</motion.div>
						<div className="w-full">
							<motion.div
								layoutId="status-details"
								initial="hidden"
								animate="visible"
								variants={{
									hidden: {
										opacity: 0,
										y: 25,
									},
									exit: {
										opacity: 0,
										y: 25,
									},
									visible: {
										opacity: 1,
										y: 0,
									},
								}}
							>
								<p className="line-clamp-1 font-semibold text-base text-muted-foreground/70">{line1}</p>
								<p className="line-clamp-1 text-muted-foreground/70 text-sm">{line2}</p>
								<p className="line-clamp-1 font-mono text-green-600 text-sm">
									Started {formatDistanceToNow(start, { addSuffix: true })}
								</p>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
