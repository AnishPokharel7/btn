import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { organizationInfo } from "@/data/organization";

export function AboutHero() {
  return (
    <PageHero
      title="About Better Tomorrow Nepal Foundation"
      description={organizationInfo.tagline}
      image="/images/children.jpg"
      imageAlt="Children smiling together in a classroom in Nepal"
      badge="Established 2022"
    >
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#our-story"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold text-base transition-all hover:bg-white/10"
        >
          <span>Our Story</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <Link
          href="/transparency"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white/80 font-semibold text-base transition-colors hover:text-white"
        >
          View Reports
        </Link>
      </div>
    </PageHero>
  );
}