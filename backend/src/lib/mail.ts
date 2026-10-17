/**
 * Transactional email for the backend (Amazon SES over SMTP).
 *
 * Mirrors src/lib/mail.ts on the Next side; kept separate because the two run
 * in different bundles and `shared` is imported by client components.
 * Sends are best-effort: callers get a boolean, never an exception.
 */
import nodemailer from "nodemailer";
import { getEnv } from "../config/env";
import { logger } from "../config/logger";

let transport: nodemailer.Transporter | null = null;

function getTransport(): nodemailer.Transporter | null {
  const env = getEnv();
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) return null;
  transport ??= nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: false, // STARTTLS on 587
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
  return transport;
}

/** Wraps body HTML in the IB Gram shell. Inline styles only — Gmail strips <style>. */
export function emailLayout(heading: string, bodyHtml: string): string {
  const site = getEnv().NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const support = getEnv().MAIL_REPLY_TO;
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f4f5f7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <tr><td style="background:#0f766e;padding:20px 28px;">
    <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:.3px;">IB Gram</span>
  </td></tr>
  <tr><td style="padding:28px;">
    <h1 style="margin:0 0 16px;font-size:20px;line-height:1.3;color:#111827;">${heading}</h1>
    ${bodyHtml}
  </td></tr>
  <tr><td style="padding:18px 28px;background:#f9fafb;border-top:1px solid #e5e7eb;">
    <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7280;">
      Questions? Reply to this email or write to
      <a href="mailto:${support}" style="color:#0f766e;">${support}</a>.<br>
      <a href="${site}" style="color:#6b7280;">ibgram.com</a> &middot; IB &amp; IGCSE tutoring
    </p>
  </td></tr>
</table>
</td></tr></table></body></html>`;
}

export async function sendMail(input: { to: string; subject: string; html: string; text: string }): Promise<boolean> {
  const tx = getTransport();
  if (!tx) {
    logger.warn({ to: input.to, subject: input.subject }, "SMTP not configured; email skipped");
    return false;
  }
  try {
    const env = getEnv();
    await tx.sendMail({ from: env.MAIL_FROM, replyTo: env.MAIL_REPLY_TO, ...input });
    return true;
  } catch (error) {
    logger.error({ err: error, to: input.to, subject: input.subject }, "email send failed");
    return false;
  }
}
