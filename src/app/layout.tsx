import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibgram.com"),
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
    "IB tutor in Gurgaon",
    "IB home tutor Gurgaon",
    "IGCSE tutor in Gurgaon",
    "IB tutor Golf Course Road",
    "IB home tutor DLF Phase 5",
    "IB tutor Sushant Lok",
    "IGCSE tutor Sohna Road Gurgaon",
    "IB Maths AA tutor Gurgaon",
    "IB Physics tutor Gurgaon",
    "best IB tutor in Gurgaon",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: ["/icon.png"],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ibgram.com",
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
      className={`${plusJakartaSans.variable} antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <meta name="google-site-verification" content="K38SzTeTzCsJaMdzQ1-lbdwOsUokujPNs9GoCWfWtVU" />
        {/* Warm the TLS handshake for the tag scripts before they are requested.
            Lighthouse measured ~309ms of LCP sitting in connection setup. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* lazyOnload, NOT afterInteractive. The two tag scripts are 313KB of
            third-party JS; afterInteractive runs them the instant hydration
            finishes, which is exactly when the page is trying to paint. On a
            throttled mobile CPU that pushed LCP render-delay to ~6.3s of a 7.0s
            LCP while total byte weight was only 793KB. lazyOnload waits for the
            window load event, so the tags no longer compete with first paint.
            GA4 pageviews and Ads conversions still fire — just after paint. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18496960940"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9S40JW4JJ');
            gtag('config', 'AW-18496960940');
          `}
        </Script>
        <link rel="icon" href="/icon.png" type="image/png" sizes="96x96" />
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
