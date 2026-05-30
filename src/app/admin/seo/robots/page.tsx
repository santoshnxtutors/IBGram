import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../../_components/AdminPrimitives";
import { RobotsClient } from "./RobotsClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const FALLBACK_PREVIEW = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /admin/api/

Sitemap: https://ibgram.com/sitemap.xml`;

export default async function AdminRobotsPage() {
  let rows: Awaited<ReturnType<typeof prisma.robotsRule.findMany>> = [];
  let dbError: string | null = null;
  try {
    rows = await prisma.robotsRule.findMany({
      where: { isActive: true },
      orderBy: [{ userAgent: "asc" }, { directive: "asc" }],
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const items = rows.map((row) => ({
    id: row.id,
    userAgent: row.userAgent,
    directive: row.directive,
    path: row.path,
    isActive: row.isActive,
  }));

  const preview =
    items.length === 0
      ? FALLBACK_PREVIEW
      : renderRobotsPreview(items) + `\n\nSitemap: ${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ibgram.com"}/sitemap.xml`;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="SEO"
        title="Robots Rules"
        description="Database-backed robots.txt directives. /robots.txt revalidates immediately on save."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Robots database not reachable" detail={dbError} /> : <RobotsClient items={items} />}
      </AdminCard>
      <AdminCard className="mt-5">
        <h2 className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Live preview</h2>
        <pre className="mt-3 overflow-auto rounded-lg bg-black/30 p-4 text-sm leading-7 text-emerald-100">{preview}</pre>
      </AdminCard>
    </AdminShell>
  );
}

function renderRobotsPreview(rows: Array<{ userAgent: string; directive: string; path: string }>) {
  const grouped = new Map<string, string[]>();
  for (const row of rows) {
    const ua = row.userAgent || "*";
    const arr = grouped.get(ua) ?? [];
    arr.push(`${row.directive}: ${row.path}`);
    grouped.set(ua, arr);
  }
  return [...grouped.entries()]
    .map(([ua, lines]) => `User-agent: ${ua}\n${lines.join("\n")}`)
    .join("\n\n");
}
