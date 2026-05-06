import { generateSeoPage } from "@/lib/page-generator/page-generator";
import { validateGeneratorInput, ValidationError } from "@/lib/page-generator/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const input = validateGeneratorInput(await request.json());
    const result = await generateSeoPage(input);
    return Response.json(result);
  } catch (error) {
    const status = error instanceof ValidationError ? 400 : 500;
    return Response.json(
      {
        error: error instanceof Error ? error.message : "SEO generation failed.",
        issues: error instanceof ValidationError ? error.issues : undefined,
      },
      { status },
    );
  }
}
