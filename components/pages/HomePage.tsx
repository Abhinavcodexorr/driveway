/* =========================
   Home Page
   Driveway-inspired redesign:
   Header → Hero → Shop With Confidence → Sell → Drivers Seat → Reviews → FAQ → Footer
========================= */

"use client";

import { Footer, Header } from "@/components/layout";
import {
  DrivewayHero,
  ShopWithConfidence,
  SellSection,
  DriversSeat,
  HomeFaq,
} from "@/components/home/driveway";
import { Reviews } from "@/components/home";

const HomePage = () => {
  return (
    <>
      <main className="dw-font min-h-screen overflow-hidden bg-white">
        <Header />
        <DrivewayHero />
        <ShopWithConfidence />
        <SellSection />
        <DriversSeat />
        <Reviews />
        <HomeFaq />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
