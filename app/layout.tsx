import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshinfotech.com"),
  title: {
    default: "Harsh Infotech — Smart buildings, secured and connected",
    template: "%s | Harsh Infotech",
  },
  description:
    "Since 2008, Harsh Infotech has designed, installed and supported smart home, security, One Fiber connectivity and nurse call systems for homes, enterprises and hospitals.",
  keywords: ["smart home", "security", "CCTV", "fire safety", "nurse call", "One Fiber", "smart locks", "smart switches", "Harsh Infotech"],
  authors: [{ name: "Harsh Infotech Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://harshinfotech.com",
    siteName: "Harsh Infotech",
    title: "Harsh Infotech — Smart buildings, secured and connected",
    description:
      "Smart home, security, One Fiber connectivity and nurse call systems — one team since 2008.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f3",
};

// Hides reveal targets before first paint so GSAP can animate them in.
// Skipped for reduced motion; auto-removed if animations never initialise.
const motionBootstrap = `(function(){try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('js-motion');setTimeout(function(){if(!window.__motionReady)d.classList.remove('js-motion')},3500)}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <SmoothScrollProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
