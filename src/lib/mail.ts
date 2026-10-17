/**
 * Transactional email via Amazon SES (SMTP).
 *
 * Credentials live in .env (SMTP_HOST/PORT/USER/PASS). Sending is best-effort
 * at the call site: a failed send must never roll back the action that
 * triggered it, so callers get a boolean rather than an exception.
 */
import nodemailer from "nodemailer";
import { CONTACT } from "@/lib/contact";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.ibgram.com";

let transport: nodemailer.Transporter | null = null;

function getTransport(): nodemailer.Transporter | null {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  if (!transport) {
    transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // STARTTLS on 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return transport;
}

/** Wraps body HTML in the IB Gram shell. Inline styles only — Gmail strips <style>. */
export function emailLayout(heading: string, bodyHtml: string): string {
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
      <a href="mailto:${CONTACT.email}" style="color:#0f766e;">${CONTACT.email}</a>.<br>
      <a href="${SITE_URL}" style="color:#6b7280;">ibgram.com</a> &middot; IB &amp; IGCSE tutoring
    </p>
  </td></tr>
</table>
</td></tr></table></body></html>`;
}

export type MailInput = { to: string; subject: string; html: string; text: string };

/**
 * Sends one email. Returns false (and logs) instead of throwing, so a mail
 * outage never breaks signup, booking or admin actions.
 */
export async function sendMail({ to, subject, html, text }: MailInput): Promise<boolean> {
  const tx = getTransport();
  if (!tx) {
    console.warn(`[mail] SMTP not configured; skipped "${subject}" to ${to}`);
    return false;
  }
  try {
    await tx.sendMail({
      from: process.env.MAIL_FROM || `IB Gram <noreply@ibgram.com>`,
      replyTo: process.env.MAIL_REPLY_TO || CONTACT.email,
      to,
      subject,
      text,
      html,
    });
    return true;
  } catch (error) {
    console.error(`[mail] failed to send "${subject}" to ${to}:`, error);
    return false;
  }
}
