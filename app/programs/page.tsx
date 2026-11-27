import { Metadata } from "next";
import { ProgramsHero } from "./ProgramsHero";
import { ProgramsGrid } from "./ProgramsGrid";
import { ProgramsCTA } from "./ProgramsCTA";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore Better Tomorrow Nepal Foundation's eight comprehensive programs: Education, Healthcare, Women Empowerment, Youth Development, Community Development, Environment, Livelihood, and Humanitarian Assistance.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramsCTA />
    </main>
  );
}