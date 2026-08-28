import type { Metadata } from "next";
import { Bebas_Neue, Fraunces } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./globals.css";

// Stand-in for Campaign Serif (Adobe Fonts, licensed — not on Google Fonts).
// If the club gets a license, swap this for a next/font/local() pointing at
// the Campaign Serif files and keep the `--font-body` variable name so
// nothing else needs to change.
const fraunces = Fraunces({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Georgia Tech Photography Club",
    template: "%s | Georgia Tech Photography Club",
  },
  description:
    "Explore student photography, creative events, photo walks, workshops, and exhibitions from the Georgia Tech Photography Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${bebasNeue.variable} bg-paper text-ink antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}