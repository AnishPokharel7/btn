import { Metadata } from "next";
import { ImpactHero } from "./ImpactHero";
import { ImpactStatsSection } from "./ImpactStatsSection";
import { ImpactByRegion } from "./ImpactByRegion";
import { AnnualHighlights } from "./AnnualHighlights";
import { SDGAlignment } from "./SDGAlignment";
import { ImpactCTA } from "./ImpactCTA";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Explore Better Tomorrow Nepal Foundation's measurable impact across Nepal — 125,000+ lives touched, 250+ communities served, and transparent reporting on all our programs.",
};

export default function ImpactPage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <ImpactHero />
      <ImpactStatsSection />
      <ImpactByRegion />
      <AnnualHighlights />
      <SDGAlignment />
      <ImpactCTA />
    </main>
  );
}