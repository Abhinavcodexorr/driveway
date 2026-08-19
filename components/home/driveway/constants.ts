export const HERO_IMAGES = {
  desktop: "/driveway/hero-car-character.png",
  mobile: "/driveway/hero-car-character.png",
} as const;

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
