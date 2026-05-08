import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard } from "../../_components/AdminPrimitives";

export default function AdminRobotsPage() {
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Robots" title="Robots Preview" description="Current robots policy plus recommended admin/API blocking." />
      <AdminCard>
        <pre className="overflow-auto rounded-lg bg-black/30 p-4 text-sm leading-7 text-emerald-100">{`User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /admin/api/
Disallow: /_next/

Sitemap: https://ibgram.com/sitemap.xml`}</pre>
      </AdminCard>
    </AdminShell>
  );
}


