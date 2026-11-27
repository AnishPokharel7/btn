import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, Target, Award } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { coreValues } from '@/data/organization';

export function AboutPreview() {
  return (
    <section className="w-full section-padding bg-background" aria-labelledby="about-heading">
      <Container size="page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionHeading
              label="WHO WE ARE"
              title="Paving the Way for a Brighter, Sustainable Future"
              description="Established in 2022, Better Tomorrow Nepal Foundation started as a grassroots initiative by educators and social workers. Today, we operate across multiple provinces, implementing programs that address core systemic challenges in education, healthcare, women's empowerment, and environmental sustainability."
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Our Vision</h4>
                  <p className="text-text-secondary text-xs mt-1">An equitable Nepal where every individual has access to opportunities, dignity, and a healthy environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Our Mission</h4>
                  <p className="text-text-secondary text-xs mt-1">To empower vulnerable communities through education, healthcare, and sustainable environmental practices.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/about">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/transparency">
                  View Our Reports
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-border bg-muted">
              <Image
                src="/images/children.jpg"
                alt="Children smiling together in a classroom in Nepal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Value Card */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-card border border-border rounded-2xl p-5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.15)] max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Core Values</p>
                  <p className="text-text-secondary text-sm">Guiding everything we do</p>
                </div>
              </div>
              <ul className="space-y-2">
                {coreValues.slice(0, 3).map((value) => (
                  <li key={value.id} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    {value.title}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" size="sm" className="mt-3 w-full" asChild>
                <Link href="/about#core-values">View All Values →</Link>
              </Button>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.2)] animate-in fade-in slide-in-from-top-4 duration-500 delay-200">
              <p className="text-3xl font-extrabold leading-none">8</p>
              <p className="text-primary-foreground/80 text-sm font-medium">Active Programs</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}