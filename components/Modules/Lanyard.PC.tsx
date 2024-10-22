'use client';

import { Image } from '@/components/Image';
import { discord } from '@/constants/global';
import { useLanyard } from '@/hooks/use-lanyard';
import type { LanyardData } from '@/types/lanyard';
import { AnimatePresence, MotionConfig, animate, motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import { BiHide } from 'react-icons/bi';
import { RiRadioButtonLine } from 'react-icons/ri';
interface LanyardCardProps extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode;
}
const TRANSITION = {
	type: 'spring',
	bounce: 0.05,
	duration: 0.5,
};

const LanyardCard = ({ children }: LanyardCardProps) => {
	return (
		<AnimatePresence>
			<motion.div
				layout
				initial="initial"
				animate="enter"
				exit="exit"
				className="group relative right-6 bottom-6 z-20 hidden h-fit w-full max-w-xs flex-col gap-3 rounded-md bg-gradient-to-br from-white/10 via-violet-400/10 to-blue-400/10 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 md:fixed md:flex"
			>
				<div>{children}</div>
				<BiHide className="absolute top-2 right-2 cursor-pointer opacity-0 transition-all duration-300 hover:scale-150 group-hover:opacity-100" />
			</motion.div>
		</AnimatePresence>
	);
};

export const LanyardPC = () => {
	const { presence, error } = useLanyard(discord);

	const data = {
		kv: {},
		spotify: {
			track_id: '1y1rQTkWmrZdJmjwuK07GC',
			timestamps: {
				start: 1722467661891,
				end: 1722467896613,
			},
			album: 'Kaise Hua (From "Kabir Singh")',
			album_art_url: 'https://i.scdn.co/image/ab67616d0000b273ce1f4349305971b5beb75fcd',
			artist: 'Vishal Mishra; Manoj Muntashir',
			song: 'Kaise Hua (From "Kabir Singh")',
		},
		discord_user: {
			id: '932865250930360331',
			username: 'thewolmer',
			avatar: '16611f934505dfe461eecd3bb7c16438',
			discriminator: '0',
			bot: false,
			clan: null,
			global_name: 'Wolmer',
			avatar_decoration_data: null,
			display_name: 'Wolmer',
			public_flags: 4194368,
		},
		activities: [
			{
				flags: 48,
				id: 'spotify:1',
				name: 'Spotify',
				type: 2,
				state: 'Vishal Mishra; Manoj Muntashir',
				session_id: '40b6a2f71d4d8e3444286ff1934073f9',
				details: 'Kaise Hua (From "Kabir Singh")',
				timestamps: {
					start: 1722467661891,
					end: 1722467896613,
				},
				assets: {
					large_image: 'spotify:ab67616d0000b273ce1f4349305971b5beb75fcd',
					large_text: 'Kaise Hua (From "Kabir Singh")',
				},
				sync_id: '1y1rQTkWmrZdJmjwuK07GC',
				created_at: 1722467663735,
				party: {
					id: 'spotify:932865250930360331',
				},
			},
			{
				id: '7ae9c8de7f60b440',
				name: 'Visual Studio Code',
				type: 0,
				state: '📂: WolPortal',
				timestamps: {
					start: 1722466433070,
				},
				application_id: '383226320970055681',
				assets: {
					large_image: '565945769320775680',
					large_text: 'Editing a TSX file',
					small_image: '565945770067623946',
					small_text: 'Visual Studio Code',
				},
				created_at: 1722466434050,
			},
		],
		discord_status: 'online',
		active_on_discord_web: false,
		active_on_discord_desktop: true,
		active_on_discord_mobile: false,
		listening_to_spotify: false,

		success: true,
	};

	const { discord_user, discord_status, activities } = data;

	const isPlayingSpotify = data.listening_to_spotify;
	const spotify = activities?.find((activity) => activity.name === 'Spotify');
	const activity = activities?.filter((activity) => activity.name !== 'Spotify');

	const [isHovered, setHovered] = useState(false);

	if (isPlayingSpotify || activity) {
		return (
			<MotionConfig transition={TRANSITION}>
				<motion.div layout onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
					{!isHovered ? (
						<motion.div
							layout
							layoutId="container"
							className="group relative right-6 bottom-6 z-20 hidden h-fit w-full max-w-xs cursor-pointer flex-col gap-3 rounded-md bg-gradient-to-br from-white/10 via-violet-400/10 to-blue-400/10 p-4 shadow-xl backdrop-blur-md md:fixed md:flex"
						>
							<motion.div className="flex h-full items-center gap-5 overflow-hidden">
								<motion.div
									layoutId="spotifyImage"
									initial="hidden"
									animate="visible"
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
										duration: 0.3,
									}}
									className="aspect-square h-16 w-16 rounded-md"
								>
									<Image
										src={data.spotify.album_art_url}
										alt="Spotify Album Art"
										width={200}
										height={200}
										className="h-16 w-16 rounded-md"
									/>
								</motion.div>

								<div className="w-full">
									<motion.div
										layoutId="spotifyText"
										className="flex w-full flex-nowrap items-center overflow-hidden text-ellipsis font-bold text-muted-foreground"
									>
										<RiRadioButtonLine className="mr-1 animate-pulse text-green-500" />
										<span className="text-nowrap text-sm">Listening to Spotify</span>
									</motion.div>

									<motion.div
										layoutId="spotifyDetails"
										initial="hidden"
										animate="visible"
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
											duration: 0.3,
										}}
									>
										<p className="line-clamp-1 text-muted-foreground/70 text-sm">{spotify?.details}</p>
										<p className="line-clamp-1 text-muted-foreground/70 text-xs">{spotify?.state}</p>
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					) : (
						<motion.div
							layout
							layoutId="container"
							className="group relative right-6 bottom-6 z-20 hidden h-fit w-full max-w-xs cursor-pointer flex-col gap-3 rounded-md bg-gradient-to-br from-white/10 via-violet-400/10 to-blue-400/10 p-4 shadow-xl backdrop-blur-md hover:scale-110 md:fixed md:flex"
						>
							<motion.div
								layoutId="spotifyText"
								className="flex w-full flex-nowrap items-center overflow-hidden text-ellipsis font-bold text-muted-foreground"
							>
								<RiRadioButtonLine className="mr-1 animate-pulse text-green-500" />
								<span className="text-nowrap text-sm">Listening to Spotify</span>
							</motion.div>
							<motion.div className="flex flex-col items-center gap-5 overflow-hidden">
								<motion.div
									layoutId="spotifyImage"
									initial="hidden"
									animate="visible"
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
										duration: 0.3,
									}}
									className="aspect-square h-full w-full"
								>
									<Image
										src={data.spotify.album_art_url}
										alt="Spotify Album Art"
										width={400}
										height={400}
										className="h-full w-full rounded-md"
									/>
								</motion.div>

								<div className="w-full">
									<motion.div
										layoutId="spotifyDetails"
										initial="hidden"
										animate="visible"
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
											duration: 0.3,
										}}
									>
										<p className="line-clamp-1 text-base text-muted-foreground/70">{spotify?.details}</p>
										<p className="line-clamp-1 text-muted-foreground/70 text-sm">{spotify?.state}</p>
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</motion.div>
			</MotionConfig>
		);
	}
};
