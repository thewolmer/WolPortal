import { discord } from '@/constants/global';

import type { Lanyard } from '@/types/Lanyard';

export const getDiscordStatus = async (): Promise<Lanyard | undefined> => {
	const res = await fetch(`https://api.lanyard.rest/v1/users/${discord}`, {
		cache: 'no-store',
	});

	if (!res.ok) return;

	const data = await res.json();

	return data.data;
};
