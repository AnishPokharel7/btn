import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { objectives } from "@/data/organization";

export function OurObjectives() {
  return (
    <section id="our-objectives" className="w-full section-padding bg-muted/30" aria-labelledby="objectives-heading">
      <Container size="page">
        <SectionHeading
          id="objectives-heading"
          label="OUR OBJECTIVES"
          title="Strategic Objectives 2024-2028"
          description="Our five-year strategic framework defines clear, measurable objectives aligned with Nepal's national development priorities and the Sustainable Development Goals."
        />

        <div className="space-y-6">
          {objectives.map((objective, index) => (
            <article
              key={objective.id}
              className="group relative p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              <div className="flex items-start gap-5 relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <span className="text-2xl font-extrabold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{objective.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{objective.description}</p>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-primary rounded-3xl text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Aligned with Global Goals</h3>
          <p className="text-white/90 mb-6 max-w-2xl">
            Our objectives directly contribute to 10 of the 17 UN Sustainable Development Goals, ensuring our work supports both national priorities and global commitments.
          </p>
          <div className="flex flex-wrap gap-2">
            {[1, 3, 4, 5, 6, 8, 10, 13, 15, 17].map((goal) => (
              <span key={goal} className="px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium">
                SDG {goal}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}