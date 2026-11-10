import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedPrograms({ page }: { page: GeneratedSeoPage }) {
  return page.canonicalUrl.includes("igcse")
    ? <GeneratedBlockSection page={page} type="programmes" icon="layers" eyebrow="Boards and tiers" fallbackTitle="IGCSE Boards Supported" tinted />
    : <GeneratedBlockSection page={page} type="programmes" icon="layers" eyebrow="PYP, MYP, DP" fallbackTitle="IB Programmes Supported" tinted />;
}
