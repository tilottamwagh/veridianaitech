import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veridianaitech AI Solutions Inc. | AI-Powered Business Automation",
  description: "Veridianaitech AI Solutions Inc. builds AI-powered voice agents, process automation, and enterprise software for growth-minded businesses. Based in Canada — serving clients globally.",
  keywords: "AI automation, voice agents, process automation, enterprise AI, business automation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[var(--text)] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
