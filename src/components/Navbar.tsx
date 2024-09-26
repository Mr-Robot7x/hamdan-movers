"use client";
import { navItems, subServices } from "@/app/[locale]/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  IconBrandWhatsapp,
  IconLanguage,
  IconMailFast,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconSettingsAutomation,
  IconSettingsCode,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Phone, TimerIcon, X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/hamdan-mover-logo.png";
import translateImg from "../../public/images/language-translate.png";
function Navbar() {
  const [infoDetailOpen, setInfoDetailOpen] = useState(false);
  const [subServicesMenu, setsubServicesMenu] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [langChange, setLangChange] = useState(false);

  return (
    <>
      <header className="w-full fixed left-0 flex flex-col items-center justify-center z-[200] font-poppins">
        <nav className="border flex relative justify-between items-center md:px-4 px-2 md:w-11/12 bg-white my-3 md:mt-1 mt-0 md:h-[82px] h-[68px] shadow-2xl shadow-neutral-200/80 md:rounded-full rounded-none w-full">
          <div className="md:w-36 w-[100px] h-14 relative md:mr-0 mr-2">
            <Image
              src={logo}
              fill
              placeholder="blur"
              priority
              sizes="100"
              className=" object-contain absolute"
              alt="hamdan movers logo"
            />
          </div>
          <div className="md:block hidden">
            <ul>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`inline-block relative ${
                    index === 1 || index === 2 || index === 3 ? "group" : ""
                  }`}
                >
                  <Link
                    className={`font-poppins text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-3 text-center transition-all rounded-3xl active:scale-[0.98]`}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                  {index === 1 && (
                    <>
                      <div className="hidden group-hover:block w-80 bg-white drop-shadow-2xl h-auto absolute -bottom-[285px] left-0 rounded-3xl">
                        <ul className="p-4">
                          {subServices.map((sub, i) => (
                            <Link
                              key={i}
                              className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                              href={sub.link}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="hidden group-hover:block w-80 bg-white drop-shadow-2xl h-auto absolute -bottom-40 left-0 rounded-3xl">
                        <ul className="p-4">
                          <Link
                            className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                            href={"/pickup-rental-trucks-in-dubai"}
                          >
                            Dubai
                          </Link>
                          <Link
                            className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                            href={"/pickup-rental-trucks-in-sharjah"}
                          >
                            Sharjah
                          </Link>
                          <Link
                            className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                            href={"/pickup-rental-trucks-in-ajman"}
                          >
                            Ajman
                          </Link>
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="hidden group-hover:block w-80 bg-white drop-shadow-2xl h-auto absolute -bottom-40 left-0 rounded-3xl">
                        <ul className="p-4">
                          <Link
                            className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                            href={
                              "/services-locations/movers-and-packers-dubai"
                            }
                          >
                            Dubai
                          </Link>
                          <Link
                            className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                            href={
                              "/services-locations/movers-and-packers-sharjah"
                            }
                          >
                            Sharjah
                          </Link>
                          <Link
                            className="block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative"
                            href={
                              "/services-locations/movers-and-packers-ajman"
                            }
                          >
                            Ajman
                          </Link>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex gap-x-2 flex-row-reverse">
            <Button className="md:block hidden">Contact Now</Button>

            <div className="md:hidden flex items-center justify-center px-2 md:py-[6px] py-0   rounded-md active:scale-[0.98] transition-all bg-[#FF5F00]">
              <IconMenu2
                className="text-white"
                onClick={() => setSideMenu((prev) => !prev)}
              />
            </div>
            <div className="w-9 mt-2 h-9 relative flex items-center justify-center">
              <Image
                onClick={(e) => setLangChange((prev) => !prev)}
                alt="language changing icon"
                src={translateImg}
                fill
                className="object-contain saturate-150"
              />
              {langChange ? (
                <div className="flex flex-col gap-y-2 px-2 py-4 w-52 h-auto bg-white drop-shadow-2xl absolute -bottom-36 -left-1/2 -translate-x-1/2 rounded-3xl">
                  <Link
                    href={"/ar"}
                    className="w-full py-3 text-center rounded-3xl hover:bg-slate-50 transition-all border border-neutral-200"
                  >
                    Arabic
                  </Link>
                  <Link
                    href={"/en"}
                    className="w-full py-3 text-center rounded-3xl hover:bg-slate-50 transition-all border border-neutral-200"
                  >
                    English
                  </Link>
                </div>
              ) : null}
            </div>
            <div
              onClick={(e) => setInfoDetailOpen((prev) => !prev)}
              className="md:hidden md:w-[73px] w-16 md:h-12 h-10 md:mt-0 mt-1 rounded-3xl flex items-center justify-between p-[6px] border border-neutral-200 hover:border-neutral-300"
            >
              <IconPhone className="pr" />
              <ChevronDown
                className={`w-4 pr transition-transform ${
                  infoDetailOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {infoDetailOpen ? (
              <motion.div
                initial={{
                  y: "10%",
                  opacity: 0,
                }}
                animate={{
                  y: "0",
                  opacity: 1,
                }}
                transition={{
                  ease: "linear",
                  duration: 0.3,
                }}
                className="absolute -bottom-[133px] rounded-2xl  bg-white/95 backdrop-blur-sm flex flex-col gap-y-2 w-[97%] z-[551] px-3 py-4"
              >
                <div className="flex justify-start gap-x-2 items-center">
                  <IconMapPin className="pr p-[2px]" />{" "}
                  <p className="text-sm">Estiqlal Road Abushagara sharjah</p>
                </div>
                <div className="flex justify-start gap-x-2 items-center">
                  <TimerIcon className="pr p-[2px]" />{" "}
                  <p className="text-sm">Open 24 Hours</p>
                </div>
                <div className="flex justify-start gap-x-2 items-center">
                  <Phone className="pr p-[2px]" />{" "}
                  <p className="text-sm"> 0566651978, 0503626685</p>
                </div>
              </motion.div>
            ) : null}
          </div>
        </nav>
      </header>
      {sideMenu ? (
        <motion.div
          initial={{
            opacity: 0,
            right: "-100%",
          }}
          animate={{
            opacity: 1,
            right: "0",
          }}
          transition={{
            ease: "linear",
            duration: 0.3,
          }}
          exit={{
            opacity: 0,
            right: "-100%",
          }}
          className="w-4/5 h-screen bg-white/80 backdrop-blur-md fixed top-0 right-0 z-[201]"
        >
          <div className="mt-14">
            <ul>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="pb block border-b mx-[2px]  px-4 py-3 transition-all font-semibold"
                >
                  {item?.sub ? (
                    <>
                      <div className="flex flex-col">
                        <div className="flex gap-x-4 items-center">
                          <Link
                            className="active:text-[#287094]"
                            href={item.link}
                          >
                            {item.name}
                          </Link>{" "}
                          <ChevronDown
                            className={`w-6 h-6 transition-transform ${
                              subServicesMenu ? "rotate-180" : "rotate-0"
                            }`}
                            onClick={() => setsubServicesMenu((prev) => !prev)}
                          />
                        </div>
                        {subServicesMenu ? (
                          <div className="w-full px-5 block transition-all duration-300">
                            {subServices.map((ser, i) => (
                              <Link
                                href={ser.link}
                                className="block font-normal my-1"
                                key={i}
                              >
                                {ser.name}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <Link href={item.link}> {item.name}</Link>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="mt-7 flex w-full justify-center">
            <Button size={"lg"}>Contact Now</Button>
          </div>
          <Button
            onClick={() => setSideMenu(false)}
            className="absolute top-4 right-4"
            variant={"secondary"}
            size={"icon"}
          >
            <X />
          </Button>
        </motion.div>
      ) : null}
    </>
  );
}

export default Navbar;
