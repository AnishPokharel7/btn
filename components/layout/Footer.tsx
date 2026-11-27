import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { organizationInfo } from '@/data/organization';
import { footerNavigation, socialLinks } from '@/data/navigation';
import { Container } from '@/components/shared/Container';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />

      <Container size="page" className="relative section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="Better Tomorrow Nepal Foundation - Home">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground text-2xl font-extrabold">BTN</span>
              </div>
              <span className="font-heading font-bold text-2xl">Better Tomorrow Nepal</span>
            </Link>
            <p className="text-primary-foreground/80 text-base leading-relaxed mb-6 max-w-xs">
              {organizationInfo.tagline} — Empowering communities, creating opportunities, and building a future where everyone has the chance to thrive.
            </p>
            <div className="space-y-3 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic max-w-xs">{organizationInfo.address}</address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${organizationInfo.phone}`} className="hover:underline transition-colors">{organizationInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${organizationInfo.email}`} className="hover:underline transition-colors">{organizationInfo.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Our Programs', href: '/programs' },
                  { label: 'Our Impact', href: '/impact' },
                  { label: 'Stories & News', href: '/stories' },
                  { label: 'Get Involved', href: '/get-involved' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Our Programs</h3>
            <nav aria-label="Programs">
              <ul className="space-y-3">
                {footerNavigation.programs.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
              Subscribe to our newsletter for impact stories, program updates, and ways to get involved.
            </p>
            <NewsletterForm />
            <p className="text-primary-foreground/50 text-xs mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 my-10 lg:my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/60 text-sm">Follow us:</span>
            <div className="flex items-center gap-2">
              {[
                { href: socialLinks.facebook, label: 'Facebook', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                )},
                { href: socialLinks.twitter, label: 'Twitter', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                )},
                { href: socialLinks.instagram, label: 'Instagram', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                )},
                { href: socialLinks.linkedin, label: 'LinkedIn', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                )},
                { href: socialLinks.youtube, label: 'YouTube', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" /><path d="M10 15.811V8.383l6.314 3.714-6.314 3.714z" /></svg>
                )},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-primary-foreground/60 text-sm">
            <p>&copy; {currentYear} Better Tomorrow Nepal Foundation. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
              <Link href="/transparency" className="hover:text-secondary transition-colors">Transparency</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}