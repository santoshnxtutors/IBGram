import type { NextRequest } from "next/server";
import { z } from "zod";

import { ALLOWED_REVALIDATION_TAGS } from "@/lib/cache/cache-tags";
import { normalizeRevalidationPath, type RevalidationTargets } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "@/app/admin/_lib/admin-auth";

export const dynamic = "force-dynamic";

const bodySchema = z
  .object({
    path: z.string().optional(),
    paths: z.array(z.string()).max(50).optional(),
    tag: z.string().optional(),
    tags: z.array(z.string()).max(50).optional(),
    reason: z.string().max(300).optional(),
  })
  .refine((value) => value.path || value.paths?.length || value.tag || value.tags?.length, {
    message: "At least one path or tag is required.",
  });

function hasValidSecret(request: NextRequest): boolean {
  const expected = process.env.REVALIDATION_SECRET?.trim();
  if (!expected) return false;
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  const header = request.headers.get("x-revalidation-secret")?.trim();
  return bearer === expected || header === expected;
}

function isAllowedTag(tag: string): boolean {
  return ALLOWED_REVALIDATION_TAGS.has(tag) || tag.startsWith("cms:tutor-reviews:");
}

function normalizePathList(values: Array<string | undefined>): string[] {
  const paths = values
    .map((value) => normalizeRevalidationPath(value))
    .filter((value): value is string => Boolean(value));

  for (const path of paths) {
    if (path.length > 1024) throw new Error("Path is too long.");
    if (!path.startsWith("/")) throw new Error("Path must start with /.");
    if (path.startsWith("//")) throw new Error("Path must be a relative site path.");
  }

  return [...new Set(paths)];
}

function normalizeTagList(values: Array<string | undefined>): string[] {
  const tags = values.map((value) => value?.trim()).filter((value): value is string => Boolean(value));
  for (const tag of tags) {
    if (!isAllowedTag(tag)) throw new Error(`Tag is not allowed: ${tag}`);
    if (tag.length > 256) throw new Error("Tag is too long.");
  }
  return [...new Set(tags)];
}

export async function POST(request: NextRequest) {
  if (!hasValidSecret(request)) {
    const session = requireAdminRequest(request);
    if (session instanceof Response) {
      return jsonNoStore({ error: "Unauthorized revalidation request." }, { status: 401 });
    }
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return jsonNoStore(
      { error: parsed.error.issues[0]?.message ?? "Invalid revalidation payload." },
      { status: 400 },
    );
  }

  try {
    const paths = normalizePathList([parsed.data.path, ...(parsed.data.paths ?? [])]);
    const tags = normalizeTagList([parsed.data.tag, ...(parsed.data.tags ?? [])]);
    const targets: RevalidationTargets = {
      paths,
      tags,
      reason: parsed.data.reason ?? "manual revalidation",
    };
    const applied = applyRevalidationTargets(targets);
    console.info("[revalidate]", applied.reason, { paths: applied.paths, tags: applied.tags });
    return jsonNoStore({ ok: true, revalidated: applied });
  } catch (error) {
    return jsonNoStore(
      { error: error instanceof Error ? error.message : "Revalidation failed." },
      { status: 400 },
    );
  }
}

