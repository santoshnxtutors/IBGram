// @vitest-environment node
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Prisma schema foundation", () => {
  it("contains the required core production models", () => {
    const schema = readFileSync(path.resolve(__dirname, "../../../database/prisma/schema.prisma"), "utf8");

    for (const model of ["User", "Role", "GeneratedPage", "Tutor", "TutorLocation", "AuditLog", "Asset", "CsvImport"]) {
      expect(schema).toContain(`model ${model}`);
    }
  });
});
