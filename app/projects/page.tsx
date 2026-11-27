import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Featured Projects | BTN Organization",
  description:
    "Discover our ongoing and successfully completed field projects across the country, creating real change in rural communities.",
};

interface Project {
  id: string;
  location: string;
  title: string;
  description: string;
  image: string;
  status: "Ongoing" | "Completed";
  progress: number;
  budget: string;
  beneficiaries: string;
}

const projects: Project[] = [
  {
    id: "rural-smart-school",
    location: "EASTERN DISTRICT",
    title: "Rural Smart School Initiative",
    description:
      "Building solar-powered computer labs and libraries for 12 rural primary schools.",
    image: "/images/school.jpg",
    status: "Ongoing",
    progress: 0,
    budget: "Budget: 00",
    beneficiaries: "0 Beneficiaries",
  },
  {
    id: "safe-drinking-water",
    location: "NORTHERN PLAINS",
    title: "Safe Drinking Water Access",
    description:
      "Installing deep tube wells and solar filtration systems in drought-prone remote villages.",
    image: "/images/water.jpg",
    status: "Ongoing",
    progress: 0,
    budget: "Budget: 0",
    beneficiaries: "0 Beneficiaries",
  },
  {
    id: "green-hills-afforestation",
    location: "SOUTHERN HILLS",
    title: "Green Hills Afforestation",
    description:
      "Planted over 0 native saplings with community involvement to prevent soil erosion.",
    image: "/images/environment.jpg",
    status: "Completed",
    progress: 0,
    budget: "Budget: 0",
    beneficiaries: "Entire Community",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">
      {/* Featured Projects Section */}
      <section className="w-full section-padding">
        <Container size="page">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <span className="text-primary font-bold tracking-wider text-xs sm:text-sm uppercase block mb-2 sm:mb-3">
              OUR TRACK RECORD
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight leading-tight mb-4">
              Featured Projects
            </h1>
            <p className="text-text-secondary text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
              Discover our ongoing and successfully completed field projects across
              the country.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Card Top Image with Status Badge */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        project.status === "Ongoing"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 bg-card justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-primary font-bold text-xs tracking-wider uppercase mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-2.5 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Progress & Stats Area */}
                  <div className="pt-2">
                    {/* Progress Bar Header */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-text-secondary">Progress</span>
                      <span className="font-semibold text-foreground">
                        {project.progress}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mb-5">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between text-xs text-text-secondary font-medium pt-3 border-t border-border">
                      <span>{project.budget}</span>
                      <span className="font-semibold text-foreground">
                        {project.beneficiaries}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
