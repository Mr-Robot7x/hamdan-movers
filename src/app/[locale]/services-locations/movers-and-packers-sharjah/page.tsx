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
function MoversInSharjah() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          title="Best Movers And Packers In Sharjah"
          description="Hamdan Movers and Packers delivers top-quality moving solutions across the Sharjah for 6 years. Our full-service options cover local moving, long-distance moving, packing &amp; storage, and specialty relocation. Our team of experienced experts ensures a seamless move for houses, offices, or commercial spaces, making your transition quick and hassle-free."
          image={imageSrc}
          subTitle="Cheap Moving and Packing Company In Sharjah"
        />

        <OurServices
          title="Moving and Packing Services | Sharjah"
          city="Sharjah"
        />
        <OtherMovingServices />
        <div className="md:-mt-12 w-full flex justify-center">
          <Benifits city="Sharjah" />
        </div>
        <PickUpRentalServices city="Sharjah" />
        <ServiceHire
          title="Choose Best Moving Company In Sharjah"
          desciption="Find the best moving company near you with ease. Explore top-rated local movers, compare services, and get hassle-free relocation. Whether it's a residential or commercial move, discover trusted professionals for a smooth, secure, and stress-free experience. Get quotes and expert guidance for your next move today!"
          image={hireImage}
          keyPoints={[
            "Residential and Commercial Moving in Sharjah",
            "Easily Available In Sharjah",
          ]}
        />
        <TestimonialSection />
        <PricingList city="Sharjah" />
        <WorkProcessSection />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default MoversInSharjah;