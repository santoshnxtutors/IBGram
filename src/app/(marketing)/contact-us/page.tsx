"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactUsPage() {
   const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormState("submitting");
      // Simulate API call
      setTimeout(() => {
         setFormState("success");
      }, 1500);
   };

   return (
      <div className="min-h-screen bg-background text-foreground pb-20 pt-8">
         <div className="container max-w-6xl mx-auto px-4 md:px-6">

            {/* Simple & Minimal Hero - Reduced margin */}
            <div className="text-center max-w-3xl mx-auto mb-12 px-4">
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4 border border-primary/20"
               >
                  <Globe className="size-3" /> Student Support
               </motion.div>
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 tracking-tight leading-[1.1]"
               >
                  How can we help <br />
                  <span className="text-primary">your journey?</span>
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed"
               >
                  Whether you're a student looking for the perfect tutor or an educator wanting to join our elite network, we're here to support you.
               </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

               {/* Contact Form Section */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
               >
                  {formState === "success" ? (
                     <div className="bg-card border border-primary/30 rounded-[2.5rem] p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                           <CheckCircle2 className="size-10" />
                        </div>
                        <h2 className="text-3xl font-black mb-4">Message Received!</h2>
                        <p className="text-muted-foreground font-medium mb-8 max-w-xs">
                           Our academic advisors will reach out to you within the next 24 hours.
                        </p>
                        <Button onClick={() => setFormState("idle")} variant="outline" className="rounded-xl font-black">
                           Send Another Message
                        </Button>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                              <input
                                 required
                                 type="text"
                                 placeholder="Enter your name"
                                 className="h-14 w-full bg-card border border-border rounded-2xl px-6 text-foreground font-semibold focus:border-primary transition-all outline-none"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                              <input
                                 required
                                 type="email"
                                 placeholder="Enter your email"
                                 className="h-14 w-full bg-card border border-border rounded-2xl px-6 text-foreground font-semibold focus:border-primary transition-all outline-none"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Mobile Number</label>
                              <input
                                 required
                                 type="tel"
                                 placeholder="Enter your number"
                                 className="h-14 w-full bg-card border border-border rounded-2xl px-6 text-foreground font-semibold focus:border-primary transition-all outline-none"
                              />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Inquiry Type</label>
                           <select className="h-14 w-full bg-card border border-border rounded-2xl px-6 text-foreground font-semibold focus:border-primary transition-all outline-none appearance-none cursor-pointer">
                              <option>Student Support</option>
                              <option>Tutor Application</option>
                              <option>Technical Issue</option>
                              <option>Partnership Inquiries</option>
                              <option>General Question</option>
                           </select>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                           <textarea
                              required
                              placeholder="Tell us how we can help..."
                              className="min-h-[160px] w-full bg-card border border-border rounded-2xl p-6 text-foreground font-semibold focus:border-primary transition-all outline-none resize-none"
                           />
                        </div>

                        <Button
                           disabled={formState === "submitting"}
                           type="submit"
                           className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-black text-lg transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                        >
                           {formState === "submitting" ? "Sending..." : "Send Message"}
                           <Send className="size-5" />
                        </Button>
                     </form>
                  )}
               </motion.div>

               {/* Contact Info Section */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-12"
               >
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start">
                        <div className="size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                           <Mail className="size-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-1">Email Us</h3>
                           <p className="text-muted-foreground font-medium mb-2">For general inquiries and support</p>
                           <a href="mailto:ibgram24@gmail.com" className="text-primary font-black text-lg hover:underline transition-all">ibgram24@gmail.com</a>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start">
                        <div className="size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                           <Phone className="size-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-1">Call Support</h3>
                           <p className="text-muted-foreground font-medium mb-2">Direct assistance for urgent needs</p>
                           <a href="tel:+919582706764" className="text-primary font-black text-lg hover:underline transition-all">+91 9582706764</a>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start">
                        <div className="size-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                           <MessageSquare className="size-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                           <p className="text-muted-foreground font-medium mb-2">Message us for quick queries</p>
                           <a
                              href="https://wa.me/919582706764"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary font-black text-lg hover:underline transition-all"
                           >
                              Chat on WhatsApp
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="pt-12 border-t border-border/60">
                     <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-6">Our Location</h4>
                     <div className="flex gap-6 items-start">
                        <div className="size-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                           <MapPin className="size-6" />
                        </div>
                        <div>
                           <h5 className="font-bold text-xl mb-1">Registered Address</h5>
                           <p className="text-muted-foreground leading-relaxed font-medium max-w-sm">
                              Ajay Vatsyayan C/O Lakshya Yadav,<br />
                              House number 9, behind big basket,<br />
                              Wazirabad sector 52
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </div>
   );
}
