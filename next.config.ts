import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  // Keep Prisma OUT of the Turbopack/webpack bundle. When bundled, Turbopack
  // emits a content-hashed module name (e.g. "@prisma/client-2c3a283f...")
  // that only exists in the build machine's node_modules. A prebuilt .next
  // shipped to the server then fails with "Cannot find module
  // @prisma/client-<hash>" on every DB-backed page (the admin 500).
  // Marking it external makes Next.js require("@prisma/client") normally from
  // the server's node_modules at runtime.
  serverExternalPackages: ["@prisma/client", "prisma", ".prisma/client"],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"],
    serverComponentsHmrCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  async headers() {
    const isProd = process.env.NODE_ENV === "production";
    // In dev (http://localhost) we cannot send `upgrade-insecure-requests` —
    // that directive auto-upgrades every fetch() to https:// which the dev
    // server doesn't serve, causing "Failed to fetch" on every admin write.
    // Also widen `connect-src` to localhost variants so devtools / sourcemaps
    // / HMR don't get blocked.
    const csp = isProd
      ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://images.unsplash.com https://randomuser.me https://www.googletagmanager.com https://www.google-analytics.com; font-src 'self'; connect-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
      : "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://images.unsplash.com https://randomuser.me https://www.googletagmanager.com https://www.google-analytics.com; font-src 'self'; connect-src 'self' http: https: ws: wss:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';";

    const baseHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
    ];

    // HSTS only makes sense over HTTPS in production.
    if (isProd) {
      baseHeaders.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }

    const staticAssetHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      { source: "/images/:path*", headers: staticAssetHeaders },
      { source: "/uploads/:path*", headers: staticAssetHeaders },
      { source: "/ibgramlogo.png", headers: staticAssetHeaders },
      { source: "/student_sophia_usa_review_avatar.png", headers: staticAssetHeaders },
      { source: "/student_malik_dubai_review_avatar.png", headers: staticAssetHeaders },
      { source: "/student_sarah_london_review_avatar.png", headers: staticAssetHeaders },
      { source: "/tutor_sarah_avatar_1775559612425.png", headers: staticAssetHeaders },
      { source: "/tutor_james_avatar_1775559651647.png", headers: staticAssetHeaders },
      { source: "/tutor_elena_avatar_1775559725738.png", headers: staticAssetHeaders },
      {
        source: "/(.*)",
        headers: baseHeaders,
      },
    ];
  },
};

export default nextConfig;
