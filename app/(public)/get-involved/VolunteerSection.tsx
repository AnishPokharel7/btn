import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ArrowRight, Users, Heart, GraduationCap, Stethoscope, Leaf, Briefcase } from "lucide-react";
import Link from "next/link";

const volunteerOpportunities = [
  {
    id: 'field-volunteer',
    title: 'Field Volunteer',
    icon: Users,
    description: 'Work directly with communities on program implementation — health camps, education support, women\'s group facilitation, and environmental activities.',
    commitment: '2-4 weeks minimum',
    location: 'Field sites across Nepal',
    skills: ['Community engagement', 'Local language preferred', 'Adaptability'],
  },
  {
    id: 'skills-volunteer',
    title: 'Skills-Based Volunteer',
    icon: Briefcase,
    description: 'Contribute professional expertise — medical, educational, engineering, IT, marketing, finance, monitoring & evaluation, or research.',
    commitment: 'Project-based (1-6 months)',
    location: 'Remote or field-based',
    skills: ['Professional qualification', 'Relevant experience', 'Portfolio/CV required'],
  },
  {
    id: 'youth-volunteer',
    title: 'Youth Volunteer Corps',
    icon: GraduationCap,
    description: 'Structured program for students and recent graduates — internships, fellowship placements, and leadership development.',
    commitment: '3-12 months',
    location: 'Kathmandu office or field sites',
    skills: ['Enrolled in or recent graduate', 'Commitment to learning', 'Nepali citizenship'],
  },
  {
    id: 'health-volunteer',
    title: 'Medical Volunteer',
    icon: Stethoscope,
    description: 'Doctors, nurses, paramedics, and public health professionals for mobile clinics, health camps, and capacity building.',
    commitment: '1-4 weeks per deployment',
    location: 'Remote health posts and camps',
    skills: ['Medical license', 'Clinical experience', 'Nepal Medical Council registration'],
  },
  {
    id: 'environment-volunteer',
    title: 'Conservation Volunteer',
    icon: Leaf,
    description: 'Support afforestation, watershed management, waste management, and climate adaptation projects in ecologically sensitive areas.',
    commitment: 'Seasonal (2-8 weeks)',
    location: 'Protected areas and watersheds',
    skills: ['Environmental background preferred', 'Physical fitness', 'Outdoor experience'],
  },
  {
    id: 'remote-volunteer',
    title: 'Remote/Digital Volunteer',
    icon: Heart,
    description: 'Contribute from anywhere — content creation, translation, research, data analysis, fundraising support, and advocacy.',
    commitment: 'Flexible (5+ hours/week)',
    location: 'Anywhere (virtual)',
    skills: ['Digital literacy', 'Self-motivated', 'Reliable internet'],
  },
];

export function VolunteerSection() {
  return (
    <section id="volunteer" className="w-full section-padding bg-background" aria-labelledby="volunteer-heading">
      <Container size="page">
        <SectionHeading
          id="volunteer-heading"
          label="VOLUNTEER"
          title="Volunteer Your Time & Skills"
          description="Join 500+ volunteers making a direct impact. From field work to remote support, there's a role for everyone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerOpportunities.map((opp, index) => (
            <article
              key={opp.id}
              className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <opp.icon className="w-7 h-7" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{opp.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-5">{opp.description}</p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="w-5 h-5 text-primary" aria-hidden="true">⏱</span>
                  <span><strong>Commitment:</strong> {opp.commitment}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="w-5 h-5 text-primary" aria-hidden="true">📍</span>
                  <span><strong>Location:</strong> {opp.location}</span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="font-semibold text-foreground text-sm mb-2">Preferred Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {opp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{skill}</span>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact?subject=Volunteer Inquiry">
                  <span>Apply for This Role</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact?subject=Volunteer Inquiry">
              <span>Apply to Volunteer</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}