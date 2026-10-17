/** Email bodies for backend-triggered mail. */
import { emailLayout } from "./mail";

const p = (html: string) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#374151;">${html}</p>`;

const button = (href: string, label: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0;"><tr><td style="background:#0f766e;border-radius:8px;">
   <a href="${href}" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">${label}</a>
   </td></tr></table>`;

export function passwordResetEmail(input: { name: string | null; link: string; expiresInMinutes: number }) {
  const hello = input.name ? `Hi ${input.name},` : "Hi,";
  const html = emailLayout(
    "Reset your password",
    p(hello) +
      p("We received a request to reset the password on your IB Gram account. Click the button below to choose a new one.") +
      button(input.link, "Reset my password") +
      p(`This link expires in ${input.expiresInMinutes} minutes and can only be used once.`) +
      p("If you didn't ask for this, you can safely ignore this email — your password stays unchanged.") +
      `<p style="margin:18px 0 0;font-size:12px;line-height:1.6;color:#9ca3af;word-break:break-all;">If the button doesn't work, paste this into your browser:<br>${input.link}</p>`,
  );
  const text = [
    hello,
    "",
    "We received a request to reset your IB Gram password.",
    "",
    `Reset it here: ${input.link}`,
    "",
    `This link expires in ${input.expiresInMinutes} minutes and can only be used once.`,
    "If you didn't ask for this, ignore this email — your password stays unchanged.",
    "",
    "- IB Gram",
  ].join("\n");
  return { subject: "Reset your IB Gram password", html, text };
}

const fmt = (d: Date) =>
  d.toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Kolkata" });

/** To the tutor, the moment a student books a demo with them. */
export function demoRequestedTutorEmail(input: {
  tutorName: string;
  studentName: string;
  subject: string;
  scheduledAt: Date;
  notes: string | null;
  dashboardUrl: string;
}) {
  const html = emailLayout(
    "New demo request",
    p(`Hi ${input.tutorName.split(" ")[0]},`) +
      p(`<strong>${input.studentName}</strong> has requested a demo class with you.`) +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Subject:</strong> ${input.subject}</p>
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Preferred time:</strong> ${fmt(input.scheduledAt)}</p>
           ${input.notes ? `<p style="margin:10px 0 0;font-size:13px;line-height:1.6;color:#6b7280;white-space:pre-line;">${input.notes}</p>` : ""}
         </td></tr>
       </table>` +
      button(input.dashboardUrl, "Accept or reschedule") +
      p("Accepting generates a Google Meet link and emails it to both of you automatically."),
  );
  const text = [
    `Hi ${input.tutorName.split(" ")[0]},`,
    "",
    `${input.studentName} has requested a demo class with you.`,
    "",
    `Subject: ${input.subject}`,
    `Preferred time: ${fmt(input.scheduledAt)}`,
    input.notes ? `\nNotes:\n${input.notes}` : "",
    "",
    `Accept or reschedule: ${input.dashboardUrl}`,
    "",
    "- IB Gram",
  ].join("\n");
  return { subject: `New demo request from ${input.studentName}`, html, text };
}

/** To the student, confirming the request reached the tutor. */
export function demoRequestedStudentEmail(input: {
  studentName: string;
  tutorName: string;
  subject: string;
  scheduledAt: Date;
  dashboardUrl: string;
}) {
  const html = emailLayout(
    "Your demo request is in",
    p(`Hi ${input.studentName.split(" ")[0]},`) +
      p(`We've sent your demo request for <strong>${input.subject}</strong> to <strong>${input.tutorName}</strong>.`) +
      p(`Preferred time: <strong>${fmt(input.scheduledAt)}</strong>`) +
      p("They'll confirm shortly. Once they accept, you'll get an email with the Google Meet link.") +
      button(input.dashboardUrl, "View my demos"),
  );
  const text = [
    `Hi ${input.studentName.split(" ")[0]},`,
    "",
    `We've sent your demo request for ${input.subject} to ${input.tutorName}.`,
    `Preferred time: ${fmt(input.scheduledAt)}`,
    "",
    "They'll confirm shortly. You'll get the Google Meet link by email once they accept.",
    "",
    `Track it here: ${input.dashboardUrl}`,
    "",
    "- IB Gram",
  ].join("\n");
  return { subject: `Demo request sent to ${input.tutorName}`, html, text };
}

/** To both parties once the tutor confirms. Carries the Meet link when there is one. */
export function demoConfirmedEmail(input: {
  recipientName: string;
  otherPartyName: string;
  viewerRole: "student" | "tutor";
  subject: string;
  scheduledAt: Date;
  meetLink: string | null;
  dashboardUrl: string;
}) {
  const withWhom =
    input.viewerRole === "student"
      ? `with <strong>${input.otherPartyName}</strong>`
      : `with your student <strong>${input.otherPartyName}</strong>`;

  const html = emailLayout(
    "Your demo class is confirmed",
    p(`Hi ${input.recipientName.split(" ")[0]},`) +
      p(`Your demo class ${withWhom} is confirmed.`) +
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:18px 0;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
         <tr><td style="padding:16px 18px;">
           <p style="margin:0 0 6px;font-size:15px;color:#111827;"><strong>Subject:</strong> ${input.subject}</p>
           <p style="margin:0;font-size:15px;color:#111827;"><strong>When:</strong> ${fmt(input.scheduledAt)}</p>
         </td></tr>
       </table>` +
      (input.meetLink
        ? button(input.meetLink, "Join Google Meet") +
          p(`The invite is in your calendar. Link: <a href="${input.meetLink}" style="color:#0f766e;">${input.meetLink}</a>`)
        : p("We'll email the Google Meet link shortly.") + button(input.dashboardUrl, "View in dashboard")),
  );

  const text = [
    `Hi ${input.recipientName.split(" ")[0]},`,
    "",
    `Your demo class with ${input.otherPartyName} is confirmed.`,
    "",
    `Subject: ${input.subject}`,
    `When: ${fmt(input.scheduledAt)}`,
    "",
    input.meetLink ? `Join Google Meet: ${input.meetLink}` : `View it here: ${input.dashboardUrl}`,
    "",
    "- IB Gram",
  ].join("\n");
  return { subject: `Demo confirmed: ${input.subject} on ${fmt(input.scheduledAt)}`, html, text };
}
