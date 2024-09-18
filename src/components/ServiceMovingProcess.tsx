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
            <span className="text-[#FF5F00]">Process</span>
          </h2>
          <h2 className=" my-4">Our Moving Process</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12 ">
            {/* Step 1 */}
            {boxs.map((box, i) => (
              <div
                key={i}
                className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl"
              >
                <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                  {/* Replace with proper icon */}
                  <Image
                    src={box.image}
                    alt={box.heading}
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="text-lg font-semibold">{box.heading}</h4>
                <p className="text-sm text-gray-500 mt-2">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceMovingProcess;
