import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { approaches } from "@/data/organization";

const approachIcons: Record<string, React.ReactNode> = {
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'bar-chart': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  venus: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  handshake: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.671 16.885a4 4 0 01-5.894 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.5 7.168a1 1 0 11-2 0 1 1 0 012 0zm-2.813-1.106a2.25 2.25 0 113.182 0 2.25 2.25 0 01-3.182 0zM9.75 9.59a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
};

export function OurApproach() {
  return (
    <section id="our-approach" className="w-full section-padding bg-background" aria-labelledby="approach-heading">
      <Container size="page">
        <SectionHeading
          id="approach-heading"
          label="OUR APPROACH"
          title="How We Create Lasting Change"
          description="Our methodology is built on six pillars that ensure our programs are effective, sustainable, and truly community-owned."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <article
              key={approach.id}
              className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {approachIcons[approach.icon] || approachIcons.users}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{approach.title}</h3>
              <p className="text-text-secondary leading-relaxed">{approach.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-muted/50 rounded-2xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Our Theory of Change</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</span>
              <span>Listen & Understand</span>
            </div>
            <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</span>
              <span>Co-Design Solutions</span>
            </div>
            <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</span>
              <span>Implement Together</span>
            </div>
            <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</span>
              <span>Measure & Learn</span>
            </div>
            <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">5</span>
              <span>Scale & Sustain</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}