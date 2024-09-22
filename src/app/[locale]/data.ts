export const navItems: { name: string; link: string; sub?: boolean }[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
    sub: true,
  },
  {
    name: "Rent Services",
    link: "/pickup-rental-trucks",
  },
  {
    name: "Moving Locations",
    link: "/services-locations",
  },

  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const subServices: { name: string; link: string }[] = [
  {
    name: "Local Moving",
    link: "/services/local-moving",
  },
  {
    name: "Commercial  Moving",
    link: "/services/commerical-office-movers",
  },
  {
    name: "Packing and Unpacking",
    link: "/services/packing-services",
  },
  {
    name: "Storage Soluations",
    link: "/services/storage-services",
  },
  {
    name: "Specialty Moving",
    link: "/services/speciality-moving",
  },
  {
    name: "International Moving",
    link: "/services/international-moving",
  },
];

export const faqs = [
  {
    ques: "What payment methods do you accept?",
    ans: "We accept various payment methods, including cash, credit card, and online bank transfers. Payment can be made before or after the completion of services as per the terms agreed upon.",
  },
  {
    ques: "How can I book a moving service?",
    ans: "You can easily book any of our services through our website by clicking the Book Now button on the relevant service page, or you can contact us directly via phone or email.",
  },
  {
    ques: "What areas do you cover for moving services?",
    ans: "We provide local moving services within Sharjah and Dubai, along with international moving services to Gulf countries. Our team is equipped to handle moves within the UAE and beyond.",
  },
  {
    ques: "What is included in your commercial moving service?",
    ans: "Our commercial moving services cover every aspect of office relocation, including disassembly, packing, transportation, and reassembly at the new location. We focus on minimizing downtime to ensure a smooth transition for your business.",
  },
  {
    ques: "Do you provide storage solutions?",
    ans: "Yes, we offer flexible short-term and long-term storage options in climate-controlled units to keep your items safe during the transition or for longer durations as needed.",
  },
  {
    ques: "Can you handle international moves?",
    ans: "Yes, we provide international moving services, especially to Gulf countries. This includes packing, customs paperwork, and transportation to ensure a seamless international relocation.",
  },
  {
    ques: "How does your office relocation service work?",
    ans: "We handle all aspects of office relocation, from packing and moving office equipment to reassembling furniture at the new location. Our aim is to minimize disruption to your business operations.",
  },
  {
    ques: " Do you offer cleaning services?",
    ans: "Yes, we offer home cleaning and furniture cleaning services to ensure your space is spotless before or after a move. Our professional team uses high-quality products to leave your home or furniture in top condition.",
  },
];

type Testimonial = {
  name: string;
  location: string;
  date: string;
  testimonial: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al Zarooni",
    location: "Dubai Marina, Dubai",
    date: "15 March 2021",
    testimonial:
      "Hamdan Movers were fantastic! Moving is always stressful, but they made the whole process so easy. They were on time, packed everything securely, and moved us without any hassle. I couldn't have asked for a better team.",
  },
  {
    name: "Fatima Al Ali",
    location: "Al Nahda, Sharjah",
    date: "22 August 2020",
    testimonial:
      "I’ve moved several times in the past, but this was by far the easiest experience. The movers were so professional and efficient. They took great care of my belongings and made sure everything arrived safely. Highly recommend them!",
  },
  {
    name: "Saeed Al Mulla",
    location: "Khalifa City, Abu Dhabi",
    date: "5 September 2019",
    testimonial:
      "I was really worried about moving to a new villa, especially with all the furniture, but Hamdan Movers handled it all. They packed everything up so quickly, and when we got to the new house, they set it all up perfectly. It was a huge relief.",
  },
  {
    name: "Mariam Al Suwaidi",
    location: "Al Barsha, Dubai",
    date: "12 July 2022",
    testimonial:
      "I’ve never seen such organized and careful movers. The team was polite, worked hard, and treated my things like their own. It made my move so much less stressful, and I can’t thank them enough for that.",
  },
  {
    name: "Omar Bin Ali",
    location: "Corniche, Abu Dhabi",
    date: "30 November 2021",
    testimonial:
      "I had to move my office, and I was really stressed about how it would go, but Hamdan Movers were a godsend. They were super efficient, and the entire move was done faster than I expected. Nothing was damaged, and they even helped organize things at the new place.",
  },
  {
    name: "Layla Al Mazrouei",
    location: "Al Qusais, Dubai",
    date: "17 February 2022",
    testimonial:
      "We had to move suddenly, and Hamdan Movers came through for us. They were quick, careful, and really friendly. Everything arrived in perfect condition, and they even helped with some unpacking. I’m so grateful for their help!",
  },
  {
    name: "Mohammed Al Mansoori",
    location: "Al Taawun, Sharjah",
    date: "3 May 2020",
    testimonial:
      "We moved our business to a new office space, and these guys were fantastic. They were so organized and made sure everything was packed and transported safely. The whole team was professional, and the move went off without a hitch.",
  },
  {
    name: "Noor Al Shamsi",
    location: "Jumeirah, Dubai",
    date: "27 October 2022",
    testimonial:
      "Hamdan Movers made moving my family so much easier than I expected. They handled everything with care, especially our fragile items, and the storage options they offered were a real lifesaver. I’m really happy with their service.",
  },
  {
    name: "Khalid Al Darmaki",
    location: "Muweilah, Sharjah",
    date: "8 June 2021",
    testimonial:
      "The team at Hamdan Movers did a great job! They took the stress out of moving, and everything was handled with such care. They were on time, friendly, and super efficient. It made the whole process much easier for us.",
  },
  {
    name: "Salma Al Habsi",
    location: "Yas Island, Abu Dhabi",
    date: "19 December 2019",
    testimonial:
      "We used Hamdan Movers to relocate our office, and I couldn’t be happier. They were on time, careful with our equipment, and really organized. I didn’t have to worry about anything. I would definitely use them again!",
  },
];
