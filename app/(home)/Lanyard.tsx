'use client';

import { Image } from '@/components/Image';
import { discord } from '@/constants/global';
import { useLanyard } from '@/hooks/use-lanyard';
import type { LanyardData } from '@/types/lanyard';
import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';
import { RiRadioButtonLine } from 'react-icons/ri';

interface LanyardCardProps extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode;
}

const LanyardCard = ({ children, ...props }: LanyardCardProps) => {
	const anim = {
		initial: { opacity: 0, scale: 0.9 },
		enter: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.9 },
	};

	return (
		<AnimatePresence>
			<motion.div
				layout
				variants={anim}
				initial="initial"
				animate="enter"
				exit="exit"
				className="group fixed right-6 bottom-6 z-20 flex h-fit w-full max-w-xs flex-col gap-3 rounded-md bg-gradient-to-br from-white/10 via-violet-400/10 to-blue-400/10 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105"
			>
				<div>{children}</div>
			</motion.div>
		</AnimatePresence>
	);
};

export const Lanyard = () => {
	const { presence, error } = useLanyard(discord);

	const data = presence as LanyardData;
	if (error || !data) return;

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

	const { discord_user, discord_status, activities } = data;

	const isPlayingSpotify = data.listening_to_spotify;
	const spotify = activities?.find((activity) => activity.name === 'Spotify');
	const activity = activities?.filter((activity) => activity.name !== 'Spotify');

	if (isPlayingSpotify && spotify) {
		return (
			<LanyardCard className="h-full w-full">
				<div className="flex h-full items-center gap-5 overflow-hidden">
					<div className="h-full min-w-fit" style={{ position: 'relative', flexShrink: 0 }}>
						<Image
							src={data.spotify.album_art_url}
							alt="Spotify Album Art"
							width={200}
							height={200}
							className="h-16 w-16 rounded-md "
						/>
					</div>

					<div className="w-full">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 30 }}
							transition={{ type: 'easeInOut', duration: 0.15 }}
							className="flex w-full flex-nowrap items-center overflow-hidden text-ellipsis font-bold text-muted-foreground"
						>
							<RiRadioButtonLine className="mr-1 animate-pulse text-green-500" />
							<span className=" text-nowrap text-sm">Listening to Spotify</span>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.5, y: 30 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.5, y: 30 }}
							transition={{ type: 'easeInOut' }}
						>
							<p className="line-clamp-1 text-muted-foreground/70 text-sm">{spotify.details}</p>
							<p className="line-clamp-1 text-muted-foreground/70 text-xs">{spotify.state}</p>
						</motion.div>
					</div>
				</div>
			</LanyardCard>
		);
	}

	if (activity[0])
		return (
			<LanyardCard>
				<div className="flex h-full items-center gap-5 ">
					<div className="relative min-w-fit">
						<Image
							src={`https://cdn.discordapp.com/app-assets/${activity[0].application_id}/${activity[0].assets.large_image}.png`}
							alt="large_image"
							width={200}
							height={200}
							className="h-16 w-16 rounded-md"
						/>
						<Image
							src={`https://cdn.discordapp.com/app-assets/${activity[0].application_id}/${activity[0].assets.small_image}.png`}
							alt="small_image"
							width={100}
							height={100}
							className="-right-2 -bottom-2 absolute h-6 w-6 rounded-md"
						/>
					</div>

					<div className="">
						<div className="flex items-center font-bold text-muted-foreground">
							<RiRadioButtonLine className="mr-1 animate-pulse text-green-500" />
							<span className="text-sm">{activity[0].name}</span>
						</div>
						<p className="line-clamp-1 font-mono text-muted-foreground/70 text-sm">{activity[0].assets.large_text}</p>
						<p className="line-clamp-1 font-mono text-muted-foreground/70 text-xs">{activity[0].state}</p>
					</div>
				</div>
			</LanyardCard>
		);
};
