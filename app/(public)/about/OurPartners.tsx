import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { partners, governanceStructure } from "@/data/organization";

export function OurPartners() {
  const partnersByType = {
    government: partners.filter(p => p.type === 'government'),
    ngo: partners.filter(p => p.type === 'ngo'),
    corporate: partners.filter(p => p.type === 'corporate'),
    academic: partners.filter(p => p.type === 'academic'),
  };

  return (
    <section id="partners" className="w-full section-padding bg-background" aria-labelledby="partners-heading">
      <Container size="page">
        <SectionHeading
          id="partners-heading"
          label="PARTNERSHIPS"
          title="Stronger Together"
          description="We believe sustainable change requires collaboration. Our partnerships span government, NGOs, private sector, and academia — each bringing unique strengths to our shared mission."
        />

        {/* Partner Logos by Category */}
        <div className="space-y-12 mb-16">
          {(Object.entries(partnersByType) as [string, typeof partners[0][]][]).map(([type, typePartners]) => (
            <div key={type} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-6 capitalize">{type} partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                {typePartners.map((partner) => (
                  <div key={partner.id} className="flex flex-col items-center gap-2 p-4 hover:bg-muted/50 rounded-xl transition-colors group">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-16 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity"
                      aria-label={partner.name}
                    >
                      <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                        <span className="text-text-secondary text-xs font-medium">{partner.name.split(' ').map(w => w[0]).join('')}</span>
                      </div>
                    </a>
                    <span className="text-xs text-text-secondary text-center max-w-[120px]">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Governance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Board */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Board of Directors
            </h3>
            <div className="space-y-3">
              {governanceStructure.board.map((member) => (
                <div key={member.name} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-text-secondary text-sm">{member.role} · {member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Council */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              Advisory Council
            </h3>
            <div className="space-y-3">
              {governanceStructure.advisoryCouncil.map((member) => (
                <div key={member.name} className="flex items-start gap-4 py-3 border-b border-border/50 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold">{member.name.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-text-secondary text-sm">{member.role}</p>
                    <p className="text-text-secondary text-xs mt-1">{member.background}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}