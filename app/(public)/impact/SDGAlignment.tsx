import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { sdgAlignment } from "@/data/impact";

const sdgColors: Record<number, string> = {
  1: '#E5243B', 3: '#4C9F38', 4: '#C5192D', 5: '#FF3A21',
  6: '#26BDE2', 8: '#A21942', 10: '#DD1367', 13: '#3F7E44',
  15: '#56C02B', 17: '#19486A',
};

export function SDGAlignment() {
  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="sdg-heading">
      <Container size="page">
        <SectionHeading
          id="sdg-heading"
          label="SDG ALIGNMENT"
          title="Contributing to the Global Goals"
          description="Our programs directly advance 10 of the 17 UN Sustainable Development Goals, ensuring our local impact contributes to global progress."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sdgAlignment.map((sdg) => (
            <article
              key={sdg.goal}
              className="group p-4 md:p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform"
                style={{ backgroundColor: sdgColors[sdg.goal] }}
                aria-hidden="true"
              >
                <span className="text-white font-bold text-lg md:text-xl">{sdg.goal}</span>
              </div>
              <h4 className="font-bold text-foreground text-center mb-2">{sdg.title}</h4>
              <p className="text-text-secondary text-sm text-center">
                {sdg.programs.slice(0, 2).join(', ')}
                {sdg.programs.length > 2 && ` +${sdg.programs.length - 2} more`}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-primary rounded-3xl text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Measuring What Matters</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We use a comprehensive M&E framework aligned with SDG indicators to track our contribution to national and global targets.
          </p>
          <a href="/transparency#reports" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors">
            View Our SDG Mapping Report
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </Container>
    </section>
  );
}