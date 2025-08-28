import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shevanio",
  description:
    "David Luna Camuñez - Monitoring Technician & Systems Administrator specializing in cybersecurity, ML, and automation",
  keywords: [
    "David Luna Camuñez",
    "Shevanio",
    "cybersecurity",
    "systems administrator",
    "monitoring technician",
    "machine learning",
    "automation",
    "python",
    "typescript",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(bricolageGrotesque.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
