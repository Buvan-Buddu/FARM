import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/globals-extra.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fef3c7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gr-farm.vercel.app"),
  title: {
    default: `${SITE.name} | Premium Organic Mangoes`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "GR FARM delivers 100% organic, handpicked Alphonso, Totapuri, and Sindhura mangoes — farm fresh from Ranjith's orchards to your doorstep across India.",
  keywords: [
    "organic mango",
    "Alphonso mango",
    "Totapuri mango",
    "Sindhura mango",
    "GR FARM",
    "farm fresh mango",
    "India mango delivery",
  ],
  authors: [{ name: SITE.owner, url: "https://gr-farm.vercel.app" }],
  openGraph: {
    title: `${SITE.name} | Premium Organic Mangoes`,
    description:
      "From our farm to your home — organic mangoes, naturally grown and safely delivered.",
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Premium Organic Mangoes`,
    description:
      "Luxury farm-fresh organic mangoes — Alphonso, Totapuri & Sindhura.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
