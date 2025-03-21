import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt");

  //Define Protected routes
  const protectedRouted = ["/dashboard", "/profile", "/settings", "/tours"];

  if (protectedRouted.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
