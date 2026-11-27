import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { FileText, Shield } from "lucide-react";

export function TransparencyCTA() {
  return (
    <section className="w-full section-padding bg-primary relative overflow-hidden" aria-labelledby="transparency-cta-heading">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />

      <Container size="page">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 id="transparency-cta-heading" className="text-hero font-extrabold text-white leading-tight tracking-tight mb-6">
            Explore Our Full Transparency Hub
          </h2>
          <p className="text-white/90 text-body md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Access all our registration documents, audited financials, annual reports, governance policies, and third-party evaluations in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="gap-3">
              <Link href="/transparency#reports">
                <FileText className="w-5 h-5" aria-hidden="true" />
                <span>View All Reports</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 gap-3">
              <Link href="/transparency#policies">
                <Shield className="w-5 h-5" aria-hidden="true" />
                <span>Read Our Policies</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}