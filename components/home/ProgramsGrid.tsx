import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProgramCard } from '@/components/shared/ProgramCard';
import { Button } from '@/components/shared/Button';
import { programs } from '@/data/programs';

export function ProgramsGrid() {
  const featuredPrograms = programs.slice(0, 4);

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="programs-heading">
      <Container size="page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            id="programs-heading"
            label="OUR PROGRAMS"
            title="Comprehensive Programs for Lasting Impact"
            description="Eight integrated programs addressing the root causes of poverty and inequality across Nepal."
            align="left"
          />
          <Button variant="ghost" asChild>
            <Link href="/programs">View All Programs →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              variant="default"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/programs">
              <span>Explore All Programs</span>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}