// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const hasAgreed = req.cookies.get('agreed'); // Check for a cookie or session indicating agreement

  if (!hasAgreed && req.nextUrl.pathname === '../addSession/page.tsx') {
    return NextResponse.redirect(new URL('/Agreement', req.url));
  }

  return NextResponse.next();
}
