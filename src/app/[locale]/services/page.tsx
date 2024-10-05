import Benifits from "@/components/Benifits";
import ContactUs from "@/components/ContactForm";
import Footer from "@/components/Home/Footer";
import OurServices from "@/components/Home/OurServices";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import Navbar from "@/components/Navbar";
import HealthcareSlider from "@/components/OtherMovingServices";
import ServiceTopSection from "@/components/ServiceTopSection";
import TestimonialSection from "@/components/Testimonials";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";

interface Params {
  params: {
    locale: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/services`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services`,
        en: `${process.env.PUBLIC_URL}/en/services`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("desc"),
      url: process.env.PUBLIC_URL,
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
function page() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <ServiceTopSection />
        <Benifits />
        <OurServices />
        <HealthcareSlider />
        <PickUpRentalServices />
        <TestimonialSection />
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}

export default page;
