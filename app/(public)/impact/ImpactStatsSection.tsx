"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard } from "@/components/shared/StatCard";
import { impactStats } from "@/data/impact";

export function ImpactStatsSection() {
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
      className="w-full section-padding bg-background"
      aria-labelledby="impact-stats-heading"
    >
      <Container size="page">
        <SectionHeading
          id="impact-stats-heading"
          label="KEY METRICS"
          title="Measurable Change at Scale"
          description="Our impact is measured not just in numbers, but in the depth and sustainability of change in each community we serve."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="mt-12 p-6 md:p-8 bg-primary rounded-3xl text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Our Commitment to Measurement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold mb-2">Third-Party</p>
              <p className="text-white/80">Evaluations</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold mb-2">Annual</p>
              <p className="text-white/80">Impact Reports</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold mb-2">Real-Time</p>
              <p className="text-white/80">Monitoring</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}