import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={(e) => setOpen((p) => !p)}
        className="active:scale-[0.98] transition-all fixed p-3 bg-gradient-to-b from-white to-yellow-100 
    drop-shadow-2xl rounded-full bottom-4 right-4 z-50"
      >
        <Image
          src={"/images/whatsapp-icon.png"}
          alt="whatsapp icon"
          width={40}
          height={40}
        />
      </div>
      {open ? (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          exit={{
            opacity: 0,
            scale: 1,
          }}
          className="p-5 fixed md:bottom-16 bottom-[76px] md:right-16 right-8 rounded-s-3xl rounded-t-3xl bg-white/70 drop-shadow-2xl backdrop-blur-2xl md:w-96 w-[88%] z-50"
        >
          <h3 className="font-[poppins]">Hi Here, How We Can Help You !</h3>
          <div className="flex flex-col mt-5">
            <div>
              <p className="text-[18px] mb-2 font-semibold">Phone Number</p>
              <button className="w-full items-center p-2 rounded-lg flex gap-x-4 bg-white">
                <img
                  src={"/images/phone-icon.png"}
                  alt="phone icon"
                  className="w-9"
                />
                <b className="text-[17px] font-medium">+056 6651978</b>
              </button>
              <button className="w-full items-center mt-2 p-2 rounded-lg flex gap-x-4 bg-white">
                <img
                  src={"/images/phone-icon.png"}
                  alt="phone icon"
                  className="w-9"
                />
                <b className="text-[17px] font-medium">+923471309916</b>
              </button>
            </div>
            <div className="mt-3">
              <p className="text-[18px] mb-2 font-semibold">WhatsApp Number</p>
              <button className="w-full items-center p-2 rounded-lg flex gap-x-4 bg-white">
                <img
                  src={"/images/whatsapp2-icon.png"}
                  alt="phone icon"
                  className="w-9"
                />
                <b className="text-[17px] font-medium">+923471309916</b>
              </button>
              <button className="w-full items-center mt-2 p-2 rounded-lg flex gap-x-4 bg-white">
                <img
                  src={"/images/whatsapp2-icon.png"}
                  alt="phone icon"
                  className="w-9"
                />
                <b className="text-[17px] font-medium">+923471309916</b>
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export default WhatsAppButton;
