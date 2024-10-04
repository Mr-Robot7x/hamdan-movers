import FAQs from "@/components/FAQs";
import BrandingContent from "@/components/Home/BrandingContent";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import OurServices from "@/components/Home/OurServices";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Locations from "@/components/Locations";
import Navbar from "@/components/Navbar";
import OtherMovingServices from "@/components/OtherMovingServices";
import PricingList from "@/components/PricingList";
import WorkProcessSection from "@/components/Process";
import TestimonialSection from "@/components/Testimonials";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Movers in Dubai, UAE | Professional Moving, Removals Company in Dubai, UAE | Hamdan Movers",
  description:
    "Are you searching for reliable movers in Dubai? Look no further than Hamdan Movers. Our professional moving and packing services are tailored to your specific needs. As the best movers and packers in Dubai, we ensure a seamless and cost-effective relocation experience. Contact us now for a free quote and let our expert team handle your move!",
  keywords: [
    "Hamdan Movers",
    "Movers in Dubai",
    "best Movers in Dubai",
    "Cheap movers and packers",
    "moving services in dubai",
    "professional moving and packing",
    "moving companies in uae",
    "cheap moving company in dubai",
  ],
  alternates: {
    canonical: process.env.PUBLIC_URL,
    languages: {
      ar: `${process.env.PUBLIC_URL}/ar`,
      en: `${process.env.PUBLIC_URL}/en`,
    },
  },
  openGraph: {
    title:
      "Best Movers in Dubai, UAE | Professional Moving, Removals Company in Dubai, UAE | Hamdan Movers",
    description:
      "Are you searching for reliable movers in Dubai? Look no further than Hamdan Movers. Our professional moving and packing services are tailored to your specific needs. As the best movers and packers in Dubai, we ensure a seamless and cost-effective relocation experience. Contact us now for a free quote and let our expert team handle your move!",
    url: process.env.PUBLIC_URL,
    siteName: "Hamdan Movers",
    images: {
      url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
      alt: "Hamdan Movers Logo",
    },
    type: "website",
    alternateLocale: ["ar", "en"],
    countryName: "United Arab Emirates",
    locale: "en-US",
    faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
    phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
  },
  twitter: {
    title:
      "Best Movers in Dubai, UAE | Professional Moving, Removals Company in Dubai, UAE | Hamdan Movers",
    description:
      "Are you searching for reliable movers in Dubai? Look no further than Hamdan Movers. Our professional moving and packing services are tailored to your specific needs. As the best movers and packers in Dubai, we ensure a seamless and cost-effective relocation experience. Contact us now for a free quote and let our expert team handle your move!",
    site: process.env.PUBLIC_URL,
    images: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
    card: "summary_large_image",
    creator: "@hamdanmovers",
  },
};
function page() {
  return (
    <>
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <HeroSection />
        <BrandingContent />
        <OurServices />
        <OtherMovingServices />
        <WhyChooseUs />
        <PickUpRentalServices />
        <Locations />
        <WorkProcessSection />
        <PricingList isHome={true} />
        <TestimonialSection />
        <FAQs />
      </div>

      <Footer />
    </>
  );
}

export default page;
