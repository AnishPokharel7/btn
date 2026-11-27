import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FileText, Shield, Award, Download } from "lucide-react";
import { transparencyDocuments } from "@/data/organization";

const registrationDocs = transparencyDocuments.filter(d => d.type === 'registration');

export function RegistrationSection() {
  return (
    <section id="registration" className="w-full section-padding bg-background" aria-labelledby="registration-heading">
      <Container size="page">
        <SectionHeading
          id="registration-heading"
          label="LEGAL REGISTRATION"
          title="Legal Standing & Registration"
          description="Official documentation establishing Better Tomorrow Nepal Foundation as a legally recognized non-governmental organization in Nepal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {registrationDocs.map((doc, index) => (
            <article
              key={doc.id}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileText className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{doc.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{doc.description}</p>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span>Year: {doc.year}</span>
                    <span>Type: Registration</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-end">
                <a
                  href={doc.url}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>View Document</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Registration Info */}
        <div className="bg-primary rounded-3xl p-6 md:p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Additional Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Social Welfare Council', desc: 'Registered under Section 13 of Social Welfare Act, 2049 (SWC-XXXXX/2022)' },
              { icon: Award, title: 'PAN & Tax Exemption', desc: 'Permanent Account Number registered with IRD. Income tax exempt under Section 11.' },
              { icon: FileText, title: 'Annual Renewal', desc: 'Annual renewal with SWC and District Administration Office. Current status: Active.' },
            ].map((cred, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0">
                  <cred.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{cred.title}</h4>
                  <p className="text-white/80 text-sm">{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}