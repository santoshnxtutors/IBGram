import { Prisma } from "@prisma/client";
import { prisma } from "../../database/prisma.js";
import type { TutorPayload } from "./tutor.types.js";

const tutorInclude = {
  tutorTags: true,
  tutorSubjects: true,
  tutorLocations: true
} satisfies Prisma.TutorInclude;

export class TutorRepository {
  findMany(query: { page: number; limit: number; search?: string; curriculum?: string; subject?: string; grade?: string; featured?: boolean; status?: string; }) {
    const where: Prisma.TutorWhereInput = {
      curriculum: query.curriculum,
      subject: query.subject,
      grade: query.grade,
      isFeatured: query.featured,
      status: query.status as any,
      OR: query.search
        ? [
            { name: { contains: query.search, mode: "insensitive" } },
            { subject: { contains: query.search, mode: "insensitive" } },
            { curriculum: { contains: query.search, mode: "insensitive" } }
          ]
        : undefined
    };

    return prisma.$transaction([
      prisma.tutor.findMany({
        where,
        include: tutorInclude,
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }]
      }),
      prisma.tutor.count({ where })
    ]);
  }

  findBySlug(slug: string) {
    return prisma.tutor.findUnique({ where: { slug }, include: tutorInclude });
  }

  async create(payload: TutorPayload) {
    return prisma.tutor.create({
      data: {
        ...payload,
        image: payload.image || null,
        tutorSubjects: { create: [{ subject: payload.subject }] },
        tutorTags: { create: payload.tags.map((tag) => ({ tag })) }
      },
      include: tutorInclude
    });
  }

  async update(slug: string, payload: Partial<TutorPayload>) {
    return prisma.tutor.update({
      where: { slug },
      data: {
        ...payload,
        image: payload.image === undefined ? undefined : payload.image || null,
        tutorSubjects: payload.subject
          ? {
              deleteMany: {},
              create: [{ subject: payload.subject }]
            }
          : undefined,
        tutorTags: payload.tags
          ? {
              deleteMany: {},
              create: payload.tags.map((tag) => ({ tag }))
            }
          : undefined
      },
      include: tutorInclude
    });
  }

  delete(slug: string) {
    return prisma.tutor.delete({ where: { slug }, include: tutorInclude });
  }
}
