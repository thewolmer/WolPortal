import { NextResponse } from 'next/server';

import { discordId } from '@constant/index';

export async function GET() {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`, {
    cache: 'no-store',
  });
  const datajson = await res.json();
  const now_playing = datajson.data.spotify;

  const data = {
    now_playing: datajson.data.spotify,
    name: 'AestheticallyKaran',
    origin: 'wolmer.me',
  };

  return NextResponse.json({ data });
}
