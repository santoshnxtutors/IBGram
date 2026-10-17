import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";

export const revalidate = 3600;

/**
 * City + state suggestions for one country (?country=in), used by the tutor
 * profile form so tutors pick the site's existing spelling (e.g. Gurugram).
 */
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("country")?.trim().toUpperCase() ?? "";
  if (!/^[A-Z]{2}$/.test(code)) return Response.json({ cities: [] });

  const cities = await prisma.city
    .findMany({
      where: { country: { code } },
      select: { name: true, state: { select: { name: true } } },
      orderBy: { name: "asc" },
      take: 500,
    })
    .catch(() => []);
  return Response.json({ cities: cities.map((c) => ({ city: c.name, state: c.state.name })) });
}
