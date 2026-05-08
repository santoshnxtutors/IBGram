import type { Metadata } from "next";
import { AuthFlow } from "@/components/auth/AuthFlow";

export const metadata: Metadata = {
  title: "Sign Up",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return <AuthFlow initialAuthType="signup" />;
}
