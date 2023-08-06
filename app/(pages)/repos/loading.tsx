import Header from '@module/Header';

export default function Loading() {
  return (
    <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12">
      <Header title="Repositories" description="My public posts on github" />
      <div className="grid gap-4 md:grid-cols-2">
        {[0, 1, 2, 3].map((repo) => (
          <div key={repo}>
            <div className="flex flex-col justify-between h-full p-4 transition-colors rounded-lg bg-default">
              <div className="space-y-2">
                <div className="flex justify-between space-x-2">
                  <div className="items-center space-x-1 truncate ">
                    <span className="px-10 py-2 rounded-full bg-neutral-800 animate-pulse"></span>
                    <span className="px-10 py-2 rounded-full bg-neutral-800 animate-pulse"></span>
                  </div>
                </div>
                <div className="px-12 py-2 bg-neutral-800 animate-pulse"></div>
                <div className="px-12 py-2 bg-neutral-800 animate-pulse"></div>
                <div className="px-12 py-2 bg-neutral-800 animate-pulse"></div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 rounded-full animate-pulse"></span>{' '}
                  <span className="px-2 py-2 rounded-full animate-pulse"> </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 rounded-full animate-pulse"></span>{' '}
                    <span className="px-2 py-2 rounded-full animate-pulse"> </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 rounded-full animate-pulse"></span>
                    <span className="px-2 py-2 rounded-full animate-pulse"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
