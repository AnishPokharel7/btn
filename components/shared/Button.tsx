import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

// Simple permissive type that works for both <a> and <button>
type ButtonProps = BaseButtonProps & {
  href?: string;
  asChild?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & Omit<HTMLAttributes<HTMLAnchorElement> & HTMLAttributes<HTMLButtonElement>, 'href' | 'type'>;

function getVariantStyles(variant: string): string {
  const styles: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-secondary text-secondary-foreground hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground',
    ghost: 'text-primary bg-transparent hover:bg-muted',
    destructive: 'bg-destructive text-destructive-foreground hover:shadow-lg hover:-translate-y-0.5',
  };
  return styles[variant] || styles.primary;
}

function getSizeStyles(size: string): string {
  const styles: Record<string, string> = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
  };
  return styles[size] || styles.md;
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    children,
    className = '',
    href,
    disabled,
    ...rest
  } = props;

  const isAnchor = !!href;

  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    getVariantStyles(variant),
    getSizeStyles(size),
    fullWidth && 'w-full',
    className
  );

  const renderContent = () => (
    <>
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : leftIcon ? (
        <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>
      ) : null}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>
      )}
    </>
  );

  if (isAnchor) {
    return (
      <a
        href={href}
        className={cn(baseStyles, className)}
        aria-busy={isLoading}
        aria-disabled={isLoading}
        {...rest}
      >
        {renderContent()}
      </a>
    );
  }

  const buttonType = rest.type === 'submit' || rest.type === 'reset' ? rest.type : 'button';

  return (
    <button
      type={buttonType}
      disabled={disabled || isLoading}
      className={cn(baseStyles, className)}
      aria-busy={isLoading}
      aria-disabled={isLoading}
      {...rest}
    >
      {renderContent()}
    </button>
  );
}