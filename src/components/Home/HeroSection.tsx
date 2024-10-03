"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import client from "../../../public/images/800+-clients-reviews.png";
import hours from "../../../public/images/24-hours-icon.png";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import CustomSelect from "../ui/select";
import { SendIcon } from "lucide-react";
function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");
  return (
    <section id="home" className=" md:mt-36 mt-32 w-full flex justify-center">
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`${
          locale === "ar" ? "md:mr-8" : "md:ml-8"
        } w-full md:w-11/12  grid md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-9 items-center`}
      >
        <div className="">
          <h1
            className={`pb-2 ${
              locale === "ar"
                ? "leading-[53px] md:text-[55px] text-[50px] text-right font-bold"
                : "leading-[53px] md:text-[50px] text-[45px]"
            }`}
          >
            {t("headingTitle")}
          </h1>
          <h2
            className={`${
              locale === "ar"
                ? "font-arabic font-bold text-right mt-6 mb-5"
                : "font-poppins mt-4 font-light mb-2 leading-7"
            } md:text-[28px] text-[24px]  md:leading-8`}
          >
            {t("SubTitle")}
          </h2>
          <p
            className={`${
              locale === "ar" ? "ar-p text-right" : "text-[18px] font-light"
            }`}
          >
            {t("description")}
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
          <div
            className={`w-full grid md:grid-cols-2 grid-cols-1 gap-6 text-center ${
              locale === "ar" ? "mt-10" : "mt-6"
            }`}
          >
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
                <span dir="ltr">{t("box21")}</span> <br />
                {t("box22")}
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
                {t("box11")} <br />
                {t("box12")}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <form
            dir=""
            className="bg-white md:p-4 p-3 shadow-2xl shadow-black/10 rounded-3xl md:w-[85%] w-full  flex items-center justify-center flex-col"
          >
            <h3 className="text-center mb-6 mt-4">{t("form-h")}</h3>
            <input
              name="name"
              placeholder={t("name")}
              type="text"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <input
              name="phone"
              placeholder={t("phone")}
              type="number"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <input
              name="name"
              placeholder={t("address")}
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
              placeholder={t("service")}
            />
            <textarea
              className="w-full h-28 bg-gray-50 mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
              placeholder={t("message")}
              name="message"
              id=""
            ></textarea>
            <Button type="submit" className="mt-3">
              {b("Send Now")}{" "}
              <SendIcon className="ml-2 w-6 h-6" strokeWidth={1.5} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
