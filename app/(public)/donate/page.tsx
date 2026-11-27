import { Metadata } from "next";
import { DonateHero } from "./DonateHero";
import { DonateForm } from "./DonateForm";
import { DonationImpact } from "./DonationImpact";
import { DonateTransparency } from "./DonateTransparency";
import { DonateFAQ } from "./DonateFAQ";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Better Tomorrow Nepal Foundation's work across Nepal. Make a secure one-time or monthly donation to empower communities through education, healthcare, women's empowerment, and environmental programs.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">
      <DonateHero />
      <DonateForm />
      <DonationImpact />
      <DonateTransparency />
      <DonateFAQ />
    </main>
  );
}