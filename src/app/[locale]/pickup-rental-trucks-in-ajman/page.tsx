import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import serviceImage from "../../../../public/images/pickup-rent-services-3-trans.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import truck1 from "../../../../public/images/1.5-ton-truck.jpg";
import truck2 from "../../../../public/images/3-tom.jpg";
import truck3 from "../../../../public/images/pickup-rent-services-3.jpeg";
import ServiceHire from "@/components/ServiceHire";
import ContactUs from "@/components/ContactForm";

import { PhoneForwardedIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import TestimonialSection from "@/components/Testimonials";
function PerServiceSec() {
  const locale = useLocale();
  const t = useTranslations("pickup-ajman");
  const tt = useTranslations("pickup");
  const b = useTranslations("buttons");

  const boxData = [
    {
      heading: t("part1.point1"),
      desc: t("part1.desc1"),
    },
    {
      heading: t("part1.point2"),
      desc: t("part1.desc2"),
    },
    {
      heading: t("part1.point3"),
      desc: t("part1.desc3"),
    },
    {
      heading: t("part1.point4"),
      desc: t("part1.desc4"),
    },
  ];
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="md:mt-[160px] mt-36"
        >
          <div
            className={`grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center ${
              locale === "ar" ? "md:mr-[60px]" : "md:ml-[60px]"
            }`}
          >
            <div className="min-h-40 ">
              <h1 className={locale === "ar" ? "font-bold" : ""}>
                {t("title")}
              </h1>
              <h3
                className={`mt-4 ${
                  locale === "ar"
                    ? "font-arabic md:text-[27px] leading-9"
                    : "font-poppins md:text-[22px]"
                }`}
              >
                {t("sub")}
              </h3>
              <p className={`mt-2 ${locale === "ar" ? "ar-p" : ""}`}>
                {t("desc")}
              </p>
              <div className="mt-5">
                <Link href={"tel:+971503626685"}>
                  <Button>
                    {b("call now")}: <span dir="ltr">+971 503626685</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-[550px] w-[350px] md:h-80 h-60 relative">
                <Image
                  src={serviceImage}
                  fill
                  placeholder="blur"
                  className="object-contain drop-shadow-lg"
                  alt={"Cheap Pickup Rental Services In UAE"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/12 mt-14">
          <h2
            className={`text-center mb-4 ${
              locale === "ar" ? "font-arabic font-bold" : ""
            }`}
          >
            {t("part1.title")}
          </h2>
          <p className={`text-center ${locale === "ar" ? "ar-p" : ""}`}>
            {t("part1.desc")}
          </p>
          <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {boxData.map((box, i) => (
              <div
                key={i}
                className="min-h-32 bg-white shadow-lg shadow-neutral-100 border border-neutral-200 py-4 px-3 rounded-2xl"
              >
                <h3
                  className={`md:text-[21px]  md:leading-6 text-center mb-1 ${
                    locale === "ar"
                      ? "font-arabic font-bold"
                      : "font-poppins font-medium"
                  }`}
                >
                  {box.heading}
                </h3>
                <div className="w-full h-px bg-neutral-100 px-10"></div>
                <p
                  className={`text-center mt-2 gr ${
                    locale === "ar" ? "ar-p" : "text-[15.2px]"
                  }`}
                >
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-11/12 min-h-32 mt-8">
          <h2
            className={`text-center mb-5 ${locale === "ar" ? "font-bold" : ""}`}
          >
            {tt("size")}
          </h2>
          <p
            className={`text-center md:px-16 mt-3 ${
              locale === "ar" ? "ar-p" : ""
            }`}
          >
            {t("part1.truckdesc")}
          </p>
          <div className="w-full grid lg:grid-flow-col md:grid-flow-row grid-flow-row md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={truck1}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-5 mb-1 ${
                  locale === "ar" ? "font-bold" : "font-poppins"
                }`}
              >
                {tt("one.title")} <br />{" "}
                {locale !== "ar"
                  ? `${tt("one.in")} UAE`
                  : `UAE ${tt("one.in")}`}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : "text-left"
                }`}
              >
                {t("part1.truck-desc1")}
              </p>
              <div className="w-full flex gap-x-3 mt-5 justify-center">
                <Link href={"tel:+971545019655"}>
                  <Button dir="ltr" variant={"light"} className="flex gap-x-2">
                    <PhoneForwardedIcon className="w-5 h-5" /> +971 54 501 9655
                  </Button>
                </Link>
              </div>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={truck2}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-5 mb-1 ${
                  locale === "ar" ? "font-bold" : "font-poppins"
                }`}
              >
                {tt("two.title")} <br />{" "}
                {locale !== "ar"
                  ? `${tt("two.in")} UAE`
                  : `UAE ${tt("two.in")}`}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : "text-left"
                }`}
              >
                {t("part1.truck-desc-2")}
              </p>
              <div
                dir="ltr"
                className="w-full flex gap-x-3 mt-5 justify-center"
              >
                <Link href={"tel:+971503626685"}>
                  <Button className="flex gap-x-2">
                    <PhoneForwardedIcon className="w-5 h-5" /> +971 503626685
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ServiceHire
          title={t("hire")}
          desciption={t("hire-desc")}
          image={truck3}
          keyPoints={[t("key1"), t("key2"), t("key3"), t("key4")]}
        />
        <ContactUs />
        <TestimonialSection />
      </div>
      <Footer />
    </>
  );
}

export default PerServiceSec;
