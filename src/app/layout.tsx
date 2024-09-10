"use client";
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
  style: "normal",

  variable: "--heading",
});
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="light">
      <body className=" dark:bg-gray-900">
        <div className="container px-[10px] h-full">
          <main className={`a`}>{children}</main>
        </div>

        <Script src="/script.js"></Script>
      </body>
    </html>
  );
}
