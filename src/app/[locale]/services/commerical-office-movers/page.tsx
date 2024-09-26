import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/office-relocation.jpg";
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
import TestimonialSection from "@/components/Testimonials";
function CommercialOfficeMovers() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title="Commercial  Office Moving Services in UAE"
          subTitle="Expert Office Moving Services for a Smooth Business Transition in UAE"
          description="Hamdan Movers and Packers offer fully insured, 24/7 Office Moving Services in UAE. We provide customized relocation solutions with GPS-tracked fleets and handle Certificate of Insurance at no extra cost. With flexible scheduling and expertise in UAE’s unique moving challenges, we ensure a seamless, stress-free office move."
          image={imageSrc}
        />
        <ServiceDetails
          title="Commercial  Moving Experts in UAE"
          description="Hamdan Movers and Packers provide a comprehensive range of services to
        handle every aspect of your move."
          boxs={[
            {
              heading: " Experienced and Professional Team",
              desc: " At Hamdan Movers and Packers, our expert team ensures smooth, professional office moves of any size. With years of experience, our skilled packers and drivers handle every detail with care, providing top-quality Office Moving Services.",
            },
            {
              heading: "Customized Moving Plans",
              desc: "Our flexible Office Moving Service is tailored to meet your unique needs. Whether relocating a small office locally or a large corporate office across regions, our friendly team works with you to create a customized moving plan that fits your timeline.",
            },
            {
              heading: " Professional Equipment and Furniture Moving Services",
              desc: "Our Office Moving Service ensures the safe packing, transport, and setup of office equipment and furniture. Trained movers handle all items with care, ensuring they arrive and are ready for use at your new location.",
            },
            {
              heading: "Best Storage Solutions",
              desc: "As part of our Office Moving Service, we provide secure short-term and long-term storage solutions for office items. Our safe, monitored storage facilities ensure your equipment and furniture are protected until ready for relocation.",
            },
            {
              heading: " Professional Unpacking Solutions for a Smooth Move",
              desc: "Upon arriving at your new home, we provide expert unloading and unpacking services to help you settle in quickly. Our goal is to transform your new residence into a comfortable and welcoming home.",
            },
          ]}
        />
        <ServiceHire
          title="Hire Us For Your's Commercial  Office Moving In UAE"
          desciption="Choose us for reliable, efficient, and stress-free local residential moving services. Our expert team ensures safe handling of your belongings, from packing to transport, providing a seamless relocation experience within UAE."
          keyPoints={[
            "Expertise in Commercial Moving",
            "Efficient Execution and Post-Move Support",
            "Comprehensive Office Moving Services",
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
        <TestimonialSection />
      </div>

      <Footer />
    </>
  );
}

export default CommercialOfficeMovers;
