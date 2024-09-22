import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import serviceImage from "../../../../public/images/pickup-rent-services-3-trans.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import truck1 from "../../../../public/images/1.5-ton-truck.jpg";
import truck2 from "../../../../public/images/3-tom.jpg";
import truck3 from "../../../../public/images/pickup-rent-services-3.jpeg";
import ServiceHire from "@/components/ServiceHire";
import ContactUs from "@/components/ContactForm";

import { PhoneForwardedIcon } from "lucide-react";
const boxData = [
  {
    heading: "Accredited Pickup Truck Rentals for Reliable Service Ajman",
    desc: "Our accredited pickup truck rental services in Ajman ensure that you get the best quality of vehicles to meet the industry standard. Our core values are reliability and professionalism, and this is how we can perfectly provide the required transportation solutions for each and every one of your needs.",
  },
  {
    heading:
      "Value Added Services - Personalized Customer Care for Your Pickup Rentals",
    desc: "By opting for our personalized customer care solution for pickup rentals, you are assured of attentive care and personalized support from the start to the end of your rental needs. We put the customer first in priority to ensure the process is smooth and satisfactory.",
  },
  {
    heading: "Safety First: Securing Pickup Truck Rentals in Ajman",
    desc: "At Hamdan Movers, the safety of your merchandise is paramount. Our pickup truck rentals for moving in Ajman maintain the best standards for peace of mind when it comes to the movement of your goods. With us, you will surely experience safe and reliable moving.",
  },
  {
    heading: "100% Satisfaction Guarantee on Pickup Rentals in Ajman",
    desc: "With us, we guarantee 100% satisfaction for all pickup truck rentals; thus, you are assured that you will leave with complete satisfaction from your Ajman rental experience.",
  },
];
function PerServiceSec() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div className="md:mt-[160px] mt-36">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center md:ml-[60px]">
            <div className="min-h-40 ">
              <h1>Cheap Pickup Truck Rental In Ajman</h1>
              <h3 className="font-poppins md:text-[22px] mt-4">
                Ajman’s Best Pickup Truck Rental Services for Business and
                Everyday Transport
              </h3>
              <p className="mt-2">
                Want reliable pickups for rent in Ajman? Come to the right
                place! Our diversified fleet of pickup trucks has been devised
                to cater to all your transportation requirements. Be it shifting
                goods, transporting items, or managing logistics—every job will
                get an efficient and hassle-free solution with our pickups.
              </p>
              <div className="mt-5">
                <Link href={"tel:+971503626685"}>
                  <Button>Call Now : +971 503626685</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-[550px] w-[350px] md:h-80 h-60 relative">
                <Image
                  src={serviceImage}
                  fill
                  placeholder="blur"
                  className="object-contain drop-shadow-lg"
                  alt={"Cheap Pickup Rental Services In Ajman"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-11/12 mt-14">
          <h2 className="text-center mb-4">
            Professional and affordable car rental in Ajman
          </h2>
          <p className="text-center">
            Hamdan Movers offers adequately affordable 24/7 pickups for house,
            office, and furniture shifting, with high-speed services in Ajman.
            Our versatile fleet assures reliability in the mobility of light and
            heavy items right to your doorstep and within your budget.
          </p>
          <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {boxData.map((box, i) => (
              <div
                key={i}
                className="min-h-32 bg-white shadow-lg shadow-neutral-100 border border-neutral-200 py-4 px-3 rounded-2xl"
              >
                <h3 className="font-poppins font-medium md:text-[21px]  md:leading-6 text-center mb-1">
                  {box.heading}
                </h3>
                <div className="w-full h-px bg-neutral-100 px-10"></div>
                <p className="text-[15.2px] text-center mt-2 gr">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-11/12 min-h-32 mt-8">
          <h2 className="text-center mb-5">
            We Have Following Size Of Cars For{" "}
            <span className="md:block inline-block">
              Rental Services In Ajman
            </span>
          </h2>
          <p className="text-center md:px-16 mt-3">
            Discover Our Range of Car Sizes for Rental Services in Ajman: Select
            from our 1.5-ton and 3-ton pickup trucks, perfect for all your
            transportation needs.
          </p>
          <div className="w-full grid lg:grid-flow-col md:grid-flow-row grid-flow-row md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={truck1}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-5 mb-1">
                1.5 Ton Pickup Truck Rental <br /> in Ajman
              </h3>
              <p className="mt-2 md:px-3">
                Looking for reliable transportation for home, office, or goods
                relocation in Ajman? Rent our 1.5-ton pickup truck for safe,
                easy, and hassle-free moving. With competitive pricing and
                exceptional service, we ensure your items are transported
                smoothly every time.
              </p>
              <div className="w-full flex gap-x-3 mt-5 justify-center">
                <Link href={"tel:+971545019655"}>
                  <Button variant={"light"} className="flex gap-x-2">
                    <PhoneForwardedIcon className="w-5 h-5" /> +971 54 501 9655
                  </Button>
                </Link>
              </div>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={truck2}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-poppins text-center mt-5 mb-1">
                3 Ton Pickup Truck for rent <br /> in Ajman
              </h3>
              <p className="mt-2 md:px-3">
                For seamless transportation of heavy cargo, home relocations, or
                office moves in Ajman, rent our 3-ton pickup truck. We offer
                comprehensive services, including loading and unloading,
                ensuring a stress-free and secure delivery of your belongings to
                their destination.
              </p>
              <div className="w-full flex gap-x-3 mt-5 justify-center">
                <Link href={"tel:+971503626685"}>
                  <Button className="flex gap-x-2">
                    <PhoneForwardedIcon className="w-5 h-5" /> +971 503626685
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ServiceHire
          title="Why Choose Our 1.5 / 3 Ton Pickup Trucks For Rent"
          desciption="Rent a 1.5 / 3 ton pickup truck for versatile, cost-effective transport of furniture, materials, and more. Enjoy convenience and reliability with well-maintained vehicles from a trusted provider."
          image={truck3}
          keyPoints={[
            "Flexibility: Handles various transportation needs",
            "Budget-Friendly: Saves money and resources",
            "Ease of Use: Simple and hassle-free",
            "Trustworthiness: Dependable for every task",
          ]}
        />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default PerServiceSec;
