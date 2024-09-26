import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/storage-service.jpg";
import hireUsImage from "../../../../../public/images/hire-us.avif";
import React from "react";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceHire from "@/components/ServiceHire";
import ContactUs from "@/components/ContactForm";
import ServiceMovingProcess from "@/components/ServiceMovingProcess";
import initialConts from "../../../../../public/images/Initial-Consultation-icon.png";
import packingIcon from "../../../../../public/images/packing-unpacking.png";
import moveIcon from "../../../../../public/images/safe-transportation.png";
import settingIcon from "../../../../../public/images/home-setting-icon.png";
import longtermImg from "../../../../../public/images/long-term.jpg";
import shorttermImg from "../../../../../public/images/short-term.jpg";
import residentalImg from "../../../../../public/images/residential-storage.jpg";
import commericalImg from "../../../../../public/images/commercial-storage.jpg";
import Image from "next/image";
import TestimonialSection from "@/components/Testimonials";
function StorageServices() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title="Storage Services in UAE"
          subTitle="Secure, Climate-Controlled Storage Solutions | Short and Long-Term Options"
          description="Need secure, climate-controlled storage? Our clean, air-conditioned units protect your belongings from damage, whether for short or long-term storage. Ideal for moving, downsizing, or extra space, with 24/7 monitoring and easy access for peace of mind."
          image={imageSrc}
        />
        <div className="w-full md:w-11/12 min-h-32 mt-8">
          <h2 className="text-center">
            We offer a variety of storage types <br /> to meet your needs
          </h2>
          <p className="text-center md:px-16 mt-3">
            At Hamdan Movers and Packer, we offer tailored storage solutions for
            personal items, office equipment, and even vehicles. From small
            units to large commercial spaces, our facilities meet all needs,
            including specialty storage for valuables.
          </p>
          <div className="w-full md:grid-flow-col grid-flow-row grid md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={shorttermImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Short Term Storage
              </h3>
              <p className="mt-2 md:px-3">
                Need short-term storage for office equipment? Hamdan Movers
                offers secure, convenient solutions for renovations or
                relocations. Store your items safely for days or weeks with
                flexible options.
              </p>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={longtermImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Long Term Storage
              </h3>
              <p className="mt-2 md:px-3">
                Need long-term storage for downsizing, seasonal items, or
                documents? Hamdan Movers offers secure, flexible storage
                solutions for extended durations, keeping your belongings safe
                for as long as needed.
              </p>
            </div>
          </div>
          <div className="w-full md:grid-flow-col grid-flow-row grid md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={residentalImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Residential Storage
              </h3>
              <p className="mt-2 md:px-3">
                Need more space in UAE? Hamdan Movers offers secure residential
                storage for home improvements, decluttering, or moving. Our
                accessible, secure units keep your belongings safe and
                protected.
              </p>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={commericalImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-4">
                Commercial Storage
              </h3>
              <p className="mt-2 md:px-3">
                Businesses in need of extra space? Hamdan Movers offers flexible
                commercial storage for surplus inventory, office furniture, and
                important documents. Our solutions help optimize your workspace
                and improve efficiency.
              </p>
            </div>
          </div>
        </div>
        <ServiceDetails
          title="Why Choose Our Storage Services In UAE"
          description="With years of experience, Hamdan Movers ensures safe and efficient storage for all your items. Trust us for reliable, professional service."
          boxs={[
            {
              heading: "Proven Experience and Expertise",
              desc: "We have years of industry experience, making us a reliable partner for your storage needs. Our team of professionals is adept at handling a wide array of items, ensuring they are stored safely and efficiently.",
            },
            {
              heading: "Competitive and Affordable Pricing",
              desc: "We believe that top-notch storage services should be accessible to all. With that in mind, we’ve structured our pricing to be competitive and transparent, providing excellent value to our customers.",
            },
            {
              heading: "Dedicated Customer Service",
              desc: "Customer service is at the heart of our operations. Our team is dedicated to providing you with a seamless storage experience. From the moment you get in touch with us, to the time you collect your stored items, we are with you every step of the way.",
            },
            {
              heading: "Best Storage Solutions",
              desc: "As part of our Office Moving Service, we provide secure short-term and long-term storage solutions for office items. Our safe, monitored storage facilities ensure your equipment and furniture are protected until ready for relocation.",
            },
          ]}
        />
        <ServiceHire
          title="Hire Us For Your's Storage Services In UAE"
          desciption="Choose us for reliable, efficient, and stress-free Storage services. Our expert team ensures safe handling of your belongings, from packing to transport, providing a seamless storage experience within UAE."
          keyPoints={[
            "Secure, Climate-Controlled Storage Facilities",
            "Comprehensive Packing and Unpacking Services",
            "Friendly, Expert Staff Ready to Assist",
          ]}
          image={hireUsImage}
        />
        <ContactUs />

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

export default StorageServices;
