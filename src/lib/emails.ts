/**
 * Email bodies. One function per message: returns { subject, html, text }
 * ready to hand to sendMail().
 */
import { emailLayout } from "@/lib/mail";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.ibgram.com";

const button = (href: string, label: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0;"><tr><td style="background:#0f766e;border-radius:8px;">
   <a href="${href}" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">${label}</a>
   </td></tr></table>`;

const p = (html: string) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#374151;">${html}</p>`;

/** Sent when an admin creates a tutor login from the admin panel. */
export function tutorCredentialsEmail(input: { name: string; email: string; password: string }) {
  const loginUrl = `${SITE_URL}/login`;
  const firstName = input.name.split(" ")[0] || "there";

  const html = emailLayout(
    "Your IB Gram tutor account is ready",
    p(`Hi ${firstName},`) +
      p("We've created your tutor account on IB Gram. You can sign in now and your profile goes live as soon as you've reviewed it.") +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Your login details</p>
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Email:</strong> ${input.email}</p>
           <p style="margin:0;font-size:15px;color:#111827;"><strong>Password:</strong> <code style="background:#eef2f7;padding:2px 6px;border-radius:4px;">${input.password}</code></p>
         </td></tr>
       </table>` +
      button(loginUrl, "Log in to your dashboard") +
      p("For your security, please change this password after your first login — you can do it from <strong>Settings</strong> in your dashboard.") +
      p("Once you're in, add your subjects, experience and availability so students can find you."),
  );

  const text = [
    `Hi ${firstName},`,
    "",
    "We've created your tutor account on IB Gram.",
    "",
    `Email: ${input.email}`,
    `Password: ${input.password}`,
    "",
    `Log in: ${loginUrl}`,
    "",
    "Please change this password after your first login from Settings in your dashboard.",
    "",
    "- IB Gram",
  ].join("\n");

  return { subject: "Your IB Gram tutor login details", html, text };
}

const fmt = (d: Date) =>
  d.toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Kolkata" });

/** Admin scheduled a demo: sent to the student and the tutor. */
export function demoScheduledEmail(input: {
  recipientName: string;
  otherPartyName: string;
  viewerRole: "student" | "tutor";
  subject: string;
  scheduledAt: Date;
  meetLink: string | null;
  credentials?: { email: string; password: string } | null;
}) {
  const withWhom =
    input.viewerRole === "student"
      ? `with <strong>${input.otherPartyName}</strong>`
      : `with your student <strong>${input.otherPartyName}</strong>`;

  const creds = input.credentials
    ? `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Your new account</p>
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Email:</strong> ${input.credentials.email}</p>
           <p style="margin:0;font-size:15px;color:#111827;"><strong>Password:</strong> <code style="background:#eef2f7;padding:2px 6px;border-radius:4px;">${input.credentials.password}</code></p>
         </td></tr>
       </table>` +
      p("Please change this password after your first login.")
    : "";

  const html = emailLayout(
    "Your demo class is scheduled",
    p(`Hi ${input.recipientName.split(" ")[0]},`) +
      p(`A demo class ${withWhom} has been scheduled for you.`) +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Subject:</strong> ${input.subject}</p>
           <p style="margin:0;font-size:15px;color:#111827;"><strong>When:</strong> ${fmt(input.scheduledAt)}</p>
         </td></tr>
       </table>` +
      (input.meetLink
        ? button(input.meetLink, "Join Google Meet") +
          p(`The invite is in your calendar. Link: <a href="${input.meetLink}" style="color:#0f766e;">${input.meetLink}</a>`)
        : p("We'll email the Google Meet link shortly.")) +
      creds,
  );

  const text = [
    `Hi ${input.recipientName.split(" ")[0]},`,
    "",
    `A demo class with ${input.otherPartyName} has been scheduled.`,
    "",
    `Subject: ${input.subject}`,
    `When: ${fmt(input.scheduledAt)}`,
    input.meetLink ? `Join Google Meet: ${input.meetLink}` : "",
    input.credentials ? `\nLogin: ${input.credentials.email}\nPassword: ${input.credentials.password}` : "",
    "",
    "- IB Gram",
  ].join("\n");
  return { subject: `Demo scheduled: ${input.subject} on ${fmt(input.scheduledAt)}`, html, text };
}

/** Nudge the other party when a new chat message arrives. */
export function newMessageEmail(input: {
  recipientName: string;
  senderName: string;
  senderRole: "student" | "tutor";
  preview: string;
  threadUrl: string;
}) {
  const who = input.senderRole === "tutor" ? "your tutor" : "your student";
  const html = emailLayout(
    `New message from ${input.senderName}`,
    p(`Hi ${input.recipientName.split(" ")[0]},`) +
      p(`You have a new message from ${who}, <strong>${input.senderName}</strong>.`) +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border-left:3px solid #0f766e;border-radius:6px;">
         <tr><td style="padding:14px 18px;">
           <p style="margin:0;font-size:15px;line-height:1.6;color:#374151;white-space:pre-line;">${input.preview}</p>
         </td></tr>
       </table>` +
      button(input.threadUrl, "Reply in your dashboard") +
      p("Replies sent from your dashboard reach them straight away."),
  );
  const text = [
    `Hi ${input.recipientName.split(" ")[0]},`,
    "",
    `New message from ${input.senderName}:`,
    "",
    input.preview,
    "",
    `Reply here: ${input.threadUrl}`,
    "",
    "- IB Gram",
  ].join("\n");
  return { subject: `New message from ${input.senderName}`, html, text };
}
