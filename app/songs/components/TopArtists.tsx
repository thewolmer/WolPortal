import { getTopArtists } from '@api/spotify';
import { Image } from '@element/Image';
import { Link } from '@element/Link';
import ErrorComponent from '@module/ErrorComponent';

import { Artists } from '@type/Artists';

const TopArtists = async () => {
  const response = await getTopArtists();

  if (response === null) {
    return <ErrorComponent />;
  }

  return (
    <>
      {response ? (
        <section className="flex flex-col">
          <h1 className="py-5 text-3xl font-bold text-center text-wolgray">TOP PLAYED ARTISTS</h1>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
            {response.map((item: Artists) => (
              <Link href={item.external_urls.spotify} key={item.id} rel="noreferrer noopener">
                <div className="flex flex-col items-center h-full p-2 transition-colors bg-default hover:bg-active rounded-2xl">
                  <div className="mt-auto">
                    <Image
                      src={item.images[2].url}
                      height={100}
                      width={100}
                      alt={item.name}
                      className="mx-auto mb-4 rounded-2xl opacity-90 w-[70px] h-[70px] ring-neutral-600"
                    />
                  </div>
                  <div className="flex flex-col justify-end flex-grow">
                    <h1 className="mb-1 font-bold tracking-tight text-center text-md text-wolgray">{item.name}</h1>
                    <p className="text-sm text-center capitalize  text-wolgray">{item.genres[0]}</p>
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
