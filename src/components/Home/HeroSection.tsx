import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/main-section-image.jpg";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative md:w-11/12 md:mt-40 mt-32"
    >
      <h1
        className={`md:text-center text-start ${
          locale === "ar"
            ? "md:text-[65px] tracking-normal font-arabic font-bold  leading-[58px] text-[55px]"
            : "leading-[53px] text-[50px] md:text-[60px]"
        }  md:pb-8 pb-2`}
      >
        {t("headingTitle")}
      </h1>
      <div
        className={`${
          locale === "ar" ? "md:pr-16" : "md:pl-16"
        } md:mt-10 mt-6 w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-0 gap-y-8`}
      >
        <div
          className={`
            ${locale === "ar" ? "md:pl-10" : "md:pr-10"}
           md:mb-0 pb-7 md:mt-2 md:border-none border-b border-neutral-400`}
        >
          <h2
            className={`${
              locale === "ar"
                ? "md:leading-[60px] -mt-2 tracking-normal font-arabic leading-[45px]"
                : "font-poppins font-normal"
            }`}
          >
            {t("SubTitle")}
          </h2>
          <p className={`${locale === "ar" ? "mt-3 ar-p" : "mt-3"}`}>
            {t("description")}
          </p>
          <div className="w-full flex md:gap-x-3 md:flex-row flex-col gap-y-3 mt-4">
            <Link aria-label="call now" href={"tel:tel:+971566651978"}>
              <Button className="">
                {b("call now")} : <span dir="ltr">+971 56 6651978</span>
              </Button>
            </Link>
            <Link href={"/services"}>
              <Button variant={"secondary"}>{b("Our Services")}</Button>
            </Link>
          </div>
        </div>
        <div
          className={`${
            locale === "ar" ? "md:border-r" : "md:border-l"
          } flex md:border-neutral-400 justify-center`}
        >
          <div className="md:w-96 w-[330px] bg-gradient-to-t from-slate-50 to-slate-100 h-80 md:h-96 relative">
            <Image
              src={heroImage}
              alt="Best Moving Company UAE | Hamdan Mover"
              className="object-cover absolute"
              fill
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
