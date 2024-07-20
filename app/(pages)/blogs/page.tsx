import Reveal from '@/components/animation/Reveal';
import { generateSeo } from '@/utils/generateSeo';
import getPostMetadata from '@/utils/getPostMetadata';

import PostPreview from './components/PostPreview';

export const generateMetadata = () =>
	generateSeo({
		title: 'WolPortal // Blogs',
		description: 'Read latest blog posts by Wolmer on various topics. Gain insights, information, and perspectives.',
		url: '/blogs',
	});

const HomePage = () => {
	const postMetadata = getPostMetadata();
	const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

	return (
		<Reveal>
			<div className="grid grid-cols-1 gap-4 py-20 md:grid-cols-2">{postPreviews}</div>{' '}
		</Reveal>
	);
};

export default HomePage;
