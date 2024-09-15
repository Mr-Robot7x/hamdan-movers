import Image, { StaticImageData } from "next/image";
import React from "react";

function ServiceMovingProcess({
  boxs,
}: {
  boxs: { heading: string; desc: string; image: StaticImageData }[];
}) {
  return (
    <div className="w-full md:w-11/12">
      <section className="work-process-section">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-800">
            <span className="text-yellow-500">Work Process</span>
          </h2>
          <h2 className=" my-4">Our Moving Process</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
            {/* Step 1 */}
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/Initial-Consultation-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="text-lg font-semibold">Book Your Service</h4>
              <p className="text-sm text-gray-500 mt-2">
                Start with a quick call or an in-person chat. We’ll go over your
                moving needs and handle all the details to make it easy for you.
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/before-we-move-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="text-lg font-semibold">Before We Move</h4>
              <p className="text-sm text-gray-500 mt-2">
                We’ll visit your place to assess what needs moving. This helps
                us plan packing and ensure a smooth moving day with no
                surprises.
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/moving-plan-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="text-lg font-semibold">The Move Plan</h4>
              <p className="text-sm text-gray-500 mt-2">
                Once we’ve discussed your needs, we create a detailed plan for
                your move—covering timing, crew size, and costs—so everything
                runs smoothly.
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/packing-and-loading-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="text-lg font-semibold">Packing and Loading</h4>
              <p className="text-sm text-gray-500 mt-2">
                Our team uses high-quality materials to pack your items
                securely. We carefully load everything onto our trucks to ensure
                your belongings stay safe during the move.
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/safe-transportation.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="text-lg font-semibold">Safe Transportation</h4>
              <p className="text-sm text-gray-500 mt-2">
                Safety is our priority. Our experienced drivers choose the best
                routes, and our trucks are thoroughly inspected for a smooth,
                secure move.
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/home-setting-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="text-lg font-semibold">
                Unpacking and Settling-in
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                We’ll unpack your belongings and help set everything up just the
                way you like it, ensuring you feel at home before we leave.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceMovingProcess;
