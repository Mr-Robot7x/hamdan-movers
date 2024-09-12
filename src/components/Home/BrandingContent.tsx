import {
  IconTruckDelivery,
  IconZoomMoney,
  IconClock24,
} from "@tabler/icons-react";
import { HeartHandshake, LucideSettings2, PartyPopperIcon } from "lucide-react";
import { Button } from "../ui/button";
function BrandingContent() {
  return (
    <>
      {/* <div className="md:w-11/12 w-full mt-5">
        <h2 className="text-center">
          <span className="t-grd">Top Trusted</span>
          <br />
          Moving Company in Sharjah
        </h2>
        <p className="text-center mt-5 md:text-[19px] md:leading-7">
          Looking for cheap and reliable Movers in Sharjah, accept nothing but
          the best. Proudly introducing ourselves as Sharjah’s No.1 Trusted
          Movers and Packers, we ensure every move feels like a breeze, From
          packaging to transportation.
        </p>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-7 md:px-10 px-3">
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10  rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            
          </div>
        </div>
      </div> */}
      <div className="w-full md:w-11/12 mt-5">
        <section className="rounded-3xl md:py-16 pt-10  md:px-10 px-0">
          <div className="md:mr-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex order-2  justify-center">
              <div className=" flex items-center justify-start md:px-8 px-8 rounded-3xl shadow-xl shadow-neutral-100 lg:w-[420px] md:w-[80%] w-full h-[400px] bg-gradient-to-b from-yellow-100 via-white to-white">
                <div className="flex flex-col md:gap-y-7 gap-y-5">
                  <div className="flex gap-x-5 items-center">
                    <IconTruckDelivery className="text-[#105572]" />
                    <h3 className="font-[poppins] font-medium md:text-[21px] text-[18px] text-black">
                      Best Moving Services
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <IconZoomMoney className="text-[#105572]" />
                    <h3 className="font-[poppins] font-medium md:text-[21px] text-[18px] text-black">
                      No Hidden Charges
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <PartyPopperIcon className="text-[#105572]" />
                    <h3 className="font-[poppins] font-medium md:text-[21px] text-[18px] text-black">
                      Over 6+ Years Experience
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <IconClock24 className="text-[#105572]" />
                    <h3 className="font-[poppins] font-medium md:text-[21px] text-[18px] text-black">
                      24 Hours Availabe
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <HeartHandshake className="text-[#105572]" />
                    <h3 className="font-[poppins] font-medium md:text-[21px] text-[18px] text-black">
                      Friendly Staff
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center">
                    <LucideSettings2 className="text-[#105572]" />
                    <h3 className="font-[poppins] font-medium md:text-[21px] text-[18px] text-black">
                      Personalized Service
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:-mt-0 -mt-10 p-4 md:w-1/2 md:pl-10 text-center md:text-left">
              <h2 className="">
                <span className="t-grd">Top Trusted </span>
                Moving Company in Sharjah
              </h2>
              <p className="text-gray-600 mb-6 md:mt-2 mt-3">
                Looking for cheap and reliable Movers in Sharjah, accept nothing
                but the best. Proudly introducing ourselves as Sharjah’s No.1
                Trusted Movers and Packers, we ensure every move feels like a
                breeze, From packaging to transportation.
              </p>

              <div className="flex justify-center md:justify-start space-x-4 md:mb-8 mb-4">
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="md:w-11/12 w-full mt-5">
        <h2>
          Why Choose Local Movers <br />
          In Sharjah ?
        </h2>
        <div className="md:px-10 mt-4">
          <p className="md:text-[19px] md:leading-7">
            Moving in Sharjah? Local movers like us can help a lot. We know
            Sharjah’s roads and rules really well. This means we can move your
            stuff quickly without problems.
          </p>
          <p className="md:text-[19px] md:leading-7">
            When you pick us for your move, you’re using experts who know the
            city inside out. We can handle surprises easily because we’re close
            by. Many people in Sharjah trust us. Plus, if you’re not moving far,
            we can save you money. Choose us, and your move will be easy and
            affordable.
          </p>
        </div>
      </div>
    </>
  );
}

export default BrandingContent;
