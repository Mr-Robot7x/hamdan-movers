import React from "react";
import imageSrc from "../../../public/images/professional-moving-company-hamdan.jpg";
import Image from "next/image";
const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-11/12 mt-5">
        <section className="bg-gray-50 rounded-3xl md:py-16 py-10 md:px-10 px-1">
          <div className="md:ml-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex  justify-center">
              <div className="md:w-96 w-[360px] h-[465px] relative ">
                <Image
                  src={imageSrc}
                  fill
                  sizes="100"
                  className="z-10 object-cover rounded-lg"
                  placeholder="blur"
                  alt="professional movers in dubai hamdan"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="md:-ml-28 md:-mt-0 z-20 -mt-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2 md:pl-10 text-center md:text-left">
              <h3 className="text-yellow-500 text-sm uppercase font-bold mb-2">
                Why Choose Us
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We Are Professional Moving Company In Dubai
              </h2>
              <p className="text-gray-600 mb-6">
                We provide top-tier moving services in Sharjah, backed by a
                skilled team and the latest equipment. We value client feedback,
                continuously improving our services to ensure safe, timely
                moves. Count on us for a smooth, efficient relocation experience
              </p>

              <div className="flex justify-center md:justify-start space-x-4 mb-8">
                <a
                  href="#"
                  className="bg-[#287094] text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Know More
                </a>
                <a
                  href="#"
                  className="bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Contact Us
                </a>
              </div>

              <div className="flex justify-center md:justify-start space-x-8 text-gray-800">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">6+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">412+</h3>
                  <p className="text-gray-600">Project Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUs;
