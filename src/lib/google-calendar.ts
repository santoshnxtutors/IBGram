/**
 * Google Calendar + Meet for admin-scheduled demos.
 *
 * Mirrors backend/src/lib/google-calendar.ts — the two run in separate bundles
 * so the module is duplicated rather than shared. Same DCC_GOOGLE_* credentials.
 * Returns null on failure so a Meet outage never blocks scheduling.
 */
import { google } from "googleapis";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function calendarClient() {
  if (process.env.DCC_GOOGLE_ENABLED !== "true") return null;
  const raw = process.env.DCC_GOOGLE_CREDENTIALS_JSON;
  if (!raw) return null;

  let creds: { client_id?: string; client_secret?: string; refresh_token?: string };
  try {
    creds = JSON.parse(raw);
  } catch {
    console.error("[calendar] DCC_GOOGLE_CREDENTIALS_JSON is not valid JSON");
    return null;
  }
  if (!creds.client_id || !creds.client_secret || !creds.refresh_token) return null;

  const auth = new google.auth.OAuth2(creds.client_id, creds.client_secret);
  auth.setCredentials({ refresh_token: creds.refresh_token });
  return google.calendar({ version: "v3", auth });
}

type EventLike = {
  hangoutLink?: string | null;
  conferenceData?: { entryPoints?: Array<{ entryPointType?: string | null; uri?: string | null }> | null } | null;
};

function meetLinkFrom(event: EventLike): string | null {
  if (event.hangoutLink) return event.hangoutLink;
  return event.conferenceData?.entryPoints?.find((e) => e.entryPointType === "video")?.uri ?? null;
}

export async function createDemoMeeting(input: {
  summary: string;
  description: string;
  startsAt: Date;
  durationMinutes: number;
  attendees: string[];
}): Promise<{ meetLink: string | null; eventId: string } | null> {
  const calendar = calendarClient();
  if (!calendar) return null;

  const calendarId = process.env.DCC_GOOGLE_CALENDAR_ID || "primary";
  const attempts = Number(process.env.DCC_GOOGLE_CONFERENCE_POLL_ATTEMPTS) || 4;
  const delayMs = (Number(process.env.DCC_GOOGLE_CONFERENCE_POLL_DELAY_SECONDS) || 1.5) * 1000;
  const end = new Date(input.startsAt.getTime() + input.durationMinutes * 60_000);

  try {
    const created = await calendar.events.insert({
      calendarId,
      conferenceDataVersion: 1,
      sendUpdates: "all",
      requestBody: {
        summary: input.summary,
        description: input.description,
        start: { dateTime: input.startsAt.toISOString(), timeZone: "Asia/Kolkata" },
        end: { dateTime: end.toISOString(), timeZone: "Asia/Kolkata" },
        attendees: input.attendees.filter(Boolean).map((email) => ({ email })),
        conferenceData: {
          createRequest: {
            requestId: `demo-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      },
    });

    const eventId = created.data.id;
    if (!eventId) return null;

    let meetLink = meetLinkFrom(created.data);
    for (let i = 0; !meetLink && i < attempts; i += 1) {
      await sleep(delayMs);
      const fresh = await calendar.events.get({ calendarId, eventId });
      meetLink = meetLinkFrom(fresh.data);
    }
    return { meetLink, eventId };
  } catch (error) {
    console.error("[calendar] failed to create Meet:", error);
    return null;
  }
}
