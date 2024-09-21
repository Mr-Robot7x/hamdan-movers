import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/speciality-moving.jpg";
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
import artImg from "../../../../../public/images/art-moving.jpg";
import pianoImg from "../../../../../public/images/piano-moving.jpg";
import cratingImg from "../../../../../public/images/crating.jpg";
import specialtyImg from "../../../../../public/images/Specialty.jpg";

import Image from "next/image";
function SpecialityMovingService() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title="Best Speciality Moving Services in UAE"
          subTitle="Professional Specialty Movers for Unique Items in the UAE"
          description="Specialty moving requires expert care for fragile, valuable, or bulky items. Hamdan Movers ensures safe transport for everything from art to pianos with professional handling and the right equipment. Trust us to protect your valuables during the move"
          image={imageSrc}
        />
        <ServiceDetails
          title="Speciality Moving Experts in UAE"
          description="Hamdan Movers and Packers provide a comprehensive range of services to
        handle every aspect of your move."
          boxs={[
            {
              heading: "Experienced Team",
              desc: "Our team has extensive experience in specialty moves, from delicate antiques to heavy pianos. We ensure every item is handled with expert care, using specialized techniques for safe and secure transport.",
            },
            {
              heading: "Advanced Equipment",
              desc: "We use top-tier equipment, including custom crates and padded blankets, to protect your belongings. Our advanced tools minimize damage risk and ensure secure transport for items of all shapes and sizes.",
            },
            {
              heading: "Personalized Service",
              desc: "Every move is unique, and we offer personalized solutions to meet your specific needs. From start to finish, we provide a seamless, stress-free experience, ensuring every detail is tailored to your requirements.",
            },
            {
              heading: "Comprehensive Insurance",
              desc: "As part of our Office Moving Service, we provide secure short-term and long-term storage solutions for office items. Our safe, monitored storage facilities ensure your equipment and furniture are protected until ready for relocation.",
            },
            {
              heading: "Trusted and Secure",
              desc: "With a reputation for trust and security, we handle every specialty move with precision and care. You can count on us to transport your valuable items safely and securely, ensuring a smooth experience.",
            },
          ]}
        />
        <div className="w-full md:w-11/12 min-h-32 mt-8">
          <h2 className="text-center">
            Types of Specialty Moving Service <br /> We Offer In UAE
          </h2>
          <p className="text-center md:px-16 mt-3">
            Hamdan Movers expertly handles art, antiques, pianos, pool tables,
            and specialty appliances. With custom packing, advanced equipment,
            and trained movers, we ensure safe, damage-free transport. Custom
            crating and packing services available for extra protection.
          </p>
          <div className="w-full md:grid-flow-col grid-flow-row grid md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={artImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Art and Antique Moving
              </h3>
              <p className="mt-2 md:px-3">
                At Hamdan Movers, we expertly handle art and antiques with
                precision and care. Using specialized packing materials and
                techniques, we ensure your valuable pieces are protected and
                safely transported.
              </p>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={pianoImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">Piano Moving</h3>
              <p className="mt-2 md:px-3">
                Pianos are delicate and require expert handling. Our specialized
                equipment and skilled movers ensure your piano is safely
                transported and arrives in perfect condition.
              </p>
            </div>
          </div>
          <div className="w-full md:grid-flow-col grid-flow-row grid md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={cratingImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Crating & Packing Services
              </h3>
              <p className="mt-2 md:px-3">
                Moving specialty appliances like wine coolers and commercial
                refrigerators requires expert care. Hamdan Movers ensures safe
                transport of sensitive items, keeping them in top condition
                throughout the move.
              </p>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={specialtyImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Specialty Appliance Moving
              </h3>
              <p className="mt-2 md:px-3">
                Need extra protection? Our custom crating and packing services
                provide tailored solutions for your items, ensuring maximum
                security and reducing the risk of damage during transit.
              </p>
            </div>
          </div>
        </div>
        <ServiceHire
          title="Hire Us For Your's Speciality Moving In UAE"
          desciption="Choose us for reliable, efficient, and stress-free local Speciality Moving. Our expert team ensures safe handling of your belongings, from packing to transport, providing a seamless Speciality Moving experience within UAE."
          keyPoints={[
            "Art and Antique Moving",
            "Piano Moving",
            "Pool Table Moving and many more..",
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

export default SpecialityMovingService;
