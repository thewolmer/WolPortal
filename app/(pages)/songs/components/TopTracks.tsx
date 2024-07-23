import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import ErrorComponent from '@/components/modules/ErrorComponent';
import { getTopTracks } from '@/lib/spotify';

import type { Tracks } from '@/types/Tracks';

const TopTracks = async () => {
	const response = await getTopTracks();

	if (response === null) {
		return <ErrorComponent />;
	}

	return (
		<>
			{response ? (
				<section className="flex flex-col">
					<h1 className="py-5 text-center font-bold text-3xl text-wolgray">TOP PLAYED TRACKS</h1>
					<div className="grid gap-4 md:grid-cols-2">
						{response.map((item: Tracks) => (
							<Link href={item.external_urls.spotify} key={item.id} rel="noreferrer noopener">
								<div className="linked-white focus-ring flex h-full cursor-pointer justify-between rounded-lg bg-neutral-800/40 p-4 text-neutral-500 transition-colors">
									<div className="space-y-2">
										<div className="flex justify-between">
											<h3 className="display-inline items-center text-md text-wolwhite"> {item.name}</h3>
										</div>
										<p className="text-neutral-500 text-sm">
											{Array.isArray(item.artists) ? item.artists[0].name : item.artists.name}
										</p>
									</div>

									<div className="mt-2 inline-block items-center ">
										<Image
											src={item.album.images[2].url}
											width={50}
											height={50}
											alt={item.album.name}
											className="shadow- 4xl w-64px rounded-md opacity-70"
										/>
									</div>
								</div>
							</Link>
						))}
					</div>
				</section>
			) : (
				<section className="flex flex-col">
					<h1 className="py-5 text-center font-bold text-3xl text-wolgray">TOP PLAYED</h1>
					<div className="grid gap-4 md:grid-cols-2">
						{[0, 1, 2, 3].map((repo) => (
							<div key={repo}>
								<div className="flex h-full animate-pulse justify-between rounded-lg bg-default p-4 transition-colors">
									<div className="space-y-2">
										<div className="flex justify-between">
											<div className="display-inline animate-pulse items-center rounded-full bg-neutral-800 px-14 py-2" />
										</div>
										<div className="ml-2 animate-pulse rounded-full bg-neutral-800 px-10 py-1" />
									</div>

									<div className="mt-2 inline-block items-center ">
										<div className="animate-pulse rounded-md bg-neutral-700 px-8 py-8"> </div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default TopTracks;
