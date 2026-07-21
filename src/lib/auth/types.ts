/** The authenticated user shape returned by GET /api/auth/me. */
export interface CurrentUser {
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  /** "student" | "tutor" for public signups; null for staff/admin accounts. */
  accountType: string | null;
  roles: string[];
  permissions: string[];
}

/** Where a user should land after auth, based on their account type. */
export function dashboardPathForUser(user: Pick<CurrentUser, "accountType"> | null | undefined): string {
  return user?.accountType === "tutor" ? "/tutor" : "/student";
}
