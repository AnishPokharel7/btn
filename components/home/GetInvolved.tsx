import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { getInvolvedOptions } from '@/data/organization';
import { Heart, Gift, Building2, Users, ArrowRight } from 'lucide-react';

const optionIcons = {
  volunteer: Heart,
  donate: Gift,
  corporate: Building2,
  fundraise: Users,
};

export function GetInvolved() {
  return (
    <section className="w-full section-padding bg-background" aria-labelledby="get-involved-heading">
      <Container size="page">
        <SectionHeading
          id="get-involved-heading"
          label="GET INVOLVED"
          title="Be Part of the Change"
          description="Your involvement — whether through time, resources, or advocacy — creates ripple effects that transform lives across Nepal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getInvolvedOptions.map((option, index) => {
            const Icon = optionIcons[option.id as keyof typeof optionIcons] || Heart;

            return (
              <article
                key={option.id}
                className="group relative p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{option.description}</p>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={option.href}>
                    <span>{option.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/get-involved">
              <span>Explore All Ways to Get Involved</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}