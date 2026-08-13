/* Driveway-matched homepage design tokens (from driveway.com) */

export const DW = {
  blue: "#1451B5",
  easy: "#FF8D7D",
  searchBg: "#081848",
  sellBg: "#0C316D",
  text: "#353535",
  linkBlue: "#1451B5",
  teal: "#184F56",
} as const;

export const HERO_IMAGES = {
  desktop: "/driveway/hero-desktop.png",
  mobile: "/driveway/hero-mobile.png",
} as const;

export const RECOMMENDED_CARS = [
  {
    name: "Jeep Wrangler",
    image: "/driveway/jeep-wrangler.png",
    countLabel: "Vehicles Available",
    href: "/inventory/?q=Jeep%20Wrangler",
  },
  {
    name: "Honda Accord",
    image: "/driveway/honda-accord.png",
    countLabel: "Vehicles Available",
    href: "/inventory/?q=Honda%20Accord",
  },
  {
    name: "Dodge Charger",
    image: "/driveway/dodge-charger.png",
    countLabel: "Vehicles Available",
    href: "/inventory/?q=Dodge%20Charger",
  },
] as const;

/** Driveway mega-nav structure (Cardora routes) */
export const DW_NAV = [
  {
    label: "Shop",
    href: "/inventory",
    items: [
      { label: "Search Used Cars", href: "/inventory" },
      { label: "Search New Cars", href: "/inventory" },
      { label: "How Buying A Car Works", href: "/skip-the-dealership" },
    ],
  },
  {
    label: "Sell/Trade",
    href: "/trade-in-my-car",
    items: [
      { label: "Get an Offer", href: "/trade-in-my-car" },
      { label: "How Sell/Trade Works", href: "/trade-in-my-car" },
    ],
  },
  {
    label: "Finance",
    href: "/financing",
    items: [
      { label: "Get Pre-Qualified", href: "/financing" },
      { label: "Payment Calculator", href: "/payment-calculator" },
      { label: "How Financing Works", href: "/financing" },
    ],
  },
  {
    label: "Ownership",
    href: "/service",
    items: [
      { label: "Vehicle Ownership", href: "/service" },
      { label: "Schedule Service", href: "/service" },
      { label: "How Service Works", href: "/service" },
    ],
  },
  {
    label: "Learn",
    href: "/about-us",
    items: [
      { label: "Guides & Tips", href: "/about-us" },
      { label: "About Us", href: "/about-us" },
      { label: "Reviews", href: "/#driveway-reviews" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
] as const;

/** Exact Driveway Reviews CMS copy */
export const DW_TESTIMONIALS = [
  {
    title: "Made the buying process very easy",
    text: "Can't be more happy with whole process.  With extremely super nice people and with a lot of knowledge and made the buying process very easy. Thank you.",
    name: "Kenneth M.",
  },
  {
    title: "A very positive experience!",
    text: "I am really happy I sold my car to Driveway! The price was really good and the process straightforward. The only issue I had was that it took almost 5 weeks from start to finish, rather than the two to three weeks I was told it would take. On the other hand, the team (Scarlett) was very responsive to my texts and emails and kept me updated. Overall it was a very positive experience!",
    name: "Rebecca B.",
  },
  {
    title: "Great experience!",
    text: "Driveway made selling my car easier than I ever imagined possible! They had great communication, had all the paperwork ready before my appointment, and got the inspection and paperwork done in under 30 minutes! They bought my car for much more than competing companies of the same kind and did not change their offer amount after seeing my car. Overall, great experience!",
    name: "Alisha T",
  },
  {
    title: "I highly recommend",
    text: "Selling to Driveway was a quick and easy process and they offer better value for your car than similar companies. They came and checked out my car for 15 minutes and the money was in my account before they drove away with the car. I highly recommend.",
    name: "Jason O.",
  },
  {
    title: "A wonderful experience",
    text: "Working with the team at Driveway was a wonderful experience. Gerard made finding, buying, and financing my car so easy! Parker and the delivery team made sure my car got here before Christmas!! I highly recommend getting a car at Driveway!",
    name: "Leslie K.",
  },
  {
    title: "A pleasure to do business with",
    text: "Driveway.com was excellent to work with when they bought my car. Very seamless and quick process. No hassles and very upfront. A pleasure to do business with.",
    name: "Dennis M.",
  },
  {
    title: "Best price by far",
    text: "Super easy and seamless, EXCELLENT customer service. Bonus, they come to your house to pick up vehicle! In and out in 30 min! Highly recommend. Best selling/trade experience I’ve had to date!",
    name: "Chris F.",
  },
  {
    title: "Simple purchase",
    text: "They made it all so simple, it took no more than 30 minutes of my time. The paperwork was simple and fast, they offered to get me a ride home and truly made the purchase so simple",
    name: "Ashley O.",
  },
  {
    title: "Never been easier",
    text: "Amazing company with amazing service. Never been easier selling my car & getting a great price for it!",
    name: "Ernesto S.",
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
    title: "How Pre-Qualification Works",
    category: "Financing",
    readingTime: 4,
    description:
      "Getting pre-qualified for a new car loan is low-stress because it doesn’t impact your credit. Learn how a pre-qualification can help narrow down your car search.",
    image: "/driveway/guides/prequal.jpg",
    href: "/about-us",
    size: "sm" as const,
  },
] as const;
