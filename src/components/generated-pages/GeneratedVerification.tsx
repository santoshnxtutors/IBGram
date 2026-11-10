import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedVerification({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="verification" icon="shield-check" eyebrow="Verification" fallbackTitle="Tutor Verification" />;
}
