import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import imSrc from "../../../public/images/commercial-delivery-trucks-hamdan.png";
import truck2 from "../../../public/images/3-tom.jpg";
import truck1 from "../../../public/images/1.5-ton-truck.jpg";
import Link from "next/link";
import { PhoneForwardedIcon, PhoneOutgoingIcon } from "lucide-react";
function PickUpRentalServices() {
  return (
    <>
      <div className="w-full md:rounded-[50px] rounded-2xl md:px-0 px-2 b-bg flex justify-center">
        <div className="md:w-11/12 md:py-14 py-8 w-full grid md:grid-cols-2 grid-cols-1 justify-evenly gap-x-5 md:ml-16 md:gap-0 gap-y-1">
          <div className="">
            <h2 className="text-white md:text-start text-center">
              Our Pickup Rent Services In Dubia
            </h2>
            <h3 className="font-poppins text-yellow-400 md:text-[22px] text-[18px] mt-4 font-medium md:text-start text-center ">
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
          <h2 className="font-medium text-center font-poppins">
            We have following size of a Pickup Truck that is Appropriate for
            your needs
          </h2>
        </div>
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
            <h3 className="font-poppins text-center mt-5 mb-1">
              1.5 Ton Pickup Truck Rental <br /> in UAE
            </h3>
            <p className="mt-2 md:px-3">
              Need reliable transportation for home, office, or goods
              relocation? Rent our 1.5 ton pickup truck in UAE for safe, easy,
              and hassle-free moves. With competitive pricing and top-notch
              service, we ensure your items are transported smoothly every time.
            </p>
            <div className="w-full flex gap-x-3 mt-5 justify-center">
              <Link href={"tel:+971545019655"}>
                <Button variant={"light"} className="flex gap-x-2">
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
            <h3 className="font-poppins text-center mt-5 mb-1">
              3 Ton Pickup Truck for rent <br /> in UAE
            </h3>
            <p className="mt-2 md:px-3">
              For seamless transportation of heavy cargo, home relocations, or
              office moves, rent our 3 ton pickup in UAE. We offer comprehensive
              services, including loading and unloading, ensuring stress-free
              and secure delivery of your belongings to their destination.
            </p>
            <div className="w-full flex gap-x-3 mt-5 justify-center">
              <Link href={"tel:+971503626685"}>
                <Button className="flex gap-x-2">
                  <PhoneForwardedIcon className="w-5 h-5" /> +971 503626685
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickUpRentalServices;
