import "server-only";

import { revalidatePath, revalidateTag } from "next/cache";
import type { RevalidationTargets } from "./affected-paths";

export const ADMIN_NO_STORE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const;

export function jsonNoStore(data: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  Object.entries(ADMIN_NO_STORE_HEADERS).forEach(([key, value]) => headers.set(key, value));
  return Response.json(data, { ...init, headers });
}

export function applyRevalidationTargets(targets: RevalidationTargets): RevalidationTargets {
  const paths = [...new Set(targets.paths)].filter(Boolean);
  const tags = [...new Set(targets.tags)].filter(Boolean);
  const seenPatterns = new Set<string>();
  const routePatterns = (targets.routePatterns ?? []).filter((target) => {
    const key = `${target.type}:${target.path}`;
    if (seenPatterns.has(key)) return false;
    seenPatterns.add(key);
    return true;
  });

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  for (const path of paths) {
    revalidatePath(path);
  }

  for (const pattern of routePatterns) {
    revalidatePath(pattern.path, pattern.type);
  }

  return { ...targets, paths, tags, routePatterns };
}

