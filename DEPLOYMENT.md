# IB Gram — CloudPanel VPS Deployment Guide

**Server:** `13.127.64.109`
**Panel:** CloudPanel (port 8443)
**Domain:** `www.ibgram.com`
**Site user:** `ibgram`
**SSH user:** `ibgramuser`
**Deploy path:** `/home/ibgram/htdocs/www.ibgram.com`

---

## Architecture

```
GitHub push → GitHub Actions CI
                    │
                    ▼
            Build Next.js + Backend
                    │
              rsync over SSH
                    │
                    ▼
         VPS  13.127.64.109
         ├── PM2: ibgram-nextjs  (port 3000)
         ├── PM2: ibgram-backend (port 4000)
         └── CloudPanel Nginx
               ├── www.ibgram.com  → localhost:3000
               └── api.ibgram.com → localhost:4000
```

---

## Step 1 — One-time VPS setup (do this first, only once)

SSH into your server using CloudPanel credentials:

```bash
ssh ibgramuser@13.127.64.109
```

### 1A — Install Node.js 20 on the VPS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # should show v20.x.x
```

### 1B — Install PM2 globally

```bash
sudo npm install -g pm2
pm2 startup   # copy and run the command it prints
```

### 1C — Create the log folder

```bash
mkdir -p /home/ibgram/logs
```

### 1D — Create the .env file on the server

```bash
nano /home/ibgram/htdocs/www.ibgram.com/.env
```

Paste all your production values (see Section 3 below for every key).

### 1E — Generate the SSH deploy key

Run this **on your local machine** (not the server):

```bash
ssh-keygen -t ed25519 -C "github-deploy-ibgram" -f ~/.ssh/ibgram_deploy
# Press Enter twice for no passphrase
```

Copy the **public key** to the VPS:

```bash
ssh-copy-id -i ~/.ssh/ibgram_deploy.pub ibgramuser@13.127.64.109
```

Or manually: copy the output of `cat ~/.ssh/ibgram_deploy.pub` and paste it into CloudPanel → SSH/FTP → SSH Users → click `ibgramuser` → add the public key.

Print the **private key** to copy into GitHub:

```bash
cat ~/.ssh/ibgram_deploy
```

---

## Step 2 — Configure CloudPanel Nginx (reverse proxy)

In CloudPanel → Sites → www.ibgram.com → **Vhost** tab, replace the contents with:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.ibgram.com ibgram.com;

    # Let CloudPanel handle SSL redirect
    return 301 https://www.ibgram.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.ibgram.com ibgram.com;

    ssl_certificate /etc/nginx/ssl/www.ibgram.com/certificate.crt;
    ssl_certificate_key /etc/nginx/ssl/www.ibgram.com/private.key;

    # Next.js app
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
    }

    # Static files served directly (faster, bypasses Node.js)
    location /_next/static/ {
        alias /home/ibgram/htdocs/www.ibgram.com/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    location /images/ {
        alias /home/ibgram/htdocs/www.ibgram.com/public/images/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Block admin API from outside
    location /admin/api/ {
        deny all;
        return 403;
    }
}
```

Click **Save** in CloudPanel. Then go to **SSL/TLS** tab and enable Let's Encrypt for `www.ibgram.com`.

---

## Step 3 — GitHub Secrets (Settings → Secrets → Actions)

Go to **https://github.com/santoshnxtutors/IBGram/settings/secrets/actions** → click **New repository secret** for each one below.

### SSH / Server

| Secret name | Value |
|---|---|
| `VPS_HOST` | `13.127.64.109` |
| `VPS_USER` | `ibgramuser` |
| `VPS_SSH_PORT` | `22` |
| `VPS_SSH_KEY` | The **private key** from `cat ~/.ssh/ibgram_deploy` (full content including `-----BEGIN...` and `-----END...`) |

### Database

| Secret name | Example value |
|---|---|
| `DATABASE_URL` | `postgresql://ibgram_user:PASSWORD@localhost:5432/ibgram1?sslmode=disable` |

> **Note:** If your PostgreSQL is on the same VPS, use `localhost`. Get DB host/user/pass from CloudPanel → Sites → www.ibgram.com → **Databases** tab.

### URLs

| Secret name | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.ibgram.com` |
| `NEXT_PUBLIC_APP_URL` | `https://www.ibgram.com` |
| `BACKEND_URL` | `https://api.ibgram.com` (or `http://localhost:4000` if no API subdomain) |

### Auth secrets (generate each with: `openssl rand -hex 64`)

| Secret name | Notes |
|---|---|
| `ADMIN_USERNAME` | Your admin login username |
| `ADMIN_PASSWORD_HASH` | Generate: `node -e "const c=require('crypto');console.log('sha256:'+c.createHash('sha256').update('YourPassword').digest('hex'))"` |
| `ADMIN_SESSION_SECRET` | `openssl rand -hex 64` |
| `AUTH_SESSION_SECRET` | `openssl rand -hex 64` |
| `JWT_ACCESS_SECRET` | `openssl rand -hex 64` |
| `JWT_REFRESH_SECRET` | `openssl rand -hex 64` |

### Uploads

| Secret name | Value |
|---|---|
| `UPLOAD_PROVIDER` | `local` (or `cloudinary`) |
| `NEXT_PUBLIC_UPLOAD_MAX_BYTES` | `5242880` |
| `CLOUDINARY_CLOUD_NAME` | *(only if using Cloudinary)* |
| `CLOUDINARY_API_KEY` | *(only if using Cloudinary)* |
| `CLOUDINARY_API_SECRET` | *(only if using Cloudinary)* |

### Optional

| Secret name | Notes |
|---|---|
| `OPENAI_API_KEY` | Only if AI content generation is used |
| `SENTRY_DSN` | Error monitoring |

---

## Step 4 — .env file on the VPS

This file lives on the server at `/home/ibgram/htdocs/www.ibgram.com/.env`.
It is **never committed to git** — the CI only deploys built code, not secrets.

```env
NODE_ENV=production

# URLs
NEXT_PUBLIC_SITE_URL=https://www.ibgram.com
NEXT_PUBLIC_APP_URL=https://www.ibgram.com
BACKEND_URL=http://localhost:4000

# Database (get from CloudPanel → Databases tab)
DATABASE_URL=postgresql://ibgram_user:PASSWORD@localhost:5432/ibgram1?sslmode=disable
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ibgram1
DB_USER=ibgram_user
DB_PASSWORD=YOUR_DB_PASSWORD

# Admin auth
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD_HASH=sha256:YOUR_HASH_HERE
ADMIN_SESSION_SECRET=YOUR_64_CHAR_RANDOM_STRING
ADMIN_EMAIL=your@email.com

# Auth
AUTH_SESSION_SECRET=YOUR_64_CHAR_RANDOM_STRING
JWT_ACCESS_SECRET=YOUR_64_CHAR_RANDOM_STRING
JWT_REFRESH_SECRET=YOUR_64_CHAR_RANDOM_STRING
SESSION_TTL=8h
ACCESS_TOKEN_TTL=15m
REFRESH_TOKEN_TTL=30d

# Uploads
UPLOAD_PROVIDER=local
UPLOAD_DIR=public/uploads
UPLOAD_MAX_BYTES=5242880
NEXT_PUBLIC_UPLOAD_MAX_BYTES=5242880

# Cookie settings
COOKIE_SECURE=true
CORS_ORIGIN=https://www.ibgram.com
```

---

## Step 5 — First deployment (manual)

Before GitHub Actions takes over, do the first deploy manually:

```bash
# On your VPS
ssh ibgramuser@13.127.64.109

cd /home/ibgram/htdocs/www.ibgram.com

# Install deps
npm ci --legacy-peer-deps

# Generate Prisma client
npx prisma generate --schema database/prisma/schema.prisma

# Run migrations
npx prisma migrate deploy --schema database/prisma/schema.prisma

# Start with PM2
pm2 start ecosystem.config.js
pm2 save

# Check both apps are running
pm2 status
```

---

## Step 6 — Verify everything works

```bash
# On VPS — check PM2 processes
pm2 status

# Test Next.js directly
curl http://localhost:3000

# Test backend directly
curl http://localhost:4000/health

# Check logs
pm2 logs ibgram-nextjs --lines 50
pm2 logs ibgram-backend --lines 50
```

---

## How GitHub Actions deploys (after setup)

Every `git push main`:

```
1. Lint (ESLint)
2. Build (Next.js + backend)
3. rsync files → 13.127.64.109 as ibgramuser
4. On server: npm ci + prisma migrate + pm2 restart
5. Smoke test: curl https://www.ibgram.com → expect 200
```

---

## Secrets checklist

- [ ] `VPS_HOST` = `13.127.64.109`
- [ ] `VPS_USER` = `ibgramuser`
- [ ] `VPS_SSH_PORT` = `22`
- [ ] `VPS_SSH_KEY` = private key content
- [ ] `DATABASE_URL`
- [ ] `NEXT_PUBLIC_SITE_URL` = `https://www.ibgram.com`
- [ ] `NEXT_PUBLIC_APP_URL` = `https://www.ibgram.com`
- [ ] `BACKEND_URL`
- [ ] `ADMIN_USERNAME`
- [ ] `ADMIN_PASSWORD_HASH`
- [ ] `ADMIN_SESSION_SECRET`
- [ ] `AUTH_SESSION_SECRET`
- [ ] `JWT_ACCESS_SECRET`
- [ ] `JWT_REFRESH_SECRET`
- [ ] `UPLOAD_PROVIDER`
- [ ] `NEXT_PUBLIC_UPLOAD_MAX_BYTES`

---

## Troubleshooting

| Problem | Fix |
|---|---|
| SSH: `Permission denied (publickey)` | The public key from `ibgram_deploy.pub` must be in `/home/ibgramuser/.ssh/authorized_keys` |
| PM2 `restart` fails on first run | Run `pm2 start ecosystem.config.js` manually on VPS first |
| `prisma migrate deploy` fails | Check `DATABASE_URL` in `.env` on VPS is correct. PostgreSQL must be running. |
| Site shows 502 Bad Gateway | Next.js isn't running on port 3000. Run `pm2 logs ibgram-nextjs` to see the error. |
| `.env not found` error at runtime | The `.env` file must be created manually on the VPS — it's never deployed by CI. |
| CloudPanel shows wrong Node version | In CloudPanel → Sites → www.ibgram.com → Settings, check Node.js version is 20 |
