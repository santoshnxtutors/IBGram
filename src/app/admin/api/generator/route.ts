import type { NextRequest } from "next/server";

import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { generateAdminSeoDraft } from "../../_lib/admin-data";
import { adminGeneratorSchema } from "../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = adminGeneratorSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return jsonNoStore({ error: "Invalid generator input.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const input = parsed.data;
  const result = await generateAdminSeoDraft({
    pageType: input.pageType,
    cityName: input.cityName,
    localityName: input.localityName || input.area || input.sector || input.society || input.school,
    primaryKeyword: input.primaryKeyword,
    serviceFocus: input.serviceFocus,
    nearbyAreas: [...input.nearbyAreas, ...input.nearbySectors, ...input.nearbySocieties],
    nearbySchools: input.nearbySchools,
    proofNotes: input.proofNotes,
    tutorAvailabilityNotes: input.tutorAvailabilityNotes,
    ctaFocus: input.ctaFocus,
    indexPreference: input.indexPreference,
  });
  return jsonNoStore(result);
}
