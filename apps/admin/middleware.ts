import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@green-farm/db/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Run Supabase session token refresh
  const { supabaseResponse, user } = await updateSession(request);

  // If user is accessing protected /dashboard routes and is not logged in:
  if (pathname.startsWith("/dashboard")) {
    if (!user) {
      // If no valid session, redirect to /login
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("returnTo", pathname);
      return NextResponse.redirect(url);
    }
  }

  // If user is already logged in and visits /login, redirect to /dashboard
  if (pathname === "/login" && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
