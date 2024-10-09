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
import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
interface Params {
  params: {
    locale: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "meta-home" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: process.env.PUBLIC_URL + "/" + locale,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar`,
        en: `${process.env.PUBLIC_URL}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("desc"),
      url: process.env.PUBLIC_URL,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
        alt: "Hamdan Movers Logo",
      },
    },
  };
}

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
