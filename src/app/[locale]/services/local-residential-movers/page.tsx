import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/local-moving-service.jpeg";
import hireUsImage from "../../../../../public/images/hire-us.avif";
import React from "react";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceHire from "@/components/ServiceHire";
import PricingList from "@/components/PricingList";
import ContactUs from "@/components/ContactForm";
import ServiceMovingProcess from "@/components/ServiceMovingProcess";
import initialConts from "../../../../../public/images/Initial-Consultation-icon.png";
import packingIcon from "../../../../../public/images/packing-unpacking.png";
import moveIcon from "../../../../../public/images/safe-transportation.png";
import settingIcon from "../../../../../public/images/home-setting-icon.png";
function LocalResidentailMovers() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title="Local Residentail Movers In UAE"
          subTitle="Efficient Apartment and House Moving Services in UAE"
          description="At Hamdan Movers and Packers, we aim to be your top choice for local residential moving in UAE. We’re not just movers, we provide outstanding customer service for a stress-free relocation. Whether you're moving to a new home, villa, or apartment, trust us for a smooth and hassle-free experience."
          image={imageSrc}
        />
        <ServiceDetails
          title="Residential Moving Experts in UAE"
          description="Hamdan Movers and Packers provide a comprehensive range of services to
        handle every aspect of your move."
          boxs={[
            {
              heading: "  Professional Packing for Safe Moving",
              desc: " Our expert packers and movers are trained to handle everything from large furniture to fragile heirlooms, ensuring your belongings are securely packed for safe transport across UAE.",
            },
            {
              heading: "Secure and Stress-Free Transport Across UAE",
              desc: "On moving day, our team handles everything, loading your items onto our modern, well-maintained trucks and transporting them safely to your new home. We ensure careful handling and secure transport across UAE.",
            },
            {
              heading: " Professional Unpacking Solutions for a Smooth Move",
              desc: "Upon arriving at your new home, we provide expert unloading and unpacking services to help you settle in quickly. Our goal is to transform your new residence into a comfortable and welcoming home.",
            },
          ]}
        />
        <ServiceHire
          title="Hire Us For Your's Local Residentail Moving In UAE"
          desciption="Choose us for reliable, efficient, and stress-free local residential moving services. Our expert team ensures safe handling of your belongings, from packing to transport, providing a seamless relocation experience within UAE."
          keyPoints={[
            "Expertise in Local Residential Moving",
            "Dedicated Service for Residential Moves",
          ]}
          image={hireUsImage}
        />
        <ContactUs />
        <div className="-mt-10 flex justify-center">
          <PricingList />
        </div>
        <ServiceMovingProcess
          boxs={[
            {
              heading: "Pre-Move Consultation",
              desc: "Start your move with a personalized consultation. We assess your needs, address challenges, and provide a clear moving plan with a detailed estimate, ensuring no surprises.",
              image: initialConts,
            },
            {
              heading: "Packing and Preparation",
              desc: "Our expert packers carefully handle and protect your items for the journey. Using top-quality packing materials and efficient techniques, we ensure everything is securely packed and ready for a smooth move.",
              image: packingIcon,
            },
            {
              heading: "The Move",
              desc: "Our experienced moving team carefully loads your belongings into our trucks and ensures each item is handled with care throughout the entire journey, delivering everything safely to your new home",
              image: moveIcon,
            },
            {
              heading: "Unpacking and Settling In",
              desc: "Upon arrival at your new home, we'll assist with unpacking and setting up your space, ensuring everything is placed according to your preferences for a smooth transition and immediate comfort.",
              image: settingIcon,
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}

export default LocalResidentailMovers;