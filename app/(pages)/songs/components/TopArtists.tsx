import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import ErrorComponent from '@/components/modules/ErrorComponent';
import { getTopArtists } from '@/lib/spotify';

import type { Artists } from '@/types/Artists';

const TopArtists = async () => {
	const response = await getTopArtists();

	if (response === null) {
		return <ErrorComponent />;
	}

	return (
		<>
			{response ? (
				<section className="flex flex-col">
					<h1 className="py-5 text-center font-bold text-3xl text-wolgray">TOP PLAYED ARTISTS</h1>
					<div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
						{response.map((item: Artists) => (
							<Link href={item.external_urls.spotify} key={item.id} rel="noreferrer noopener">
								<div className="flex h-full flex-col items-center rounded-2xl bg-default p-2 transition-colors hover:bg-active">
									<div className="mt-auto">
										<Image
											src={item.images[2].url}
											height={100}
											width={100}
											alt={item.name}
											className="mx-auto mb-4 h-[70px] w-[70px] rounded-2xl opacity-90 ring-neutral-600"
										/>
									</div>
									<div className="flex flex-grow flex-col justify-end">
										<h1 className="mb-1 text-center font-bold text-md text-wolgray tracking-tight">{item.name}</h1>
										<p className="text-center text-sm text-wolgray capitalize">{item.genres[0]}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</section>
			) : (
				<> </>
			)}
		</>
	);
};

export default TopArtists;
