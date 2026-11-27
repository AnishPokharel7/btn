'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DropdownProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dropdown({ trigger, content, align = 'left', open, onOpenChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const controlled = open !== undefined;

  useEffect(() => {
    if (controlled) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(open);
    }
  }, [open, controlled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onOpenChange]);

  const handleTriggerClick = () => {
    if (!controlled) {
      setIsOpen(!isOpen);
    }
    onOpenChange?.(!isOpen);
  };

  const alignStyles = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div className="relative inline-block" ref={triggerRef}>
      <div onClick={handleTriggerClick}>{trigger}</div>

      {isOpen && (
        <div
          ref={contentRef}
          className={cn(
            'absolute z-50 mt-2 w-56 origin-top-right rounded-xl bg-card border border-border shadow-lg p-1 animate-in fade-in-0 zoom-in-95 duration-150',
            alignStyles[align]
          )}
          role="menu"
        >
          {content}
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  inset?: boolean;
}

export function DropdownItem({ children, onClick, className = '', disabled = false, inset = false }: DropdownItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:bg-muted',
        disabled ? 'opacity-50 pointer-events-none' : 'hover:bg-muted',
        inset && 'pl-8',
        className
      )}
      role="menuitem"
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

interface DropdownSeparatorProps {
  className?: string;
}

export function DropdownSeparator({ className = '' }: DropdownSeparatorProps) {
  return <div className={cn('h-px bg-border my-1', className)} role="separator" />;
}

interface DropdownLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownLabel({ children, className = '' }: DropdownLabelProps) {
  return (
    <div className={cn('px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider', className)}>
      {children}
    </div>
  );
}