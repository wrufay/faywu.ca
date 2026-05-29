import { NextResponse } from "next/server";

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: "no-store",
  });
  return res.json();
}

export async function GET() {
  const { access_token } = await getAccessToken();

  const currentRes = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    }
  );

  if (currentRes.status === 200) {
    const data = await currentRes.json();
    if (data?.item) {
      return NextResponse.json({
        isPlaying: data.is_playing,
        title: data.item.name,
        artist: data.item.artists.map((a: { name: string }) => a.name).join(", "),
        albumArt: data.item.album.images[0]?.url,
        songUrl: data.item.external_urls.spotify,
      });
    }
  }

  const recentRes = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    }
  );
  const recentData = await recentRes.json();
  const track = recentData.items?.[0]?.track;

  if (!track) return NextResponse.json({ title: null, debug: { status: recentRes.status, data: recentData } });

  return NextResponse.json({
    isPlaying: false,
    title: track.name,
    artist: track.artists.map((a: { name: string }) => a.name).join(", "),
    albumArt: track.album.images[0]?.url,
    songUrl: track.external_urls.spotify,
  });
}
