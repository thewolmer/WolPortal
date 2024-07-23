import { type NextRequest, NextResponse } from 'next/server';

export const revalidate = 1;

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	const type = request.nextUrl.searchParams.get('type');
	const id = params.id;

	try {
		const response = await fetch(
			`https://tmdb-proxy-nine.vercel.app/api/${id}?type=${type}`,
			// `https://api.themoviedb.org/3/${type}/${id}/images?api_key=${process.env.TMDB_API_KEY}`,
		);

		const data = await response.json();
		return NextResponse.json(data, {
			headers,
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(
			{ error: error },
			{
				status: 500,
				headers,
			},
		);
	}
}
