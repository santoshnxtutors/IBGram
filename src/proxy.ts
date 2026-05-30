import { NextResponse, type NextRequest } from "next/server";

// Static, in-process Gurgaon→Gurugram fallback redirects so a cold proxy
// (with no DB / cache yet) still serves canonical Gurugram URLs. The full
// RedirectRule table is consulted server-side via metadata generators and
// admin-driven cache invalidation; proxy only handles the highest-volume
// alias collisions to avoid 404s for Gurgaon search traffic.
const STATIC_ALIAS_REDIRECTS: Array<{ from: RegExp; to: (m: RegExpMatchArray) => string }> = [
  { from: /^\/ib-tutors\/gurgaon(\/.*)?$/i, to: (m) => `/ib-tutors/gurugram${m[1] ?? "/"}` },
  { from: /^\/igcse-tutors\/gurgaon(\/.*)?$/i, to: (m) => `/igcse-tutors/gurugram${m[1] ?? "/"}` },
  { from: /^\/igcse-pages\/gurgaon(\/.*)?$/i, to: (m) => `/igcse-pages/gurugram${m[1] ?? "/"}` },
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  for (const rule of STATIC_ALIAS_REDIRECTS) {
    const match = pathname.match(rule.from);
    if (match) {
      const url = request.nextUrl.clone();
      url.pathname = rule.to(match);
      url.search = search;
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/ib-tutors/:path*",
    "/igcse-tutors/:path*",
    "/igcse-pages/:path*",
  ],
};
