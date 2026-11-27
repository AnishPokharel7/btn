import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ImpactStats } from "@/components/home/ImpactStats";
import { ProgramsGrid } from "@/components/home/ProgramsGrid";
import { ImpactPreview } from "@/components/home/ImpactPreview";
import { StoriesSection } from "@/components/home/StoriesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { NewsSection } from "@/components/home/NewsSection";
import { GetInvolved } from "@/components/home/GetInvolved";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ImpactStats />
      <ProgramsGrid />
      <ImpactPreview />
      <StoriesSection />
      <Testimonials />
      <NewsSection />
      <GetInvolved />
      <FinalCTA />
    </>
  );
}