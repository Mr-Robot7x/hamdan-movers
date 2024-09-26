import React from "react";
import { Button } from "./ui/button";

function Benifits({ city }: { city?: string }) {
  return (
    <div className="md:mt-14 mt-8 mb-5 w-full md:w-11/12 grid md:grid-cols-2 md:gap-x-5 gap-y-7 grid-cols-1 items-center">
      <div className="px-3 md:px-0 flex flex-wrap md:gap-5 gap-y-5 md:order-1 order-2">
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-12 h-12 rounded-full flex items-center justify-center">
            <img src="/images/pricing-icon.png" alt="pricing image" />
          </div>
          <p className="font-medium text-[18px] my-2">Affordable Pricing</p>
          <p className="gr leading-5 text-[15px] text-center">
            Competitive rates to fit any budget without compromising on quality.
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-12 h-12 rounded-full flex items-center justify-center">
            <img
              src="/images/reliable-services-icon.png"
              alt="reliable services"
            />
          </div>
          <p className="font-medium text-[18px] my-2">Reliable Service</p>
          <p className="gr leading-5 text-[15px] text-center">
            Trust us for dependable, top-notch moving solutions every time.
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-12 h-12 rounded-full flex items-center justify-center">
            <img src="/images/detail-planing.png" alt="Detail Planing" />
          </div>
          <p className="font-medium text-[18px] my-2">Detailed Planning</p>
          <p className="gr leading-5 text-[15px] text-center">
            Every aspect of your move is meticulously organized for efficiency.
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-12 h-12 rounded-full flex items-center justify-center">
            <img src="/images/team.png" alt="Trained Team" />
          </div>
          <p className="font-medium text-[18px] my-2">Trained Team</p>
          <p className="gr leading-5 text-[15px] text-center">
            Our skilled professionals handle your belongings with utmost care.
          </p>
        </div>
      </div>
      <div className="md:p-4 p-0 md:order-2 order-1">
        <h2>Benefits You Get When You Use Our Services</h2>
        <p className="mt-5">
          We offers comprehensive moving services across the{" "}
          {city ? city : "UAE"}, including local and long-distance moves,
          packing, specialized handling, and custom crating. We handle
          residential, commercial, and emergency relocations for a seamless,
          stress-free experience.
        </p>
        <Button className="mt-4">Contact Now</Button>
      </div>
    </div>
  );
}

export default Benifits;
