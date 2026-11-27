import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { organizationInfo } from "@/data/organization";

export function MissionVision() {
  return (
    <section id="mission-vision" className="w-full section-padding bg-muted/30" aria-labelledby="mission-vision-heading">
      <Container size="page">
        <SectionHeading
          id="mission-vision-heading"
          label="MISSION & VISION"
          title="Our Guiding Star"
          description="The north star that guides every decision, every program, and every partnership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <article className="relative bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" aria-hidden="true" />
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span>Our Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                An Equitable Nepal for Every Individual
              </h2>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 flex-1">
                {organizationInfo.vision}
              </p>

              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</span>
                  Universal access to quality education and healthcare
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</span>
                  Economic opportunity regardless of gender or geography
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</span>
                  Healthy environments and climate-resilient communities
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</span>
                  Dignity, voice, and agency for all citizens
                </li>
              </ul>
            </div>
          </article>

          {/* Mission Card */}
          <article className="relative bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span>Our Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-6">
              Empowering Communities Through Sustainable Action
            </h2>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
              {organizationInfo.mission}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Community-Led Development', desc: 'Communities identify priorities and lead implementation' },
                { title: 'Evidence-Based Programs', desc: 'Interventions grounded in data and global best practices' },
                { title: 'Systems Strengthening', desc: 'Building government and local capacity for sustainability' },
                { title: 'Gender-Transformative', desc: 'Addressing root causes of inequality at all levels' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-xl hover:bg-primary/5 hover:border-primary/20 border border-border transition-colors">
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}