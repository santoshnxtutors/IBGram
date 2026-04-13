"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, ArrowRight, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AuthFlowProps {
  initialAuthType: "login" | "signup";
}

export function AuthFlow({ initialAuthType }: AuthFlowProps) {
  const router = useRouter();
  
  // Login directly goes to form. Signup goes to role selection first.
  const [authType, setAuthType] = useState<"login" | "signup">(initialAuthType);
  const [step, setStep] = useState<"role" | "form">(initialAuthType === "login" ? "form" : "role");
  const [role, setRole] = useState<"student" | "tutor" | null>(null);

  const handleRoleSelect = (selectedRole: "student" | "tutor") => {
    setRole(selectedRole);
    setStep("form");
  };

  const handleBack = () => {
    setStep("role");
    setRole(null);
  };

  const toggleAuthType = () => {
    if (authType === "login") {
      setAuthType("signup");
      setStep("role");
      setRole(null);
    } else {
      setAuthType("login");
      setStep("form");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background glow when form is active */}
      <AnimatePresence>
        {step === "form" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10"
          >
             <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-5xl px-4 flex justify-center">
        <AnimatePresence mode="wait">
          {step === "role" ? (
            <motion.div
              key="role-selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl"
            >
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                  Join <span className="text-primary">IB Gram</span>
                </h1>
                <p className="text-lg text-muted-foreground">Select your account type to get started</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Student Card */}
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => handleRoleSelect("student")}
                    className="w-full text-center h-full group"
                  >
                    <div className="h-full glassmorphism border-2 border-border/50 hover:border-primary rounded-3xl p-10 transition-colors flex flex-col items-center justify-center gap-6">
                      <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="size-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">I'm a Student</h3>
                    </div>
                  </button>
                </motion.div>

                {/* Tutor Card */}
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => handleRoleSelect("tutor")}
                    className="w-full text-center h-full group"
                  >
                    <div className="h-full glassmorphism border-2 border-border/50 hover:border-secondary rounded-3xl p-10 transition-colors flex flex-col items-center justify-center gap-6">
                      <div className="size-20 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <BookOpen className="size-10 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">I'm a Tutor</h3>
                    </div>
                  </button>
                </motion.div>
              </div>

              <div className="mt-10 text-center">
                 <button onClick={toggleAuthType} className="text-sm font-medium text-muted-foreground hover:text-foreground">
                   Already have an account? <span className="font-bold text-primary">Log in here</span>
                 </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="auth-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md relative"
            >
              <div className="glassmorphism-heavy border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                
                <div className="flex justify-between items-center mb-8">
                   {authType === "signup" ? (
                     <button 
                       onClick={handleBack}
                       className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center"
                     >
                        <ArrowRight className="size-4 mr-1 rotate-180" /> Back
                     </button>
                   ) : (
                     <div /> // Spacer if login
                   )}
                   {authType === "signup" && role && (
                     <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                       {role}
                     </div>
                   )}
                </div>

                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground mb-2">
                    {authType === "login" ? "Welcome Back" : "Create Account"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {authType === "login" 
                      ? "Log in to access your dashboard"
                      : "Sign up to transform your learning"
                    }
                  </p>
                </div>

                {/* Google Auth Button */}
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 rounded-xl bg-white text-black hover:bg-slate-100 hover:text-black border-none font-bold shadow-sm flex items-center justify-center gap-3"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.75 17.55V20.3H19.31C21.4 18.38 22.56 15.57 22.56 12.25Z" fill="#4285F4"/>
                      <path d="M12 23C14.97 23 17.46 22.02 19.31 20.3L15.75 17.55C14.75 18.22 13.48 18.63 12 18.63C9.13001 18.63 6.70001 16.69 5.81001 14.1H2.14001V16.95C3.96001 20.57 7.69001 23 12 23Z" fill="#34A853"/>
                      <path d="M5.81 14.09C5.58 13.41 5.45 12.71 5.45 12C5.45 11.29 5.58 10.59 5.81 9.91V7.06H2.14C1.39 8.56 0.96 10.23 0.96 12C0.96 13.77 1.39 15.44 2.14 16.94L5.81 14.09Z" fill="#FBBC05"/>
                      <path d="M12 5.38C13.62 5.38 15.06 5.93 16.21 7.02L19.39 3.84C17.45 2.03 14.97 0.96 12 0.96C7.69 0.96 3.96 3.43 2.14 7.06L5.81 9.91C6.7 7.31 9.13 5.38 12 5.38Z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                  </Button>
                </div>

                <div className="relative mb-6 text-center flex items-center">
                  <div className="flex-grow border-t border-border/40"></div>
                  <span className="shrink-0 px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">or email</span>
                  <div className="flex-grow border-t border-border/40"></div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {authType === "signup" && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="text-xs">First name</Label>
                        <Input id="firstName" className="h-11 rounded-xl bg-background/50 border-border" placeholder="Jane" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="text-xs">Last name</Label>
                        <Input id="lastName" className="h-11 rounded-xl bg-background/50 border-border" placeholder="Doe" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs">Email address</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="size-4 text-muted-foreground" />
                      </div>
                      <Input id="email" type="email" className="h-11 pl-10 rounded-xl bg-background/50 border-border" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password" className="text-xs">Password</Label>
                      {authType === "login" && (
                        <Link href="#" className="text-[10px] font-bold text-primary hover:text-primary/80 transition-colors">
                          Forgot Password?
                        </Link>
                      )}
                    </div>
                    <Input id="password" type="password" className="h-11 rounded-xl bg-background/50 border-border" />
                  </div>

                  <Button type="button" className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/20 shimmer-btn hover:scale-105 active:scale-95 transition-all mt-6">
                    {authType === "login" ? "Sign In" : "Sign Up"}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-xs font-medium text-muted-foreground">
                    {authType === "login" ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={toggleAuthType}
                      className="ml-2 font-bold text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4"
                    >
                      {authType === "login" ? "Sign up" : "Log in"}
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
