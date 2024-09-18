import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import imSrc from "../../../public/images/commercial-delivery-trucks-hamdan.png";
import Link from "next/link";
import { PhoneOutgoingIcon } from "lucide-react";
function PickUpRentalServices() {
  return (
    <>
      <div className="w-full md:rounded-[50px] rounded-2xl md:px-0 px-2 b-bg flex justify-center">
        <div className="md:w-11/12 md:py-14 py-8 w-full grid md:grid-cols-2 grid-cols-1 justify-evenly gap-x-5 md:ml-16 md:gap-0 gap-y-1">
          <div className="">
            <h2 className="text-white md:text-start text-center">
              Our Pickup Rent Services In Dubia
            </h2>
            <h3 className="font-[poppins] text-yellow-400 md:text-[22px] text-[18px] mt-4 font-medium md:text-start text-center ">
              Fast, Flexible, And Convenient Pickup Rentals At Your Service In
              Dubai
            </h3>
            <p className="text-white mt-3 font-light">
              Looking for a reliable pickup rental service in Dubai? We offer a
              range of pickups tailored to meet your transportation needs,
              ensuring a smooth and hassle-free experience. Whether you&apos;re
              moving items or transporting goods, our diverse fleet is ready to
              serve you.
            </p>
            <div className="flex md:flex-row flex-col gap-y-3 md:gap-x-3 mt-5">
              <Link href={"tel:+971 56 6651978"}>
                <Button>
                  +971 56 6651978 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href={"tel:+971 50 3626685"}>
                <Button variant={"light"}>
                  +971 50 3626685 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-72 w-full rounded-2xl">
            <Image
              alt="Pickup rental services hamdan"
              src={imSrc}
              fill
              placeholder="blur"
              className="object-contain "
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-11/12 flex justify-center gap-y-6 flex-col items-center">
        <div className="w-4/5">
          <h2 className="font-medium text-center font-[poppins]">
            We have following size of a Pickup Truck that is Appropriate for
            your needs
          </h2>
        </div>
        <div className="md:w-3/4 w-full mt-7 shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:p-5 py-4 px-3 rounded-3xl">
          <h3 className="font-[poppins] font-medium mb-2">
            1.5 Ton Pickup Truck For Rent
          </h3>
          <p>
            The 1.5-ton Pickup Truck is ideal for small to medium tasks, like
            moving a fridge, sofa, or a one-bedroom apartment. It offers ample
            space while remaining easy to drive and park, making it perfect for
            quick jobs around the city.
          </p>
          <div className="flex md:flex-row flex-col gap-y-3 md:gap-x-3 mt-5">
            <Link href={"tel:+971 56 6651978"}>
              <Button>
                +971 56 6651978 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={"tel:+971 50 3626685"}>
              <Button variant={"light"}>
                +971 50 3626685 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-3/4 w-full mt-3 shadow-xl shadow-neutral-200/50 border border-neutral-200 bg-white md:p-5 py-4 px-3 rounded-3xl">
          <h3 className="font-[poppins] font-medium mb-2">
            3 Ton Pickup Truck For Rent
          </h3>
          <p>
            Our largest truck is built for big projects. Whether you&apos;re
            moving the contents of an entire house or transporting commercial
            goods, this is the ideal choice. Spacious and durable, it&apos;s
            designed to handle heavy loads with ease.
          </p>
          <div className="flex md:flex-row flex-col gap-y-3 md:gap-x-3 mt-5">
            <Link href={"tel:+971 56 6651978"}>
              <Button>
                +971 56 6651978 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={"tel:+971 50 3626685"}>
              <Button variant={"light"}>
                +971 50 3626685 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickUpRentalServices;
