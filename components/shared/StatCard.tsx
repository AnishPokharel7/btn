import { ReactNode, CSSProperties } from 'react';
import type { ImpactStat } from '@/types';

interface StatCardProps {
  stat: ImpactStat;
  variant?: 'default' | 'large' | 'minimal';
  className?: string;
  animate?: boolean;
  style?: CSSProperties;
}

export function StatCard({ stat, variant = 'default', className = '', animate = false, style }: StatCardProps) {
  const variants = {
    default: 'text-center p-6 sm:p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300',
    large: 'text-center p-8 sm:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300',
    minimal: 'text-center p-4',
  };

  return (
    <div className={`${variants[variant]} ${className}`} style={style}>
      {stat.icon && (
        <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary mx-auto mb-4 ${animate ? 'animate-in zoom-in-95 duration-500' : ''}`}>
          <span className="text-2xl sm:text-3xl" aria-hidden="true">
            {getIconComponent(stat.icon)}
          </span>
        </div>
      )}
      <div className="mb-2">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-none tracking-tight" aria-label={`${stat.value} ${stat.suffix || ''}`}>
          {stat.value}
          {stat.suffix && <span className="text-secondary">{stat.suffix}</span>}
        </span>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
        {stat.label}
      </h3>
      {stat.description && (
        <p className="text-text-secondary text-sm leading-relaxed">
          {stat.description}
        </p>
      )}
    </div>
  );
}

function getIconComponent(iconName: string): ReactNode {
  const icons: Record<string, ReactNode> = {
    users: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    home: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
      </svg>
    ),
    target: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    heart: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    leaf: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    book: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    'heart-pulse': (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.731 5.61A12.062 12.062 0 0112 21.75 12.062 12.062 0 012.269 5.61m14.146 12.3a.75.75 0 01-1.06 1.06l-3.076-3.077a2.25 2.25 0 00-3.182 0l-2.32 2.32a.75.75 0 11-1.06-1.06l3-3a3.75 3.75 0 015.304 0l3 3a.75.75 0 11-1.06 1.06l-2.32-2.32a2.25 2.25 0 00-3.182 0l-3.076 3.077a.75.75 0 01-1.06-1.06z" />
      </svg>
    ),
    'graduation-cap': (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    tree: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20m0-20l-5 5m10-5l5 5" />
      </svg>
    ),
    package: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  };

  return icons[iconName] || icons.users;
}