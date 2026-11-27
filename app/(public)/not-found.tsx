import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Container size="narrow">
        <div className="text-center py-16">
          <h1 className="text-6xl font-extrabold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <Home className="w-5 h-5" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-200">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}