import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import { notFound } from 'next/navigation';
import 'highlight.js/styles/felipec.css';
import Image from 'next/image';

export default async function Page({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;

	// Fetch the blog post by slug
	const post = await fetchBySlug(slug);
	if (!post) {
		notFound();
	}

	// Fetch the page blocks
	const block = await fetchPageBlocks(post.id);
	const renderer = new NotionRenderer({
		client: notion,
	});

	// Use plugins for rendering
	renderer.use(hljsPlugin({}));
	renderer.use(bookmarkPlugin(undefined));

	let html = await renderer.render(...block);

	// Replace all <img> tags with Next.js Image component equivalent
	html = html.replace(/<img([^>]+)src="([^"]+)"([^>]*)>/g, (_, preAttrs, src, postAttrs) => {
		const altMatch = preAttrs.match(/alt="([^"]*)"/);
		const alt = altMatch ? altMatch[1] : 'notion-image';
		return `
        <Image
          src="${src}"
          alt="${alt}"
          width={800}
          height={400}
          class="rounded-xl shadow"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      `;
	});

	// Get the thumbnail property
	const thumbnail = post.properties?.thumbnail?.url || '/images/fallback/fallback1.jpg';

	return (
		<div className="flex w-full flex-col items-center justify-center gap-10">
			{/* Thumbnail Image */}
			<div className='relative h-[40vh] w-full'>
				<Image className=" w-full rounded-lg object-cover" src={thumbnail} alt="Blog Thumbnail" fill />
			</div>

			{/* Blog Post Content */}
			<article className="prose mx-auto w-full max-w-2xl prose-hr:border-neutral-600/50">
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</article>
		</div>
	);
}
