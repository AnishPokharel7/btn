import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Users, Award, Scale, BookOpen, Shield } from "lucide-react";
import { governanceStructure } from "@/data/organization";

export function GovernanceSection() {
  return (
    <section id="governance" className="w-full section-padding bg-muted/30" aria-labelledby="governance-heading">
      <Container size="page">
        <SectionHeading
          id="governance-heading"
          label="GOVERNANCE"
          title="Governance Structure"
          description="Our governance model ensures strategic oversight, financial accountability, and mission alignment through an independent board and expert advisory council."
        />

        {/* Board of Directors */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Board of Directors</h3>
              <p className="text-text-secondary">Strategic oversight, fiduciary responsibility, and mission stewardship</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Role</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Expertise</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Committees</th>
                </tr>
              </thead>
              <tbody>
                {governanceStructure.board.map((member) => (
                  <tr key={member.name} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{member.name}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {member.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-text-secondary">{member.expertise}</td>
                    <td className="py-4 px-4 text-text-secondary text-sm">
                      {member.role === 'Chairperson' && 'Executive, Finance, Governance'}
                      {member.role === 'Vice Chairperson' && 'Programs, Gender, Advocacy'}
                      {member.role === 'Treasurer' && 'Finance, Audit, Risk'}
                      {member.role === 'Member Secretary' && 'Executive, Programs, Operations'}
                      {member.role === 'Member' && (member.expertise.includes('Community') ? 'Programs, Community' : member.expertise.includes('Law') ? 'Governance, Legal' : 'Programs, Health')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: 'Board Committees', items: ['Executive Committee', 'Finance & Audit Committee', 'Governance & Nominating Committee', 'Programs & Impact Committee', 'Risk & Compliance Committee'] },
              { icon: BookOpen, title: 'Governance Policies', items: ['Board Charter', 'Conflict of Interest Policy', 'Whistleblower Policy', 'Code of Conduct', 'Succession Planning'] },
              { icon: Shield, title: 'Accountability Mechanisms', items: ['Annual General Meeting', 'Independent Audit', 'Donor Reporting', 'Beneficiary Feedback', 'Government Compliance'] },
            ].map((section, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <section.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-foreground">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Council */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
              <Award className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Advisory Council</h3>
              <p className="text-text-secondary">Distinguished experts providing strategic guidance and global perspective</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governanceStructure.advisoryCouncil.map((member, index) => (
              <article
                key={member.name}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <span className="text-xl font-bold">{member.name.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                    <p className="text-secondary text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{member.background}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}