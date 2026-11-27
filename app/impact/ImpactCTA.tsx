import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { FileText, Download } from "lucide-react";

export function ImpactCTA() {
  return (
    <section className="w-full section-padding bg-background" aria-labelledby="impact-cta-heading">
      <Container size="page">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="impact-cta-heading" className="text-section font-extrabold text-foreground leading-tight tracking-tight mb-6">
            Explore Our Impact in Detail
          </h2>
          <p className="text-text-secondary text-body leading-relaxed mb-10">
            Download our comprehensive annual reports, financial statements, and program evaluations to see the full picture of our work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="primary" asChild className="gap-3">
              <Link href="/transparency#reports">
                <FileText className="w-5 h-5" aria-hidden="true" />
                <span>View All Reports</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-3">
              <Link href="/transparency#financials">
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>Financial Statements</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}