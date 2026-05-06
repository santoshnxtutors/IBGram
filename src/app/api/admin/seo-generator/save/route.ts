import { saveGeneratedPage } from "@/lib/generated-pages/store";
import { validateGeneratedSeoResult, ValidationError } from "@/lib/page-generator/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const result = validateGeneratedSeoResult(await request.json());
    const saved = saveGeneratedPage(result.page);
    return Response.json({
      page: saved,
      message: "Saved to local generated-pages store. Replace this adapter with a database before multi-user production use.",
    });
  } catch (error) {
    const status = error instanceof ValidationError ? 400 : 500;
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Generated page save failed.",
        issues: error instanceof ValidationError ? error.issues : undefined,
      },
      { status },
    );
  }
}
