import type { NextRequest } from "next/server";
import { saveGeneratedPage } from "@/lib/generated-pages/store";
import { validateGeneratedSeoPage } from "@/lib/page-generator/validators";

import { getPages } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return Response.json({ pages: await getPages() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  try {
    const body = await request.json();
    const page = validateGeneratedSeoPage(body.page);
    const saved = saveGeneratedPage(page);
    return Response.json({
      page: saved,
      message: "Saved generated draft to local generated-pages store. Replace with database persistence for multi-user production editing.",
    });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Page save failed." }, { status: 400 });
  }
}
