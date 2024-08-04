import NotFound from '@/app/not-found';
import { getInfo } from '@/lib/tmdb/Info';
import type { TMDBMovieInfo, TMDBTvInfo } from '@/types/tmdb/info';
import React from 'react';

const page = async ({ params }: { params: Record<string, string> }) => {
	const type = params.type;
	const id = params.id;
	if (!id) return NotFound();
	if (type !== 'movie' && type !== 'tv') return NotFound();
	const res = await getInfo(type, id);
	if (!res) return NotFound();

	if (type === 'movie') {
		const data = res as TMDBMovieInfo;
		return (
			<>
				<div className="absolute" />
			</>
		);
	}
};

export default page;
