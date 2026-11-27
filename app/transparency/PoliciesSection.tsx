import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FileText, Download, Shield, Users, Scale, Lock, Calendar } from "lucide-react";
import { transparencyDocuments } from "@/data/organization";

const policies = transparencyDocuments.filter(d => d.type === 'policy');

export function PoliciesSection() {
  const policyCategories = [
    {
      title: 'Safeguarding & Protection',
      icon: Shield,
      policies: policies.filter(p => p.title.includes('Safeguarding') || p.title.includes('Child')),
    },
    {
      title: 'Equity & Inclusion',
      icon: Users,
      policies: policies.filter(p => p.title.includes('Gender') || p.title.includes('Inclusion')),
    },
    {
      title: 'Integrity & Ethics',
      icon: Scale,
      policies: policies.filter(p => p.title.includes('Corruption') || p.title.includes('Fraud') || p.title.includes('Whistleblower') || p.title.includes('Conduct')),
    },
    {
      title: 'Data & Privacy',
      icon: Lock,
      policies: policies.filter(p => p.title.includes('Data') || p.title.includes('Privacy')),
    },
  ];

  return (
    <section id="policies" className="w-full section-padding bg-background" aria-labelledby="policies-heading">
      <Container size="page">
        <SectionHeading
          id="policies-heading"
          label="ORGANIZATIONAL POLICIES"
          title="Policies & Frameworks"
          description="Our comprehensive policy framework ensures ethical operations, protects vulnerable populations, and maintains the highest standards of organizational integrity."
        />

        <div className="space-y-12">
          {policyCategories.map((category, catIndex) => (
            <div key={category.title} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${catIndex * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <category.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.policies.map((doc) => (
                  <article
                    key={doc.id}
                    className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1">{doc.title}</h4>
                        <p className="text-text-secondary text-sm">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" /> {doc.year}</span>
                    </div>
                    <a
                      href={doc.url}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Policy
                      <Download className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Policy Development Process */}
        <div className="mt-16 p-6 md:p-8 bg-primary rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-6">Policy Development & Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, icon: Users, title: 'Stakeholder Consultation', desc: 'Staff, beneficiaries, partners, and experts consulted' },
              { step: 2, icon: FileText, title: 'Drafting & Legal Review', desc: 'Drafted by policy team, reviewed by legal counsel' },
              { step: 3, icon: Shield, title: 'Board Approval', desc: 'Approved by Board Governance Committee' },
              { step: 4, icon: Calendar, title: 'Annual Review Cycle', desc: 'All policies reviewed annually or as regulations change' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}