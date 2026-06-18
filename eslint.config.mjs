import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "backend/dist/**",
    "backend/node_modules/**",
    "shared/dist/**",
    "shared/node_modules/**",
    "authentication/dist/**",
    "authentication/node_modules/**",
    "scripts/seo-batch/**",
    "tmp/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
