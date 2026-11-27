'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { testimonials } from '@/data/stories';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section className="w-full section-padding bg-primary relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" aria-hidden="true" />

      <Container size="page">
        <SectionHeading
          id="testimonials-heading"
          label="TESTIMONIALS"
          title="What Communities Say About Us"
          description="Real voices from the people whose lives have been touched by our work."
          className="mb-12"
          labelClassName="bg-white/15 text-white border border-white/20"
          titleClassName="text-white"
          descriptionClassName="text-white/80"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="list"
              aria-label="Testimonials"
            >
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className="w-full flex-shrink-0 px-4"
                  role="listitem"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <article className="bg-card/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-secondary" aria-hidden="true" />
                    </div>

                    <blockquote className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                      {t.image && (
                        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden shrink-0 relative">
                          <Image
                            src={t.image}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                            aria-hidden="true"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <div className="font-bold text-white">{t.author}</div>
                        <div className="text-white/70 text-sm">{t.role}</div>
                        <div className="text-white/60 text-xs">{t.location}</div>
                        <div className="text-secondary text-xs mt-1">{t.program}</div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all',
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  )}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}