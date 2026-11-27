import { Metadata } from "next";
import { TransparencyHero } from "./TransparencyHero";
import { RegistrationSection } from "./RegistrationSection";
import { GovernanceSection } from "./GovernanceSection";
import { FinancialReportsSection } from "./FinancialReportsSection";
import { AnnualReportsSection } from "./AnnualReportsSection";
import { PoliciesSection } from "./PoliciesSection";
import { TransparencyCTA } from "./TransparencyCTA";

export const metadata: Metadata = {
  title: "Transparency & Accountability",
  description: "Better Tomorrow Nepal Foundation's commitment to transparency — registration documents, governance structure, audited financial reports, annual reports, and organizational policies.",
};

export default function TransparencyPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">
      <TransparencyHero />
      <RegistrationSection />
      <GovernanceSection />
      <FinancialReportsSection />
      <AnnualReportsSection />
      <PoliciesSection />
      <TransparencyCTA />
    </main>
  );
}