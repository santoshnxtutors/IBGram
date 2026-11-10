import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedSubjects({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="subjects" icon="book-open-check" eyebrow="Subjects" fallbackTitle="IB Subjects Covered" />;
}
