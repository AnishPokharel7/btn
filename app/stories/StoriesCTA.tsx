'use client';

import { useState } from 'react';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';
import { ArrowRight } from 'lucide-react';

export function StoriesCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="w-full section-padding bg-primary relative overflow-hidden" aria-labelledby="stories-cta-heading">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />

      <Container size="page">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 id="stories-cta-heading" className="text-hero font-extrabold text-white leading-tight tracking-tight mb-6">
            Don&apos;t Miss a Story
          </h2>
          <p className="text-white/90 text-body md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter for monthly impact stories, program updates, and exclusive content delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <label htmlFor="stories-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="stories-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              required
              disabled={status === 'submitting'}
            />
            <Button variant="secondary" type="submit" className="gap-2" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </>
              ) : status === 'success' ? (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Subscribed!
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
          <p className="text-white/60 text-sm mt-4">No spam. Unsubscribe anytime. <a href="/privacy" className="underline hover:text-white">Privacy Policy</a></p>
        </div>
      </Container>
    </section>
  );
}