import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactForm";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

interface Params {
  params: {
    locale: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title: "Contact Us | Hamdan Movers",
    description:
      "We're experts in helping people move in the UAE. Our team is made up of experienced professionals who know exactly what they're doing. We have all the latest equipment and technology to make your move as smooth as possible. We value your feedback and are always looking for ways to improve our services. Trust us to handle your move with care and efficiency.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/contact-us`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/contact-us`,
        en: `${process.env.PUBLIC_URL}/en/contact-us`,
      },
    },
    openGraph: {
      title: "Contact Us | Hamdan Movers",
      description:
        "We're experts in helping people move in the UAE. Our team is made up of experienced professionals who know exactly what they're doing. We have all the latest equipment and technology to make your move as smooth as possible. We value your feedback and are always looking for ways to improve our services. Trust us to handle your move with care and efficiency.",
      url: `${process.env.PUBLIC_URL}/contact-us`,
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

function ContactUsPage() {
  const locale = useLocale();
  const t = useTranslations("contact-p");
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div className="w-full md:w-11/12 md:mt-48 mt-36">
          <div className="flex items-center w-full flex-col">
            <h1
              className={`text-center mb-3 text-[60px] ${
                locale === "ar" ? "font-arabic font-bold" : "font-medium"
              }`}
            >
              {t("title")}
            </h1>
            <h2
              className={`text-center ${
                locale === "ar" ? "mt-3 font-arabic" : "md:mt-0 mt-3"
              }`}
            >
              {" "}
              {t("sub")}
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
