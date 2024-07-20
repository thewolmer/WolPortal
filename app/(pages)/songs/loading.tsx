import Header from '@/components/Layout/Header';

export default function Loading() {
	return (
		<main className="container mx-auto mb-10 min-h-screen w-11/12 space-y-14 pb-8 sm:w-9/12 sm:pb-10 md:w-7/12">
			<Header title="Songs" description="My top songs activity on Spotify" />

			<div className="relative h-28 rounded-2xl bg-default px-10 shadow-2xl">
				<div className="absolute top-0 left-0 h-[112px] w-[112px] animate-pulse rounded-l-2xl bg-neutral-800 " />
			</div>

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
		</main>
	);
}
