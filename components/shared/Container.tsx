import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'full' | 'main' | 'narrow' | 'wide' | 'page';
}

const sizeClasses = {
  full: 'w-full',
  main: 'container-page',
  narrow: 'max-w-4xl mx-auto w-full px-6 md:px-8',
  wide: 'max-w-[100rem] mx-auto w-full px-6 md:px-8',
  page: 'container-page',
};

export function Container({ children, className = '', size = 'page' }: ContainerProps) {
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}