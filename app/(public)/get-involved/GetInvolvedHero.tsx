import { PageHero } from "@/components/shared/PageHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export function GetInvolvedHero() {
  return (
    <PageHero
      title="Get Involved"
      description="Your involvement — whether through time, skills, resources, or advocacy — creates ripple effects that transform lives across Nepal. Find the way that works for you."
      image="/images/children.jpg"
      imageAlt="Volunteers working with children in Nepal"
      badge="Join the Movement"
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" variant="secondary" asChild className="gap-3">
          <Link href="/donate">
            <span>Make a Donation</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 gap-3">
          <Link href="#volunteer">
            <span>Volunteer With Us</span>
          </Link>
        </Button>
      </div>
    </PageHero>
  );
}