import Image from "next/image";
import React from "react";
import logo from "../../../public/images/hamdan-mover-logo.png";
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
function Footer() {
  const t = useTranslations("navitems");
  const b = useTranslations("footer");
  const subServices: { name: string; link: string }[] = [
    {
      name: t("services-sub.local"),
      link: "/services/local-residential-movers",
    },
    {
      name: t("services-sub.commercial"),
      link: "/services/commerical-office-movers",
    },
    {
      name: t("services-sub.packing"),
      link: "/services/packing-services",
    },
    {
      name: t("services-sub.storage"),
      link: "/services/storage-services",
    },
    {
      name: t("services-sub.specialty"),
      link: "/services/speciality-moving",
    },
    {
      name: t("services-sub.international"),
      link: "/services/international-moving",
    },
  ];
  return (
    <footer className="w-full mt-16 py-7 md:px-10 h-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-8">
        <div className="col-span-1">
          <div className="w-40 h-24 relative bg-gray-200">
            <Image
              alt="Hamdan Movers Logo"
              src={logo}
              fill
              placeholder="blur"
              className="object-contain absolute"
            />
          </div>
          <h2 className="text-[28px] mt-3">Hamdan Movers and Packers</h2>
          <p className="gr">UAE&lsquo;s No.1 Moving And Packing Company</p>
          <div className="flex gap-x-3 mt-5">
            <Button size={"icon"} aria-label="facebook icon">
              <IconBrandFacebook />
            </Button>
            <Button size={"icon"} aria-label="instagram icon">
              <Instagram />
            </Button>
            <Button size={"icon"} aria-label="tiktok icon">
              <IconBrandTiktok />
            </Button>
            <Button size={"icon"} aria-label="twiiter icon">
              <IconBrandTwitter />
            </Button>
            <Button size={"icon"} aria-label="whatsapp icon">
              <IconBrandWhatsapp />
            </Button>
          </div>
        </div>
        <div className="col-span-2 flex md:flex-row flex-col gap-y-5 justify-between md:px-7">
          <div className="flex flex-col gap-y-4 font-poppins">
            <h4>Main Pages</h4>
            <div className="flex flex-col gap-y-3">
              <Link href="/">{b("home")}</Link>

              <Link href="/services/">{b("services")}</Link>

              <Link href="/about-us/"> {b("about")} </Link>

              <Link href="/contact-us/"> {b("contact")} </Link>

              <Link href="/services-locations/"> {b("location")} </Link>

              <Link href="/"> {b("TandC")} </Link>

              <Link href="/"> {b("Pp")} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 font-poppins">
            <h4> {b("services")} </h4>
            <div className="flex flex-col gap-y-3">
              {subServices.map((service, i) => (
                <Link key={i} href={service.link + "/"}>
                  {service.name}
                </Link>
              ))}
              <Link href="/pickup-rental-trucks/"> {b("cars")} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 font-poppins">
            <h4>Services Locations</h4>
            <div className="flex flex-col gap-y-3">
              <Link href={"/services-locations/movers-and-packers-dubai/"}>
                {b("md")} {b("dubai")}
              </Link>

              <Link href={"/services-locations/movers-and-packers-sharjah/"}>
                {b("md")} {b("sharjah")}
              </Link>

              <Link href={"/services-locations/movers-and-packers-ajman/"}>
                {b("md")} {b("ajman")}
              </Link>

              <Link href={"/pickup-rental-trucks-in-dubai/"}>
                {b("pickup")} {b("dubai")}
              </Link>

              <Link href={"/pickup-rental-trucks-in-sharjah/"}>
                {b("pickup")} {b("sharjah")}
              </Link>

              <Link href={"/pickup-rental-trucks-in-ajman/"}>
                {b("pickup")} {b("ajman")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-3 mt-10">
        <p className="gr text-center">
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by
          Hamdan Movers and Packer.
          <br />
          Develop By{" "}
          <Link
            className="text-[#FF5F00]"
            href={
              "https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!"
            }
          >
            Mashal Horara
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
