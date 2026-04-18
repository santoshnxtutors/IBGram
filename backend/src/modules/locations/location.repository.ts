import { prisma } from "../../database/prisma.js";

export class LocationRepository {
  findMany(query: any) {
    const where: any = {
      level: query.level,
      parentId: query.parentId,
      isActive: query.isActive,
      OR: query.search
        ? [
            { name: { contains: query.search, mode: "insensitive" } },
            { slug: { contains: query.search, mode: "insensitive" } }
          ]
        : undefined
    };

    return prisma.$transaction([
      prisma.location.findMany({
        where,
        include: { children: true, parent: true },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        orderBy: [{ level: "asc" }, { name: "asc" }]
      }),
      prisma.location.count({ where })
    ]);
  }

  findById(id: string) {
    return prisma.location.findUnique({ where: { id }, include: { children: true, parent: true } });
  }

  search(query: string, limit: number) {
    return prisma.location.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { slug: { contains: query, mode: "insensitive" } }
        ]
      },
      take: limit,
      orderBy: { name: "asc" }
    });
  }

  create(data: any) {
    return prisma.location.create({ data });
  }

  update(id: string, data: any) {
    return prisma.location.update({ where: { id }, data });
  }

  delete(id: string) {
    return prisma.location.delete({ where: { id } });
  }

  async tree() {
    const locations = await prisma.location.findMany({ orderBy: [{ level: "asc" }, { name: "asc" }] });
    const map = new Map<string, any>();
    const roots: any[] = [];

    for (const location of locations) {
      map.set(location.id, { ...location, children: [] });
    }

    for (const location of locations) {
      const node = map.get(location.id)!;
      if (location.parentId && map.has(location.parentId)) {
        map.get(location.parentId).children.push(node);
      } else {
        roots.push(node);
      }
    }

    return roots;
  }
}
