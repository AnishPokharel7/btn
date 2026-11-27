'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { StatCard } from '@/components/shared/StatCard';
import { impactStats, impactByRegion } from '@/data/impact';

export function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full section-padding bg-muted/50"
      aria-labelledby="impact-heading"
    >
      <Container size="page">
        <SectionHeading
          id="impact-heading"
          label="OUR IMPACT"
          title="Measurable Change Across Nepal"
          description="Numbers tell part of the story. Behind every statistic is a life transformed, a community strengthened, and hope restored."
        />

        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              variant="large"
              animate={isVisible}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {/* Geographic Reach */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Where We Work</h3>
              <p className="text-text-secondary text-sm mt-1">Active across all 7 provinces of Nepal</p>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>7 Provinces</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Province</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Districts</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Beneficiaries</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Key Programs</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Highlight</th>
                </tr>
              </thead>
              <tbody>
                {impactByRegion.map((region) => (
                  <tr key={region.province} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{region.province}</td>
                    <td className="py-4 px-4 text-center text-text-secondary">{region.districts}</td>
                    <td className="py-4 px-4 text-center font-semibold text-primary">{region.beneficiaries}</td>
                    <td className="py-4 px-4 text-text-secondary">
                      <div className="flex flex-wrap gap-1.5">
                        {region.programs.map((p) => (
                          <span key={p} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">{p}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-text-secondary text-sm">{region.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}