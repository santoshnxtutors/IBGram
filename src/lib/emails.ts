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

/** Sent when an admin creates a student login from the admin panel. */
export function studentCredentialsEmail(input: { name: string; email: string; password: string }) {
  const loginUrl = `${SITE_URL}/login`;
  const firstName = input.name.split(" ")[0] || "there";

  const html = emailLayout(
    "Your IB Gram student account is ready",
    p(`Hi ${firstName},`) +
      p("The IB Gram team has set up your student account. Sign in to see your tutors, book demo classes and chat with them.") +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Your login details</p>
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Email:</strong> ${input.email}</p>
           <p style="margin:0;font-size:15px;color:#111827;"><strong>Password:</strong> <code style="background:#eef2f7;padding:2px 6px;border-radius:4px;">${input.password}</code></p>
         </td></tr>
       </table>` +
      button(loginUrl, "Log in to your dashboard") +
      p("For your security, please change this password after your first login — you can do it from <strong>Settings</strong> in your dashboard."),
  );

  const text = [
    `Hi ${firstName},`,
    "",
    "The IB Gram team has set up your student account.",
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

  return { subject: "Your IB Gram student login details", html, text };
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

/** A captured payment opens the thread with that tutor for good: sent to both sides. */
export function chatUnlockedEmail(input: {
  recipientName: string;
  otherPartyName: string;
  viewerRole: "student" | "tutor";
  amount: string;
  credentials?: { email: string; password: string } | null;
}) {
  const threadUrl = `${SITE_URL}/${input.viewerRole}/messages/`;
  const lead =
    input.viewerRole === "student"
      ? `Your payment of <strong>${input.amount}</strong> went through, and your chat with <strong>${input.otherPartyName}</strong> is now open for good.`
      : `<strong>${input.otherPartyName}</strong> has paid for tutoring with you (<strong>${input.amount}</strong>). Your chat with them is now open.`;

  const creds = input.credentials
    ? `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Your new account</p>
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Email:</strong> ${input.credentials.email}</p>
           <p style="margin:0;font-size:15px;color:#111827;"><strong>Password:</strong> <code style="background:#eef2f7;padding:2px 6px;border-radius:4px;">${input.credentials.password}</code></p>
         </td></tr>
       </table>` + p("Please change this password after your first login.")
    : "";

  const html = emailLayout(
    "Your tutor chat is open",
    p(`Hi ${input.recipientName.split(" ")[0]},`) +
      p(lead) +
      button(threadUrl, "Open the chat") +
      creds +
      p("Messages sent from your dashboard arrive by email too, so nothing gets missed."),
  );

  const text = [
    `Hi ${input.recipientName.split(" ")[0]},`,
    "",
    input.viewerRole === "student"
      ? `Your payment of ${input.amount} went through. Your chat with ${input.otherPartyName} is now open for good.`
      : `${input.otherPartyName} has paid for tutoring with you (${input.amount}). Your chat with them is now open.`,
    "",
    `Open the chat: ${threadUrl}`,
    input.credentials ? `\nLogin: ${input.credentials.email}\nPassword: ${input.credentials.password}` : "",
    "",
    "- IB Gram",
  ].join("\n");

  return { subject: `Your chat with ${input.otherPartyName} is open`, html, text };
}

/**
 * Sent to a tutor who created an account but never submitted a profile, so they are invisible
 * to families. Repeats weekly until they either finish the profile or ask to stop.
 *
 * `reminderNumber` changes the tone rather than the facts: the first note assumes they simply
 * got busy, later ones are shorter and say plainly that nothing happens until the profile
 * exists. Nobody needs the same paragraph five weeks running.
 */
export function tutorProfileReminderEmail(input: { name: string; reminderNumber: number; signedUpOn?: string }) {
  const profileUrl = `${SITE_URL}/tutor/profile`;
  const firstName = input.name.split(" ")[0] || "there";
  const later = input.reminderNumber > 1;

  const opening = later
    ? p(`Hi ${firstName}, your IB Gram tutor profile is still unfinished, so families searching for a tutor cannot see you yet.`)
    : p(`Hi ${firstName},`) +
      p(
        `Thanks for signing up as a tutor on IB Gram${input.signedUpOn ? ` on ${input.signedUpOn}` : ""}. Your account is active, but you have not submitted your tutor profile yet — and until you do, you will not appear to families looking for a tutor.`,
      );

  const html = emailLayout(
    "Finish your tutor profile to go live",
    opening +
      p("It takes about ten minutes. You will need:") +
      `<ul style="margin:0 0 14px 18px;padding:0;font-size:15px;line-height:1.7;color:#374151;">
         <li>The curriculums you teach — IB PYP, MYP, DP, CP, Cambridge IGCSE or Edexcel</li>
         <li>Your subjects and the levels you take them to, HL or SL</li>
         <li>Your city, and whether you teach at home, online or both</li>
         <li>A short note on your experience and how you teach</li>
       </ul>` +
      button(profileUrl, "Complete my tutor profile") +
      p(
        "Once it is submitted our team reviews it, and your profile goes live on the site after that. Matching is by syllabus and level, so the more precisely you fill it in, the better the enquiries you get.",
      ) +
      p(
        `If you no longer want to tutor with us, just reply to this email and we will close your account — we will stop emailing you either way.`,
      ),
  );

  const text = [
    later
      ? `Hi ${firstName}, your IB Gram tutor profile is still unfinished, so families cannot see you yet.`
      : `Hi ${firstName},`,
    "",
    later
      ? ""
      : "Thanks for signing up as a tutor on IB Gram. Your account is active, but you have not submitted your tutor profile yet - and until you do, you will not appear to families looking for a tutor.",
    "",
    "It takes about ten minutes. You will need:",
    "  - The curriculums you teach (IB PYP, MYP, DP, CP, Cambridge IGCSE or Edexcel)",
    "  - Your subjects and levels, HL or SL",
    "  - Your city, and whether you teach at home, online or both",
    "  - A short note on your experience and how you teach",
    "",
    `Complete your profile: ${profileUrl}`,
    "",
    "Once submitted, our team reviews it and your profile goes live after that.",
    "",
    "If you no longer want to tutor with us, reply to this email and we will close your account.",
    "",
    "- IB Gram",
  ]
    .filter((line, i, all) => !(line === "" && all[i - 1] === ""))
    .join("\n");

  return {
    subject: later ? "Your IB Gram tutor profile is still unfinished" : "Finish your IB Gram tutor profile to go live",
    html,
    text,
  };
}

/** HTML-escapes customer-supplied text (name, note) before it goes into an email body. */
const esc = (value: string) =>
  value.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] ?? c);

/** Sent to the customer the moment Razorpay captures their payment: receipt plus the invoice. */
export function paymentReceiptEmail(input: {
  customerName: string;
  orderId: string;
  amount: string;
  paidOn: string;
  tutorName?: string | null;
  description?: string | null;
  method?: string | null;
  transactionId?: string | null;
}) {
  const firstName = input.customerName.split(" ")[0] || "there";
  const invoiceUrl = `${SITE_URL}/payment/?order_id=${encodeURIComponent(input.orderId)}`;
  const rows = [
    ["Invoice number", input.orderId],
    ["Payment date", input.paidOn],
    ["Paid for", input.description || "IB / IGCSE tutoring services"],
    ["Tutor", input.tutorName],
    ["Payment method", input.method],
    ["Transaction ID", input.transactionId],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  const html = emailLayout(
    "Payment received - thank you!",
    p(`Hi ${esc(firstName)},`) +
      p(
        `We've received your payment of <strong>${esc(input.amount)}</strong>${
          input.tutorName ? ` for sessions with <strong>${esc(input.tutorName)}</strong>` : ""
        }. Your invoice is below, and you can download it as a PDF any time from the link.`,
      ) +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Invoice</p>
           ${rows
             .map(
               ([term, value]) =>
                 `<p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>${term}:</strong> ${esc(value)}</p>`,
             )
             .join("")}
           <p style="margin:12px 0 0;padding-top:12px;border-top:1px solid #e5e7eb;font-size:17px;color:#111827;"><strong>Amount paid: ${esc(input.amount)}</strong></p>
         </td></tr>
       </table>` +
      button(invoiceUrl, "View & download invoice (PDF)") +
      p("Keep this email for your records. If anything looks wrong, just reply and we'll sort it out."),
  );

  const text = [
    `Hi ${firstName},`,
    "",
    `We've received your payment of ${input.amount}${input.tutorName ? ` for sessions with ${input.tutorName}` : ""}.`,
    "",
    ...rows.map(([term, value]) => `${term}: ${value}`),
    `Amount paid: ${input.amount}`,
    "",
    `Download your invoice: ${invoiceUrl}`,
    "",
    "Keep this email for your records. If anything looks wrong, just reply to this email.",
    "",
    "IB Gram",
  ].join("\n");

  return { subject: `Payment received - invoice ${input.orderId}`, html, text };
}
