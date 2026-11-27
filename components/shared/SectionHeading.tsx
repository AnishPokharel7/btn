import { ReactNode } from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  action?: ReactNode;
  id?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
  labelClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  action,
  id,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      {label && (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 ${labelClassName}`}>
          {label}
        </span>
      )}
      <h2 id={id} className={`font-heading font-bold tracking-tight leading-tight mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-text-secondary leading-relaxed max-w-2xl ${descriptionClassName}`}>
          {description}
        </p>
      )}
      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}