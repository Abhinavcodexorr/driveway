/* =========================
   Home Page
   Driveway-inspired redesign:
   Header → Hero → Shop With Confidence → Sell → Drivers Seat → Testimonials → Explore → Guides → About → Delivered → Footer
========================= */

"use client";

import { Footer, Header } from "@/components/layout";
import {
  DrivewayHero,
  ShopWithConfidence,
  SellSection,
  DriversSeat,
  Testimonials,
  MoreWaysToExplore,
  GuidesTips,
  AboutDriveway,
  DeliveredByDriveway,
} from "@/components/home/driveway";

const HomePage = () => {
  return (
    <>
      <main className="dw-font min-h-screen overflow-hidden bg-white">
        <Header />
        <DrivewayHero />
        <ShopWithConfidence />
        <SellSection />
        <DriversSeat />
        <Testimonials />
        <MoreWaysToExplore />
        <GuidesTips />
        <AboutDriveway />
        <DeliveredByDriveway />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
