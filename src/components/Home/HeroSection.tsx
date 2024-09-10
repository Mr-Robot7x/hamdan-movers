import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/image001.png";
import { Button } from "../ui/button";
function HeroSection() {
  return (
    <div className="relative md:w-11/12 w-full flex-wrap md:mt-14 mt-10 flex justify-evenly gap-y-8">
      <img
        src="/images/waves.png"
        alt="waves image"
        className="w-full z-10 absolute top-10 opacity-10 right-0"
      />
      <div className="md:basis-2/4 basis-full z-20">
        <h1 className="md:text-[55px]">
          <span className="t-grd">Hamdan</span>
          <br /> Furniture Transport <br />
          In Sharjah
        </h1>
        <h3 className="mt-6 font-[poppins] font-medium">
          Sharjah&apos;s No.1 Trusted Furniture Transportors
        </h3>
        <p className="gr mt-3">
          For over 10 years, we’ve been the go-to movers and packers in Sharjah,
          we’ve established ourselves as trusted movers in Sharjah, renowned for
          our dedication and expertise.
        </p>
        <div className="mt-4 flex gap-x-5">
          <Button>Contact Now</Button>
          <Button variant={"secondary"}>Our Services</Button>
        </div>
      </div>
      <div className="z-20">
        <Image
          src={heroImage}
          width={600}
          height={600}
          placeholder="blur"
          quality={80}
          alt="Hamdan movers"
          className="drop-shadow-2xl w-[300px] h-auto"
        />
      </div>
    </div>
  );
}

export default HeroSection;
