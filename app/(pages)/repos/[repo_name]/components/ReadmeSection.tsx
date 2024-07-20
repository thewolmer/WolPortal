import ErrorComponent from '@/components/modules/ErrorComponent';
import { getRepoReadMe } from '@/lib/github/Repos';
import React from 'react';

export const ReadmeSection = async ({ name }: { name: string }) => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	const readme = await getRepoReadMe(name as string);
	if (!readme)
		return (
			<div className="flex w-full flex-col gap-5 md:w-4/6">
				<h2 className="font-bold font-mono text-primary text-xl">README.md</h2>
				<ErrorComponent content="No Readme.md file found" description="" />
			</div>
		);

	return (
		<div className="flex w-full flex-col gap-5 md:w-4/6">
			<h2 className="font-bold font-mono text-primary text-xl">README.md</h2>
			<article className="prose dark:prose-invert mx-auto w-full">
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div dangerouslySetInnerHTML={{ __html: readme || '' }} />
			</article>
		</div>
	);
};
