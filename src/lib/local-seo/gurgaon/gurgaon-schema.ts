import { buildGeneratedPageSchema } from "@/lib/page-generator/schema-generator";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function buildGurgaonSchema(page: GeneratedSeoPage) {
  return buildGeneratedPageSchema(page);
}
