import type { Metadata } from "next";
import { AuthFlow } from "@/components/auth/AuthFlow";

export const metadata: Metadata = {
  title: "Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <AuthFlow initialAuthType="login" />;
}
