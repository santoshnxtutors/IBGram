import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { TUTOR_REACH_CACHE_TAG, countWords } from "@/lib/cms/tutor-reach";
import { requireAdminRequest } from "../../_lib/admin-auth";

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

const createSchema = z.object({
  tutorId: z.string().min(1),
  slug: z.string().min(1).max(200).optional(),
  subject: z.string().min(1).max(120),
  board: z.string().min(1).max(120),
  mode: z.string().max(40).optional(),
  city: z.string().max(120).optional().nullable(),
  title: z.string().min(1).max(300),
  h1: z.string().min(1).max(300),
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

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.tutorReachPage.findMany({
    orderBy: [{ updatedAt: "desc" }],
    take: 500,
    include: { tutor: { select: { displayName: true, slug: true } } },
  });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const { publishedAt, faqs, body, slug, ...rest } = parsed.data;

  const finalSlug = slugify(slug || rest.title);
  if (!finalSlug) return jsonNoStore({ error: "Could not derive a valid slug." }, { status: 400 });

  const collision = await prisma.tutorReachPage.findUnique({ where: { slug: finalSlug }, select: { id: true } });
  if (collision) {
    return jsonNoStore({ error: `Slug "${finalSlug}" is already used. Pick a different one.` }, { status: 409 });
  }

  const bodyText = body ?? "";
  const created = await prisma.tutorReachPage.create({
    data: {
      ...rest,
      slug: finalSlug,
      body: bodyText,
      faqs: faqs ?? [],
      wordCount: countWords(bodyText),
      ...(publishedAt ? { publishedAt: new Date(publishedAt) } : {}),
    },
  });
  revalidateTag(TUTOR_REACH_CACHE_TAG, { expire: 0 });
  return jsonNoStore({ item: created });
}
