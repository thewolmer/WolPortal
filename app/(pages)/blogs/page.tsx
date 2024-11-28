import Reveal from '@/components/Animation/Reveal';
import { generateSeo } from '@/utils/generateSeo';
import getPostMetadata from '@/utils/getPostMetadata';

import { fetchPages } from '@/lib/notion';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { PostPreview } from './components/PostPreview';

export const generateMetadata = () =>
	generateSeo({
		title: 'Blogs // WolPortal',
		description: 'Read latest blog posts by Wolmer on various topics. Gain insights, information, and perspectives.',
		url: '/blogs',
	});

const HomePage = async () => {
	const pages = await fetchPages();

	const posts = pages.results as PageObjectResponse[];

	return (
		<div>
			<Reveal>
				<h1 className="my-10 text-center font-bold text-4xl">Blogs</h1>
				{posts.map((post) => (
					<PostPreview key={post.id} post={post as PageObjectResponse} />
				))}
			</Reveal>
		</div>
	);
};

export default HomePage;
