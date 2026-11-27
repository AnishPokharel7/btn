import { PageHero } from "@/components/shared/PageHero";
import { programs } from "@/data/programs";

export function ProgramsHero() {
  return (
    <PageHero
      title="Our Programs"
      description="Eight integrated programs addressing the root causes of poverty and inequality across Nepal. Each program is designed with communities, grounded in evidence, and built for lasting impact."
      image="/images/education.jpg"
      imageAlt="Children in a classroom in Nepal"
      badge="8 Active Programs"
    >
      <div className="flex flex-wrap items-center gap-4">
        <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          {programs.filter(p => p.status === 'active').length} Active Programs
        </span>
        <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          {new Set(programs.map(p => p.category)).size} Focus Areas
        </span>
        <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          7 Provinces
        </span>
      </div>
    </PageHero>
  );
}