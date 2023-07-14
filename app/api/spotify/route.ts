import { NextResponse } from 'next/server';

import { discord } from '@constant/index';

export async function GET() {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${discord}`, {
    cache: 'no-store',
  });
  const datajson = await res.json();

  const data = {
    now_playing: datajson.data.spotify,
    name: 'AestheticallyKaran',
    origin: 'wolmer.me',
  };

  return NextResponse.json({ data });
}
