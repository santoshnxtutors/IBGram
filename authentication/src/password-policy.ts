const weakPasswords = new Set([
  "password",
  "password1",
  "password123",
  "admin123",
  "qwerty123",
  "letmein123",
  "change-this-password",
]);

export type PasswordPolicyResult = {
  valid: boolean;
  errors: string[];
  warnings: string[];
};

export function validatePasswordPolicy(password: string): PasswordPolicyResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const normalized = password.trim().toLowerCase();

  if (password.length < 10) errors.push("Password must be at least 10 characters long.");
  if (weakPasswords.has(normalized)) errors.push("Password is too common or weak.");
  if (!/[a-z]/.test(password)) warnings.push("Use at least one lowercase letter.");
  if (!/[A-Z]/.test(password)) warnings.push("Use at least one uppercase letter.");
  if (!/[0-9]/.test(password)) warnings.push("Use at least one number.");
  if (!/[^a-zA-Z0-9]/.test(password)) warnings.push("Use at least one special character.");

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

export function assertPasswordPolicy(password: string): void {
  const result = validatePasswordPolicy(password);
  if (!result.valid) {
    throw new Error(result.errors.join(" "));
  }
}
