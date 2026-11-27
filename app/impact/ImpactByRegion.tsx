import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { impactByRegion } from "@/data/impact";
import { MapPin, TrendingUp } from "lucide-react";

export function ImpactByRegion() {
  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="impact-region-heading">
      <Container size="page">
        <SectionHeading
          id="impact-region-heading"
          label="GEOGRAPHICAL REACH"
          title="Where We Work"
          description="Active across all 7 provinces of Nepal, with deep community presence in 250+ communities."
        />

        <div className="overflow-x-auto">
          <table className="w-full" role="table">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Province</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Districts</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Beneficiaries</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Active Programs</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Flagship Initiative</th>
              </tr>
            </thead>
            <tbody>
              {impactByRegion.map((region) => (
                <tr key={region.province} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                    {region.province}
                  </td>
                  <td className="py-4 px-4 text-center text-text-secondary">{region.districts}</td>
                  <td className="py-4 px-4 text-center font-semibold text-primary">{region.beneficiaries}</td>
                  <td className="py-4 px-4 text-text-secondary">
                    <div className="flex flex-wrap gap-1.5">
                      {region.programs.map((p) => (
                        <span key={p} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">{p}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <TrendingUp className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span>{region.highlight}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Deep Community Engagement', desc: 'Multi-year presence in 250+ communities with local staff and volunteers' },
            { title: 'Government Partnership', desc: 'MOUs with provincial and local governments for coordinated service delivery' },
            { title: 'Local Capacity Building', desc: 'Training community leaders, health volunteers, and teachers for sustainability' },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-card border border-border rounded-2xl">
              <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}