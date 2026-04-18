import { prisma } from "../../database/prisma.js";

export class BlogRepository {
  findMany(query: any) {
    const where: any = {
      status: query.status as any,
      subject: query.subject,
      curriculum: query.curriculum,
      OR: query.search
        ? [
            { title: { contains: query.search, mode: "insensitive" } },
            { excerpt: { contains: query.search, mode: "insensitive" } }
          ]
        : undefined
    };

    return prisma.$transaction([
      prisma.blog.findMany({
        where,
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }]
      }),
      prisma.blog.count({ where })
    ]);
  }

  findBySlug(slug: string) {
    return prisma.blog.findUnique({ where: { slug } });
  }

  create(data: any) {
    return prisma.blog.create({ data: { ...data, publishedAt: data.publishedAt ? new Date(data.publishedAt) : null, tagsJson: data.tagsJson ?? [] } });
  }

  update(slug: string, data: any) {
    return prisma.blog.update({ where: { slug }, data: { ...data, publishedAt: data.publishedAt ? new Date(data.publishedAt) : undefined } });
  }

  delete(slug: string) {
    return prisma.blog.delete({ where: { slug } });
  }
}
