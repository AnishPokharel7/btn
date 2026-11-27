
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Heart,
  Users,
  Target,
} from 'lucide-react';

import { Button } from '@/components/shared/Button';

export function Hero() {
  const stats = [
    { value: '125K+', label: 'Lives Impacted' },
    { value: '250+', label: 'Communities' },
    { value: '8', label: 'Active Programs' },
    { value: '500+', label: 'Volunteers' },
  ];

  return (
    <section
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo/hero.png"
          alt="Community development work in Nepal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Brand Primary Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-5 w-4 h-4 bg-secondary/30 rounded-full animate-pulse" />

        <div className="absolute top-1/3 right-5 w-3 h-3 bg-secondary/40 rounded-full animate-pulse" />

        <div className="absolute bottom-1/3 left-5 w-2 h-2 bg-secondary/50 rounded-full animate-pulse" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full section-padding">
        <div className="container-page">

          {/* Main Content */}
          <div className="w-full max-w-6xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white text-label font-medium backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>

              <span>
                Empowering Communities Across Nepal Since 2022
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-hero font-extrabold text-white mb-8 max-w-full animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
            >
              Together, We Can Build{' '}
              <span className="block text-secondary">
                Better Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="text-body text-white/90 md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Empowering communities, creating opportunities, and
              building a future where everyone has the chance to
              thrive through education, healthcare, women&apos;s
              empowerment, and environmental sustainability.
            </p>

            {/* Call To Action */}
            <div className="flex flex-wrap items-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">

              <Button
                variant="secondary"
                size="lg"
                asChild
                className="gap-3"
              >
                <Link href="/programs">
                  <span>Explore Our Work</span>
                  <ArrowRight
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-3 border-white text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/donate">
                  <Heart
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span>Support Our Mission</span>
                </Link>
              </Button>
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">

              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 md:p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                  style={{
                    animationDelay: `${500 + index * 100}ms`,
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none mb-2">
                    {stat.value}
                  </div>

                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">

              {/* Registered NGO */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                  <Users
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="text-white font-bold text-base md:text-lg">
                    Registered NGO
                  </div>

                  <div className="text-white/70 text-sm">
                    Social Welfare Council
                  </div>
                </div>
              </div>

              {/* Transparent */}
              <div className="flex items-center gap-3 md:border-l md:border-white/20 md:pl-8">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                  <Target
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="text-white font-bold text-base md:text-lg">
                    Transparent
                  </div>

                  <div className="text-white/70 text-sm">
                    Audited Financials
                  </div>
                </div>
              </div>

              {/* Community Led */}
              <div className="flex items-center gap-3 md:border-l md:border-white/20 md:pl-8">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                  <Heart
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="text-white font-bold text-base md:text-lg">
                    Community-Led
                  </div>

                  <div className="text-white/70 text-sm">
                    Participatory Approach
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
