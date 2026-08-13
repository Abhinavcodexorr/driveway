/* =========================
   Home Page
   Driveway-inspired redesign:
   Header → Hero → Search → Recommended → Ownership → Sell → Drivers Seat → Testimonials → Explore → Guides → About → Delivered → Body Style → Footer
========================= */

"use client";

import { Footer } from "@/components/layout";
import {
  HomeHeader,
  DrivewayHero,
  SearchCars,
  RecommendedCars,
  OwnershipSimplified,
  SellSection,
  DriversSeat,
  Testimonials,
  MoreWaysToExplore,
  GuidesTips,
  AboutDriveway,
  DeliveredByDriveway,
  SearchByBodyStyle,
} from "@/components/home/driveway";

const HomePage = () => {
  return (
    <main className="dw-font min-h-screen overflow-hidden bg-white">
      <HomeHeader />
      <DrivewayHero />
      <SearchCars />
      <RecommendedCars />
      <OwnershipSimplified />
      <SellSection />
      <DriversSeat />
      <Testimonials />
      <MoreWaysToExplore />
      <GuidesTips />
      <AboutDriveway />
      <DeliveredByDriveway />
      <SearchByBodyStyle />
      <Footer />
    </main>
  );
};

export default HomePage;
