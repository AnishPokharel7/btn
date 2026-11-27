import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const googleMapsUrl = "https://www.google.com/maps/place/Parci+studio/@26.6731287,87.2384795,19z/data=!3m1!4b1!4m6!3m5!1s0x39ef6d005f3a11ad:0xde26056a652c94fd!8m2!3d26.6731275!4d87.2391232!16s%2Fg%2F11n9qwlgjh?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D";
const mapEmbedUrl = "https://maps.google.com/maps?q=26.6731275,87.2391232&hl=en&z=19&output=embed";

export function ContactMap() {
  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="contact-map-heading">
      <Container size="page">
        <SectionHeading
          id="contact-map-heading"
          label="VISIT US"
          title="Find Our Office"
          description="We're located in Itahari, Sunsari — the heart of Koshi Province. Visit us during office hours or schedule a meeting."
        />

        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          {/* Map Header */}
          <div className="p-6 border-b border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Better Tomorrow Nepal Foundation</h3>
                <p className="text-text-secondary text-sm">Parci Studio, Itahari-7, Sunsari, Koshi Province, Nepal</p>
              </div>
            </div>

            <Link
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Open in Google Maps</span>
            </Link>
          </div>

          {/* Embedded Map */}
          <div className="relative h-[400px] md:h-[500px]">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Better Tomorrow Nepal Foundation Location Map - Parci Studio, Itahari"
            />
          </div>

          {/* Directions Footer */}
          <div className="p-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-text-secondary">
            <span>Coordinates: 26.6731° N, 87.2391° E</span>
            <Link
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Itahari Bus Park', distance: '2 km', icon: '🚌' },
            { name: 'Koshi Zonal Hospital', distance: '3 km', icon: '🏥' },
            { name: 'Biratnagar Airport', distance: '25 km', icon: '✈️' },
          ].map((landmark) => (
            <div key={landmark.name} className="p-6 bg-card border border-border rounded-2xl text-center">
              <span className="text-4xl mb-3 block" aria-hidden="true">{landmark.icon}</span>
              <h4 className="font-bold text-foreground mb-1">{landmark.name}</h4>
              <p className="text-text-secondary text-sm">{landmark.distance} from our office</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}