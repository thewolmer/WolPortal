import { getTopTracks } from '@api/spotify';
import { Image } from '@element/Image';
import { Link } from '@element/Link';
import ErrorComponent from '@module/ErrorComponent';

import { Tracks } from '@type/Tracks';

const TopTracks = async () => {
  const response = await getTopTracks();

  if (response === null) {
    return <ErrorComponent />;
  }

  return (
    <>
      {response ? (
        <section className="flex flex-col">
          <h1 className="py-5 text-3xl font-bold text-center text-wolgray">TOP PLAYED TRACKS</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {response.map((item: Tracks) => (
              <Link href={item.external_urls.spotify} key={item.id} rel="noreferrer noopener">
                <div className="flex justify-between h-full p-4 transition-colors rounded-lg cursor-pointer linked-white focus-ring text-neutral-500 bg-neutral-800/40">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="items-center text-wolwhite text-md display-inline"> {item.name}</h3>
                    </div>
                    <p className="text-sm  text-neutral-500">
                      {Array.isArray(item.artists) ? item.artists[0].name : item.artists.name}
                    </p>
                  </div>

                  <div className="items-center inline-block mt-2 ">
                    <Image
                      src={item.album.images[2].url}
                      width={50}
                      height={50}
                      alt={item.album.name}
                      className="rounded-md shadow- 4xl opacity-70 w-64px"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section className="flex flex-col">
          <h1 className="py-5 text-3xl font-bold text-center text-wolgray">TOP PLAYED</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {[0, 1, 2, 3].map((repo) => (
              <div key={repo}>
                <div className="flex justify-between h-full p-4 transition-colors rounded-lg bg-default animate-pulse">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="items-center py-2 rounded-full display-inline px-14 bg-neutral-800 animate-pulse"></h3>
                    </div>
                    <div className="px-10 py-1 ml-2 rounded-full bg-neutral-800 animate-pulse"></div>
                  </div>

                  <div className="items-center inline-block mt-2 ">
                    <div className="px-8 py-8 rounded-md bg-neutral-700 animate-pulse"> </div>
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
