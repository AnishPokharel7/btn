import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, TrendingUp } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { annualHighlights } from '@/data/impact';

export function ImpactPreview() {
  const latestReport = annualHighlights[0];

  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="impact-preview-heading">
      <Container size="page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column: Map/Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-border bg-muted">
              <Image
                src="/images/environment.jpg"
                alt="Map of Nepal showing program locations"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Interactive Impact Map</h3>
                  <p className="text-white/80 text-sm mb-6 max-w-xs mx-auto">Explore our geographical reach and program locations across Nepal</p>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/impact">
                      <span>Explore Map</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Floating location pins */}
              {[
                { top: '15%', left: '20%', label: 'Koshi' },
                { top: '25%', left: '55%', label: 'Madhesh' },
                { top: '45%', left: '35%', label: 'Bagmati' },
                { top: '55%', left: '65%', label: 'Gandaki' },
                { top: '70%', left: '25%', label: 'Lumbini' },
                { top: '75%', left: '55%', label: 'Karnali' },
                { top: '85%', left: '70%', label: 'Sudurpashchim' },
              ].map((pin) => (
                <div
                  key={pin.label}
                  className="absolute flex flex-col items-center"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <div className="relative z-10">
                    <MapPin className="w-6 h-6 text-secondary drop-shadow-lg" aria-hidden="true" />
                  </div>
                  <span className="text-white/90 text-xs font-medium mt-1 whitespace-nowrap">{pin.label}</span>
                </div>
              ))}
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-card border border-border rounded-2xl p-5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.15)] max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Annual Impact</p>
                  <p className="text-text-secondary text-sm">{latestReport.year}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-muted/50 rounded-xl">
                  <p className="text-2xl font-extrabold text-primary">{latestReport.totalBeneficiaries}</p>
                  <p className="text-text-secondary text-xs">Beneficiaries</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-xl">
                  <p className="text-2xl font-extrabold text-primary">{latestReport.totalExpenditure}</p>
                  <p className="text-text-secondary text-xs">Invested</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/impact">View Full Report →</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <SectionHeading
              id="impact-preview-heading"
              label="ANNUAL HIGHLIGHTS"
              title={latestReport.title}
              description="Key achievements from our most recent fiscal year, demonstrating the depth and breadth of our impact across Nepal."
              align="left"
            />

            <div className="space-y-4 mb-8">
              {latestReport.achievements.slice(0, 4).map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="text-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" asChild>
                <Link href="/impact">
                  <span>View Full Impact Report</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/transparency#reports">Download Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}