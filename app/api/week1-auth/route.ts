import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== process.env.WEEK1_PASSWORD) {
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  }

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret);

  const res = NextResponse.json({ ok: true });
  res.cookies.set('week1_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return res;
}
