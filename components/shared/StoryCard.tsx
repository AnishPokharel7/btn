import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import type { Story, NewsItem } from '@/types';
import { CSSProperties } from 'react';

interface StoryCardProps {
  story: Story | NewsItem;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
  className?: string;
  style?: CSSProperties;
}

export function StoryCard({ story, variant = 'default', className = '', style }: StoryCardProps) {
  const isNews = 'category' in story && !('authorRole' in story);
  const date = new Date(story.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const variants = {
    default: 'group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300',
    featured: 'group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300',
    compact: 'group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300',
    horizontal: 'group flex flex-col sm:flex-row bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300',
  };

  if (variant === 'featured') {
    return (
      <article className={`${variants.featured} ${className}`} style={style}>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 backdrop-blur text-primary-foreground text-xs font-semibold uppercase tracking-wider">
              {story.category}
            </span>
          </div>
        </div>
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {story.readTime}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            <Link href={`/stories/${story.slug}`} className="hover:text-secondary transition-colors">
              {story.title}
            </Link>
          </h2>
          <p className="text-white/90 text-base leading-relaxed mb-6 max-w-xl">
            {story.excerpt}
          </p>
          <Link
            href={`/stories/${story.slug}`}
            className="inline-flex items-center gap-2 text-white font-semibold text-base hover:text-secondary transition-colors group w-fit"
          >
            <span>Read Full Story</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article className={`${variants.horizontal} ${className}`} style={style}>
        <div className="relative w-full sm:w-72 sm:flex-shrink-0 aspect-[4/3] overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            sizes="(max-width: 640px) 100vw, 288px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                {story.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                {date}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
              <Link href={`/stories/${story.slug}`}>{story.title}</Link>
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
              {story.excerpt}
            </p>
          </div>
          <div className="pt-4 border-t border-border">
            <Link
              href={`/stories/${story.slug}`}
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors group/link"
            >
              <span>Read More</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`${variants[variant]} ${className}`} style={style}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 backdrop-blur text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            {story.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {story.readTime}
          </span>
          {isNews && 'author' in story && (
            <span>{story.author}</span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
          <Link href={`/stories/${story.slug}`}>{story.title}</Link>
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {story.excerpt}
        </p>

        <Link
          href={`/stories/${story.slug}`}
          className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors group/link mt-auto"
        >
          <span>Read More</span>
          <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}