import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { teamMembers } from "@/data/organization";
import { Mail } from "lucide-react";

export function OurTeam() {
  return (
    <section id="our-team" className="w-full section-padding bg-muted/30" aria-labelledby="team-heading">
      <Container size="page">
        <SectionHeading
          id="team-heading"
          label="LEADERSHIP TEAM"
          title="Meet Our Leadership"
          description="A diverse team of development professionals united by a shared vision for a better Nepal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors" aria-label={`${member.name} on LinkedIn`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors" aria-label={`${member.name} on Twitter`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors" aria-label={`Email ${member.name}`}>
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">
            Our extended team includes 50+ program staff, 200+ community volunteers, and numerous consultants across Nepal.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Contact Our Team →
          </a>
        </div>
      </Container>
    </section>
  );
}