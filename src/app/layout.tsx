import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Zubiate | Creative Design Engineer",
  description: "Creative Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-neutral-50 text-neutral-800`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
