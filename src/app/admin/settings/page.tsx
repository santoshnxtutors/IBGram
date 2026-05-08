import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader } from "../_components/AdminPrimitives";
import { AdminSettingsForm } from "../_components/AdminForms";
export default function SettingsPage() { return <AdminShell><AdminPageHeader eyebrow="Settings" title="Admin Settings" description="Site, SEO, AI, auth info and integrations settings. Secrets remain server-side only." /><AdminSettingsForm /></AdminShell>; }


