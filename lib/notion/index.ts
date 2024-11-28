import { Client } from '@notionhq/client';
import type { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
	auth: process.env.NOTION_SECRET,
});

export const fetchPages = async () => {
	'use server';
	return await notion.databases.query({
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		database_id: process.env.BLOG_DB!,
		filter: {
			property: 'status',
			status: {
				equals: 'live',
			},
		},
	});
};

export const fetchBySlug = async (slug: string) => {
	'use server';
	return await notion.databases
		.query({
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			database_id: process.env.BLOG_DB!,
			filter: {
				property: 'slug',
				rich_text: {
					equals: slug,
				},
			},
		})
		.then((response) => {
			return response.results[0] as PageObjectResponse | undefined;
		});
};

export const fetchPageBlocks = async (pageId: string) => {
	'use server';
	return await notion.blocks.children
		.list({
			block_id: pageId,
		})
		.then((response) => {
			return response.results as BlockObjectResponse[];
		});
};
