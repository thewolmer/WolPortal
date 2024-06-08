import fs from 'fs';

import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';

import Reveal from '@animation/Reveal';
import { Image } from '@element/Image';
import { generateSeo } from '@util/generateSeo';
import getPostMetadata from '@util/getPostMetadata';
import { options } from '@util/markdownOptions';

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
        <h1 className="text-4xl font-extrabold text-neutral-400">{post.data.title}</h1>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="mt-4 text-neutral-500">
            <span className="justify-center mx-2 text-center align-middle">
              <i className="text-2xl bx bxs-calendar"></i>
            </span>
            {post.data.date}
          </div>
          <div className="flex mt-4 text-sm text-neutral-500">
            <span className="items-center justify-center mx-2 ">
              <Image
                src="/images/wolpfp.png"
                width={120}
                height={120}
                alt="author"
                className="w-6 h-6 rounded-full"
              ></Image>
            </span>
            @WolmerTweets
          </div>
        </div>
      </div>

      <article className="prose prose-invert prose-p:text-wolgray prose-headings:text-wolwhite ">
        <Markdown options={options}>{post.content}</Markdown>
      </article>
    </Reveal>
  );
};

export default PostPage;
