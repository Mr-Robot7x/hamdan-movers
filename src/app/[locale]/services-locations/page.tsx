import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ImageSrc from "../../../../public/images/movers-in-dubai.jpeg";
import PerServiceSec from "@/components/perServiceSec";
import Benifits from "@/components/Benifits";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

function ServicesLocations() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          image={ImageSrc}
          title="Professional Moving Services In UAE"
          subTitle="We provide our best moving services in Dubai, Sharjah, Ajman and its surrounding areas."
          description="We provide reliable moving services across Dubai, Sharjah, Ajman, and the surrounding areas. Our goal is to make your move as smooth and stress-free as possible. With a skilled team and the right equipment, we handle every aspect of your move, whether it’s for your home or business."
        />
        <Benifits />
        <div className="w-full">
          <StickyScrollRevealDemo />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-11/12 mt-5 min-h-40 gap-x-4">
          <div className="min-h-32">
            <ul className="mt-5 flex flex-col gap-y-4">
              <li className="border-b pb-2">
                <h3>Moving Services In Dubai</h3>
                <p className="text-[15px] mt-2">
                  Looking for reliable moving services in Dubai? Our skilled
                  team offers hassle-free residential and commercial
                  relocations, including expert packing, furniture assembly, and
                  secure transportation. Whether local or long-distance, we
                  ensure a smooth, stress-free move.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <Link href={"tel:+971566651978"}>
                    <Button size={"sm"}>+971 56 665 1978</Button>
                  </Link>
                  <Link href={"/"}>
                    <Button size={"sm"} variant={"secondary"}>
                      see more
                    </Button>
                  </Link>
                </div>
              </li>
              <li className="border-b pb-2">
                <h3>Moving Services In Sharjah</h3>
                <p className="text-[15px] mt-2">
                  Seeking dependable moving services in Sharjah? Our experienced
                  team provides seamless residential and commercial relocations,
                  featuring professional packing, furniture assembly, and safe
                  transportation. Whether you&lsquo;re moving locally or
                  long-distance, we guarantee a smooth, stress-free experience.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <Link href={"tel:+971566651978"}>
                    <Button size={"sm"}>+971 56 665 1978</Button>
                  </Link>
                  <Link href={"/"}>
                    <Button size={"sm"} variant={"secondary"}>
                      see more
                    </Button>
                  </Link>
                </div>
              </li>
              <li className="border-b pb-2">
                <h3>Moving Services In Ajman</h3>
                <p className="text-[15px] mt-2">
                  Find reliable moving services in Ajman! Our skilled team
                  delivers hassle-free residential and commercial relocations
                  with expert packing, efficient furniture assembly, and secure
                  transportation. Whether local or long-distance, we guarantee a
                  smooth, stress-free move.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <Link href={"tel:+971566651978"}>
                    <Button size={"sm"}>+971 56 665 1978</Button>
                  </Link>
                  <Link href={"/"}>
                    <Button size={"sm"} variant={"secondary"}>
                      see more
                    </Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="min-h-32 flex items-center justify-center">
            <div className="w-20 h-20 bg-white  rounded-full relative md:ml-12">
              <div className="absolute w-80 h-80 bg-red-300/50 rounded-2xl top-10 left-5">
                <div className="w-80 h-80 bg-red-300/80 rounded-2xl relative overflow-hidden">
                  <Image
                    src={ajmanImage}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    alt="Services In Ajman | Hamdan Movers"
                  />
                </div>
              </div>
              <div className="absolute w-80 h-80 bg-red-300/50 rounded-2xl md:bottom-10 md:right-5 right-1/2 -translate-x-1/2">
                <div className="w-80 h-80 bg-red-300/80 rounded-2xl relative overflow-hidden">
                  <Image
                    src={dubaiImage}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    alt="Services In Sharjah | Hamdan Movers"
                  />
                </div>
              </div>
              <div className="absolute w-80 h-80 bg-red-300/50 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-80 h-80 bg-red-300/80 rounded-2xl relative overflow-hidden">
                  <Image
                    src={sharjahImage}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    alt="Services In Ajman | Hamdan Movers"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default ServicesLocations;
