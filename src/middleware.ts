// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();
// console.log(77777,'middleware')

//   if (url.pathname === "/api/auth/error") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
const publicRoutes = ['/', '/login'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL(`/dashboard/${token.id}`, req.url));
  }
  const url = req.nextUrl.clone();

  if (url.pathname === "/api/auth/error") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};

