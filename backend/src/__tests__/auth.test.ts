// @vitest-environment node
import { describe, expect, it } from "vitest";
import { PERMISSIONS, ROLE_PERMISSION_MAP } from "../../../shared/src";
import { hashPassword, verifyPassword } from "../../../authentication/src/password";
import { canPublishPage, expandRolePermissions, hasPermission } from "../../../authentication/src/rbac";

describe("auth foundation", () => {
  it("hashes and verifies passwords", async () => {
    const hash = await hashPassword("Correct horse battery staple 1!");

    expect(hash).not.toContain("Correct horse");
    await expect(verifyPassword("Correct horse battery staple 1!", hash)).resolves.toBe(true);
    await expect(verifyPassword("wrong password", hash)).resolves.toBe(false);
  });

  it("keeps RBAC constants and expansion in sync", () => {
    expect(PERMISSIONS).toContain("pages.publish");
    expect(ROLE_PERMISSION_MAP.super_admin).toEqual(PERMISSIONS);

    const permissions = expandRolePermissions(["viewer"]);
    expect(permissions.every((permission) => permission.endsWith(".read"))).toBe(true);
    expect(hasPermission({ permissions: expandRolePermissions(["super_admin"]) }, "audit.read")).toBe(true);
  });

  it("keeps publish permissions role-aware", () => {
    expect(expandRolePermissions(["super_admin"])).toEqual(PERMISSIONS);
    expect(canPublishPage({ permissions: expandRolePermissions(["viewer"]) })).toBe(false);
  });
});
