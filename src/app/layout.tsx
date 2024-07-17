import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balmukund IT Academy",
  description: "Generated by BMIT",
  icons:{
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tl from-[#fff5f5] via-[#eefffe] to-[#fff4f4]`}>
        <Navbar />
        <div className="md:mt-32 mt-28">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
