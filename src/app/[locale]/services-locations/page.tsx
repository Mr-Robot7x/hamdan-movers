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

function ServicesLocations() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          image={ImageSrc}
          title="Professional Moving Services In UAE"
          subTitle="We provide our best moving services in Dubai, Sharjah, Ajman and its surrounding areas."
          description="We provide reliable moving services across Dubai, Sharjah, Ajman, and the surrounding areas. Our goal is to make your move as smooth and stress-free as possible. With a skilled team and the right equipment, we handle every aspect of your move, whether it’s for your home or business."
        />
        <Benifits />
        <Locations />
        <ServiceHire
          title="Choose Best Moving Company In Your Location"
          desciption="Find the best moving company near you with ease. Explore top-rated local movers, compare services, and get hassle-free relocation. Whether it's a residential or commercial move, discover trusted professionals for a smooth, secure, and stress-free experience. Get quotes and expert guidance for your next move today!"
          image={hireImage}
          keyPoints={[
            "Residential and Commercial Moving",
            "Easily Available In Your's Locations",
          ]}
        />
        <TestimonialSection />
        <PricingList />
      </div>
      <Footer />
    </>
  );
}

export default ServicesLocations;
