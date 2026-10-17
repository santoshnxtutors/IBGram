// PM2 ecosystem config for CloudPanel VPS deployment
// Used by: .github/workflows/deploy.yml
// Server path: /home/ibgram/htdocs/www.ibgram.com/ecosystem.config.js
//
// Ports are NOT hardcoded. They are read from environment variables so the
// CloudPanel "App Port" can change without editing this file:
//   APP_PORT      -> Next.js production port  (CloudPanel App Port, default 3005)
//   BACKEND_PORT  -> Express backend port     (default 4000)
// Local `npm run dev` is unaffected — it still uses Next.js default port 3000.

const APP_PORT = process.env.APP_PORT || "3005";
const BACKEND_PORT = process.env.BACKEND_PORT || "4000";

// PM2 evaluates this file in the deploy shell, where the GitHub Actions deploy
// step has exported every runtime secret (DATABASE_URL, ADMIN_*, JWT_*, etc.).
// Spreading process.env guarantees the running Next.js + backend processes get
// those values — instead of relying on `pm2 --update-env` to propagate them,
// which was leaving DATABASE_URL unset at runtime and causing 500s.
const sharedEnv = { ...process.env };

// Heap budget for the Next.js server.
// Measured 2026-10-15 by importing the five content stores in a bare node
// process: india-cities +209MB, generated-pages +112MB, gurgaon-keywords +59MB,
// mumbai-seo +23MB, gurgaon-seo +14MB => 424MB heap / 542MB RSS before Next.js,
// React, Prisma or a single rendered response exist. The old 768M PM2 ceiling
// left ~226MB for all of that, so a crawl killed the process every few hundred
// requests. Re-measure with tmp/gsc-fix/heap-probe.mts after adding a store.
// Defaults suit a 4GB VPS; override with env vars if the box differs.
//   NEXT_HEAP_MB        -> V8 old-space cap (soft limit, triggers GC)
//   NEXT_MAX_MEMORY     -> PM2 RSS cap      (hard limit, triggers restart)
const NEXT_HEAP_MB = process.env.NEXT_HEAP_MB || "2048";
const NEXT_MAX_MEMORY = process.env.NEXT_MAX_MEMORY || "2560M";

module.exports = {
  apps: [
    // Next.js frontend — CloudPanel Nginx proxies www.ibgram.com -> localhost:APP_PORT
    // IMPORTANT: Next.js must run in FORK mode. In cluster mode the `next`
    // CLI does not bind the port, so the app appears "online" but nothing
    // listens on APP_PORT (connection refused).
    {
      name: "ibgram-nextjs",
      script: "node_modules/next/dist/bin/next",
      args: `start --port ${APP_PORT}`,
      cwd: "/home/ibgram/htdocs/www.ibgram.com",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      // The bundle carries ~190MB of generated-page JSON/TS stores (gurgaon-seo,
      // india-cities, generated-pages, gurgaon-keywords, mumbai-seo). A sustained
      // crawl touches enough distinct routes to pull most of that into the heap,
      // so the old 768M ceiling had PM2 SIGKILL the server mid-crawl every few
      // hundred requests. Nginx answered 502 for the whole cold start, which is
      // what Search Console records as "Server error (5xx)" and why Googlebot
      // throttled back to "Crawled/Discovered - currently not indexed".
      // --max-old-space-size is set BELOW max_memory_restart on purpose: V8 then
      // runs a full GC and survives instead of PM2 killing a healthy process.
      max_memory_restart: NEXT_MAX_MEMORY,
      // Crash-loop protection, but never give up: with max_restarts: 5 a short
      // burst of OOM kills left PM2 in "stopped" and the site hard-down.
      min_uptime: "30s",
      max_restarts: 50,
      restart_delay: 2000,
      kill_timeout: 10000,
      env: {
        ...sharedEnv,
        NODE_ENV: "production",
        PORT: APP_PORT,
        NODE_OPTIONS: `--max-old-space-size=${NEXT_HEAP_MB}`,
      },
      // Logs go to PM2's default dir (~/.pm2/logs/), which the SSH/deploy user
      // owns and can write. The previous /home/ibgram/logs/ path was in a
      // different user's home and was not writable, so all logs were lost.
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },

    // Express backend API — CloudPanel Nginx proxies api.ibgram.com -> localhost:BACKEND_PORT
    {
      name: "ibgram-backend",
      script: "backend/dist/server.js",
      cwd: "/home/ibgram/htdocs/www.ibgram.com",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      min_uptime: "30s",
      max_restarts: 50,
      restart_delay: 2000,
      env: {
        ...sharedEnv,
        NODE_ENV: "production",
        PORT: BACKEND_PORT,
      },
      // Default PM2 log dir (~/.pm2/logs/) — writable by the deploy user.
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
