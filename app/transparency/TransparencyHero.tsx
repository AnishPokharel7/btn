import { PageHero } from "@/components/shared/PageHero";
import { Shield, FileText, Award } from "lucide-react";

export function TransparencyHero() {
  return (
    <PageHero
      title="Transparency & Accountability"
      description="We believe trust is earned through openness. Explore our registration documents, governance structure, audited financials, annual reports, and organizational policies."
      image="/images/environment.jpg"
      imageAlt="Community meeting in Nepal"
      badge="Open & Accountable"
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <Shield className="w-4 h-4" aria-hidden="true" />
          <span>Registered NGO</span>
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <FileText className="w-4 h-4" aria-hidden="true" />
          <span>Audited Financials</span>
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <Award className="w-4 h-4" aria-hidden="true" />
          <span>Third-Party Evaluated</span>
        </span>
      </div>
    </PageHero>
  );
}