"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureCollections from "@/components/SignatureCollections";
import InteractiveRouteMap from "@/components/InteractiveRouteMap";
import StaysShowcase from "@/components/StaysShowcase";
import TripBuilder from "@/components/TripBuilder";
import TravelHub from "@/components/TravelHub";
import Footer from "@/components/Footer";
import ItineraryDrawer from "@/components/ItineraryDrawer";
import StayModal from "@/components/StayModal";
import { JOURNEYS, Journey, Stay } from "@/data/vionData";

export default function Home() {
  const [currency, setCurrency] = useState<string>("USD");
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [builderPrefillNotes, setBuilderPrefillNotes] = useState<string>("");

  const handleSelectJourney = (journeyId: string) => {
    const found = JOURNEYS.find((j) => j.id === journeyId) || null;
    setSelectedJourney(found);
  };

  const handleCustomizeJourney = (journeyTitle: string) => {
    setSelectedJourney(null);
    setBuilderPrefillNotes(`Interested in tailoring: ${journeyTitle}`);
    const el = document.getElementById("trip-builder");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleIncludeRegion = (regionName: string) => {
    setBuilderPrefillNotes(`Please prioritize destinations around: ${regionName}`);
    const el = document.getElementById("trip-builder");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenBuilder = () => {
    const el = document.getElementById("trip-builder");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#0C0F12] text-[#F7F4EE]">
      {/* Live Clock & Weather Bar */}
      <TopBar />

      {/* Main Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenBuilder={handleOpenBuilder}
      />

      {/* Hero Section */}
      <Hero />

      {/* Signature Collections (HEAVEN / SIGNATURE / CURATED) */}
      <SignatureCollections
        currency={currency}
        onSelectJourney={handleSelectJourney}
      />

      {/* Interactive Ceylon Geospatial Route Explorer */}
      <InteractiveRouteMap
        onIncludeRegion={handleIncludeRegion}
      />

      {/* Handpicked Private Stays & Villas */}
      <StaysShowcase
        currency={currency}
        onSelectStay={(stay) => setSelectedStay(stay)}
      />

      {/* Interactive Custom Trip Builder & Live Budget Calculator */}
      <TripBuilder
        currency={currency}
        prefillNotes={builderPrefillNotes}
      />

      {/* Travel Hub: Know Before You Depart */}
      <TravelHub />

      {/* Footer */}
      <Footer />

      {/* Day-by-Day Expedition Drawer */}
      <ItineraryDrawer
        journey={selectedJourney}
        currency={currency}
        onClose={() => setSelectedJourney(null)}
        onCustomize={handleCustomizeJourney}
      />

      {/* Quick-View Stay Modal */}
      <StayModal
        stay={selectedStay}
        currency={currency}
        onClose={() => setSelectedStay(null)}
      />
    </main>
  );
}
