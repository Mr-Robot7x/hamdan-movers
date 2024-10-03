"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import client from "../../../public/images/800+-clients-reviews.png";
import hours from "../../../public/images/24-hours-icon.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import CustomSelect from "../ui/select";
import { SendIcon } from "lucide-react";
function HeroSection() {
  // const locale = useLocale();
  // const t = useTranslations("heroSection");
  const b = useTranslations("buttons");
  return (
    <section id="home" className=" md:mt-36 mt-32 w-full flex justify-center">
      <div className="md:ml-7 w-full md:w-11/12  grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center">
        <div className="">
          <h1 className="md:leading-[53px]">Hamdan Movers and Packers</h1>
          <h2 className="font-poppins md:text-[28px] text-[24px] mt-4 mb-2 font-light md:leading-8 leading-7">
            UAE&apos;s Best Moving and Packing Company
          </h2>
          <p className="text-[18px] font-light">
            Hamdan Movers and Packers is serving you with the top quality of
            moving solutions for the 6 years in UAE.
          </p>
          <div className="w-full flex md:gap-x-3 md:flex-row flex-col gap-y-3 mt-6">
            <Link aria-label="call now" href={"tel:tel:+971566651978"}>
              <Button className="">
                {b("call now")} : <span dir="ltr">+971 56 6651978</span>
              </Button>
            </Link>
            <Link href={"/services"}>
              <Button variant={"secondary"}>{b("Our Services")}</Button>
            </Link>
          </div>
          <div className="w-full mt-6 grid md:grid-cols-2 grid-cols-1 gap-6 text-center">
            <div className="bg-gradient-to-br from-white via-white to-[#ff5e002d] rounded-2xl p-4">
              <div className="w-14 mx-auto mb-4 h-14 rounded-full relative">
                <Image
                  alt="800+ clients reviews"
                  src={client}
                  fill
                  className="object-contain absolute"
                />
              </div>
              <h3>
                800+ <br />
                Clients Reviews
              </h3>
            </div>
            <div className="bg-gradient-to-br from-white via-white to-[#ff5e002d] rounded-2xl p-4">
              <div className="w-14 mx-auto bg-red-50 mb-4 h-14 rounded-full relative">
                <Image
                  alt="24 hours support"
                  src={hours}
                  fill
                  className="object-contain absolute"
                />
              </div>
              <h3>
                24/7 <br /> Customer Support
              </h3>
            </div>
          </div>
        </div>

        <div className=" flex justify-center">
          <form className="bg-white md:p-4 p-3 shadow-2xl shadow-black/10 rounded-3xl md:w-11/12 w-full  flex items-center justify-center flex-col">
            <h3 className="text-center mb-6 mt-4">
              Let’s Make Your Move Easy!
            </h3>
            <input
              name="name"
              placeholder="Your Name"
              type="text"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              type="number"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <input
              name="name"
              placeholder="Your Address"
              type="text"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <CustomSelect
              className="border-none bg-gray-50 mt-3 p-4 rounded-3xl focus:shadow-md transition-shadow"
              options={[
                {
                  label: "Moving",
                  value: "Moving",
                },
                {
                  label: "Packaging",
                  value: "Packaging",
                },
                {
                  label: "Delivery",
                  value: "Delivery",
                },
              ]}
              onChange={(option) => {
                console.log(option);
              }}
              placeholder="Service"
            />
            <textarea
              className="w-full h-28 bg-gray-50 mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
              placeholder="your message"
              name="message"
              id=""
            ></textarea>
            <Button type="submit" className="mt-3">
              Send Now <SendIcon className="ml-2 w-6 h-6" strokeWidth={1.5} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
