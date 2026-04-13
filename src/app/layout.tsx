import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibgram.com"),
  title: {
    default: "IB Gram | Global AI-Powered EdTech for IB & IGCSE",
    template: "%s | IB Gram",
  },
  description: "The world's gold standard for IB and IGCSE preparation.",
  keywords: ["IB", "IGCSE", "Education", "AI Tutor", "EdTech"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibgram.com",
    title: "IB Gram | Global AI-Powered EdTech for IB & IGCSE",
    description: "The world's gold standard for IB and IGCSE preparation.",
    siteName: "IB Gram",
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Gram | Global AI-Powered EdTech for IB & IGCSE",
    description: "The world's gold standard for IB and IGCSE preparation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${greatVibes.variable} antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans text-foreground bg-background">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <main id="main-content" className="flex-1 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
