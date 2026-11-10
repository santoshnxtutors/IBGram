import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedSchools({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="schools" icon="building-2" eyebrow="School ecosystem" fallbackTitle="School Ecosystem Support" />;
}
