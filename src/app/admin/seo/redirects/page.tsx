import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminEmptyState } from "../../_components/AdminPrimitives";
export default function RedirectsPage() { return <AdminShell><AdminPageHeader eyebrow="SEO" title="Redirects" description="Redirect inventory placeholder for future backend rules." /><AdminEmptyState title="No redirect backend connected" detail="Add a database or config adapter to manage redirects here." /></AdminShell>; }


