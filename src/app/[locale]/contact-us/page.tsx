import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactForm";
import Image from "next/image";
function ContactUsPage() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div className="w-full md:w-11/12 md:mt-[160px] mt-36">
          <div className="flex items-center w-full flex-col">
            <h1 className="text-center mb-3 font-medium text-[60px]">
              Contact Us
            </h1>
            <h2 className="text-center md:mt-0 mt-3">
              {" "}
              To Make Your Move Meaningful
            </h2>
          </div>

          <div className="bg-slate-50 flex justify-center md:py-8 py-0 px-0 mt-10">
            <ContactUs isPage={true} />
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-full md:w-11/12 h-96 bg-gradient-to-t from-slate-100 to-slate-300 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d901.4683924553564!2d55.39522426953228!3d25.34202321065021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIwJzMxLjMiTiA1NcKwMjMnNDUuMSJF!5e0!3m2!1sen!2s!4v1726905077160!5m2!1sen!2s"
                className="w-full h-full drop-shadow-lg"
                style={{
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUsPage;
