import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader } from "../_components/AdminPrimitives";
import { AdminAssetManager } from "../_components/AdminForms";
export default function AssetsPage() { return <AdminShell><AdminPageHeader eyebrow="Assets" title="Asset Manager" description="Upload-ready image management with preview, URL copy, alt text and page attachment fields." /><AdminAssetManager /></AdminShell>; }


