import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard/add-product")) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("error", "auth-required");
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/add-product/:path*"],
};
