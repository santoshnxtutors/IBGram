import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { TUTOR_REACH_CACHE_TAG, countWords } from "@/lib/cms/tutor-reach";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

const faqSchema = z.array(z.object({ question: z.string().min(1), answer: z.string().min(1) }));

const patchSchema = z.object({
  tutorId: z.string().min(1).optional(),
  slug: z.string().min(1).max(200).optional(),
  subject: z.string().min(1).max(120).optional(),
  board: z.string().min(1).max(120).optional(),
  mode: z.string().max(40).optional(),
  city: z.string().max(120).optional().nullable(),
  title: z.string().min(1).max(300).optional(),
  h1: z.string().min(1).max(300).optional(),
  intro: z.string().max(1000).optional().nullable(),
  body: z.string().max(40000).optional(),
  faqs: faqSchema.optional(),
  metaTitle: z.string().max(300).optional().nullable(),
  metaDescription: z.string().max(600).optional().nullable(),
  metaKeywords: z.array(z.string()).optional(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  indexFlag: z.enum(["index", "noindex", "auto"]).optional(),
  publishedAt: z.string().datetime().optional().nullable(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const { publishedAt, faqs, body, slug, ...rest } = parsed.data;

  // Reject slug collision with a DIFFERENT page.
  let finalSlug: string | undefined;
  if (slug !== undefined) {
    finalSlug = slugify(slug);
    if (!finalSlug) return jsonNoStore({ error: "Slug cannot be empty." }, { status: 400 });
    const collision = await prisma.tutorReachPage.findFirst({
      where: { slug: finalSlug, NOT: { id } },
      select: { id: true },
    });
    if (collision) {
      return jsonNoStore({ error: `Slug "${finalSlug}" is already used.` }, { status: 409 });
    }
  }

  const updated = await prisma.tutorReachPage.update({
    where: { id },
    data: {
      ...rest,
      ...(finalSlug ? { slug: finalSlug } : {}),
      ...(body !== undefined ? { body, wordCount: countWords(body) } : {}),
      ...(faqs !== undefined ? { faqs } : {}),
      ...(publishedAt !== undefined ? { publishedAt: publishedAt ? new Date(publishedAt) : null } : {}),
    },
  });
  revalidateTag(TUTOR_REACH_CACHE_TAG, { expire: 0 });
  return jsonNoStore({ item: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  await prisma.tutorReachPage.delete({ where: { id } });
  revalidateTag(TUTOR_REACH_CACHE_TAG, { expire: 0 });
  return jsonNoStore({ ok: true });
}
