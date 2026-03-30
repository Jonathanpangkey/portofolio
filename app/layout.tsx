import type { Metadata } from "next";
import { Geist, PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Jonathan Andreas",
  description: "Showcasing my work as a software developer and freelancer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${ptSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}