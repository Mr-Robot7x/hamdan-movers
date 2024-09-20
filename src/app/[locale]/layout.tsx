import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import { Amiri, Poppins, Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "auto",
  variable: "--poppins",
});
export const metadata: Metadata = {
  title: "Hamdan Mover and Packer",
};
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

const localSubHeading = localFont({
  src: "../louis-george.ttf",
  variable: "--sub-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale} className="light">
      <body className=" dark:bg-gray-900">
        <div className="container px-[10px] h-full">
          <main
            // className={`a ${
            //   locale === "ar"
            //     ? arabic.className
            //     : playfair.className + poppins.className
            // }`}
            className={`${poppins.className} ${localSubHeading.variable}`}
          >
            {children}
          </main>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
