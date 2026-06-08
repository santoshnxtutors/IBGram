import type { NextRequest } from "next/server";
import { getAffectedPathsForInternalLink, getAffectedPathsForPage, mergeRevalidationTargets } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { getInternalLinks, getPageById, updatePage } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { adminInternalLinkSchema } from "../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return jsonNoStore({ links: await getInternalLinks() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = adminInternalLinkSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: "Invalid internal link.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  const sourcePage = await getPageById(parsed.data.sourcePageId);
  if (!sourcePage) return jsonNoStore({ error: "Source page not found." }, { status: 404 });

  const link = {
    linkId: `admin-link-${Date.now().toString(36)}`,
    sourcePageId: parsed.data.sourcePageId,
    targetPageId: parsed.data.targetPageId,
    targetUrl: parsed.data.targetUrl,
    anchorText: parsed.data.anchorText,
    linkContext: "",
    linkType: parsed.data.linkType,
    priority: parsed.data.priority,
    followStatus: parsed.data.followStatus,
    isCrawlable: parsed.data.targetUrl.startsWith("/"),
    linkStatus: "active" as const,
  };

  const saved = await updatePage(sourcePage.id, {
    internalLinks: [...sourcePage.internalLinks.filter((item) => item.linkId !== link.linkId), link],
  });
  if (!saved) return jsonNoStore({ error: "Source page not found." }, { status: 404 });
  if (!saved.persisted) {
    return jsonNoStore(
      { error: saved.message, persisted: false, link },
      { status: 501 },
    );
  }
  const revalidated = applyRevalidationTargets(
    mergeRevalidationTargets("internal link changed", [
      getAffectedPathsForPage(sourcePage, saved.page),
      getAffectedPathsForInternalLink({ sourceUrl: sourcePage.url, targetUrl: link.targetUrl }),
    ]),
  );
  return jsonNoStore({ link, page: saved.page, persisted: true, message: saved.message, revalidated });
}
