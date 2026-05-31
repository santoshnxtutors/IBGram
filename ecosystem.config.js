// PM2 ecosystem config for CloudPanel VPS deployment
// Used by: .github/workflows/deploy.yml
// Server path: /home/ibgram/htdocs/www.ibgram.com/ecosystem.config.js

module.exports = {
  apps: [
    // Next.js frontend (port 3003)
    // CloudPanel Nginx proxies www.ibgram.com to localhost:3003
    {
      name: "ibgram-nextjs",
      script: "node_modules/.bin/next",
      args: "start --port 3003",
      cwd: "/home/ibgram/htdocs/www.ibgram.com",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3003",
      },
      error_file: "/home/ibgram/logs/nextjs-error.log",
      out_file: "/home/ibgram/logs/nextjs-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },

    // ── Express backend API (port 4000) ──────────────────────────────────────
    // CloudPanel Nginx proxies api.ibgram.com → localhost:4000
    {
      name: "ibgram-backend",
      script: "backend/dist/server.js",
      cwd: "/home/ibgram/htdocs/www.ibgram.com",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      env: {
        NODE_ENV: "production",
        PORT: "4000",
      },
      error_file: "/home/ibgram/logs/backend-error.log",
      out_file: "/home/ibgram/logs/backend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
