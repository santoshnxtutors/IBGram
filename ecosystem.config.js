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
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: APP_PORT,
      },
      error_file: "/home/ibgram/logs/nextjs-error.log",
      out_file: "/home/ibgram/logs/nextjs-out.log",
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
      max_memory_restart: "256M",
      env: {
        NODE_ENV: "production",
        PORT: BACKEND_PORT,
      },
      error_file: "/home/ibgram/logs/backend-error.log",
      out_file: "/home/ibgram/logs/backend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
