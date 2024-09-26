import {
  IconTruckDelivery,
  IconZoomMoney,
  IconClock24,
} from "@tabler/icons-react";
import { HeartHandshake, LucideSettings2, PartyPopperIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
function BrandingContent() {
  return (
    <>
      <div className="w-full md:w-11/12 mt-5">
        <section className="rounded-3xl md:py-16 pt-10  md:px-10 px-0">
          <div className="md:mr-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex order-2  justify-center">
              <div className=" flex items-center justify-start md:px-8 px-8 rounded-3xl shadow-xl shadow-neutral-100 lg:w-[420px] md:w-[80%] w-full h-[400px] bg-white border">
                <div className="flex flex-col md:gap-y-7 gap-y-5">
                  <div className="flex gap-x-5 items-center">
                    <IconTruckDelivery className="text-[#105572]" />
                    <h3 className="font-poppins font-medium md:text-[21px] text-[18px] text-black">
                      Best Moving Services
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <IconZoomMoney className="text-[#105572]" />
                    <h3 className="font-poppins font-medium md:text-[21px] text-[18px] text-black">
                      No Hidden Charges
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <PartyPopperIcon className="text-[#105572]" />
                    <h3 className="font-poppins font-medium md:text-[21px] text-[18px] text-black">
                      Over 6+ Years Experience
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <IconClock24 className="text-[#105572]" />
                    <h3 className="font-poppins font-medium md:text-[21px] text-[18px] text-black">
                      24 Hours Availabe
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <HeartHandshake className="text-[#105572]" />
                    <h3 className="font-poppins font-medium md:text-[21px] text-[18px] text-black">
                      Friendly Staff
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <LucideSettings2 className="text-[#105572]" />
                    <h3 className="font-poppins font-medium md:text-[21px] text-[18px] text-black">
                      Personalized Service
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:-mt-0 -mt-10 p-4 md:w-1/2 md:pl-10 text-center md:text-left">
              <h2 className="">
                Professional Home And Office Relocation Company In UAE
              </h2>
              <p className="mb-6 md:mt-2 mt-3">
                Looking for affordable and reliable movers in UAE? Look no
                further.We make every move hassle-free. From expert packaging to
                safe transportation, we ensure your home or office relocation is
                handled with care and professionalism, ensuring you a seamless
                experience every step of the way.
              </p>

              <div className="flex justify-center md:justify-start space-x-4 md:mb-8 mb-4">
                <Link href={"/contact-us"}>
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BrandingContent;
