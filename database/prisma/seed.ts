import path from "node:path";
import { config } from "dotenv";
import { PrismaClient, type Curriculum } from "@prisma/client";
import { hashPassword } from "../../authentication/src/password";
import { PERMISSIONS, ROLE_NAMES, ROLE_PERMISSION_MAP, type RoleName } from "../../shared/src";

const projectRoot = path.resolve(__dirname, "../..");

config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is required for database seed.`);
  return value;
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

async function seedRolesAndPermissions() {
  const permissions = new Map<string, { id: string }>();

  for (const permissionName of PERMISSIONS) {
    const permission = await prisma.permission.upsert({
      where: { name: permissionName },
      update: {},
      create: {
        name: permissionName,
        description: `Allows ${permissionName.replace(".", " ")}`,
      },
      select: { id: true, name: true },
    });
    permissions.set(permission.name, permission);
  }

  const roles = new Map<RoleName, { id: string }>();

  for (const roleName of ROLE_NAMES) {
    const role = await prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: {
        name: roleName,
        description: `${roleName.replace(/_/g, " ")} role`,
        isSystem: true,
      },
      select: { id: true, name: true },
    });
    roles.set(role.name as RoleName, role);
  }

  for (const [roleName, rolePermissions] of Object.entries(ROLE_PERMISSION_MAP) as Array<[RoleName, readonly string[]]>) {
    const role = roles.get(roleName);
    if (!role) continue;

    for (const permissionName of rolePermissions) {
      const permission = permissions.get(permissionName);
      if (!permission) continue;

      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: role.id,
            permissionId: permission.id,
          },
        },
        update: {},
        create: {
          roleId: role.id,
          permissionId: permission.id,
        },
      });
    }
  }

  return roles;
}

async function seedAdmin(roles: Map<RoleName, { id: string }>) {
  const email = requireEnv("ADMIN_EMAIL").toLowerCase();
  const username = requireEnv("ADMIN_USERNAME");
  const password = requireEnv("ADMIN_PASSWORD");
  const passwordHash = await hashPassword(password);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      username,
      passwordHash,
      status: "active",
      deletedAt: null,
    },
    create: {
      email,
      username,
      passwordHash,
      status: "active",
      firstName: "IBGram",
      lastName: "Admin",
    },
    select: { id: true },
  });

  const superAdminRole = roles.get("super_admin");
  if (superAdminRole) {
    await prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId: admin.id,
          roleId: superAdminRole.id,
        },
      },
      update: {},
      create: {
        userId: admin.id,
        roleId: superAdminRole.id,
      },
    });
  }
}

async function seedLocations() {
  const india = await prisma.country.upsert({
    where: { code: "IN" },
    update: { name: "India", slug: "india" },
    create: { code: "IN", name: "India", slug: "india" },
  });

  const states = [
    ["Haryana", "HR"],
    ["Delhi", "DL"],
    ["Uttar Pradesh", "UP"],
    ["Maharashtra", "MH"],
    ["Karnataka", "KA"],
  ] as const;

  const stateRecords = new Map<string, { id: string }>();
  for (const [name, code] of states) {
    const state = await prisma.state.upsert({
      where: { countryId_slug: { countryId: india.id, slug: slugify(name) } },
      update: { name, code },
      create: { countryId: india.id, name, code, slug: slugify(name) },
      select: { id: true, name: true },
    });
    stateRecords.set(name, state);
  }

  const cities = [
    ["Gurugram", "Haryana"],
    ["Delhi", "Delhi"],
    ["Noida", "Uttar Pradesh"],
    ["Mumbai", "Maharashtra"],
    ["Bangalore", "Karnataka"],
  ] as const;

  const cityRecords = new Map<string, { id: string }>();
  for (const [cityName, stateName] of cities) {
    const state = stateRecords.get(stateName);
    if (!state) continue;
    const city = await prisma.city.upsert({
      where: { stateId_slug: { stateId: state.id, slug: slugify(cityName) } },
      update: { name: cityName, countryId: india.id },
      create: {
        countryId: india.id,
        stateId: state.id,
        name: cityName,
        slug: slugify(cityName),
        timezone: "Asia/Kolkata",
      },
      select: { id: true, name: true },
    });
    cityRecords.set(cityName, city);
  }

  const gurugram = cityRecords.get("Gurugram");
  if (!gurugram) return;

  const areaNames = ["Golf Course Road", "DLF Phase 5", "Sushant Lok", "Sohna Road"];
  const areaRecords = new Map<string, { id: string }>();
  for (const name of areaNames) {
    const area = await prisma.area.upsert({
      where: { cityId_slug: { cityId: gurugram.id, slug: slugify(name) } },
      update: { name },
      create: { cityId: gurugram.id, name, slug: slugify(name) },
      select: { id: true, name: true },
    });
    areaRecords.set(name, area);
  }

  const sectorSeeds = [
    ["Sector 56", "Golf Course Road"],
    ["Sector 57", "Sushant Lok"],
    ["Sector 49", "Sohna Road"],
    ["Sector 50", "Sohna Road"],
  ] as const;

  const sectorRecords = new Map<string, { id: string }>();
  for (const [name, areaName] of sectorSeeds) {
    const area = areaRecords.get(areaName);
    const sector = await prisma.sector.upsert({
      where: { cityId_slug: { cityId: gurugram.id, slug: slugify(name) } },
      update: { name, areaId: area?.id },
      create: { cityId: gurugram.id, areaId: area?.id, name, slug: slugify(name) },
      select: { id: true, name: true },
    });
    sectorRecords.set(name, sector);
  }

  const societySeeds = [
    ["DLF Park Place", "DLF Phase 5", "Sector 56"],
    ["Sushant Lok", "Sushant Lok", "Sector 57"],
    ["Nirvana Country", "Sohna Road", "Sector 50"],
  ] as const;

  for (const [name, areaName, sectorName] of societySeeds) {
    await prisma.society.upsert({
      where: { cityId_slug: { cityId: gurugram.id, slug: slugify(name) } },
      update: {
        name,
        areaId: areaRecords.get(areaName)?.id,
        sectorId: sectorRecords.get(sectorName)?.id,
      },
      create: {
        cityId: gurugram.id,
        areaId: areaRecords.get(areaName)?.id,
        sectorId: sectorRecords.get(sectorName)?.id,
        name,
        slug: slugify(name),
      },
    });
  }

  const schoolSeeds = [
    ["Lancers International School", "Golf Course Road", "Sector 56"],
    ["Scottish High International School", "Sushant Lok", "Sector 57"],
    ["Pathways World School", "Sohna Road", "Sector 49"],
  ] as const;

  for (const [name, areaName, sectorName] of schoolSeeds) {
    await prisma.school.upsert({
      where: { cityId_slug: { cityId: gurugram.id, slug: slugify(name) } },
      update: {
        name,
        curriculum: "IB",
        areaId: areaRecords.get(areaName)?.id,
        sectorId: sectorRecords.get(sectorName)?.id,
      },
      create: {
        cityId: gurugram.id,
        areaId: areaRecords.get(areaName)?.id,
        sectorId: sectorRecords.get(sectorName)?.id,
        name,
        slug: slugify(name),
        curriculum: "IB",
      },
    });
  }
}

async function seedProgrammesAndSubjects() {
  const programmes = [
    ["PYP", "Primary Years Programme", "IB", 1],
    ["MYP", "Middle Years Programme", "IB", 2],
    ["DP", "Diploma Programme", "IB", 3],
  ] as const;

  for (const [code, name, curriculum, sortOrder] of programmes) {
    await prisma.programme.upsert({
      where: { code },
      update: { name, curriculum: curriculum as Curriculum, sortOrder },
      create: { code, name, curriculum: curriculum as Curriculum, sortOrder },
    });
  }

  const subjects = [
    "Math AA",
    "Math AI",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "English",
    "Business Management",
    "Psychology",
  ];

  for (const [index, name] of subjects.entries()) {
    await prisma.subject.upsert({
      where: { slug: slugify(name) },
      update: { name, curriculum: "IB", sortOrder: index + 1 },
      create: {
        name,
        slug: slugify(name),
        curriculum: "IB",
        groupName: "IB Subjects",
        sortOrder: index + 1,
      },
    });
  }
}

async function main() {
  const roles = await seedRolesAndPermissions();
  await seedAdmin(roles);
  await seedLocations();
  await seedProgrammesAndSubjects();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
