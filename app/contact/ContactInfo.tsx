import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react";
import { organizationInfo } from "@/data/organization";

export function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: 'Our Office',
      lines: [
        organizationInfo.address,
        'Sunsari, Koshi Province, Nepal',
      ],
      href: 'https://maps.google.com/maps?q=26.6731275,87.2391232',
      hrefLabel: 'Open in Maps',
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: [
        'contact@bettertomorrownepal.org',
        'info@bettertomorrownepal.org',
        'donations@bettertomorrownepal.org',
        'volunteer@bettertomorrownepal.org',
      ],
      href: 'mailto:contact@bettertomorrownepal.org',
      hrefLabel: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: [
        organizationInfo.phone,
        'Available on WhatsApp',
      ],
      href: `tel:${organizationInfo.phone}`,
      hrefLabel: 'Call Now',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      lines: [
        'Sunday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: Closed',
        'Field Work: Active on Weekends',
      ],
    },
  ];

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="contact-info-heading">
      <Container size="page">
        <SectionHeading
          id="contact-info-heading"
          label="CONTACT INFORMATION"
          title="Get in Touch"
          description="Multiple ways to reach us — choose what works best for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <article
              key={item.title}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>

              <div className="space-y-1 text-text-secondary leading-relaxed mb-5">
                {item.lines.map((line, i) => (
                  <p key={i} className={i === 0 ? 'font-medium text-foreground' : ''}>{line}</p>
                ))}
              </div>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline transition-colors"
                >
                  <span>{item.hrefLabel}</span>
                  <Globe className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Social Links */}
        <div className="bg-primary rounded-3xl p-6 md:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Stay connected with real-time updates, impact stories, and community voices from across Nepal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Facebook', icon: '📘' },
              { label: 'Twitter', icon: '🐦' },
              { label: 'Instagram', icon: '📷' },
              { label: 'LinkedIn', icon: '💼' },
              { label: 'YouTube', icon: '▶️' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 border border-white/20 text-white hover:bg-white/25 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <span aria-hidden="true">{social.icon}</span>
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}