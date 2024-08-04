import { discord } from '@/constants/global';

import type { LanyardResponse } from '@/types/lanyard';

export const getDiscordStatus = async (): Promise<LanyardResponse | undefined> => {
	const res = await fetch(`https://api.lanyard.rest/v1/users/${discord}`, {
		cache: 'no-store',
	});

	if (!res.ok) return;

	const data = await res.json();

	return data.data;
};
