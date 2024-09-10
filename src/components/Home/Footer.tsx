import { IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";
import { LucidePhone } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="mt-4 relative overflow-hidden py-10 border rounded-3xl mb-2 bg-gradient-to-b from-transparent via-transparent to-[#ED852F]/30">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap justify-evenly">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                {/* <Image
                  src={"/images/KSM-LOGO.png"}
                  width={200}
                  height={200}
                  alt="Al Khajista Shifting Movers"
                /> */}
                <h3>LOGO</h3>
              </div>
              <div>
                <p className="md:mb-4 mb-0 text-base font-medium">
                  Safe & Secure Moves Across Dubai
                </p>
                <p className=" text-sm text-gray-600">
                  &copy; Copyright {new Date().getFullYear()}. All Rights
                  Reserved by Al Khajista Shifting Movers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Our Gallary
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/5">
            <div className="h-full">
              <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
