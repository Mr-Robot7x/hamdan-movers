import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/packing-unpacking.jpg";
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
import { Button } from "@/components/ui/button";
function CommercialOfficeMovers() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title="Professional Packing Services in UAE"
          subTitle="Expert Packing Solutions for Safe and Secure Relocations Across the UAE"
          description="Hamdan Movers and Packers provide expert packing services across the UAE, ensuring your belongings are safely packed and arrive in perfect condition. Our skilled team uses high-quality materials and techniques, offering reliable packing solutions for both local and long-distance moves in UAE."
          image={imageSrc}
        />
        <div className="w-full md:w-11/12 mt-5">
          <section className="rounded-3xl md:py-16 pt-10  md:px-10 px-0">
            <div className="md:mr-3 container mx-auto flex flex-col md:flex-row items-center">
              {/* Left Side - Image */}
              <div className="md:w-1/2 flex order-2  justify-center">
                <div className=" flex items-center justify-start md:px-8 px-8 rounded-3xl shadow-xl shadow-neutral-100 lg:w-[480px] md:w-[80%] w-full h-[400px] bg-gradient-to-b from-yellow-100 via-white to-white">
                  <div className="flex flex-col md:gap-y-5 gap-y-3">
                    <div className="">
                      <h3 className="font-[poppins] font-semibold md:text-[18px] text-[16px] text-black">
                        Kitchen:{" "}
                        <span className="font-normal">
                          Glassware, plates, cutlery, pots, and pans
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3 className="font-[poppins] font-semibold md:text-[18px] text-[16px] text-black">
                        Living Room:{" "}
                        <span className="font-normal">
                          TV, sound system, books, plants, decor, pillows, and
                          curtains
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3 className="font-[poppins] font-semibold md:text-[18px] text-[16px] text-black">
                        Walk-in Wardrobe:{" "}
                        <span className="font-normal">
                          Clothing, shoes, jackets, and accessories
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3 className="font-[poppins] font-semibold md:text-[18px] text-[16px] text-black">
                        Bedroom:{" "}
                        <span className="font-normal">
                          Pillows, bed linen, children’s toys, and towels
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3 className="font-[poppins] font-semibold md:text-[18px] text-[16px] text-black">
                        Entire Home:{" "}
                        <span className="font-normal">
                          All rooms and their respective items
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-1 md:-mt-0 -mt-10 p-4 md:w-1/2 md:pl-10 text-center md:text-left">
                <h2 className="">
                  Flexible Packing Services, Pack a Room or Your Whole Home
                </h2>
                <p className="text-gray-600 mb-6 md:mt-2 mt-3">
                  With Dar Al Salam Movers and Packers, the choice is yours.
                  We’ve got you covered whether you need us to handle a single
                  room or your entire home. Common packing and unpacking
                  services we offer include:
                </p>

                <div className="flex justify-center md:justify-start space-x-4 md:mb-8 mb-4">
                  <Button>Contact Us</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ServiceDetails
          title="Packing and Unpacking Experts in UAE"
          description="Hamdan Movers and Packers provide a comprehensive range of services to
        handle every aspect of your move."
          boxs={[
            {
              heading: " Experienced and Professional Team",
              desc: " At Hamdan Movers and Packers, our expert team ensures smooth, professional office moves of any size. With years of experience, our skilled packers and drivers handle every detail with care, providing top-quality Packing and Unpacking Services.",
            },
            {
              heading: "Customized Moving Plans",
              desc: "Our flexible Packing and Unpacking Service is tailored to meet your unique needs. Whether you need help packing a small room or unpacking a large office, our friendly team works with you to create a customized plan that fits your timeline and ensures a smooth transition.",
            },
            {
              heading: " Professional Equipment and Furniture Moving Services",
              desc: "Our Packing and Unpacking Service ensures the safe handling and organization of your belongings. Whether packing up your entire office or unpacking at the new location, our trained professionals manage every detail with care, ensuring everything arrives and is set up ready for use.",
            },

            {
              heading: " Professional Unpacking Solutions for a Smooth Move",
              desc: "Upon arriving at your new home, we provide expert unloading and unpacking services to help you settle in quickly. Our goal is to transform your new residence into a comfortable and welcoming home.",
            },
          ]}
        />
        <ServiceHire
          title="Hire Us For Your's Packing/Unpacking Services In UAE"
          desciption="Choose us for reliable, efficient, and stress-free Packing and Unpacking services. Our expert team ensures safe handling of your belongings, from packing to transport, providing a seamless relocation experience within UAE."
          keyPoints={[
            "Expertise in Packing/Unpacking",
            "Efficient Execution and Post-Move Support",
            "Comprehensive Packing Services",
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

export default CommercialOfficeMovers;
