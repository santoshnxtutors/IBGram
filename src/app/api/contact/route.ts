import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(160),
  email: z.string().trim().email("A valid email is required").max(240),
  phone: z.string().trim().max(40).optional().nullable(),
  inquiryType: z.string().trim().max(120).optional().nullable(),
  message: z.string().trim().min(1, "Message is required").max(5000),
  // Honeypot: bots fill hidden fields. Real users leave it empty. Accept any
  // value here so we can silently swallow bot submissions below (a hard reject
  // would teach bots to skip the field).
  company: z.string().max(200).optional().nullable(),
  sourcePage: z.string().trim().max(300).optional().nullable(),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid submission" }, { status: 400 });
  }

  // Honeypot tripped — pretend success so bots don't retry, but store nothing.
  if (parsed.data.company) {
    return Response.json({ ok: true });
  }

  const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent")?.slice(0, 400) || null;

  try {
    await prisma.contactLead.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        inquiryType: parsed.data.inquiryType || null,
        message: parsed.data.message,
        sourcePage: parsed.data.sourcePage || null,
        ipAddress,
        userAgent,
      },
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send your message. Please try again or email us directly." }, { status: 500 });
  }
}
