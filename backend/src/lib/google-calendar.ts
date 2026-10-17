/**
 * Creates the Google Calendar event (with a Meet link) for a confirmed demo.
 *
 * Uses the existing DCC_GOOGLE_* credentials: an OAuth refresh token for the
 * organiser account. Google mints the Meet link asynchronously, so the event is
 * re-read a few times until conferenceData carries an entryPoint.
 *
 * Returns null on any failure — a missing Meet link must not block a tutor
 * from accepting a demo.
 */
import { google } from "googleapis";
import { getEnv } from "../config/env";
import { logger } from "../config/logger";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function calendarClient() {
  const env = getEnv();
  if (!env.DCC_GOOGLE_ENABLED || !env.DCC_GOOGLE_CREDENTIALS_JSON) return null;

  let creds: { client_id?: string; client_secret?: string; refresh_token?: string };
  try {
    creds = JSON.parse(env.DCC_GOOGLE_CREDENTIALS_JSON);
  } catch {
    logger.error("DCC_GOOGLE_CREDENTIALS_JSON is not valid JSON; Meet links disabled");
    return null;
  }
  if (!creds.client_id || !creds.client_secret || !creds.refresh_token) {
    logger.error("DCC_GOOGLE_CREDENTIALS_JSON is missing client_id/client_secret/refresh_token");
    return null;
  }

  const auth = new google.auth.OAuth2(creds.client_id, creds.client_secret);
  auth.setCredentials({ refresh_token: creds.refresh_token });
  return google.calendar({ version: "v3", auth });
}

export type DemoMeeting = { meetLink: string | null; eventId: string };

export async function createDemoMeeting(input: {
  summary: string;
  description: string;
  startsAt: Date;
  durationMinutes: number;
  attendees: string[];
}): Promise<DemoMeeting | null> {
  const calendar = calendarClient();
  if (!calendar) return null;

  const env = getEnv();
  const end = new Date(input.startsAt.getTime() + input.durationMinutes * 60_000);

  try {
    const created = await calendar.events.insert({
      calendarId: env.DCC_GOOGLE_CALENDAR_ID,
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
    // Google fills conferenceData a moment after the event is created.
    for (let attempt = 0; !meetLink && attempt < env.DCC_GOOGLE_CONFERENCE_POLL_ATTEMPTS; attempt += 1) {
      await sleep(env.DCC_GOOGLE_CONFERENCE_POLL_DELAY_SECONDS * 1000);
      const fresh = await calendar.events.get({ calendarId: env.DCC_GOOGLE_CALENDAR_ID, eventId });
      meetLink = meetLinkFrom(fresh.data);
    }

    if (!meetLink) logger.warn({ eventId }, "calendar event created but no Meet link appeared");
    return { meetLink, eventId };
  } catch (error) {
    logger.error({ err: error }, "failed to create Google Meet for demo");
    return null;
  }
}

function meetLinkFrom(event: { hangoutLink?: string | null; conferenceData?: { entryPoints?: Array<{ entryPointType?: string | null; uri?: string | null }> | null } | null }): string | null {
  if (event.hangoutLink) return event.hangoutLink;
  const video = event.conferenceData?.entryPoints?.find((e) => e.entryPointType === "video");
  return video?.uri ?? null;
}

/** Best-effort removal when a confirmed demo is cancelled. */
export async function cancelDemoMeeting(eventId: string): Promise<void> {
  const calendar = calendarClient();
  if (!calendar) return;
  try {
    await calendar.events.delete({ calendarId: getEnv().DCC_GOOGLE_CALENDAR_ID, eventId, sendUpdates: "all" });
  } catch (error) {
    logger.warn({ err: error, eventId }, "could not delete calendar event");
  }
}
