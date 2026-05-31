# IB Gram — Deployment Guide

This document covers everything needed to deploy IB Gram to **Cloudflare Pages** (frontend) and a **VPS** (Express backend + PostgreSQL).

---

## Architecture

```
GitHub ──push──► GitHub Actions
                      │
          ┌───────────┴────────────┐
          ▼                        ▼
 Cloudflare Pages          VPS (Ubuntu/Debian)
 (Next.js frontend)        ├── Node.js (PM2)
                           ├── Express backend
                           └── PostgreSQL
```

---

## Step 1 — GitHub Repository Secrets

Go to **GitHub → Your Repo → Settings → Secrets and variables → Actions → New repository secret** and add every secret listed below.

> **Rule:** never commit real values. The `.env.example` file is the only environment file in source control.

### 1A — Cloudflare (Frontend)

| Secret name | What it is | Where to get it |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with **Cloudflare Pages: Edit** permission | Cloudflare Dashboard → My Profile → API Tokens → Create Token → Use "Edit Cloudflare Pages" template |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID | Cloudflare Dashboard → right-side panel → Account ID |
| `CLOUDFLARE_PAGES_PROJECT` | The **project name** you created in Cloudflare Pages | Cloudflare Dashboard → Pages → your project name (e.g. `ibgram`) |

### 1B — Database

| Secret name | Example value | Notes |
|---|---|---|
| `DATABASE_URL` | `postgresql://user:pass@host:5432/ibgram1?sslmode=require` | Full Postgres connection string. Use `sslmode=require` in production. |
| `DB_HOST` | `db.yourhost.com` | Hostname only (used by some scripts) |
| `DB_PORT` | `5432` | Default Postgres port |
| `DB_NAME` | `ibgram1` | Database name |
| `DB_USER` | `ibgram_user` | DB user |
| `DB_PASSWORD` | *(strong random password)* | DB password |

### 1C — Application URLs

| Secret name | Example value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://ibgram.com` | Your live domain — used for canonical URLs and OG tags |
| `NEXT_PUBLIC_APP_URL` | `https://ibgram.com` | Same as SITE_URL unless you have a separate app subdomain |
| `BACKEND_URL` | `https://api.ibgram.com` | Your Express backend URL |

### 1D — Auth & Session Secrets

> Generate each secret with: `openssl rand -hex 64`

| Secret name | Notes |
|---|---|
| `AUTH_SESSION_SECRET` | Long random string — signs session cookies |
| `JWT_ACCESS_SECRET` | Signs short-lived JWT access tokens (15 min) |
| `JWT_REFRESH_SECRET` | Signs long-lived JWT refresh tokens (30 days) |
| `ADMIN_SESSION_SECRET` | Signs the Next.js admin session cookie |
| `ADMIN_PASSWORD_HASH` | Bcrypt hash of your admin password. Generate with: `node -e "const b=require('bcrypt');b.hash('YourPassword',12).then(console.log)"` |
| `ADMIN_EMAIL` | Admin login email (e.g. `admin@ibgram.com`) |
| `ADMIN_USERNAME` | Admin username |
| `ADMIN_PASSWORD` | Plain admin password (used only for initial seed — rotate after first login) |

### 1E — VPS SSH (Backend Deploy)

| Secret name | Notes |
|---|---|
| `VPS_SSH_KEY` | Private SSH key (`-----BEGIN OPENSSH PRIVATE KEY-----…`). The **public** key must be in `~/.ssh/authorized_keys` on the VPS. |
| `VPS_HOST` | VPS IP or hostname (e.g. `167.99.123.45` or `vps.ibgram.com`) |
| `VPS_USER` | SSH user on the VPS (e.g. `ubuntu` or `deploy`) |
| `VPS_DEPLOY_PATH` | Absolute path on VPS where the app lives (e.g. `/var/www/ibgram`) |

**Generate SSH key pair (on your local machine):**
```bash
ssh-keygen -t ed25519 -C "github-deploy-ibgram" -f ~/.ssh/ibgram_deploy
# Copy public key to VPS:
ssh-copy-id -i ~/.ssh/ibgram_deploy.pub ubuntu@YOUR_VPS_IP
# Paste the PRIVATE key contents into the VPS_SSH_KEY secret
cat ~/.ssh/ibgram_deploy
```

### 1F — Uploads / Storage (pick one)

**Option A — Local filesystem (simplest, but files live on the VPS)**

| Secret name | Value |
|---|---|
| `UPLOAD_PROVIDER` | `local` |
| `NEXT_PUBLIC_UPLOAD_MAX_BYTES` | `5242880` (5 MB) |

**Option B — Cloudinary (recommended for production)**

| Secret name | Where to get it |
|---|---|
| `UPLOAD_PROVIDER` | `cloudinary` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary dashboard → Account Details |
| `CLOUDINARY_API_KEY` | Cloudinary dashboard → API Keys |
| `CLOUDINARY_API_SECRET` | Cloudinary dashboard → API Keys |

**Option C — AWS S3**

| Secret name | Notes |
|---|---|
| `UPLOAD_PROVIDER` | `s3` |
| `AWS_REGION` | e.g. `ap-south-1` |
| `AWS_S3_BUCKET` | Your bucket name |
| `AWS_ACCESS_KEY_ID` | IAM user with S3 PutObject permission |
| `AWS_SECRET_ACCESS_KEY` | IAM secret |

### 1G — Optional Services

| Secret name | Notes |
|---|---|
| `OPENAI_API_KEY` | Only needed if you use the AI content generation features |
| `SENTRY_DSN` | Error monitoring — get from sentry.io project settings |

---

## Step 2 — Cloudflare Pages Setup

1. Go to **Cloudflare Dashboard → Pages → Create a project**
2. Connect your GitHub repo
3. Set build settings:
   - **Framework preset:** `Next.js`
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Node.js version:** `20`
4. Under **Environment variables**, add the `NEXT_PUBLIC_*` variables from Section 1C above
5. Note the **Project name** — this goes into `CLOUDFLARE_PAGES_PROJECT` secret

---

## Step 3 — VPS Setup

```bash
# 1. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Install PM2 globally
sudo npm install -g pm2

# 3. Install PostgreSQL (if self-hosting the DB)
sudo apt-get install -y postgresql postgresql-contrib

# 4. Create the deploy directory
sudo mkdir -p /var/www/ibgram
sudo chown deploy:deploy /var/www/ibgram

# 5. Create .env on the VPS (the CI only ships dist — not .env)
nano /var/www/ibgram/.env
# Paste production values — see .env.example for all keys

# 6. PM2 startup (auto-restart on reboot)
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u deploy --hp /home/deploy
```

---

## Step 4 — Database Migration on First Deploy

After the first successful CI run, SSH into your VPS and run:

```bash
cd /var/www/ibgram
npx prisma migrate deploy --schema database/prisma/schema.prisma
npx prisma db seed --schema database/prisma/schema.prisma
```

---

## Step 5 — Custom Domain

### Cloudflare Pages (frontend)
1. Pages → Your project → Custom domains → Add custom domain
2. Add `ibgram.com` and `www.ibgram.com`
3. Cloudflare automatically provisions SSL

### Backend API
1. Point `api.ibgram.com` → your VPS IP (A record in Cloudflare DNS)
2. Set **Proxy status = DNS only (grey cloud)** for the API subdomain to avoid Cloudflare proxying WebSocket / SSE traffic
3. Install Certbot on VPS for SSL:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d api.ibgram.com
   ```

---

## Deployment Flow Summary

```
git push main
    │
    ├── lint job (always runs)
    │
    ├── build-frontend → deploy-frontend → Cloudflare Pages
    │
    ├── build-backend  → deploy-backend → VPS via SSH
    │       └── prisma migrate deploy
    │           pm2 restart
    │
    └── smoke-test (checks live URL + /health endpoint)
```

---

## Secrets Checklist

Copy this list and tick off each one before your first deploy:

- [ ] `CLOUDFLARE_API_TOKEN`
- [ ] `CLOUDFLARE_ACCOUNT_ID`
- [ ] `CLOUDFLARE_PAGES_PROJECT`
- [ ] `DATABASE_URL`
- [ ] `DB_HOST` / `DB_PORT` / `DB_NAME` / `DB_USER` / `DB_PASSWORD`
- [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `NEXT_PUBLIC_APP_URL`
- [ ] `BACKEND_URL`
- [ ] `AUTH_SESSION_SECRET`
- [ ] `JWT_ACCESS_SECRET`
- [ ] `JWT_REFRESH_SECRET`
- [ ] `ADMIN_SESSION_SECRET`
- [ ] `ADMIN_PASSWORD_HASH`
- [ ] `ADMIN_EMAIL`
- [ ] `ADMIN_USERNAME`
- [ ] `ADMIN_PASSWORD`
- [ ] `VPS_SSH_KEY`
- [ ] `VPS_HOST`
- [ ] `VPS_USER`
- [ ] `VPS_DEPLOY_PATH`
- [ ] `UPLOAD_PROVIDER` + cloud storage keys (Cloudinary / S3)
- [ ] `NEXT_PUBLIC_UPLOAD_MAX_BYTES`
- [ ] `OPENAI_API_KEY` *(optional)*
- [ ] `SENTRY_DSN` *(optional)*

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Build fails: `prisma generate` error | Make sure `DATABASE_URL` secret is set and the DB is reachable from GitHub Actions runners (allow `0.0.0.0/0` in DB firewall rules temporarily, or use a tunnel) |
| Cloudflare deploy fails: `project not found` | Double-check `CLOUDFLARE_PAGES_PROJECT` matches the exact project name in Cloudflare Pages (case-sensitive) |
| SSH deploy: `Permission denied (publickey)` | Confirm the public key is in `~/.ssh/authorized_keys` on the VPS **for the correct user** (`VPS_USER`) |
| PM2 `restart` fails on first deploy | First run: `pm2 start backend/dist/server.js --name ibgram-backend` manually on the VPS, then CI will use `pm2 restart` on subsequent deploys |
| `prisma migrate deploy` fails: `shadow database` error | Use `--skip-generate` flag or ensure `DATABASE_URL` user has `CREATE DATABASE` permission (needed for shadow DB in CI) |
