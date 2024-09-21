import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import aboutUsImg from "../../../../public/images/about-us.jpg";
import ownerImage from "../../../../public/images/owner-ahmad-hussain.jpg";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import ServiceHire from "@/components/ServiceHire";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
const AboutUsSection = () => {
  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div className="w-full md:w-11/12 md:mt-[160px] mt-36">
          <div className="w-full">
            <h1 className="font-medium text-[70px] border-b-[2px] pb-6 border-black">
              About Us
            </h1>
            <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 md:mt-16 mt-10 md:ml-12">
              <div className="min-h-32">
                <h2 className="font-poppins font-normal md:leading-[50px] leading-10">
                  Professional Moving Solutions for Dubai, Sharjah, and Ajman
                  Residents.
                </h2>
                <p
                  style={{
                    fontStyle: "italic",
                  }}
                  className="mt-5 text-[19px] leading-7"
                >
                  We are trusted movers in Dubai for safe and reliable moving
                  services. Whether it&apos;s a local or international move, we
                  handle everything from cars to pianos with care, ensuring your
                  belongings arrive on time and without damage
                </p>
                <div className="mt-5 flex flex-col gap-y-2">
                  <div className="">
                    <p className="font-medium md:text-[19px] flex gap-x-1 text-[17px] text-wrap">
                      <span className="text-[#FF5F00]">-</span> Professional
                      team for efficient packing
                    </p>
                  </div>
                  <div className="">
                    <p className="font-medium md:text-[19px] flex gap-x-1 text-[17px] text-wrap">
                      <span className="text-[#FF5F00]">-</span> Trusted by
                      clients in Dubai, Sharjah, Ajman
                    </p>
                  </div>
                  <div className="">
                    <p className="font-medium md:text-[19px] flex gap-x-1 text-[17px] text-wrap">
                      <span className="text-[#FF5F00]">-</span> Dedicated to
                      quality service delivery
                    </p>
                  </div>
                  <div className="">
                    <p className="font-medium md:text-[19px] flex gap-x-1 text-[17px] text-wrap">
                      <span className="text-[#FF5F00]">-</span> Focus on
                      customer satisfaction
                    </p>
                  </div>
                  <div className="">
                    <p className="font-medium md:text-[19px] flex gap-x-1 text-[17px] text-wrap">
                      <span className="text-[#FF5F00]">-</span> Corporate
                      relocations and IT equipment moving
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-h-32 flex justify-center">
                <div className="md:w-96 w-[350px] bg-gradient-to-t from-slate-50 to-slate-100 md:h-[480px] h-96 relative">
                  <Image
                    src={aboutUsImg}
                    alt="about us | hamdan mover"
                    className="object-cover absolute"
                    fill
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 w-full md:w-11/12 flex justify-center flex-col items-center">
          <h2 className="md:text-[60px] text-[50px] text-center leading-[50px]">
            About The Owner
          </h2>

          <div className="w-full border border-[#023246] mt-36 rounded-[50px] px-1 pb-5">
            <div className="relative md:w-64 w-56 md:h-64 h-56 border-4 border-white drop-shadow-2xl -mt-[105px] bg-white rounded-full flex items-center justify-center mx-auto">
              <Image
                src={ownerImage}
                fill
                placeholder="blur"
                className="rounded-full object-contain absolute"
                alt="owner Ahmad Hussain | hamdan mover"
              />
            </div>
            <h2 className="text-center mt-8 text-black md:text-[47px] text-[40px] font-normal ts font-poppins">
              Ahmad Hussain
            </h2>
            <div className=" flex items-center justify-center mt-5 gap-x-6">
              <IconBrandFacebook className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
              <IconBrandWhatsapp className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
              <IconMail className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
            </div>
            <p className="md:px-20 mt-5 md:text-[19px] text-[16px] md:leading-7 leading-6 md:text-center text-start">
              As a owner of Hamdan Movers and Packer, My first duty is to
              provide seamless moving and logistics services that exceed
              customer expectations. My aims is to simplify the moving process,
              making it stress-free and efficient for every client. Our vision
              is to be the go-to moving and logistics partner in the UAE,
              recognized for our reliability, professionalism, and
              customer-centric approach.
            </p>
          </div>
        </div>
        <WhyChooseUs />
      </div>

      <Footer />
    </>
  );
};

export default AboutUsSection;
