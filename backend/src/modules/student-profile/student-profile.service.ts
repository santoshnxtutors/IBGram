import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../middleware/error.middleware";

const profileInput = z.object({
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(20),
  parentName: z.string().trim().max(120).default(""),
  curriculum: z.enum(["IB", "IGCSE"], { message: "Choose IB or IGCSE." }),
  grade: z.string().trim().min(1, "Choose your grade or year.").max(60),
  school: z.string().trim().max(160).default(""),
  subjects: z.array(z.string().trim().min(1).max(80)).min(1, "Add at least one subject you need help with.").max(15),
  city: z.string().trim().min(2, "Enter your city.").max(80),
  learningModes: z.array(z.enum(["online", "home", "hybrid"])).min(1, "Pick at least one learning mode."),
  goals: z.string().trim().max(2000).default(""),
});

export type StudentProfileView = {
  profile: (z.infer<typeof profileInput> & { status: string }) | null;
};

export async function getMyStudentProfile(userId: string): Promise<StudentProfileView> {
  const row = await prisma.studentProfile.findUnique({ where: { userId } });
  if (!row) return { profile: null };
  return {
    profile: {
      phone: row.phone,
      parentName: row.parentName ?? "",
      curriculum: row.curriculum === "IGCSE" ? "IGCSE" : "IB",
      grade: row.grade,
      school: row.school ?? "",
      subjects: row.subjects,
      city: row.city,
      learningModes: row.learningModes.filter((m): m is "online" | "home" | "hybrid" => ["online", "home", "hybrid"].includes(m)),
      goals: row.goals ?? "",
      status: row.status,
    },
  };
}

export async function upsertMyStudentProfile(userId: string, body: unknown): Promise<StudentProfileView> {
  const parsed = profileInput.safeParse(body);
  if (!parsed.success) {
    throw new AppError(400, "INVALID_PROFILE", parsed.error.issues[0]?.message ?? "Please check the profile fields.");
  }

  const user = await prisma.user.findFirst({ where: { id: userId, deletedAt: null }, select: { accountType: true } });
  if (!user) throw new AppError(404, "USER_NOT_FOUND", "Account not found.");
  if (user.accountType !== "student") {
    throw new AppError(403, "NOT_A_STUDENT", "Only student accounts can create a student profile.");
  }

  const subjects = [...new Set(parsed.data.subjects)];
  const data = {
    ...parsed.data,
    subjects,
    parentName: parsed.data.parentName || null,
    school: parsed.data.school || null,
    goals: parsed.data.goals || null,
  };

  // Mirror subjects on the User so other dashboard views can use them.
  await prisma.$transaction([
    prisma.user.update({ where: { id: userId }, data: { subjects } }),
    prisma.studentProfile.upsert({ where: { userId }, create: { ...data, userId }, update: data }),
  ]);

  return getMyStudentProfile(userId);
}
