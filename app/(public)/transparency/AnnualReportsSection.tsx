import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FileText, Download, Calendar, TrendingUp, Users, Heart, Target } from "lucide-react";
import { transparencyDocuments } from "@/data/organization";

const annualReports = transparencyDocuments.filter(d => d.type === 'annual-report');

export function AnnualReportsSection() {
  return (
    <section id="reports" className="w-full section-padding bg-muted/30" aria-labelledby="reports-heading">
      <Container size="page">
        <SectionHeading
          id="reports-heading"
          label="ANNUAL REPORTS"
          title="Annual Impact Reports"
          description="Comprehensive yearly reports detailing our programs, impact, governance, financials, and strategic direction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {annualReports.map((doc, index) => (
            <article
              key={doc.id}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileText className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{doc.title}</h3>
                  <p className="text-text-secondary text-sm mb-3">{doc.description}</p>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" /> FY {doc.year}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" aria-hidden="true" /> 125K+ Beneficiaries</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href={doc.url}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Read Report</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Report Contents Preview */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8">What&apos;s Inside Our Annual Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Strategic Overview', items: ['Mission progress', 'Strategic priorities', 'Year ahead'] },
              { icon: TrendingUp, title: 'Program Impact', items: ['Key metrics', 'Beneficiary stories', 'Geographic reach'] },
              { icon: Heart, title: 'Community Voices', items: ['Testimonials', 'Case studies', 'Partner perspectives'] },
              { icon: FileText, title: 'Financial Summary', items: ['Revenue breakdown', 'Expense allocation', 'Audit opinion'] },
            ].map((section, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <section.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{section.title}</h4>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}