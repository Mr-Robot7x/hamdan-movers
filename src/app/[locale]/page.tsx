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
