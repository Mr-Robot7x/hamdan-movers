import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import serviceImage from "../../public/images/services-image.jpg";
function PerServiceSec({
  title,
  subTitle,
  description,
  image,
}: {
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="w-full md:w-11/12 md:mt-[160px] mt-32">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center md:ml-[60px]">
        <div className="min-h-40 ">
          <h1>{title}</h1>
          <h3 className="font-[poppins] md:text-[22px] mt-4">{subTitle}</h3>
          <p className="mt-2">{description}</p>
          <div className="w-full flex gap-x-5 mt-5">
            <Button>Contact Now</Button>
            <Button variant={"secondary"}>Service Details</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[450px] w-80 md:h-96 h-96 relative">
            <Image
              src={image}
              fill
              placeholder="blur"
              className="object-cover drop-shadow-lg"
              style={{
                borderRadius: "30% 70% 70% 30% / 29% 23% 77% 71% ",
              }}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerServiceSec;