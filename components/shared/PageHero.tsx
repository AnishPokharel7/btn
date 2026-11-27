import Image from 'next/image';
import { ReactNode } from 'react';
import { Container } from './Container';

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  title,
  description,
  image,
  imageAlt,
  badge,
  children,
  className = '',
}: PageHeroProps) {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt || ''}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/60" />
      )}

      <div className="relative z-10 section-padding">
        <Container size="page">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {badge && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium backdrop-blur-sm mb-6">
                {badge}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                {description}
              </p>
            )}
            {children}
          </div>
        </Container>
      </div>
    </section>
  );
}