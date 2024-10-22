import { type NextRequest, NextResponse } from 'next/server';

export const revalidate = 24 * 60 * 60;

export async function GET(request: NextRequest, { params }: { params: { type: string } }) {
	const id = request.nextUrl.searchParams.get('id');
	const type = params.type;

	if (!id || (type !== 'movie' && type !== 'tv')) {
		return NextResponse.json(
			{ error: 'Invalid Request' },
			{
				status: 400,
			},
		);
	}

	try {
		const response = await fetch(
			// `https://wolportal.vercel.app/api/images/tmdb/${type}?id=${id}`,
			// `https://tmdb-proxy-nine.vercel.app/api/${id}?type=${type} `,
			`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${process.env.TMDB_API_KEY}`,
		);

		const data = await response.json();
		return NextResponse.json(data, {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(
			{ error: error },
			{
				status: 500,
			},
		);
	}
}
