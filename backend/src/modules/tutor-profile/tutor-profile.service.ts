import { prisma } from "../../lib/prisma";
import { AppError } from "../../middleware/error.middleware";

export type TutorProfileView = {
  status: "none" | "pending" | "approved" | "rejected";
  profile: {
    displayName: string;
    headline: string | null;
    bio: string | null;
    about: string | null;
    experienceYears: number | null;
    phone: string | null;
    subjects: string[];
    slug: string;
  } | null;
};

function deriveStatus(tutor: { status: string; approved: boolean } | null): TutorProfileView["status"] {
  if (!tutor) return "none";
  if (tutor.status === "archived") return "rejected";
  return tutor.approved ? "approved" : "pending";
}

function slugify(value: string): string {
  return (
    value
      .trim()
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-") || "tutor"
  );
}

async function uniqueTutorSlug(base: string): Promise<string> {
  const root = slugify(base);
  let slug = root;
  let i = 1;
  while (await prisma.tutor.findUnique({ where: { slug }, select: { id: true } })) {
    i += 1;
    slug = `${root}-${i}`;
  }
  return slug;
}

export async function getMyTutorProfile(userId: string): Promise<TutorProfileView> {
  const tutor = await prisma.tutor.findUnique({ where: { userId } });
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { subjects: true } });
  return {
    status: deriveStatus(tutor),
    profile: tutor
      ? {
          displayName: tutor.displayName,
          headline: tutor.headline,
          bio: tutor.bio,
          about: tutor.about,
          experienceYears: tutor.experienceYears,
          phone: tutor.phone,
          subjects: user?.subjects ?? [],
          slug: tutor.slug,
        }
      : null,
  };
}

export async function upsertMyTutorProfile(
  userId: string,
  input: {
    displayName?: string;
    headline?: string;
    bio?: string;
    about?: string;
    experienceYears?: number | null;
    phone?: string;
    subjects?: string[];
  },
): Promise<TutorProfileView> {
  const user = await prisma.user.findFirst({
    where: { id: userId, deletedAt: null },
    select: { id: true, firstName: true, lastName: true, email: true, accountType: true },
  });
  if (!user) throw new AppError(404, "USER_NOT_FOUND", "Account not found.");
  if (user.accountType !== "tutor") {
    throw new AppError(403, "NOT_A_TUTOR", "Only tutor accounts can create a tutor profile.");
  }

  const subjects = (input.subjects ?? []).map((s) => s.trim()).filter(Boolean).slice(0, 20);
  const fallbackName = [user.firstName, user.lastName].filter(Boolean).join(" ").trim() || user.email;
  const displayName = input.displayName?.trim() || fallbackName;
  const data = {
    displayName,
    headline: input.headline?.trim() || null,
    bio: input.bio?.trim() || null,
    about: input.about?.trim() || null,
    experienceYears: typeof input.experienceYears === "number" ? input.experienceYears : null,
    phone: input.phone?.trim() || null,
    email: user.email,
  };

  // Keep subjects + headline/bio mirrored on the User for the dashboard view.
  await prisma.user.update({
    where: { id: userId },
    data: { subjects, headline: data.headline, bio: data.bio },
  });

  const existing = await prisma.tutor.findUnique({ where: { userId }, select: { id: true } });
  if (existing) {
    // Edits keep the current approval state (only brand-new profiles need approval).
    await prisma.tutor.update({ where: { userId }, data });
  } else {
    const slug = await uniqueTutorSlug(displayName);
    await prisma.tutor.create({
      data: { ...data, slug, userId, status: "draft", approved: false, verified: false },
    });
  }

  return getMyTutorProfile(userId);
}
