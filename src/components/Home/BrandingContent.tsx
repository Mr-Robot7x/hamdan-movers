import {
  IconTruckDelivery,
  IconZoomMoney,
  IconClock24,
} from "@tabler/icons-react";
import { HeartHandshake, LucideSettings2, PartyPopperIcon } from "lucide-react";
function BrandingContent() {
  return (
    <>
      <div className="md:w-11/12 w-full mt-5">
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
            <IconTruckDelivery className="text-[#69c5f4]" />
            <h3 className="font-[poppins] font-medium md:text-[20px] text-[18px] pb text-center">
              Best Moving Services
            </h3>
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10  rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            <IconZoomMoney className="text-[#69c5f4]" />
            <h3 className="font-[poppins] font-medium md:text-[20px] text-[18px] pb text-center">
              No Hidden Charges
            </h3>
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            <PartyPopperIcon className="text-[#69c5f4]" />
            <h3 className="font-[poppins] font-medium md:text-[20px] text-[18px] pb text-center">
              Over 6+ Years Experience
            </h3>
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            <IconClock24 className="text-[#69c5f4]" />
            <h3 className="font-[poppins] font-medium md:text-[20px] text-[18px] pb text-center">
              24 Hours Availabe
            </h3>
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            <HeartHandshake className="text-[#69c5f4]" />
            <h3 className="font-[poppins] font-medium md:text-[20px] text-[18px] pb text-center">
              Friendly Staff
            </h3>
          </div>
          <div className="min-h-[70px] bg-gradient-to-b from-transparent via-[#69c5f4]/5 to-[#69c5f4]/10 rounded-2xl p-2 gap-y-1 flex flex-col items-center justify-center">
            <LucideSettings2 className="text-[#69c5f4]" />
            <h3 className="font-[poppins] font-medium md:text-[20px] text-[18px] pb text-center">
              Personalized Service
            </h3>
          </div>
        </div>
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
