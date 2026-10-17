import Link from "next/link";
import { Eye, FilePenLine, Rocket, Wand2 } from "lucide-react";

import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminButtonLink, AdminCard, AdminDataTable, AdminFilterBar, AdminPill, AdminScoreBadge, AdminStatusBadge, adminFilterHref } from "../_components/AdminPrimitives";
import { getPages } from "../_lib/admin-data";

const BASE = "/admin/pages";
const LOCAL_TYPES = ["ib_city", "igcse_city", "area", "sector", "society", "school"];

export const dynamic = "force-dynamic";

export default async function AdminPagesPage({
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
  const current = { q, group: one("group"), status: one("status") };

  const all = await getPages();
  const indexablePages = all.filter((page) => page.indexFlag === "index").length;
  const generatedPages = all.filter((page) => page.source === "generated").length;
  const tutorProfiles = all.filter((page) => page.pageType === "tutor_profile").length;
  const localPages = all.filter((page) => LOCAL_TYPES.includes(page.pageType)).length;

  const needle = q?.toLowerCase();
  const pages = all.filter((page) => {
    if (
      needle &&
      ![page.title, page.url, page.pageType, page.city, page.locality, page.curriculum, page.status]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle)
    ) {
      return false;
    }
    if (current.group === "indexable" && page.indexFlag !== "index") return false;
    if (current.group === "local" && !LOCAL_TYPES.includes(page.pageType)) return false;
    if (current.group === "generated" && page.source !== "generated") return false;
    if (current.group === "tutor_profile" && page.pageType !== "tutor_profile") return false;
    if (current.status && page.status !== current.status) return false;
    return true;
  });

  const chip = (label: string, param: keyof typeof current, value: string, count?: number) => ({
    label,
    href: adminFilterHref(BASE, current, param, value),
    active: current[param] === value,
    count,
  });

  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Pages" title="Page Operations" description={`Showing ${pages.length} of ${all.length} public and generated IB Gram pages from the admin adapter: static routes, IB and IGCSE tutor pages, local SEO pages, course pages, tutor profiles and generator records.`} actions={<AdminButtonLink href="/admin/pages/new">New page</AdminButtonLink>} />
      <AdminFilterBar
        action={BASE}
        query={q}
        placeholder="Search by title, URL, type, city or curriculum"
        hidden={{ group: current.group, status: current.status }}
        filters={[
          chip("Indexable", "group", "indexable", indexablePages),
          chip("Local", "group", "local", localPages),
          chip("Generated", "group", "generated", generatedPages),
          chip("Tutor profiles", "group", "tutor_profile", tutorProfiles),
          chip("Published", "status", "published"),
          chip("Draft", "status", "draft"),
        ]}
      >
        <AdminPill>
          {pages.length} / {all.length}
        </AdminPill>
      </AdminFilterBar>
      <AdminCard>
        <AdminDataTable
          columns={["Title", "Type", "URL", "Location", "Curriculum", "Status", "Index", "SEO", "Words", "Links", "Schema", "Updated", "Actions"]}
          empty="No page matches this search. Clear the filters to see everything."
          rows={pages.map((page) => [
            <Link key={page.id} href={`/admin/pages/${encodeURIComponent(page.id)}`} className="font-black text-white hover:text-emerald-300">{page.title}</Link>,
            page.pageType,
            <span key={`${page.id}-url`} className="font-mono text-xs">{page.url}</span>,
            page.city || page.locality || "-",
            page.curriculum,
            <AdminStatusBadge key={`${page.id}-status`} status={page.status} />,
            <AdminStatusBadge key={`${page.id}-index`} indexFlag={page.indexFlag} />,
            <AdminScoreBadge key={`${page.id}-score`} score={page.seoScore} />,
            page.wordCount,
            page.internalLinksCount,
            page.hasSchema ? "Ready" : "Missing",
            page.lastUpdated,
            <div key={`${page.id}-actions`} className="flex gap-2">
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}`} title="View"><Eye className="size-4 text-slate-300" /></Link>
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}/edit`} title="Edit"><FilePenLine className="size-4 text-emerald-300" /></Link>
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}/seo`} title="Regenerate SEO"><Wand2 className="size-4 text-amber-300" /></Link>
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}/publish`} title="Publish"><Rocket className="size-4 text-sky-300" /></Link>
            </div>,
          ])}
        />
      </AdminCard>
    </AdminShell>
  );
}


