import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import aboutUsImg from "../../../../public/images/about-us.jpg";
import ownerImage from "../../../../public/images/owner-ahmad-hussain.jpg";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import TestimonialSection from "@/components/Testimonials";
import { useLocale, useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title: "About Us | Hamdan Movers",
    description:
      "We are trusted movers in Dubai for safe and reliable moving services. Whether it's a local or international move, we handle everything from cars to pianos with care, ensuring your belongings arrive on time and without damage.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/about-us`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/about-us`,
        en: `${process.env.PUBLIC_URL}/en/about-us`,
      },
    },
    openGraph: {
      title: "About Us | Hamdan Movers",
      description:
        "We are trusted movers in Dubai for safe and reliable moving services. Whether it's a local or international move, we handle everything from cars to pianos with care, ensuring your belongings arrive on time and without damage.",
      url: `${process.env.PUBLIC_URL}/${locale}/about-us`,
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
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/`,
            url: `${process.env.PUBLIC_URL}/${locale}/about-us/`,
            name: "About Us | Hamdan Movers",
            isPartOf: { "@id": `${process.env.PUBLIC_URL}/${locale}#website` },
            primaryImageOfPage: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/#primaryimage`,
            },
            image: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/#primaryimage`,
            },
            thumbnailUrl: `${process.env.PUBLIC_URL}/images/owner-ahmad-hussain.jpg`,

            dateModified: Date.now().toString(),
            breadcrumb: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/#breadcrumb`,
            },
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            potentialAction: [
              {
                "@type": "ReadAction",
                target: [`${process.env.PUBLIC_URL}/${locale}/about-us/`],
              },
            ],
          },
          {
            "@type": "ImageObject",
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/#primaryimage`,
            url: `${process.env.PUBLIC_URL}/images/owner-ahmad-hussain.jpg`,
            contentUrl: `${process.env.PUBLIC_URL}/images/owner-ahmad-hussain.jpg`,
            width: 2000,
            height: 1333,
            caption: "best movers in dubai, UAE | Hamdan Movers",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${process.env.PUBLIC_URL}/${locale}/`,
              },
              { "@type": "ListItem", position: 2, name: "About Us" },
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://sanamovers.com/#website",
            url: "https://sanamovers.com/",
            name: "Sana Movers",
            description: "Move your Dreams Safely",
            publisher: { "@id": "https://sanamovers.com/#organization" },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://sanamovers.com/?s={search_term_string}",
                },
                "query-input": {
                  "@type": "PropertyValueSpecification",
                  valueRequired: true,
                  valueName: "search_term_string",
                },
              },
            ],
            inLanguage: "en-US",
          },
          {
            "@type": "Organization",
            "@id": "https://sanamovers.com/#organization",
            name: "Sana Movers",
            url: "https://sanamovers.com/",
            logo: {
              "@type": "ImageObject",
              inLanguage: "en-US",
              "@id": "https://sanamovers.com/#/schema/logo/image/",
              url: "https://sanamovers.com/wp-content/uploads/2024/01/sana_movers_logo_W.png",
              contentUrl:
                "https://sanamovers.com/wp-content/uploads/2024/01/sana_movers_logo_W.png",
              width: 1063,
              height: 172,
              caption: "Sana Movers",
            },
            image: { "@id": "https://sanamovers.com/#/schema/logo/image/" },
            sameAs: [
              "https://www.facebook.com/sanamovers/",
              "https://www.instagram.com/sanamoversuae/",
            ],
          },
        ],
      }),
    },
  };
}

const AboutUsSection = () => {
  const t = useTranslations("about us");
  const locale = useLocale();
  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div className="w-full md:w-11/12 md:mt-48 mt-36">
          <div className="w-full">
            <h1
              className={`md:text-[70px] text-[60px] border-b-[2px] pb-6 border-black ${
                locale === "ar"
                  ? "font-bold font-arabic text-right"
                  : "font-medium"
              }`}
            >
              {t("title")}
            </h1>
            <div
              dir={locale === "ar" ? "rtl" : "ltr"}
              className={`w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 md:mt-16 mt-10 ${
                locale === "ar" ? "md:mr-12" : "md:ml-12"
              }`}
            >
              <div className="min-h-32">
                <h2
                  className={`font-normal md:leading-[50px] leading-10 ${
                    locale === "ar" ? "font-arabic" : "font-poppins"
                  }`}
                >
                  {t("sub")}
                </h2>
                <p
                  style={{
                    fontStyle: `${locale === "ar" ? "none" : "italic"}`,
                  }}
                  className={`mt-5 text-[19px] leading-7 ${
                    locale === "ar" ? "ar-p" : ""
                  }`}
                >
                  {t("desc")}
                </p>
                <div className="mt-5 flex flex-col gap-y-2">
                  <div className="">
                    <p
                      className={`flex gap-x-1 text-wrap ${
                        locale === "ar"
                          ? " font-bold ar-p"
                          : "text-[17px] font-medium md:text-[19px]"
                      }`}
                    >
                      <span className="text-[#FF5F00]">-</span> {t("key1")}
                    </p>
                  </div>
                  <div className="">
                    <p
                      className={`flex gap-x-1 text-wrap ${
                        locale === "ar"
                          ? " font-bold ar-p"
                          : "text-[17px] font-medium md:text-[19px]"
                      }`}
                    >
                      <span className="text-[#FF5F00]">-</span> {t("key2")}
                    </p>
                  </div>
                  <div className="">
                    <p
                      className={`flex gap-x-1 text-wrap ${
                        locale === "ar"
                          ? " font-bold ar-p"
                          : "text-[17px] font-medium md:text-[19px]"
                      }`}
                    >
                      <span className="text-[#FF5F00]">-</span> {t("key3")}
                    </p>
                  </div>
                  <div className="">
                    <p
                      className={`flex gap-x-1 text-wrap ${
                        locale === "ar"
                          ? " font-bold ar-p"
                          : "text-[17px] font-medium md:text-[19px]"
                      }`}
                    >
                      <span className="text-[#FF5F00]">-</span> {t("key4")}
                    </p>
                  </div>
                  <div className="">
                    <p
                      className={`flex gap-x-1 text-wrap ${
                        locale === "ar"
                          ? " font-bold ar-p"
                          : "text-[17px] font-medium md:text-[19px]"
                      }`}
                    >
                      <span className="text-[#FF5F00]">-</span> {t("key5")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-h-32 flex justify-center">
                <div className="md:w-96 w-[350px] bg-gradient-to-t from-slate-50 to-slate-100 md:h-[480px] h-96 relative">
                  <Image
                    src={aboutUsImg}
                    alt="about us | hamdan mover"
                    className="object-cover absolute"
                    fill
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full md:w-11/12  min-h-40">
          <h2
            className={`text-center md:text-[55px] text-[50px] leading-[45px] ${
              locale === "ar" ? " font-bold font-arabic" : ""
            }`}
          >
            {t("owner.title")}
          </h2>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 mt-14 md:gap-0 gap-y-16 items-center">
            <div className="min-h-32  flex justify-center">
              <div className="md:w-96 w-[330px] md:h-[450px] h-96 bg-white relative rounded-[50px] overflow-hidden drop-shadow-2xl">
                <Image
                  alt="Ahmad Hussain | Owner Of Hamdan Movers"
                  src={ownerImage}
                  fill
                  className="object-contain absolute"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="min-h-32 md:mt-3">
              <h3
                className={`text-[40px] md:text-start text-center ${
                  locale === "ar"
                    ? "font-arabic font-bold mb-5"
                    : " font-poppins font-normal"
                }`}
              >
                {t("owner.name")}
              </h3>
              <p className="gr font-light mt-2 md:text-start text-center">
                {t("owner.sub")}
              </p>
              <p
                className={`mt-5 ${
                  locale === "ar"
                    ? "ar-p"
                    : " md:text-[18px] text-[16px] md:leading-7"
                }`}
              >
                {t("owner.desc")}
              </p>
              <div className="w-full flex gap-x-2 mt-3">
                <IconBrandFacebook className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
                <IconBrandWhatsapp className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
                <IconMail className="border p-1 rounded-2xl w-12 h-12 text-[#023246] hover:bg-[#023246] hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
        <TestimonialSection />
        <WhyChooseUs />
      </div>

      <Footer />
    </>
  );
};

export default AboutUsSection;
