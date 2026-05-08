import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminSeoScoreCard, AdminDataTable } from "../../../_components/AdminPrimitives";
import { getPageById } from "../../../_lib/admin-data";

export default async function AdminPageSeo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="SEO" title={`SEO controls: ${page.title}`} description="Regenerate metadata, inspect canonical/robots, review duplicate risk and prepare publish-safe SEO improvements." />
      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <AdminSeoScoreCard score={page.seoScore} warnings={page.duplicateRisk !== "low" ? [`Duplicate risk is ${page.duplicateRisk}.`] : []} />
        <AdminCard>
          <AdminDataTable columns={["Field", "Value"]} rows={[["Meta title", page.metaTitle], ["Meta description", page.metaDescription], ["H1", page.h1], ["Canonical", page.canonicalUrl], ["Robots", page.robotsTag], ["Primary keyword", page.primaryKeyword], ["Secondary keywords", page.secondaryKeywords.join(", ")]]} />
        </AdminCard>
      </div>
    </AdminShell>
  );
}

