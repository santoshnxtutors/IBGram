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
    default: "IB Gram | IB and IGCSE Tutors for Home and Online Learning",
    template: "%s | IB Gram",
  },
  description: "Find IB and IGCSE tutors for PYP, MYP, DP, Math AA, Math AI, Physics, Chemistry, Economics and English with home, online and hybrid support.",
  keywords: ["IB tutors", "IGCSE tutors", "IB Math AA", "IB Math AI", "IB Physics", "IB Chemistry", "IB Economics", "PYP", "MYP", "DP", "online tutors", "home tutors"],
  icons: {
    icon: [{ url: "/ibgramlogo.png", type: "image/png" }],
    shortcut: ["/ibgramlogo.png"],
    apple: [{ url: "/ibgramlogo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibgram.com",
    title: "IB Gram | IB and IGCSE Tutors for Home and Online Learning",
    description: "Find IB and IGCSE tutors for PYP, MYP, DP and core subjects with practical matching support for families.",
    siteName: "IB Gram",
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Gram | IB and IGCSE Tutors for Home and Online Learning",
    description: "Tutor matching for IB and IGCSE families across home, online and hybrid learning.",
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
      <head>
        <link rel="icon" href="/ibgramlogo.png" type="image/png" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://randomuser.me" crossOrigin="anonymous" />
      </head>
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
