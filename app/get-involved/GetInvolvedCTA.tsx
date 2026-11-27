import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Heart, Users, Gift, Building2 } from "lucide-react";

export function GetInvolvedCTA() {
  const options = [
    { icon: Heart, title: 'Volunteer', href: '#volunteer', desc: 'Give your time and skills' },
    { icon: Gift, title: 'Donate', href: '/donate', desc: 'Make a financial contribution' },
    { icon: Building2, title: 'Partner', href: '#corporate', desc: 'Corporate partnership opportunities' },
    { icon: Users, title: 'Fundraise', href: '#fundraise', desc: 'Start your own campaign' },
  ];

  return (
    <section className="w-full section-padding bg-primary relative overflow-hidden" aria-labelledby="get-involved-cta-heading">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />

      <Container size="page">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 id="get-involved-cta-heading" className="text-hero font-extrabold text-white leading-tight tracking-tight mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-white/90 text-body md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Every action counts. Every person matters. Choose your path to becoming part of the change.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {options.map((opt) => (
              <Button
                key={opt.title}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-auto py-6 flex flex-col items-center gap-2"
                asChild
              >
                <Link href={opt.href}>
                  <opt.icon className="w-7 h-7" aria-hidden="true" />
                  <span className="font-semibold">{opt.title}</span>
                  <p className="text-white/70 text-xs">{opt.desc}</p>
                </Link>
              </Button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="gap-3">
              <Link href="/get-involved#volunteer">
                <Heart className="w-5 h-5" aria-hidden="true" />
                <span>Start Volunteering</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 gap-3">
              <Link href="/donate">
                <Gift className="w-5 h-5" aria-hidden="true" />
                <span>Make a Donation</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}