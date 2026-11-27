import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ArrowRight, Building2, Handshake, Target, Leaf, Users, Lightbulb } from "lucide-react";
import Link from "next/link";

const partnershipModels = [
  {
    id: 'csr',
    title: 'CSR Partnership',
    icon: Building2,
    description: 'Align your corporate social responsibility with high-impact programs. We design customized CSR strategies that meet your business objectives and community needs.',
    features: ['Program co-design', 'Employee engagement', 'Impact reporting', 'Brand visibility'],
    cta: 'Explore CSR Partnership',
  },
  {
    id: 'employee-giving',
    title: 'Employee Giving & Volunteering',
    icon: Users,
    description: 'Engage your workforce through payroll giving, matching gifts, volunteer days, and skill-based volunteering programs that build team cohesion and purpose.',
    features: ['Payroll deduction', 'Matching gifts', 'Volunteer days', 'Skill-based volunteering'],
    cta: 'Set Up Employee Program',
  },
  {
    id: 'cause-marketing',
    title: 'Cause Marketing',
    icon: Handshake,
    description: 'Connect your brand with social impact through cause-related marketing campaigns, product partnerships, and customer engagement initiatives.',
    features: ['Campaign co-creation', 'Customer donations', 'Product partnerships', 'Joint communications'],
    cta: 'Design a Campaign',
  },
  {
    id: 'strategic-philanthropy',
    title: 'Strategic Philanthropy',
    icon: Target,
    description: 'Long-term, high-impact investments in specific thematic areas or geographies with dedicated monitoring, evaluation, and learning partnerships.',
    features: ['Multi-year commitments', 'Dedicated M&E', 'Learning partnerships', 'Systems change focus'],
    cta: 'Discuss Strategic Giving',
  },
  {
    id: 'green-partnership',
    title: 'Green & Climate Partnership',
    icon: Leaf,
    description: 'Invest in nature-based solutions, carbon offsetting, and climate resilience programs that align with your sustainability and net-zero commitments.',
    features: ['Afforestation', 'Carbon credits', 'Climate adaptation', 'ESG reporting'],
    cta: 'Explore Climate Action',
  },
  {
    id: 'innovation-partnership',
    title: 'Innovation Partnership',
    icon: Lightbulb,
    description: 'Co-create and pilot innovative solutions for development challenges — from digital health tools to climate-smart agriculture and ed-tech.',
    features: ['R&D collaboration', 'Pilot funding', 'Scale-up support', 'Knowledge sharing'],
    cta: 'Partner on Innovation',
  },
];

export function CorporateSection() {
  return (
    <section id="corporate" className="w-full section-padding bg-background" aria-labelledby="corporate-heading">
      <Container size="page">
        <SectionHeading
          id="corporate-heading"
          label="CORPORATE PARTNERSHIPS"
          title="Partner With Purpose"
          description="Join leading companies investing in Nepal's future. We offer tailored partnership models that deliver measurable social impact and business value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipModels.map((model, index) => (
            <article
              key={model.id}
              className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <model.icon className="w-7 h-7" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{model.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-5">{model.description}</p>

              <ul className="space-y-2 mb-6">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact?subject=Corporate Partnership">
                  <span>{model.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-primary rounded-3xl text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Current Corporate Partners</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We&apos;re proud to partner with forward-thinking companies committed to Nepal&apos;s sustainable development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/70 font-medium">
            <span>Ncell Axiata</span>
            <span>Standard Chartered Bank</span>
            <span>Himalayan Bank</span>
            <span>Chaudhary Group</span>
            <span>Dabur Nepal</span>
          </div>
          <Button variant="outline" size="lg" className="mt-8 border-white text-white hover:bg-white/10" asChild>
            <Link href="/contact?subject=Corporate Partnership">
              <span>Become a Corporate Partner</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}