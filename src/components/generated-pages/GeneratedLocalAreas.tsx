import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedLocalAreas({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="local_areas" icon="map-pinned" eyebrow="Local coverage" fallbackTitle="Areas Covered" tinted />;
}
