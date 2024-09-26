import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/main-section-image.jpg";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
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
            ? "md:text-[50px] leading-[71px] text-[48px]"
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
                ? "md:leading-[65px] leading-[53px]"
                : "font-poppins"
            } font-normal`}
          >
            {t("SubTitle")}
          </h2>
          <p
            className={`${
              locale === "ar" ? "font-arabic md:leading-8 leading-7" : ""
            } mt-6`}
          >
            {t("description")}
          </p>
          <div className="w-full flex md:gap-x-3 md:flex-row flex-col gap-y-3 mt-4">
            <Link href={"tel:tel:+971566651978"}>
              <Button>{b("call now")} : +971 56 6651978</Button>
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
          <div className="md:w-96 w-[350px] bg-gradient-to-t from-slate-50 to-slate-100 h-96 relative">
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
      {/* <div className={`md:basis-2/4 basis-full z-20 `}>
        <h1 className="md:text-[55px]">{t("headingTitle")}</h1>
        <h3 className="mt-6 font-poppins">{t("SubTitle")}</h3>
        <p className="gr mt-3">{t("description")}</p>
        <div className="mt-4 flex gap-x-5">
          <Button>{b("Contact Us")}</Button>
          <Button variant={"secondary"}>{b("Our Services")}</Button>
        </div>
      </div>
      <div className=" md:w-[400px] w-80 h-80 md:h-[400px] relative z-20">
        <Image
          src={heroImage}
          fill
          placeholder="blur"
          quality={80}
          alt="Hamdan movers"
          className="drop-shadow-2xl object-cover"
          style={{ borderRadius: "31% 69% 82% 18% / 30% 35% 65% 70% " }}
        />
      </div> */}
    </div>
  );
}

export default HeroSection;
