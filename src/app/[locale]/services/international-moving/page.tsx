import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/international-service.jpg";
import hireUsImage from "../../../../../public/images/hire-us.avif";
import React from "react";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceHire from "@/components/ServiceHire";
import interMovingPrice from "../../../../../public/images/international-moving-pricing.jpg";
import ContactUs from "@/components/ContactForm";
import ServiceMovingProcess from "@/components/ServiceMovingProcess";
import initialConts from "../../../../../public/images/Initial-Consultation-icon.png";
import packingIcon from "../../../../../public/images/packing-unpacking.png";
import moveIcon from "../../../../../public/images/safe-transportation.png";
import settingIcon from "../../../../../public/images/home-setting-icon.png";
import Image from "next/image";
function InternationalMovingService() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title="International Moving Services in UAE"
          subTitle="Safe and Timely International Deliveries From UAE to anywhere in the world"
          description="International moving made easy with Hamdan Movers. Our expert team handles packing, shipping, customs, and door-to-door delivery, ensuring a smooth, stress-free experience. Trust us for seamless, professional service on your move abroad."
          image={imageSrc}
        />
        <ServiceDetails
          title="International Moving Experts in UAE"
          description="Hamdan Movers and Packers provide a comprehensive range of services to
        handle every aspect of your move."
          boxs={[
            {
              heading: " Cheap International Movers",
              desc: " We provides budget-friendly, reliable services tailored to your needs. From expert packing and shipping to seamless customs clearance, we ensure your belongings are safely transported. Enjoy a smooth, stress-free international move with our experienced team by your side.",
            },
            {
              heading: "Customized Moving Plans",
              desc: "International moving with Hamdan Movers is designed to fit your unique needs. Whether relocating across borders or overseas, our expert team creates a customized moving plan, handling everything from packing to delivery. Enjoy a seamless, stress-free move with our reliable service.",
            },
            {
              heading: "Personal Coordinator",
              desc: "At Hamdan Movers, every client gets a dedicated Personal Coordinator to manage their move from start to finish. Your coordinator will handle all logistics, ensure timely communication, and customize services to meet your needs, ensuring a smooth and stress-free moving experience",
            },
            {
              heading: "Personal Coordinator",
              desc: "We provides expert Customs Clearance services for international moves. We handle all paperwork, regulations, and legal requirements to ensure your belongings pass through customs smoothly and without delays, making your move hassle-free and efficient.",
            },
            {
              heading: "Expert Logistics and Shipping for International Moves",
              desc: "Reliable logistics and shipping are key to a smooth international move. Hamdan Movers offers global tracking, air and sea freight options, and expert handling of all necessary documentation for a hassle-free experience.",
            },
          ]}
        />
        <ServiceHire
          title="Hire Us For Your's International Moving In UAE"
          desciption="Start your international journey with ease. Hamdan Movers provides professional, stress-free moving services. Contact us today for a personalized quote and expert assistance for a smooth, hassle-free move."
          keyPoints={[
            "Expertise in International Moving",
            "Efficient Execution and Post-Move Support",
            "Comprehensive International Moving Services",
          ]}
          image={hireUsImage}
        />
        <ContactUs />
        <div className="-mt-10 flex justify-center">
          <div className="w-full md:w-11/12">
            <section className=" rounded-3xl md:py-10 md:px-10 px-1">
              <div className="md:ml-9 container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Right Side - Content */}
                <div className="md:-mr-28 md:-mt-0 z-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2 md:pl-10 text-center md:text-left">
                  <h3 className="text-[#FF5F00] text-sm uppercase font-bold mb-2">
                    moving Pricing
                  </h3>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Cost of International Moving in UAE
                  </h2>
                  <p className="text-gray-600 mb-6">
                    International moving costs in the UAE vary from AED 7,000 to
                    AED 30,000, depending on factors like destination, item
                    volume, and services needed. Costs are influenced by
                    transport method (air or sea), distance, and additional
                    services like packing or storage. For an accurate estimate,
                    request a detailed quote tailored to your needs.
                  </p>
                </div>

                {/* Left Side - Image */}
                <div className="md:w-1/2 flex  justify-center">
                  <div className="md:w-96 w-[350px] h-[420px] relative ">
                    <Image
                      src={interMovingPrice}
                      fill
                      sizes="100"
                      className="z-10 object-cover rounded-lg"
                      placeholder="blur"
                      alt="professional movers in dubai hamdan"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
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

export default InternationalMovingService;
