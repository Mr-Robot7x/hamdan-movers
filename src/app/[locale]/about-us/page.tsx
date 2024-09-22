import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import aboutUsImg from "../../../../public/images/about-us.jpg";
import ownerImage from "../../../../public/images/owner-ahmad-hussain.jpg";
import backgroundImage from "../../../../public/images/hamdan-movers.jpg";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import AboutTestimonal from "@/components/aboutTestimonials";
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
        {/* {Owner Section} */}
        <div className="mt-16 w-full md:w-11/12  min-h-40">
          <h2 className="text-center md:text-[55px] text-[50px] leading-[45px]">
            About The Owner
          </h2>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 mt-14 md:gap-0 gap-y-16 items-center">
            <div className="min-h-32  flex justify-center">
              <div className="md:w-96 w-[330px] md:h-[450px] h-96 bg-white relative rounded-[50px] overflow-hidden drop-shadow-2xl">
                <Image
                  alt="Ahmad Hussain | Owner Of Hamdan Movers"
                  src={ownerImage}
                  fill
                  className="object-contain absolute"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="min-h-32 md:mt-3">
              <h3 className="text-[40px] font-poppins font-normal md:text-start text-center">
                Ahmad Hussain
              </h3>
              <p className="gr font-light mt-2 md:text-start text-center">
                (CEO at Hamdan Movers and Packer)
              </p>
              <p className="mt-5 md:text-[18px] text-[16px] md:leading-7">
                As a owner of Hamdan Movers and Packer, My first duty is to
                provide seamless moving and logistics services that exceed
                customer expectations. My aims is to simplify the moving
                process, making it stress-free and efficient for every client.
                Our vision is to be the go-to moving and logistics partner in
                the UAE, recognized for our reliability, professionalism, and
                customer-centric approach.
              </p>
              <div className="w-full flex gap-x-2 mt-3">
                <IconBrandFacebook className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
                <IconBrandWhatsapp className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
                <IconMail className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full relative h-[400px] bg-cover bg-center md:mb-32 mb-44"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        >
          <div className="absolute inset-0 bg-[#023246] opacity-85"></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-center text-white ts mt-16 md:text-[50px] text-[42px] leading-[55px]">
              What Our Customers Are Talking <br /> About Us
            </h2>
            <div className="bg-gradient-to-t from bg-white/50 to-white backdrop-blur-md rounded-3xl w-full md:w-11/12 min-h-40 mt-16">
              <AboutTestimonal />
            </div>
          </div>
        </div>
        {/* {Branding Section} */}
        <WhyChooseUs />
      </div>

      <Footer />
    </>
  );
};

export default AboutUsSection;
