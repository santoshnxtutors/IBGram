import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminFilterBar, AdminPill, AdminStatusBadge, adminFilterHref } from "../_components/AdminPrimitives";
import { getInternalLinks, getSeoHealth } from "../_lib/admin-data";

const BASE = "/admin/internal-links";

export const dynamic = "force-dynamic";

export default async function AdminInternalLinksPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const one = (key: string) => {
    const value = params[key];
    return (Array.isArray(value) ? value[0] : value)?.trim() || undefined;
  };
  const q = one("q");
  const current = { q, only: one("only") };

  const [allLinks, seo] = await Promise.all([getInternalLinks(), getSeoHealth()]);
  const needle = q?.toLowerCase();

  const links = allLinks.filter((link) => {
    if (
      needle &&
      ![link.sourceTitle, link.targetUrl, link.anchorText, link.linkType, link.status]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle)
    ) {
      return false;
    }
    if (current.only === "broken" && link.isCrawlable) return false;
    if (current.only === "nofollow" && link.followStatus === "follow") return false;
    if (current.only === "pending" && link.status === "approved") return false;
    return true;
  });

  const chip = (label: string, value: string) => ({
    label,
    href: adminFilterHref(BASE, current, "only", value),
    active: current.only === value,
  });
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Internal links" title="Internal Link Management" description="Audit source pages, target pages, anchor text, hierarchy, crawlability, follow state, broken links and approval status." />
      <AdminFilterBar
        action={BASE}
        query={q}
        placeholder="Search by source, target URL or anchor text"
        hidden={{ only: current.only }}
        filters={[chip("Broken", "broken"), chip("Nofollow", "nofollow"), chip("Pending", "pending")]}
      >
        <AdminPill>
          {links.length} / {allLinks.length}
        </AdminPill>
      </AdminFilterBar>
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <AdminCard>
          <AdminDataTable columns={["Source", "Target", "Anchor", "Type", "Priority", "Crawlable", "Follow", "Status"]} empty="No internal link matches this search." rows={links.map((link) => [link.sourceTitle, link.targetUrl, link.anchorText, link.linkType, link.priority, link.isCrawlable ? "Yes" : "No", link.followStatus, <AdminStatusBadge key={link.linkId} status={link.status === "approved" ? "published" : "review"} />])} />
        </AdminCard>
        <AdminCard>
          <h2 className="text-xl font-black text-white">Tools</h2>
          <div className="mt-3 space-y-2 text-sm font-semibold text-slate-300">
            <p>Find orphan pages: {seo.weakInternalLinks.length}</p>
            <p>Broken links: {seo.brokenInternalLinks.length}</p>
            <p>Missing city-to-area links: ready</p>
            <p>Missing area-to-sector links: ready</p>
            <p>Missing sector-to-society links: ready</p>
            <p>Missing IB/IGCSE subject links: ready</p>
          </div>
        </AdminCard>
      </div>
    </AdminShell>
  );
}


