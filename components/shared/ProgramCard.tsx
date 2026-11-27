import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Program } from '@/types';
import { CSSProperties } from 'react';

interface ProgramCardProps {
  program: Program;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
  style?: CSSProperties;
}

export function ProgramCard({ program, variant = 'default', className = '', style }: ProgramCardProps) {
  const variants = {
    default: 'group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
    featured: 'group flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5',
    compact: 'group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300',
  };

  return (
    <article className={`${variants[variant]} ${className}`} style={style}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 backdrop-blur text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            {program.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <Link
            href={program.href}
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white text-primary font-semibold text-base shadow-lg backdrop-blur transition-all hover:bg-primary hover:text-white"
          >
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          <span>{program.location}</span>
          <span className="text-border mx-1">•</span>
          <span className="capitalize">{program.status}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
          {program.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {program.shortDescription}
        </p>

        <div className="pt-4 border-t border-border">
          <Link
            href={program.href}
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors group/link"
          >
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}