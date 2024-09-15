import Benifits from "@/components/Benifits";
import Footer from "@/components/Home/Footer";
import OurServices from "@/components/Home/OurServices";

import Navbar from "@/components/Navbar";
import HealthcareSlider from "@/components/OtherMovingServices";

import ServiceTopSection from "@/components/ServiceTopSection";
import TestimonialSection from "@/components/Testimonials";
import React from "react";

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
        <TestimonialSection />
      </div>

      <Footer />
    </>
  );
}

export default page;
