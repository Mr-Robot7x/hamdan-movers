import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/movers-in-dubai.jpeg";
import React from "react";
import OurServices from "@/components/Home/OurServices";
import Benifits from "@/components/Benifits";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import OtherMovingServices from "@/components/OtherMovingServices";
import TestimonialSection from "@/components/Testimonials";
import PricingList from "@/components/PricingList";
import WorkProcessSection from "@/components/Process";
import ContactUs from "@/components/ContactForm";
import ServiceHire from "@/components/ServiceHire";
import hireImage from "../../../../../public/images/hire.jpeg";
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
    title: "Best Movers And Packers In Dubai | Hamdan Movers",
    description:
      "Cheap Moving and Packing Company In Dubai, Hamdan Movers and Packers delivers top-quality moving solutions across the Dubai for 6 years. Our full-service options cover local moving, long-distance moving, packing &amp; storage, and specialty relocation. Our team of experienced experts ensures a seamless move for houses, offices, or commercial spaces, making your transition quick and hassle-free.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-dubai/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services-locations/movers-and-packers-dubai/`,
        en: `${process.env.PUBLIC_URL}/en/services-locations/movers-and-packers-dubai/`,
      },
    },
    openGraph: {
      title: "Best Movers And Packers In Dubai | Hamdan Movers",
      description:
        "Cheap Moving and Packing Company In Dubai, Hamdan Movers and Packers delivers top-quality moving solutions across the Dubai for 6 years. Our full-service options cover local moving, long-distance moving, packing &amp; storage, and specialty relocation. Our team of experienced experts ensures a seamless move for houses, offices, or commercial spaces, making your transition quick and hassle-free.",
      url: `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-dubai/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/movers-in-dubai.jpeg`,
        alt: "Movers and packers in Dubai",
      },
    },
  };
}

function MoversInDubai() {
  const t = useTranslations("moving-dubai");
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

export default MoversInDubai;
