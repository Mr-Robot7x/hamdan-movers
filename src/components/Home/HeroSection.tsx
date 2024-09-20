import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/main-section-image.jpg";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative md:w-11/12 w-full flex-wrap md:mt-36 mt-32 items-center flex justify-evenly gap-y-8"
    >
      <img
        src="/images/waves.png"
        alt="waves image"
        className="w-full z-10 absolute top-10 opacity-10 right-0"
      />
      <div className={`md:basis-2/4 basis-full z-20 `}>
        <h1 className="md:text-[55px]">{t("headingTitle")}</h1>
        <h3 className="mt-6 font-[poppins] font-medium">{t("SubTitle")}</h3>
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
      </div>
    </div>
  );
}

export default HeroSection;
