import fs from 'node:fs';

import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';

import Reveal from '@/components/animation/Reveal';
import { Image } from '@/components/image';
import { generateSeo } from '@/utils/generateSeo';
import getPostMetadata from '@/utils/getPostMetadata';
import { options } from '@/utils/markdownOptions';

import LinkSection from './components/LinkSection';

const getPostContent = (slug: string) => {
	const folder = 'app/(pages)/blogs/posts/';
	const file = `${folder}${slug}.md`;
	if (fs.existsSync(file)) {
		const content = fs.readFileSync(file, 'utf8');
		const matterResult = matter(content);
		return matterResult;
	}
	return null;
};

type PageParams = {
	slug: string;
};
type PageProps = {
	params: PageParams;
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata | undefined> => {
	const { slug } = params;
	const post = getPostContent(slug);
	if (!post) return;

	return generateSeo({
		title: post.data.title,
		description: post.data.subtitle,
		url: `/blogs/${slug}`,
	});
};

export const generateStaticParams = async () => {
	const posts = getPostMetadata();
	return posts.map((post) => ({
		slug: post.slug,
	}));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostPage = (props: any) => {
	const { slug } = props.params;
	const post = getPostContent(slug);

	if (!post) {
		notFound();
	}

	return (
		<Reveal>
			<LinkSection />

			<div className="my-12 text-center ">
				<h1 className="font-extrabold text-4xl text-neutral-400">{post.data.title}</h1>
				<div className="flex flex-row items-center justify-center space-x-4">
					<div className="mt-4 text-neutral-500">
						<span className="mx-2 justify-center text-center align-middle">
							{/* <i className="bx bxs-calendar text-2xl" /> */}
						</span>
						{post.data.date}
					</div>
					<div className="mt-4 flex text-neutral-500 text-sm">
						<span className="mx-2 items-center justify-center ">
							<Image src="/images/wolpfp.png" width={120} height={120} alt="author" className="h-6 w-6 rounded-full" />
						</span>
						@WolmerTweets
					</div>
				</div>
			</div>

			<article className="prose prose-invert prose-headings:text-wolwhite prose-p:text-wolgray ">
				<Markdown options={options}>{post.content}</Markdown>
			</article>
		</Reveal>
	);
};

export default PostPage;
