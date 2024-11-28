import Link from 'next/link';

import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const PostPreview = ({ post }: { post: PageObjectResponse }) => {
	console.log(post);
	const title = post.properties.title.rich_text[0].plain_text;
	const description = post.properties.description.rich_text[0].plain_text;
	const slug = post.properties.slug.rich_text[0].plain_text;
	const tags = post.properties.tags.multi_select.map((tag) => ({
		name: tag.name,
		color: tag.color,
	}));

	return (
		<Link href={`/blogs/${slug}`}>
			<div className="rounded-md bg-default p-4 shadow-sm drop-shadow-2xl hover:bg-active">
				<p className="text-sm text-wolgray"> hi</p>

				<h2 className="mb-4 font-bold text-cyan-600">{title}</h2>
				<p className="text-wolgray">{description}</p>
			</div>
		</Link>
	);
};
