import { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { OurStory } from "./OurStory";
import { MissionVision } from "./MissionVision";
import { CoreValues } from "./CoreValues";
import { OurObjectives } from "./OurObjectives";
import { OurApproach } from "./OurApproach";
import { OurTeam } from "./OurTeam";
import { OurPartners } from "./OurPartners";
import { AboutCTA } from "./AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Better Tomorrow Nepal Foundation — our story, mission, vision, core values, team, and partners working to empower communities across Nepal.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <OurObjectives />
      <OurApproach />
      <OurTeam />
      <OurPartners />
      <AboutCTA />
    </main>
  );
}