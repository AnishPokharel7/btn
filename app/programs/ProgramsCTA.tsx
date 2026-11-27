import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Heart, Target } from "lucide-react";

export function ProgramsCTA() {
  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="programs-cta-heading">
      <Container size="page">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="programs-cta-heading" className="text-section font-extrabold text-foreground leading-tight tracking-tight mb-6">
            Want to Support a Specific Program?
          </h2>
          <p className="text-text-secondary text-body leading-relaxed mb-10">
            Your donation can be directed to the program that resonates most with you. Every rupee goes directly to program implementation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="primary" asChild className="gap-3">
              <Link href="/donate">
                <Heart className="w-5 h-5" aria-hidden="true" />
                <span>Donate to a Program</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-3">
              <Link href="/contact">
                <Target className="w-5 h-5" aria-hidden="true" />
                <span>Discuss Partnership</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}