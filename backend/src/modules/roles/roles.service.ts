import { prisma } from "../../lib/prisma";

export async function listRoles() {
  return prisma.role.findMany({
    include: {
      permissions: {
        include: {
          permission: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });
}

export async function listPermissions() {
  return prisma.permission.findMany({
    orderBy: { name: "asc" },
  });
}
