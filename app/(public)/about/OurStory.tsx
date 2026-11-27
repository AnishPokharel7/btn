import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function OurStory() {
  const milestones = [
    { year: '2022', title: 'Foundation Established', description: 'Better Tomorrow Nepal Foundation registered with Social Welfare Council, beginning operations in Koshi Province.' },
    { year: '2023', title: 'Program Expansion', description: 'Launched Education, Health, and Women Empowerment programs across 3 provinces, reaching 25,000+ beneficiaries.' },
    { year: '2023', title: 'Strategic Partnerships', description: 'Signed MOUs with Ministry of Health, UNICEF Nepal, and Save the Children for collaborative program delivery.' },
    { year: '2024', title: 'National Scale-Up', description: 'Expanded to all 7 provinces, launched Youth Development and Environmental Sustainability programs, reached 125,000+ people.' },
    { year: '2024', title: 'Climate Resilience Initiative', description: 'Launched 3-year climate adaptation program in Karnali Province supporting 20 vulnerable mountain communities.' },
  ];

  return (
    <section id="our-story" className="w-full section-padding bg-background" aria-labelledby="our-story-heading">
      <Container size="page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative */}
          <div>
            <SectionHeading
              id="our-story-heading"
              label="OUR STORY"
              title="From Grassroots to National Impact"
              description="Our journey from a small group of passionate individuals to a nationwide force for change."
              align="left"
            />

            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
              <p>
                Better Tomorrow Nepal Foundation was born in 2022 from a simple but powerful conviction: that sustainable change in Nepal must be driven by and for the communities it serves. Our founders — a group of educators, public health professionals, and social workers — had spent decades working in international development. They saw firsthand how top-down approaches often failed to create lasting impact.
              </p>
              <p>
                They envisioned an organization that would work differently: one that puts community voices at the center of every decision, builds on local strengths rather than importing solutions, and measures success not by outputs delivered but by lives genuinely transformed.
              </p>
              <p>
                Starting with a modest education support program in Sindhupalchok district, we have grown steadily — always guided by our founding principles. Today, we operate across all seven provinces of Nepal, implementing eight integrated programs that address the interconnected challenges of poverty, inequality, and environmental degradation.
              </p>
              <p>
                But our growth has never been about scale for scale&apos;s sake. Every new program, every new district, every new partnership is evaluated against a single question: Does this empower communities to shape their own future?
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                <p className="text-3xl font-extrabold text-primary">7</p>
                <p className="text-text-secondary text-sm">Provinces</p>
              </div>
              <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                <p className="text-3xl font-extrabold text-primary">250+</p>
                <p className="text-text-secondary text-sm">Communities</p>
              </div>
              <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                <p className="text-3xl font-extrabold text-primary">125K+</p>
                <p className="text-text-secondary text-sm">Lives Touched</p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" aria-hidden="true" />

            <div className="space-y-8 pl-16">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative group animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-[-16px] top-2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 transition-all group-hover:scale-125" aria-hidden="true" />
                  <div className="absolute left-[-52px] top-2 w-36 text-right font-bold text-primary text-lg">
                    {milestone.year}
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}