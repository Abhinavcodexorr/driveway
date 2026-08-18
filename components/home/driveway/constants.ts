/* Driveway-matched homepage design tokens (from driveway.com) */

export const DW = {
  blue: "#1451b5",
  easy: "#FF8D7D",
  searchBg: "#081848",
  sellBg: "#1451b5",
  text: "#353535",
  linkBlue: "#1451b5",
  teal: "#1451b5",
} as const;

export const HERO_IMAGES = {
  desktop: "/driveway/hero-banner.png?v=2",
  mobile: "/driveway/hero-banner.png?v=2",
} as const;

export const RECOMMENDED_CARS = [
  {
    name: "Jeep Wrangler",
    image: "/driveway/jeep-wrangler.png",
    countLabel: "Get Pre-Approved",
    href: "/financing",
  },
  {
    name: "Honda Accord",
    image: "/driveway/honda-accord.png",
    countLabel: "Get Pre-Approved",
    href: "/financing",
  },
  {
    name: "Dodge Charger",
    image: "/driveway/dodge-charger.png",
    countLabel: "Get Pre-Approved",
    href: "/financing",
  },
] as const;

/** Carma Credit mega-nav structure */
export const DW_NAV = [
  {
    label: "Finance",
    href: "/financing",
    items: [],
  },
  {
    label: "Sell my Car",
    href: "/trade-in-my-car",
    items: [],
  },
  {
    label: "Resources",
    href: "/how-it-works",
    items: [
      {
        label: "How It Works",
        href: "/how-it-works",
        description: "Simple steps to get approved and on the road",
        icon: "howItWorks",
      },
      {
        label: "Rebuild Your Credit",
        href: "/rebuild-your-credit",
        description: "Tips and options to strengthen your credit",
        icon: "credit",
      },
      {
        label: "Understanding Auto Financing",
        href: "/understanding-auto-financing",
        description: "Learn the terms that matter before you finance",
        icon: "financing",
      },
      {
        label: "FAQ",
        href: "/faq",
        description: "Quick answers to common financing questions",
        icon: "faq",
      },
      {
        label: "What do I need",
        href: "/what-do-i-need",
        description: "Documents to bring for a smooth application",
        icon: "docs",
      },
    ],
  },
  {
    label: "Why Carma Credit",
    href: "/about-us",
    items: [
      {
        label: "About Us",
        href: "/about-us",
        description: "Who we are and how we help drivers get approved",
        icon: "about",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
        description: "Talk to a real person who can help today",
        icon: "contact",
      },
    ],
  },
] as const;

/** Reviews from carmacredit.ca — A Word From Our Clients */
export const DW_TESTIMONIALS = [
  {
    title: "Amazing experience",
    text: "Amazing experience dealing with Sam and his team at Gedi Route (GR Cars). I highly recommend them for any vehicle purchase. I will definitely be using them for my next vehicle upgrade.",
    name: "Gary Williams",
  },
  {
    title: "Exceptional service",
    text: "Sam sold us our first car, the service was exceptional and he was patient throughout the entire process. Would definitely recommend him.",
    name: "Elmi Ibrahim",
  },
  {
    title: "People always come first",
    text: "Hi I'm Jean Mario Bissoonee I was struggling to have a car but since I talked to Sam he removed me in the stressed he is awesome, intelligent and care for the people for him people always come first I very appreciate the way he works I advise you guys to contact him if you are in difficult situations. Sam is a fruit of God he will never let you down and he promises something he will make happen Thank you Sam for everything you the best of best in town",
    name: "Jean Mario",
  },
  {
    title: "Went above and beyond",
    text: "Sam was amazing super patient, and went above and beyond to get me in my new Mercedes Benz!! with my poor credit thanks you so much again for all your hard work !!!!!",
    name: "Morgan Peaire",
  },
  {
    title: "Smooth and stress-free",
    text: "Carma made the financing process smooth and stress-free. Sam was incredibly helpful, explaining all the details and making sure I got the best possible rate. The entire experience was professional and efficient. I'll definitely be using their services again! Thank you Sam.",
    name: "Farzad Shahdad",
  },
  {
    title: "As promised",
    text: "Just picked up my 2018 Dodge Ram Laramie. Thanks to Sam for getting all the little paint touch ups done as he had promised.",
    name: "Peter Krajewski",
  },
  {
    title: "Best experience buying a car",
    text: "I recently bought my Kia Rio from Sam at Gedi. Was the best experience I've had buying a car. I was in the hospital at the time and Sam went above and beyond to help me get all the paperwork completed. I would recommend this company to anyone buying a vehicle. I will certainly be buying my next one with Sam. I love the car. It is exactly as described and nothing was hidden. Thank you Sam",
    name: "Sylvia Mathieu",
  },
  {
    title: "Incredible experience",
    text: "Dealt w/ Sam Aziz – Incredible experience. Worked with me from top to bottom, nobody else. Addressed every single one of my questions, comments and concerns about all inquires for vehicles, including the one I settled on. Sam took care of every single issue I noticed & made everything right. The vehicle looks brand spanking new, I am a very happy man. Well done Gedi Route & Sam Aziz, a first impression that'll last a life time.",
    name: "Michael",
  },
  {
    title: "Approval and delivery were smooth",
    text: "Sam was very good at sales and getting approval and delivery was so much smooth. I highly recommend him. Thank you",
    name: "Kudarat Patel",
  },
  {
    title: "Fantastic purchase",
    text: "I recently purchased a Mercedes C300 from Carma, and the experience was fantastic. The car was incredibly clean and in amazing condition with no issues whatsoever. Sam was extremely helpful throughout the process, making sure I got a great deal and helping me secure financing at an excellent rate. Everything went smoothly, and I couldn't be happier with my purchase.",
    name: "Jadush Pat",
  },
  {
    title: "Stress-free and enjoyable",
    text: "I had a fantastic experience working with Sam at Gedi Route cars. He was incredibly knowledgeable, patient, and helpful throughout the entire car buying process. He explained everything clearly, answered all my questions, and even went out of his way to find the perfect car for me, which was exactly what I was looking for. He made the entire experience stress-free and enjoyable, and I would highly recommend him and this dealership to anyone looking to buy a new or used vehicle.",
    name: "Inderjeet",
  },
] as const;

/** Exact Driveway Guides & Tips homepage section */
export const DW_GUIDES = [
  {
    title: "How To Buy a Car Affordably in Today’s Economy",
    category: "Buying",
    readingTime: 8,
    description:
      "Even with high prices and interest rates in today's market, these 8 tips can help you buy a car without blowing your budget.",
    image: "/driveway/guides/affordably.jpg",
    href: "/about-us",
    size: "lg" as const,
  },
  {
    title: "8 Sporty Cars That Also Get Great Gas Mileage",
    category: "Buying",
    readingTime: 5,
    description:
      "Not quite ready to jump to a hybrid or electric vehicle? These 8 sporty cars get great gas mileage and will maximize your enjoyment behind the wheel.",
    image: "/driveway/guides/sporty.jpg",
    href: "/about-us",
    size: "md" as const,
  },
  {
    title: "The Best Family Cars",
    category: "Lifestyle",
    readingTime: 6,
    description:
      "The number of seats is just the tip of the iceberg. Learn what makes for the best family car, from advanced safety features to cargo space and family-oriented amenities.",
    image: "/driveway/guides/family.jpg",
    href: "/about-us",
    size: "sm" as const,
  },
  {
    title: "How Pre-Approval Works",
    category: "Financing",
    readingTime: 4,
    description:
      "Getting pre-approved for a new car loan is low-stress because it doesn’t impact your credit. Learn how a pre-approval can help narrow down your car search.",
    image: "/driveway/guides/prequal.jpg",
    href: "/financing",
    size: "sm" as const,
  },
] as const;
