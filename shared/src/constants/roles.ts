export const ROLE_NAMES = [
  "super_admin",
  "admin",
  "seo_manager",
  "content_manager",
  "tutor_manager",
  "editor",
  "viewer",
] as const;

export type RoleName = (typeof ROLE_NAMES)[number];

export const ROLE_LABELS: Record<RoleName, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  seo_manager: "SEO Manager",
  content_manager: "Content Manager",
  tutor_manager: "Tutor Manager",
  editor: "Editor",
  viewer: "Viewer",
};
