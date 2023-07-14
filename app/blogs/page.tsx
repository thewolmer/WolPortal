import { generateSeo } from '@util/generateSeo';
import getPostMetadata from '@util/getPostMetadata';

import PostPreview from './components/PostPreview';

export const generateMetadata = () =>
  generateSeo({
    title: 'Blogs // WolPortal',
    description: 'Wolmer Blogs',
    url: '/blogs',
  });

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return <div className="grid grid-cols-1 gap-4 py-20 md:grid-cols-2">{postPreviews}</div>;
};

export default HomePage;
