import { NextRequest, NextResponse } from "next/server";

const COOKIE = "internal_auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page, login API, Next assets, and public images
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/_next") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico)$/)
  ) {
    return NextResponse.next();
  }

  // Already authed?
  if (req.cookies.get(COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  // Not authed -> send to login
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api).*)"],
};
