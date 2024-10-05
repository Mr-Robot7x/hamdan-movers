import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/movers-in-sharjah.jpg";
import React from "react";
import OurServices from "@/components/Home/OurServices";
import Benifits from "@/components/Benifits";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import OtherMovingServices from "@/components/OtherMovingServices";
import TestimonialSection from "@/components/Testimonials";
import PricingList from "@/components/PricingList";
import WorkProcessSection from "@/components/Process";
import ContactUs from "@/components/ContactForm";
import hireImage from "../../../../../public/images/hire.jpeg";
import ServiceHire from "@/components/ServiceHire";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title: "Cheap Moving and Packing Company In Sharjah | Hamdan Movers",
    description:
      "We offers comprehensive moving services across the Sharjah, including local and long-distance moves, packing, specialized handling, and custom crating. We handle residential, commercial, and emergency relocations for a seamless, stress-free experience.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/services-locations/movers-and-packers-sharjah`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services-locations/movers-and-packers-sharjah`,
        en: `${process.env.PUBLIC_URL}/en/services-locations/movers-and-packers-sharjah`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("desc"),
      url: `${process.env.PUBLIC_URL}/services-locations/movers-and-packers-sharjah`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
        alt: "Hamdan Movers Logo",
      },
    },
  };
}

function MoversInSharjah() {
  const t = useTranslations("moving-sharjah");
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          title={t("title")}
          description={t("desc")}
          image={imageSrc}
          subTitle={t("sub")}
        />

        <OurServices title={t("ser-title")} city={t("city")} />
        <OtherMovingServices />
        <div className="md:-mt-12 w-full flex justify-center">
          <Benifits city={t("city")} />
        </div>
        <PickUpRentalServices city={t("city")} />
        <ServiceHire
          title={t("hire.title")}
          desciption={t("desc")}
          image={hireImage}
          keyPoints={[t("hire.key1"), t("hire.key2")]}
        />
        <TestimonialSection />
        <PricingList city={t("city")} />
        <WorkProcessSection />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default MoversInSharjah;
