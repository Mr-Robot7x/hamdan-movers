import BrandingContent from "@/components/Home/BrandingContent";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import OurServices from "@/components/Home/OurServices";
import Navbar from "@/components/Navbar";

import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className="w-full flex flex-col justify-center items-center gap-y-16"
      >
        <HeroSection />
        <BrandingContent />
        <OurServices />
        <div className="h-screen bg-red-300 md:w-11/12 w-full"></div>
      </div>

      <Footer />
    </>
  );
}

export default page;
