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
function MoversInDubai() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          title="Best Movers And Packers In Dubai"
          description="Hamdan Movers and Packers delivers top-quality moving solutions across the Dubai for 6 years. Our full-service options cover local moving, long-distance moving, packing &amp; storage, and specialty relocation. Our team of experienced experts ensures a seamless move for houses, offices, or commercial spaces, making your transition quick and hassle-free."
          image={imageSrc}
          subTitle="Cheap Moving and Packing Company In Dubai"
        />

        <OurServices title="Moving and Packing Services | Dubai" city="Dubai" />
        <OtherMovingServices />
        <div className="md:-mt-12 w-full flex justify-center">
          <Benifits city="Dubai" />
        </div>
        <PickUpRentalServices city="Dubai" />
        <ServiceHire
          title="Choose Best Moving Company In Dubai"
          desciption="Find the best moving company near you with ease. Explore top-rated local movers, compare services, and get hassle-free relocation. Whether it's a residential or commercial move, discover trusted professionals for a smooth, secure, and stress-free experience. Get quotes and expert guidance for your next move today!"
          image={hireImage}
          keyPoints={[
            "Residential and Commercial Moving in Dubai",
            "Easily Available In Dubai",
          ]}
        />
        <TestimonialSection />
        <PricingList city="Dubai" />
        <WorkProcessSection />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default MoversInDubai;