import React from "react";
import Image, { StaticImageData } from "next/image";
const ServiceHire = ({
  title,
  desciption,
  keyPoints,
  image,
}: {
  title: string;
  desciption: string;
  keyPoints: string[];
  image: StaticImageData;
}) => {
  return (
    <>
      <div className="w-full md:w-11/12 mt-5">
        <section className="bg-gray-50 rounded-3xl md:py-16 py-10 md:px-10 px-1">
          <div className="md:ml-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex  justify-center">
              <div className="md:w-96 w-[360px] h-[465px] relative ">
                <Image
                  src={image}
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
              <h3 className="text-[#FF5F00] text-sm uppercase font-bold mb-2">
                hire a professionals
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-600 mb-2 text-start">{desciption}</p>
              <ol className="custom-symbol my-4">
                {keyPoints.map((keyPoint, index) => (
                  <li
                    key={index}
                    className="text-black text-start font-medium mb-2"
                  >
                    {keyPoint}
                  </li>
                ))}
              </ol>
              <div className="mt-8 mb-8">
                <a
                  href="#"
                  className="bg-[#FF5F00] text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceHire;
