import { Image } from '@/components/Image';
import { Badge } from '@/components/ui/badge';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { format } from 'date-fns';
import Link from 'next/link';

// biome-ignore lint/suspicious/noExplicitAny: <bug in notion api, it says richtext doesn't exists >
export const PostPreview = ({ post }: { post: any }) => {
	const title = post.properties?.title?.rich_text?.[0]?.plain_text || 'Untitled Post';
	const description = post.properties?.description?.rich_text?.[0]?.plain_text || 'No description available.';
	const slug = post.properties?.slug?.rich_text?.[0]?.plain_text || 'no-slug';
	const tags =
		post.properties?.tags?.multi_select?.map((tag: { name: string; color: string }) => ({
			name: tag?.name || 'Unknown',
			color: tag?.color || '#000000',
		})) || [];
	const thumbnail = post.properties?.thumbnail?.url || '/images/fallback/fallback1.jpg';
	const published = post.properties?.published?.date?.start;
	const formattedDate = published ? format(new Date(published), 'MMM dd, yyyy') : 'Unknown Date';

	return (
		<Link href={`/blogs/${slug}`}>
			<div className="rounded-md bg-card shadow-sm drop-shadow-2xl hover:bg-active">
				<div className="rounded-t-lg">
					<Image
						className="h-48 w-full rounded-t-lg object-cover"
						src={thumbnail}
						alt={title}
						width={750}
						height={300}
					/>
				</div>
				<div className="p-4 ">
					<div className="flex w-full items-center justify-between py-2">
						{tags.length > 0 && (
							<div className="flex flex-row gap-2">
								{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
								{tags.map((tag: any) => (
									<Badge
										key={tag.name}
										className="text-sx text-white opacity-70"
										style={{ backgroundColor: tag.color }}
									>
										{tag.name}
									</Badge>
								))}
							</div>
						)}
						<div className="text-muted-foreground text-sm">{formattedDate}</div>
					</div>
					<h2 className="font-bold text-lg text-white/70">{title}</h2>
					<p className="text-muted-foreground text-sm">{description}</p>
				</div>
			</div>
		</Link>
	);
};
