import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FileText, Download, DollarSign, TrendingUp, Shield, Calendar } from "lucide-react";
import { transparencyDocuments } from "@/data/organization";

const financialDocs = transparencyDocuments.filter(d => d.type === 'financial-report');

export function FinancialReportsSection() {
  return (
    <section id="financials" className="w-full section-padding bg-background" aria-labelledby="financials-heading">
      <Container size="page">
        <SectionHeading
          id="financials-heading"
          label="FINANCIAL REPORTS"
          title="Audited Financial Statements"
          description="Independent auditor's reports and financial statements demonstrating fiscal responsibility and transparency in fund utilization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {financialDocs.map((doc, index) => (
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
                    <span className="flex items-center gap-1"><Shield className="w-4 h-4" aria-hidden="true" /> Independently Audited</span>
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
                  <span>Download PDF</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Financial Highlights */}
        <div className="bg-primary rounded-3xl p-6 md:p-8 text-white">
          <h3 className="text-2xl font-bold mb-8">Financial Highlights (FY 2024)</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: DollarSign, label: 'Total Revenue', value: 'NPR 85M', change: '+18% YoY' },
              { icon: TrendingUp, label: 'Program Expenses', value: 'NPR 72M', change: '85% of total' },
              { icon: Shield, label: 'Admin & Fundraising', value: 'NPR 13M', change: '15% of total' },
              { icon: FileText, label: 'Reserves', value: 'NPR 25M', change: '4 months operating' },
            ].map((metric, index) => (
              <div key={index} className="p-4 bg-white/10 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                    <metric.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-white/80 text-sm">{metric.label}</span>
                </div>
                <p className="text-2xl font-extrabold">{metric.value}</p>
                <p className="text-white/70 text-xs">{metric.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Revenue Sources', items: ['Individual Donations (45%)', 'Corporate Partnerships (25%)', 'Institutional Grants (20%)', 'Government Contracts (10%)'] },
              { title: 'Expense Allocation', items: ['Program Services (85%)', 'Management & General (10%)', 'Fundraising (5%)'] },
              { title: 'Financial Standards', items: ['Nepal Accounting Standards (NAS)', 'IFRS for NPOs Compliance', 'SWC Financial Guidelines', 'Annual Independent Audit'] },
            ].map((section, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-xl">
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" aria-hidden="true" />
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