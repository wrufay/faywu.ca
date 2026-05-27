import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function proxy(req: NextRequest) {
  const token = req.cookies.get('week1_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/week1/login', req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/week1/login', req.url));
  }
}

export const config = {
  matcher: ['/week1'],
};
