"use client";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import { Amiri, Poppins, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "auto",
  variable: "--playfair",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="" className="light">
      <body className=" dark:bg-gray-900">
        <div className="container px-[10px] h-full">
          <main className={`a ${playfair.className} ${poppins.className}`}>
            {children}
          </main>
        </div>
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}
