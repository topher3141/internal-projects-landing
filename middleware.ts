import { NextRequest, NextResponse } from "next/server";

const COOKIE = "internal_auth";
const PASS = "6400";

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // allow Next.js assets + images
  if (
    pathname.startsWith("/_next") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico)$/)
  ) {
    return NextResponse.next();
  }

  // already authed?
  if (req.cookies.get(COOKIE)?.value === "1") return NextResponse.next();

  // try password via ?p=6400
  const p = searchParams.get("p");
  if (p === PASS) {
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set(COOKIE, "1", { httpOnly: true, sameSite: "lax", path: "/" });
    return res;
  }

  // otherwise show a dead-simple message
  return new NextResponse(
    `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Restricted</title></head>
<body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;padding:32px;max-width:720px">
  <h1>Restricted</h1>
  <p>This page is password protected.</p>
  <p><b>If you don't know the password ask your manager.</b></p>
  <p style="margin-top:18px">To enter, use the password in the URL like:</p>
  <pre style="background:#f4f4f4;padding:12px;border-radius:8px">?p=6400</pre>
</body>
</html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

export const config = {
  matcher: ["/((?!api).*)"],
};
