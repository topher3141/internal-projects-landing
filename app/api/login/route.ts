import { NextResponse } from "next/server";

const PASS = "6400";
const COOKIE = "internal_auth";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") || "");

  if (password !== PASS) {
    return new NextResponse(
      `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Restricted</title></head>
<body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;padding:32px;max-width:520px;margin:0 auto">
  <h1>Restricted</h1>
  <p style="color:#b00020"><b>Incorrect password.</b></p>
  <p>If you don't know the password ask your manager.</p>
  <p><a href="/login">Try again</a></p>
</body>
</html>`,
      { status: 401, headers: { "content-type": "text/html; charset=utf-8" } }
    );
  }

  const res = NextResponse.redirect(new URL("/", req.url));
  res.cookies.set(COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
  });
  return res;
}
