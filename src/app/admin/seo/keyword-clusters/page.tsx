import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable } from "../../_components/AdminPrimitives";
import { getPages } from "../../_lib/admin-data";
export default async function KeywordClustersPage() { const pages = await getPages(); return <AdminShell><AdminPageHeader eyebrow="SEO" title="Keyword Clusters" description="Primary and secondary keyword groups for IB, IGCSE, city and hyperlocal pages." /><AdminCard><AdminDataTable columns={["Cluster", "Primary keyword", "Pages"]} rows={["IB", "IGCSE", "Gurugram", "Tutor profiles", "Programmes"].map((cluster) => [cluster, pages.find((page) => page.curriculum === cluster || page.city === cluster)?.primaryKeyword ?? `${cluster} tutoring`, pages.filter((page) => page.curriculum === cluster || page.city === cluster || page.title.includes(cluster)).length])} /></AdminCard></AdminShell>; }


