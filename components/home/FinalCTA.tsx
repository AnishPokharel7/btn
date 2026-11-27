import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';
import { Heart, Users, Target } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="w-full section-padding bg-primary relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />

      <Container size="page">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span>Join the Movement</span>
          </div>

          <h2 id="final-cta-heading" className="text-hero font-extrabold text-white leading-tight tracking-tight mb-6">
            Be Part of the Change
          </h2>

          <p className="text-white/90 text-body md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Every contribution matters. Whether you donate, volunteer, partner, or advocate — you become part of a movement that&apos;s building a better tomorrow for communities across Nepal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" variant="secondary" asChild className="gap-3">
              <Link href="/donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                <span>Support Our Mission</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 gap-3">
              <Link href="/contact">
                <Users className="w-5 h-5" aria-hidden="true" />
                <span>Contact Our Team</span>
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>8 Active Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>125K+ Lives Impacted</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>500+ Volunteers</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}