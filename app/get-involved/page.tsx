import { Metadata } from "next";
import { GetInvolvedHero } from "./GetInvolvedHero";
import { VolunteerSection } from "./VolunteerSection";
import { DonateSection } from "./DonateSection";
import { CorporateSection } from "./CorporateSection";
import { FundraiseSection } from "./FundraiseSection";
import { GetInvolvedCTA } from "./GetInvolvedCTA";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join Better Tomorrow Nepal Foundation in creating lasting change. Volunteer, donate, partner with us, or start a fundraiser — every action counts.",
};

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">
      <GetInvolvedHero />
      <VolunteerSection />
      <DonateSection />
      <CorporateSection />
      <FundraiseSection />
      <GetInvolvedCTA />
    </main>
  );
}