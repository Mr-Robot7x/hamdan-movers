import AboutTestimonal from "@/components/aboutTestimonials";
import ContactUs from "@/components/ContactForm";
import FAQs from "@/components/FAQs";
import BrandingContent from "@/components/Home/BrandingContent";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import OurServices from "@/components/Home/OurServices";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Navbar from "@/components/Navbar";
import OtherMovingServices from "@/components/OtherMovingServices";
import PricingList from "@/components/PricingList";
import WorkProcessSection from "@/components/Process";
import backgroundImage from "../../../public/images/hamdan-movers.jpg";

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
        <WorkProcessSection />
        <div
          className="w-full relative h-[400px] bg-cover bg-center md:mb-32 mb-44"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        >
          <div className="absolute inset-0 bg-[#023246] opacity-85"></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-center text-white ts mt-16 md:text-[50px] text-[42px] leading-[55px]">
              What Our Customers Are Talking <br /> About Us
            </h2>
            <div className="bg-gradient-to-t from bg-white/50 to-white backdrop-blur-md rounded-3xl w-full md:w-11/12 min-h-40 mt-16">
              <AboutTestimonal />
            </div>
          </div>
        </div>
        <PricingList />

        {/* <TestimonialSection /> */}
        <ContactUs />
        <FAQs />
      </div>

      <Footer />
    </>
  );
}

export default page;
