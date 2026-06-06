import type { NextRequest } from "next/server";
import { saveGeneratedPage } from "@/lib/generated-pages/store";
import { writeGeneratedPageToDb } from "@/lib/cms/generated-page-writer";
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
    const dbResult = await writeGeneratedPageToDb(saved);
    return Response.json({
      page: saved,
      persisted: dbResult.ok,
      message: dbResult.ok
        ? "Saved generated draft to local generated-pages store and Prisma database."
        : `Saved generated draft locally; database write failed: ${dbResult.error}`,
    });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Page save failed." }, { status: 400 });
  }
}
