import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/movers-in-dubai.jpeg";
import React from "react";

function MoversInDubai() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          title="Best Movers And Packers In Dubai"
          description="Hamdan Movers and Packers delivers top-quality moving solutions across the Dubai for 6 years. Our full-service options cover local moving, long-distance moving, packing &amp; storage, and specialty relocation. Our team of experienced experts ensures a seamless move for houses, offices, or commercial spaces, making your transition quick and hassle-free."
          image={imageSrc}
          subTitle="Cheap Moving and Packing Company In Dubai"
        />

        <div className="w-full md:w-11/12 mt-10 min-h-40 bg-red-300"></div>
      </div>
      <Footer />
    </>
  );
}

export default MoversInDubai;
