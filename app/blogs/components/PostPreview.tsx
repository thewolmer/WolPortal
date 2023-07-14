import Link from 'next/link';

import { PostMetadata } from '@type/PostMetaData';

const PostPreview = (props: PostMetadata) => (
  <Link href={`/blogs/${props.slug}`}>
    <div className="p-4 rounded-md shadow-sm bg-default hover:bg-active">
      <p className="text-sm text-wolgray">{props.date}</p>

      <h2 className="mb-4 font-bold text-lime-700">{props.title}</h2>
      <p className="text-wolgray">{props.subtitle}</p>
    </div>
  </Link>
);

export default PostPreview;
