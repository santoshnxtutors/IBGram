#!/usr/bin/env bash
# Pushes the secrets/variables that deploy.yml needs from your local .env into
# GitHub. Values are piped on stdin so they never land in argv, logs or history.
#
#   bash set-github-secrets.sh
#
# Safe to re-run: `gh secret set` overwrites in place.
set -uo pipefail

REPO="santoshnxtutors/IBGram"
cd "$(dirname "$0")"

if [ ! -f .env ]; then echo "ERROR: .env not found next to this script."; exit 1; fi
gh auth status >/dev/null 2>&1 || { echo "ERROR: run 'gh auth login' first."; exit 1; }

# Reads a key from .env and strips one layer of surrounding quotes.
getval() {
  grep -E "^$1=" .env | head -1 | cut -d= -f2- | sed -E "s/^'(.*)'$/\1/; s/^\"(.*)\"$/\1/"
}

echo "== Secrets (sourced from .env) =="
for key in \
  SMTP_HOST SMTP_PORT SMTP_USER SMTP_PASS MAIL_FROM MAIL_REPLY_TO \
  DCC_GOOGLE_ENABLED DCC_GOOGLE_CALENDAR_ID DCC_GOOGLE_CREDENTIALS_JSON DCC_GOOGLE_ORGANIZER_EMAIL \
  REVALIDATION_SECRET
do
  value="$(getval "$key")"
  if [ -z "$value" ]; then
    printf '  %-32s SKIP (not in .env)\n' "$key"
    continue
  fi
  if printf '%s' "$value" | gh secret set "$key" --repo "$REPO" >/dev/null 2>&1; then
    printf '  %-32s set\n' "$key"
  else
    printf '  %-32s FAILED\n' "$key"
  fi
done

echo
echo "== Variables (non-secret tuning knobs) =="
set_var() {
  if gh variable set "$1" --repo "$REPO" --body "$2" >/dev/null 2>&1; then
    printf '  %-42s = %s\n' "$1" "$2"
  else
    printf '  %-42s FAILED\n' "$1"
  fi
}
set_var BACKEND_PORT 4000
set_var DCC_GOOGLE_CONFERENCE_POLL_ATTEMPTS 4
set_var DCC_GOOGLE_CONFERENCE_POLL_DELAY_SECONDS 1.5
set_var DCC_GOOGLE_TIMEOUT_SECONDS 12
set_var PRISMA_LOG_ERRORS true

cat <<'NOTE'

== Still missing, and NOT in your .env — add by hand if the feature is used ==
  VPS_SSH_KEY              only needed if you deploy by key rather than VPS_SSH_PASSWORD
  AWS_REGION / AWS_S3_BUCKET / AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY
                           only needed when UPLOAD_PROVIDER=s3
  CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET / CLOUDINARY_UPLOAD_PRESET
                           only needed when UPLOAD_PROVIDER=cloudinary
  OPENAI_API_KEY           admin AI generator
  OPENAI_MODEL             falls back to gpt-5.2
  SENTRY_DSN               error reporting; optional

Add one with:  gh secret set NAME --repo santoshnxtutors/IBGram
NOTE
