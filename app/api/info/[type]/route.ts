import { type NextRequest, NextResponse } from 'next/server';

export const revalidate = 24 * 60 * 60;

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(request: NextRequest, { params }: { params: { type: string } }) {
	const id = request.nextUrl.searchParams.get('id');
	const type = params.type;

	if (!id || (type !== 'movie' && type !== 'tv')) {
		return NextResponse.json(
			{ error: 'Invalid Request' },
			{
				status: 400,
				headers,
			},
		);
	}

	try {
		const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.TMDB_API_KEY}`);

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
