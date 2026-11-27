import { PageHero } from "@/components/shared/PageHero";
import { Shield, CreditCard, Calendar } from "lucide-react";

export function DonateHero() {
  return (
    <PageHero
      title="Support Our Mission"
      description="Your donation — large or small — directly funds programs that reach the most vulnerable communities across Nepal. Every rupee makes a difference."
      image="/images/women.jpg"
      imageAlt="Women in a community meeting in Nepal"
      badge="Secure Giving"
    >
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <Shield className="w-5 h-5" aria-hidden="true" />
          <span>256-bit SSL Encrypted</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <CreditCard className="w-5 h-5" aria-hidden="true" />
          <span>All Major Cards</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <Calendar className="w-5 h-5" aria-hidden="true" />
          <span>Tax Deductible</span>
        </div>
      </div>
    </PageHero>
  );
}