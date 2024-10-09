import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar",
          en: "/en",
        },
      },
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "/services",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services",
          en: "/en/services",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/services-locations",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services-locations",
          en: "/en/services-locations",
        },
      },
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "/services-locations/movers-and-packers-dubai",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services-locations/movers-and-packers-dubai",
          en: "/en/services-locations/movers-and-packers-dubai",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/services-locations/movers-and-packers-sharjah",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services-locations/movers-and-packers-sharjah",
          en: "/en/services-locations/movers-and-packers-sharjah",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/services-locations/movers-and-packers-ajman",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services-locations/movers-and-packers-ajman",
          en: "/en/services-locations/movers-and-packers-ajman",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/pickup-rental-trucks",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/pickup-rental-trucks",
          en: "/en/pickup-rental-trucks",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/pickup-rental-trucks-in-ajman",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/pickup-rental-trucks-in-ajman",
          en: "/en/pickup-rental-trucks-in-ajman",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/pickup-rental-trucks-in-sharjah",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/pickup-rental-trucks-in-sharjah",
          en: "/en/pickup-rental-trucks-in-sharjah",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/pickup-rental-trucks-in-dubai",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/pickup-rental-trucks-in-dubai",
          en: "/en/pickup-rental-trucks-in-dubai",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/contact-us",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/contact-us",
          en: "/en/contact-us",
        },
      },
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "/about-us",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/about-us",
          en: "/en/about-us",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/services/commerical-office-movers",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services/commerical-office-movers",
          en: "/en/services/commerical-office-movers",
        },
      },
    },
    {
      url: "/services/international-moving",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services/international-moving",
          en: "/en/services/international-moving",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/services/local-residential-movers",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services/local-residential-movers",
          en: "/en/services/local-residential-movers",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/services/packing-services",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services/packing-services",
          en: "/en/services/packing-services",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/services/speciality-moving",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services/speciality-moving",
          en: "/en/services/speciality-moving",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "/services/storage-services",
      lastModified: new Date(),
      alternates: {
        languages: {
          ar: "/ar/services/storage-services",
          en: "/en/services/storage-services",
        },
      },
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
