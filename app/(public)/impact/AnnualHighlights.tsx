import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { annualHighlights } from "@/data/impact";

export function AnnualHighlights() {
  return (
    <section className="w-full section-padding bg-background" aria-labelledby="annual-highlights-heading">
      <Container size="page">
        <SectionHeading
          id="annual-highlights-heading"
          label="ANNUAL HIGHLIGHTS"
          title="Year-by-Year Progress"
          description="Tracking our growth and deepening impact since our founding in 2022."
        />

        <div className="space-y-8">
          {annualHighlights.map((year, index) => (
            <article
              key={year.year}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="lg:col-span-1">
                <div className="text-center md:text-left">
                  <p className="text-5xl font-extrabold text-primary mb-2">{year.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-4">{year.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-2xl font-extrabold text-primary">{year.totalBeneficiaries}</p>
                      <p className="text-text-secondary text-sm">Total Beneficiaries</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-2xl font-extrabold text-primary">{year.totalExpenditure}</p>
                      <p className="text-text-secondary text-sm">Total Investment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="font-bold text-foreground mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {year.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-text-secondary leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/transparency#reports" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            View All Annual Reports →
          </a>
        </div>
      </Container>
    </section>
  );
}