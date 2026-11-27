import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Shield, FileText, BarChart3, Users, Award } from "lucide-react";

export function DonateTransparency() {
  const transparencyFeatures = [
    {
      icon: Shield,
      title: 'Financial Transparency',
      description: 'Annual audited financial statements published online. 90% of funds go directly to programs.',
    },
    {
      icon: FileText,
      title: 'Impact Reporting',
      description: 'Quarterly program updates and annual impact reports with measurable outcomes and beneficiary stories.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Monitoring',
      description: 'Digital M&E systems track progress in real-time. Donors receive personalized impact dashboards.',
    },
    {
      icon: Users,
      title: 'Community Accountability',
      description: 'Social audits, community scorecards, and feedback mechanisms ensure programs meet local needs.',
    },
    {
      icon: Award,
      title: 'Independent Evaluation',
      description: 'Third-party evaluations every 2-3 years assess effectiveness, efficiency, and sustainability.',
    },
    {
      icon: FileText,
      title: 'Tax Compliance',
      description: 'Registered with IRD for tax exemption. Donation receipts issued for all contributions with PAN.',
    },
  ];

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="donate-transparency-heading">
      <Container size="page">
        <SectionHeading
          id="donate-transparency-heading"
          label="TRANSPARENCY"
          title="Your Trust, Our Responsibility"
          description="We believe transparency builds trust. Here's how we ensure every rupee is accounted for and creates maximum impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transparencyFeatures.map((feature, index) => (
            <article
              key={feature.title}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/transparency#financials"
            className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileText className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">View Financial Reports</h3>
                <p className="text-text-secondary mb-4">Audited financial statements, annual reports, and Form 990 equivalents for the last 3 years.</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-gap">
                  Download Reports
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </div>
          </a>

          <a
            href="/transparency#policies"
            className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Shield className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Organizational Policies</h3>
                <p className="text-text-secondary mb-4">Child safeguarding, gender equality, anti-corruption, whistleblower, and data protection policies.</p>
                <span className="inline-flex items-center gap-1 text-secondary font-semibold group-hover:gap-2 transition-gap">
                  View Policies
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}