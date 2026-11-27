import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Heart, Users } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="w-full section-padding bg-primary relative overflow-hidden" aria-labelledby="about-cta-heading">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />

      <Container size="page">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 id="about-cta-heading" className="text-hero font-extrabold text-white leading-tight tracking-tight mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/90 text-body md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Join us in building a better tomorrow for communities across Nepal. Whether you partner, volunteer, or donate — your involvement creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="gap-3">
              <Link href="/get-involved">
                <Heart className="w-5 h-5" aria-hidden="true" />
                <span>Get Involved</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 gap-3">
              <Link href="/donate">
                <Users className="w-5 h-5" aria-hidden="true" />
                <span>Support Our Work</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}