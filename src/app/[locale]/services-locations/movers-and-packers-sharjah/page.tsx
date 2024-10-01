import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/movers-in-sharjah.avif";
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
