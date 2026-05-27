import argon2 from "argon2";
import { assertPasswordPolicy } from "./password-policy";

const passwordHashOptions: argon2.Options & { raw?: false } = {
  type: argon2.argon2id,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
};

export async function hashPassword(password: string): Promise<string> {
  assertPasswordPolicy(password);
  return argon2.hash(password, passwordHashOptions);
}

export async function verifyPassword(password: string, passwordHash: string): Promise<boolean> {
  if (!password || !passwordHash) return false;
  return argon2.verify(passwordHash, password);
}

export function passwordHashNeedsRehash(passwordHash: string): boolean {
  return argon2.needsRehash(passwordHash, passwordHashOptions);
}
