'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';
import { Button } from '@/components/shared/Button';
import Logo from '@/public/images/logo/logo.png';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = '' }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    // Reset navigation state on route change - intentional cascading render
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setMobileSubmenu(null);
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleMouseEnter = (label: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header
      ref={navRef}
      className={cn(
        'w-full sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent',
        className
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Better Tomorrow Nepal Foundation - Home">
              <Image
                src={Logo}
                alt="Better Tomorrow Nepal Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
              <span className="hidden sm:block font-heading font-bold text-xl text-foreground">
                Better Tomorrow Nepal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
            {mainNavigation.map((link) => {
              const isDropdownOpen = openDropdown === link.label;
              const isActive = pathname === link.href;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => link.dropdown && handleMouseLeave()}
                >
                  <div className={cn(
                    'group flex items-center rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:text-foreground hover:bg-muted'
                  )}>
                    <Link
                      href={link.href}
                      className="px-4 py-2.5 text-sm font-medium rounded-xl transition-colors"
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>

                    {link.dropdown && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(isDropdownOpen ? null : link.label);
                        }}
                        className="ml-1 px-2 py-2.5 focus:outline-none text-text-secondary group-hover:text-foreground transition-colors"
                        aria-label={`Toggle ${link.label} dropdown menu`}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                      >
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-200',
                            isDropdownOpen ? 'rotate-180' : ''
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {link.dropdown && isDropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card border border-border rounded-2xl shadow-xl p-2 min-w-[200px] flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={() => handleMouseLeave()}
                      role="menu"
                    >
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-foreground hover:bg-muted rounded-xl transition-colors block whitespace-nowrap"
                          onClick={() => setOpenDropdown(null)}
                          role="menuitem"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="sm" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden items-center justify-center p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted focus:outline-none transition-all"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-4">
              <nav className="flex flex-col gap-2">
                {mainNavigation.map((link) => {
                  const isSubOpen = mobileSubmenu === link.label;
                  const isActive = pathname === link.href;

                  return (
                    <div key={link.label} className="flex flex-col gap-2">
                      <div className={cn(
                        'flex items-center justify-between rounded-xl border transition-all duration-200',
                        isActive
                          ? 'bg-primary/10 border-primary/30 text-primary font-semibold'
                          : 'border-border bg-card hover:bg-muted hover:border-primary/30 text-text-secondary font-medium'
                      )}>
                        <Link
                          href={link.href}
                          className="w-full px-4 py-3 text-base font-medium"
                          onClick={() => setIsMenuOpen(false)}
                          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {link.label}
                        </Link>

                        {link.dropdown && (
                          <button
                            type="button"
                            onClick={() => setMobileSubmenu(isSubOpen ? null : link.label)}
                            className="p-3 text-text-secondary hover:text-foreground"
                            aria-label={`Toggle ${link.label} submenu`}
                            aria-expanded={isSubOpen}
                          >
                            <ChevronDown
                              className={cn(
                                'w-5 h-5 transition-transform duration-200',
                                isSubOpen ? 'rotate-180' : ''
                              )}
                              aria-hidden="true"
                            />
                          </button>
                        )}
                      </div>

                      {link.dropdown && isSubOpen && (
                        <div className="flex flex-col gap-1.5 pl-4 pr-1 py-2 border-l-2 border-primary/20 ml-4">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="text-sm font-normal text-text-secondary hover:text-foreground bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-all"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
                </Button>
                <Button variant="primary" className="w-full" asChild>
                  <Link href="/donate" onClick={() => setIsMenuOpen(false)}>Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}