import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ImageSrc from "../../../../public/images/movers-in-dubai.jpeg";
import PerServiceSec from "@/components/perServiceSec";
import Benifits from "@/components/Benifits";
import hireImage from "../../../../public/images/hire.jpeg";
import ServiceHire from "@/components/ServiceHire";
import TestimonialSection from "@/components/Testimonials";
import PricingList from "@/components/PricingList";
import Locations from "@/components/Locations";
import { useTranslations } from "next-intl";

function ServicesLocations() {
  const t = useTranslations("moving-locations");
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          image={ImageSrc}
          title={t("title")}
          subTitle={t("sub")}
          description={t("desc")}
        />
        <Benifits />
        <Locations />
        <ServiceHire
          title={t("hire.title")}
          desciption={t("hire.desc")}
          image={hireImage}
          keyPoints={[t("hire.key1"), t("hire.key2")]}
        />
        <TestimonialSection />
        <PricingList />
      </div>
      <Footer />
    </>
  );
}

export default ServicesLocations;
