import Link from 'next/link';

import type { PostMetadata } from '@/types/PostMetaData';

const PostPreview = (props: PostMetadata) => (
	<Link href={`/blogs/${props.slug}`}>
		<div className="rounded-md bg-default p-4 shadow-sm drop-shadow-2xl hover:bg-active">
			<p className="text-sm text-wolgray">{props.date}</p>

			<h2 className="mb-4 font-bold text-cyan-600">{props.title}</h2>
			<p className="text-wolgray">{props.subtitle}</p>
		</div>
	</Link>
);

export default PostPreview;
