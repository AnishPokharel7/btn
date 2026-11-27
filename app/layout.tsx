import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Better Tomorrow Nepal Foundation | Empowering Communities",
    template: "%s | Better Tomorrow Nepal Foundation",
  },
  description: "Empowering communities across Nepal through education, healthcare, women's empowerment, environmental sustainability, and humanitarian assistance. Join us in building a better tomorrow.",
  keywords: ["NGO Nepal", "nonprofit Nepal", "community development", "education Nepal", "healthcare Nepal", "women empowerment Nepal", "environmental conservation Nepal"],
  authors: [{ name: "Better Tomorrow Nepal Foundation" }],
  creator: "Better Tomorrow Nepal Foundation",
  publisher: "Better Tomorrow Nepal Foundation",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://bettertomorrownepal.org",
    siteName: "Better Tomorrow Nepal Foundation",
    title: "Better Tomorrow Nepal Foundation | Empowering Communities",
    description: "Empowering communities across Nepal through education, healthcare, women's empowerment, environmental sustainability, and humanitarian assistance.",
    images: [
      {
        url: "/logo/hero.png",
        width: 1200,
        height: 630,
        alt: "Better Tomorrow Nepal Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Tomorrow Nepal Foundation",
    description: "Empowering communities across Nepal through sustainable development programs.",
    images: ["/logo/hero.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#174D3B" },
    { media: "(prefers-color-scheme: dark)", color: "#4ADE80" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}