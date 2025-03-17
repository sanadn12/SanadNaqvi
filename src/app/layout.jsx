
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono,Syne } from "next/font/google";
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

export const metadata = {
  title: "Sanad",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={syne.className}>{children}</body>
    </html>
  );
}
