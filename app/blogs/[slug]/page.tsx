import fs from 'fs';

import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';

import { generateSeo } from '@util/generateSeo';
import getPostMetadata from '@util/getPostMetadata';
import { options } from '@util/markdownOptions';

export const generateMetadata = () =>
  generateSeo({
    title: 'Blog // WolPortal',
    description: 'Read the Blog by Wolmer',
    url: '/repos',
  });

const getPostContent = (slug: string) => {
  const folder = 'app/blogs/posts/';
  const file = `${folder}${slug}.md`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  }
  return null;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const { slug } = props.params;
  const post = getPostContent(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-4xl font-extrabold text-neutral-400">{post.data.title}</h1>
        <p className="mt-4 text-neutral-500">
          <span className="justify-center mx-2 text-center align-middle">
            <i className="text-2xl bx bxs-calendar"></i>
          </span>
          {post.data.date}
        </p>
      </div>

      <article className="prose prose-invert prose-p:text-wolgray prose-headings:text-wolwhite ">
        <Markdown options={options}>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
