"use client";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import { Amiri, Bodoni_Moda, Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "auto",
  variable: "--poppins",
});

const arabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: "normal",

  variable: "--arabic",
});

const EngHeading = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--heading",
});
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="" className="light">
      <body className=" dark:bg-gray-900">
        <div className="container px-[10px] h-full">
          <main className={`a`}>{children}</main>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
