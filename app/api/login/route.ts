import { NextResponse } from "next/server";

const PASS = "6400";
const COOKIE = "internal_auth";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") || "");

  if (password !== PASS) {
    return NextResponse.redirect(new URL("/login?err=1", req.url));
  }

  // Set cookie and redirect to /login?ok=1 (then login page pushes to /)
  const res = NextResponse.redirect(new URL("/login?ok=1", req.url));
  res.cookies.set(COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
  });
  return res;
}
