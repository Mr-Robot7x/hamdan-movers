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
      url: `${process.env.PUBLIC_URL}/${locale}`,
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
            "@id": `${process.env.PUBLIC_URL}/${locale}/`,
            url: `${process.env.PUBLIC_URL}/${locale}/`,
            name: "About Us | Hamdan Movers",
            isPartOf: { "@id": `${process.env.PUBLIC_URL}/${locale}#website` },
            primaryImageOfPage: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/#primaryimage`,
            },
            image: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/#primaryimage`,
            },
            thumbnailUrl: `${process.env.PUBLIC_URL}/images/about-us.jpg`,
            datePublished: "2024-10-01",
            dateModified: "2024-10-15T12:00:00Z",
            breadcrumb: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/#breadcrumb`,
            },
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            potentialAction: [
              {
                "@type": "ReadAction",
                target: [`${process.env.PUBLIC_URL}/${locale}/`],
              },
            ],
            hasPart: [
              // Added hasPart for related pages
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/services/`,
                name: "Services",
              },
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/`,
                name: "About Us",
              },
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-dubai/`,
                name: "Movers In Dubai",
              },
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-sharjah/`,
                name: "Movers In Sharjah",
              },
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-ajman/`,
                name: "Movers In Ajman",
              },
            ],
          },

          {
            "@type": "ImageObject",
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            "@id": `${process.env.PUBLIC_URL}/${locale}/#primaryimage`,
            url: `${process.env.PUBLIC_URL}/images/about-us.jpg`,
            contentUrl: `${process.env.PUBLIC_URL}/images/about-us.jpg`,
            width: 2000,
            height: 1333,
            caption:
              "Best Movers in Dubai, UAE | Movers and Packers - Hamdan Movers",
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
              {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: `${process.env.PUBLIC_URL}/${locale}/about-us/`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Services",
                item: `${process.env.PUBLIC_URL}/${locale}/services/`,
              },
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${process.env.PUBLIC_URL}/${locale}/#website`,
            url: `${process.env.PUBLIC_URL}/${locale}/`,
            name: "Hamdan Movers",
            description:
              "We are trusted movers in Dubai for safe and reliable moving services. Whether it's a local or international move, we handle everything from cars to pianos with care, ensuring your belongings arrive on time and without damage.",
            publisher: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/#organization`,
            },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${process.env.PUBLIC_URL}/${locale}?s={search_term_string}`,
                },
                "query-input": {
                  "@type": "PropertyValueSpecification",
                  valueRequired: true,
                  valueName: "search_term_string",
                },
              },
            ],
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
          },
          {
            "@type": "Organization",
            "@id": `${process.env.PUBLIC_URL}/${locale}/#organization`,
            name: "Hamdan Movers",
            url: `${process.env.PUBLIC_URL}/${locale}/`,
            logo: {
              "@type": "ImageObject",
              inLanguage: locale === "ar" ? "ar-AE" : "en-US",
              "@id": `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
              url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
              contentUrl: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
              width: 1063,
              height: 172,
              caption: "Hamdan Movers and Packers",
            },
            image: {
              "@id": `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
            },
            contactPoint: {
              // Added contactPoint
              "@type": "ContactPoint",
              telephone: "+971566651978",
              contactType: "Customer Service",
              areaServed: "AE",
              availableLanguage: ["en", "ar"],
            },
          },
        ],
      }),
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
