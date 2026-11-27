'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Target } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';

export function Hero() {
  const stats = [
    { value: '125K+', label: 'Lives Impacted' },
    { value: '250+', label: 'Communities' },
    { value: '8', label: 'Active Programs' },
    { value: '500+', label: 'Volunteers' },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo/hero.png"
          alt="Community development work in Nepal"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-5 w-4 h-4 bg-secondary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-5 w-3 h-3 bg-secondary/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-5 w-2 h-2 bg-secondary/50 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="relative z-20 section-padding">
        <Container size="page">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span>Empowering Communities Across Nepal Since 2022</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-hero font-extrabold text-white leading-tight tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
            >
              Together, We Can Build a
              <span className="block text-secondary">Better Tomorrow</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-body md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Empowering communities, creating opportunities, and building a future where everyone has the chance to thrive through education, healthcare, women&apos;s empowerment, and environmental sustainability.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-wrap items-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <Button size="lg" asChild className="gap-3">
                <Link href="/programs">
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10 gap-3">
                <Link href="/donate">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  <span>Support Our Mission</span>
                </Link>
              </Button>
            </div>

            {/* Impact Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 md:p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-colors"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Registered NGO</div>
                  <div className="text-white/70 text-sm">Social Welfare Council</div>
                </div>
              </div>
              <div className="flex items-center gap-3 border-l border-white/20 pl-8 ml-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Transparent</div>
                  <div className="text-white/70 text-sm">Audited Financials</div>
                </div>
              </div>
              <div className="flex items-center gap-3 border-l border-white/20 pl-8 ml-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Community-Led</div>
                  <div className="text-white/70 text-sm">Participatory Approach</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}