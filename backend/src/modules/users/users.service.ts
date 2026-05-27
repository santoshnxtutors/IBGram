import type { Request } from "express";
import type { PermissionName, RoleName } from "@ibgram/shared";
import { hashPassword, validatePasswordPolicy } from "@ibgram/authentication";
import { AppError } from "../../middleware/error.middleware";
import { getPagination, getTotalPages } from "../../utils/pagination";
import { prisma } from "../../lib/prisma";
import { writeAuditLog } from "../audit/audit.service";

type UserWithRoles = Awaited<ReturnType<typeof getUserById>>;

function mapUser(user: NonNullable<UserWithRoles>) {
  const roles = user.roles.map((userRole) => ({
    id: userRole.role.id,
    name: userRole.role.name as RoleName,
    description: userRole.role.description,
  }));
  const permissions = Array.from(
    new Set(
      user.roles.flatMap((userRole) =>
        userRole.role.permissions.map((rolePermission) => rolePermission.permission.name as PermissionName),
      ),
    ),
  );

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    avatarUrl: user.avatarUrl,
    status: user.status,
    lastLoginAt: user.lastLoginAt,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt,
    roles,
    permissions,
  };
}

const userInclude = {
  roles: {
    include: {
      role: {
        include: {
          permissions: {
            include: {
              permission: true,
            },
          },
        },
      },
    },
  },
} as const;

export async function listUsers(query: { page?: string; pageSize?: string }) {
  const pagination = getPagination(query);
  const [users, totalItems] = await Promise.all([
    prisma.user.findMany({
      where: { deletedAt: null },
      include: userInclude,
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take,
    }),
    prisma.user.count({ where: { deletedAt: null } }),
  ]);

  return {
    items: users.map(mapUser),
    page: pagination.page,
    pageSize: pagination.pageSize,
    totalItems,
    totalPages: getTotalPages(totalItems, pagination.pageSize),
  };
}

export async function getUserById(id: string) {
  return prisma.user.findFirst({
    where: { id },
    include: userInclude,
  });
}

export async function getSafeUserById(id: string) {
  const user = await getUserById(id);
  if (!user) throw new AppError(404, "USER_NOT_FOUND", "User not found.");
  return mapUser(user);
}

export async function createUser(input: {
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  roleNames?: string[];
}, actorId: string, req: Request) {
  const policy = validatePasswordPolicy(input.password);
  if (!policy.valid) throw new AppError(400, "WEAK_PASSWORD", policy.errors.join(" "), { warnings: policy.warnings });

  const passwordHash = await hashPassword(input.password);
  const roleNames = input.roleNames?.length ? input.roleNames : ["viewer"];
  const user = await prisma.user.create({
    data: {
      email: input.email.toLowerCase(),
      username: input.username,
      passwordHash,
      firstName: input.firstName,
      lastName: input.lastName,
      status: "active",
      roles: {
        create: roleNames.map((roleName) => ({
          role: {
            connect: { name: roleName },
          },
        })),
      },
    },
    include: userInclude,
  });

  await writeAuditLog({
    actorId,
    action: "user.created",
    entityType: "User",
    entityId: user.id,
    afterJson: mapUser(user),
    req,
  });

  return mapUser(user);
}

export async function updateUser(id: string, input: Record<string, unknown>, actorId: string, req: Request) {
  const before = await getUserById(id);
  if (!before) throw new AppError(404, "USER_NOT_FOUND", "User not found.");

  const user = await prisma.user.update({
    where: { id },
    data: {
      email: typeof input.email === "string" ? input.email.toLowerCase() : undefined,
      username: typeof input.username === "string" ? input.username : undefined,
      firstName: input.firstName === null || typeof input.firstName === "string" ? input.firstName : undefined,
      lastName: input.lastName === null || typeof input.lastName === "string" ? input.lastName : undefined,
      avatarUrl: input.avatarUrl === null || typeof input.avatarUrl === "string" ? input.avatarUrl : undefined,
    },
    include: userInclude,
  });

  await writeAuditLog({
    actorId,
    action: "user.updated",
    entityType: "User",
    entityId: user.id,
    beforeJson: mapUser(before),
    afterJson: mapUser(user),
    req,
  });

  return mapUser(user);
}

export async function updateUserStatus(id: string, status: "active" | "invited" | "suspended" | "deleted", actorId: string, req: Request) {
  const before = await getUserById(id);
  if (!before) throw new AppError(404, "USER_NOT_FOUND", "User not found.");

  const user = await prisma.user.update({
    where: { id },
    data: {
      status,
      deletedAt: status === "deleted" ? new Date() : null,
      sessions: status === "active" ? undefined : { updateMany: { where: { revokedAt: null }, data: { revokedAt: new Date() } } },
    },
    include: userInclude,
  });

  await writeAuditLog({
    actorId,
    action: "user.status_changed",
    entityType: "User",
    entityId: user.id,
    beforeJson: { status: before.status },
    afterJson: { status: user.status },
    req,
  });

  return mapUser(user);
}

export async function deleteUser(id: string, actorId: string, req: Request) {
  return updateUserStatus(id, "deleted", actorId, req);
}

export async function assignRole(userId: string, roleId: string, actorId: string, req: Request) {
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId, roleId } },
    update: {},
    create: { userId, roleId },
  });

  await writeAuditLog({
    actorId,
    action: "role.assigned",
    entityType: "UserRole",
    entityId: userId,
    metadata: { roleId },
    req,
  });

  return getSafeUserById(userId);
}

export async function removeRole(userId: string, roleId: string, actorId: string, req: Request) {
  await prisma.userRole.delete({
    where: { userId_roleId: { userId, roleId } },
  });

  await writeAuditLog({
    actorId,
    action: "role.removed",
    entityType: "UserRole",
    entityId: userId,
    metadata: { roleId },
    req,
  });

  return getSafeUserById(userId);
}
