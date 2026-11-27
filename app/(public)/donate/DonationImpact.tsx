import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { donationImpacts } from "@/data/organization";
import { Icon } from "@/components/shared/Icon";
import type { IconName } from "@/components/shared/Icon";

export function DonationImpact() {
  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="donation-impact-heading">
      <Container size="page">
        <SectionHeading
          id="donation-impact-heading"
          label="DONATION IMPACT"
          title="See What Your Gift Can Do"
          description="Every donation, regardless of size, creates tangible change. Here are examples of what different amounts can achieve."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donationImpacts.map((impact, index) => (
            <article
              key={index}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={impact.icon as IconName} className="w-7 h-7" aria-hidden="true" />
              </div>

              <div className="mb-3">
                <span className="text-3xl font-extrabold text-primary">रु{impact.amount.toLocaleString()}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">Provides</h3>
              <p className="text-text-secondary leading-relaxed">{impact.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-primary rounded-3xl text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Monthly Giving = Lasting Impact</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Recurring donations provide predictable funding that allows us to plan long-term programs, respond to emergencies, and sustain community-led initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white/10 rounded-xl">
              <p className="text-2xl font-extrabold mb-1">रु1,000/mo</p>
              <p className="text-white/80 text-sm">School supplies for 60 children/year</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <p className="text-2xl font-extrabold mb-1">रु2,500/mo</p>
              <p className="text-white/80 text-sm">Mobile health clinic for 1 village/month</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <p className="text-2xl font-extrabold mb-1">रु5,000/mo</p>
              <p className="text-white/80 text-sm">Vocational training for 20 youth/year</p>
            </div>
          </div>
          <a href="/donate?frequency=monthly" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors">
            Become a Monthly Donor
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </Container>
    </section>
  );
}