import React from "react";
import Hero from "./hero";
import Speaker from "./speaker";
import Agendas from "./agendas";
import Sponsors from "./sponsors";
import PricingTicket from "./pricinTicket";
import VenuTravel from "./venuTravel";
import About from "./about";
import { Footer } from "@/components";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Speaker />
      <Agendas />
      <Sponsors />
      <PricingTicket />
      <Gallery />
      <VenuTravel />
      <Footer />
    </main>
  );
}
