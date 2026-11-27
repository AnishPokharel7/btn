import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Heart, Gift, CreditCard, Calendar, Shield, Users } from "lucide-react";
import Link from "next/link";
import { donationImpacts } from "@/data/organization";
import { Icon } from "@/components/shared/Icon";
import type { IconName } from "@/components/shared/Icon";

export function DonateSection() {
  return (
    <section id="donate" className="w-full section-padding bg-muted/30" aria-labelledby="donate-heading">
      <Container size="page">
        <SectionHeading
          id="donate-heading"
          label="DONATE"
          title="Make a Donation"
          description="Every rupee you give goes directly to programs that transform lives. Choose a one-time gift or become a monthly sustainer for lasting impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Why Donate */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Your Donation Matters</h3>
            <div className="space-y-5">
              {[
                { icon: Heart, title: 'Direct Impact', desc: '90% of every donation goes directly to program implementation — not overhead.' },
                { icon: Shield, title: 'Transparent', desc: 'Audited financials, annual reports, and real-time monitoring ensure accountability.' },
                { icon: Users, title: 'Community-Led', desc: 'Funds support programs designed and led by the communities we serve.' },
                { icon: Calendar, title: 'Sustainable', desc: 'Monthly giving provides predictable funding for long-term program planning.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Impact */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What Your Donation Can Do</h3>
            <div className="space-y-4">
              {donationImpacts.map((impact, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items_center justify-center shrink-0">
                    <Icon name={impact.icon as IconName} className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">रु{impact.amount.toLocaleString()}</p>
                    <p className="text-text-secondary text-sm">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donation Options */}
        <div className="bg-primary rounded-3xl p-6 md:p-8 lg:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">Ready to Give?</h3>
          <p className="text-white/90 text-center mb-8 max-w-2xl mx-auto">
            Choose a one-time donation or become a monthly sustainer. Both options are secure, tax-deductible, and make a real difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="gap-3 w-full sm:w-auto">
              <Link href="/donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                <span>One-Time Donation</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 gap-3 w-full sm:w-auto">
              <Link href="/donate?frequency=monthly">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Monthly Giving</span>
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" aria-hidden="true" />
              <span>256-bit SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" aria-hidden="true" />
              <span>All Major Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" aria-hidden="true" />
              <span>Tax Deductible</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}