import Header from '@module/Header';

export default function Loading() {
  return (
    <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12">
      <Header title="Songs" description="My top songs activity on Spotify" />

      <div className="relative px-10 shadow-2xl h-28 rounded-2xl bg-default">
        <div className="absolute w-[112px] h-[112px] bg-neutral-800 animate-pulse  top-0 left-0 rounded-l-2xl "></div>
      </div>

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
    </main>
  );
}
