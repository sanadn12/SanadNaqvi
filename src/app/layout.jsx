"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { usePathname } from "next/navigation"; // App Router route change detection
import Loader from "@/components/Loader/Loader";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => setLoading(false), 3500); 
    return () => clearTimeout(timer);
  }, [pathname]); 

  return (
    <html lang="en">
      <body className={syne.className}>
        {loading ? <Loader /> : children}
        <Analytics />
      </body>
    </html>
  );
}
