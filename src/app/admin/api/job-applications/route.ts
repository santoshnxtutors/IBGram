import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const items = await prisma.jobApplication.findMany({
    orderBy: [{ createdAt: "desc" }],
    take: 300,
    include: { job: { select: { slug: true, title: true, department: true } } },
  });

  return Response.json({ items });
}
