"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, CheckCircle2, ChevronRight, BookOpen, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function AITestGenerator() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <BrainCircuit className="size-6" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">AI Test Generator</h1>
        </div>
        <p className="text-muted-foreground">Generate personalized mock exams based on your weak areas and selected syllabus topics.</p>
      </div>

      {/* Progress Stepper */}
      <div className="mb-8 relative">
        <Progress value={(step / totalSteps) * 100} className="h-2 mb-4 bg-muted/60" />
        <div className="flex justify-between text-sm font-medium text-muted-foreground px-1">
          <span className={step >= 1 ? "text-primary font-bold" : ""}>Configuration</span>
          <span className={step >= 2 ? "text-primary font-bold" : ""}>Topic Selection</span>
          <span className={step >= 3 ? "text-primary font-bold" : ""}>Blueprint Review</span>
          <span className={step >= 4 ? "text-primary font-bold" : ""}>Attempt</span>
        </div>
      </div>

       <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-border/50 shadow-sm bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Test Configuration</CardTitle>
                  <CardDescription>Select the core parameters for your generated exam.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Curriculum Board</label>
                      <Select defaultValue="ibdp">
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select Board" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ibdp">IB Diploma Program</SelectItem>
                          <SelectItem value="ibmyp">IB Middle Years (MYP)</SelectItem>
                          <SelectItem value="igcse">Cambridge IGCSE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Subject</label>
                      <Select defaultValue="math-hl">
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math-hl">Mathematics: AA HL</SelectItem>
                          <SelectItem value="math-sl">Mathematics: AA SL</SelectItem>
                          <SelectItem value="physics">Physics HL</SelectItem>
                          <SelectItem value="econ">Economics SL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Difficulty Profile</label>
                      <Select defaultValue="adaptive">
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard (Paper 1 level)</SelectItem>
                          <SelectItem value="hard">Hard (Paper 2 level)</SelectItem>
                          <SelectItem value="adaptive">AI Adaptive (Auto-scaling)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Duration limits</label>
                      <Select defaultValue="45m">
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15m">15 Minutes (Quick Drill)</SelectItem>
                          <SelectItem value="45m">45 Minutes (Sectional)</SelectItem>
                          <SelectItem value="120m">120 Minutes (Full Mock)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-border/50 shadow-sm bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Topic Selection</CardTitle>
                  <CardDescription>Select specific syllabus areas you want to test.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                     <div className="p-4 border border-border rounded-xl flex items-start gap-4 hover:border-primary/50 cursor-pointer transition-colors bg-muted/20">
                       <div className="mt-1"><AlertCircle className="size-5 text-secondary" /></div>
                       <div>
                         <h4 className="font-semibold text-foreground">AI Recommendation: Calculus & Vectors</h4>
                         <p className="text-sm text-muted-foreground mt-1">Based on your last mock exam, these are your weakest areas. We recommend focusing 80% of the questions here.</p>
                       </div>
                     </div>

                     <div className="grid grid-cols-2 gap-3 mt-4">
                        {['Algebra', 'Functions', 'Geometry', 'Trigonometry', 'Statistics', 'Calculus'].map(topic => (
                          <div key={topic} className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                            <input type="checkbox" className="size-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked={['Calculus', 'Geometry'].includes(topic)} />
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              {topic}
                            </label>
                          </div>
                        ))}
                     </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-primary/20 shadow-lg bg-background/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary"><CheckCircle2 className="size-5" /> Blueprint Generated</CardTitle>
                  <CardDescription>Review your custom mock exam structure before starting.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="grid grid-cols-3 gap-4">
                     <div className="p-4 bg-muted/30 rounded-xl text-center">
                       <div className="text-2xl font-bold text-foreground">15</div>
                       <div className="text-xs font-semibold text-muted-foreground uppercase mt-1">Questions</div>
                     </div>
                     <div className="p-4 bg-muted/30 rounded-xl text-center">
                       <div className="text-2xl font-bold text-foreground flex items-center justify-center"><Clock className="size-5 mr-1" /> 45</div>
                       <div className="text-xs font-semibold text-muted-foreground uppercase mt-1">Minutes</div>
                     </div>
                     <div className="p-4 bg-muted/30 rounded-xl text-center">
                       <div className="text-2xl font-bold text-foreground">75</div>
                       <div className="text-xs font-semibold text-muted-foreground uppercase mt-1">Total Marks</div>
                     </div>
                   </div>

                   <div className="space-y-3">
                     <h4 className="font-semibold text-sm">Question Breakdown</h4>
                     <ul className="space-y-2 text-sm text-muted-foreground">
                       <li className="flex justify-between items-center py-2 border-b border-border">
                         <span>Calculus - Differentiation Rules</span>
                         <span className="font-medium text-foreground">5 Qs (25 Marks)</span>
                       </li>
                       <li className="flex justify-between items-center py-2 border-b border-border">
                         <span>Calculus - Integration</span>
                         <span className="font-medium text-foreground">4 Qs (30 Marks)</span>
                       </li>
                       <li className="flex justify-between items-center py-2">
                         <span>Vectors - Dot Product</span>
                         <span className="font-medium text-foreground">6 Qs (20 Marks)</span>
                       </li>
                     </ul>
                   </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 4 && (
             <motion.div
             key="step4"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.95 }}
             className="text-center py-12"
           >
             <div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="size-10" />
             </div>
             <h2 className="text-3xl font-bold mb-4">You're Ready to Begin</h2>
             <p className="text-muted-foreground max-w-md mx-auto mb-8">
               Once you click start, the timer will begin. You cannot pause an active mock test. Ensure you have a quiet environment.
             </p>
             <Button className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105">
               Start Exam Now
             </Button>
           </motion.div>
          )}
        </AnimatePresence>
       </div>

      {step < 4 && (
        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          <Button onClick={nextStep}>
            {step === 3 ? "Generate Paper" : "Next Step"} <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
