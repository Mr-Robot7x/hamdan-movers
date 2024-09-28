import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import { Amiri, Poppins, Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
export const metadata: Metadata = {
  title: "Hamdan Mover and Packer",
  robots: {
    index: true,
    follow: true,
    googleBot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  other: {
    google: "notranslate",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  variable: "--playfair",
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
  const messages = useMessages();
  return (
    <html lang={locale} className="light">
      <body className=" dark:bg-gray-900">
        <div className="container px-[10px] h-full">
          <NextIntlClientProvider messages={messages}>
            <main
              className={`${
                locale === "ar"
                  ? `${arabic.className}`
                  : `${poppins.className} ${playfair.className}`
              }`}
            >
              {children}
            </main>
          </NextIntlClientProvider>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
