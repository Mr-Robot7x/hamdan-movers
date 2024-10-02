import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins, Amiri, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Hamdan Mover and Packer",
  description:
    "Hamdan Movers and Packers has been providing top-quality moving services in the UAE for over 6 years. We offer local and long-distance moving, packing, storage, and specialty relocation solutions. Our experienced team ensures a smooth, hassle-free move for homes, offices, and commercial spaces. Move with ease and convenience with Hamdan Movers!",
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

export default async function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <main
            className={` ${
              locale === "ar"
                ? `${arabic.className}`
                : `${poppins.className} ${playfair.variable}`
            }`}
          >
            {children}
          </main>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
