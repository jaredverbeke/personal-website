import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import "../styles/site-refine.css";
import SiteHeader from "@/components/site-header/site-header";
import Providers from "./providers";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jared Verbeke",
  description:
    "Business operations, CLM, and AI systems — portfolio and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${sans.className}`}>
        <Providers>
          <SiteHeader />
          <div className="site-content">{children}</div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
