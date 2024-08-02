import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const sec_origin = request.headers.get('Sec-Fetch-Site');
	const key = request.headers.get('X-Api-Identifier');
	if (
		(sec_origin !== 'cross-site' && sec_origin !== 'none' && sec_origin !== null) ||
		key === process.env.NEXT_PUBLIC_API_IDENTIFIER
	) {
		const response = NextResponse.next();
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
		return response;
	}

	return NextResponse.json(
		{
			error: 'Forbidden',
			message: 'Feeling a little adventures today huh? 🤠',
		},
		{ status: 403 },
	);
}

export const config = {
	matcher: ['/api/(.*)'],
};
