import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import Script from "next/script";
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
  keywords: [
    "IB home tutor",
    "IB home tuition",
    "IB home tution",
    "best IB home tutor India",
    "IB tutor near me",
    "IB tutor agent India",
    "IB tutoring platform India",
    "IGCSE home tutor",
    "IGCSE home tuition",
    "best IGCSE tutor India",
    "IGCSE tutor near me",
    "IB Maths tutor",
    "IB Physics tutor",
    "IB Chemistry tutor",
    "IB Biology tutor",
    "IB Economics tutor",
    "IB English tutor",
    "IB Maths AA tutor",
    "IB Maths AI tutor",
    "IB DP tutor",
    "IB Diploma tutor",
    "IB IA help",
    "IB Extended Essay help",
    "IB TOK tutor",
    "IB PYP tutor",
    "IB MYP tutor",
    "IB CP tutor",
    "IGCSE Maths tutor",
    "IGCSE Physics tutor",
    "IGCSE Chemistry tutor",
    "IGCSE Biology tutor",
    "IGCSE English tutor",
    "Cambridge IGCSE tutor",
    "Edexcel IGCSE tutor",
    "IB tutor Gurugram",
    "IB tutor Gurgaon",
    "IB tutor Delhi",
    "IB tutor Noida",
    "IB tutor Mumbai",
    "IB tutor Bangalore",
    "IGCSE tutor Gurugram",
    "IGCSE tutor Delhi",
    "IGCSE tutor Noida",
    "online IB tutor India",
    "International Baccalaureate tutor India",
  ],
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G9S40JW4JJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9S40JW4JJ');
          `}
        </Script>
        <link rel="icon" href="/ibgramlogo.png" type="image/png" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://randomuser.me" crossOrigin="anonymous" />
        {/* AI / LLM crawler discovery — https://llmstxt.org */}
        <link rel="llms" type="text/plain" href="/llms.txt" />
        <link rel="llms-full" type="text/plain" href="/llms-full.txt" />
        {/* Geographic SEO signals */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />
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
