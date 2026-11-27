'use client';

import { X, Megaphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Announcement } from '@/types';
import { cn } from '@/lib/utils';

const announcements: Announcement[] = [
  {
    id: 'ann-1',
    text: '🌿 Climate Resilience Program launched in Karnali Province — supporting 20 vulnerable mountain communities.',
    href: '/stories/climate-resilience-karnali',
    type: 'campaign',
  },
  {
    id: 'ann-2',
    text: '📊 Annual Impact Report 2024 published — 125,000+ lives touched across 250+ communities.',
    href: '/transparency#reports',
    type: 'info',
  },
  {
    id: 'ann-3',
    text: '🤝 Join our Monthly Giving Circle — sustained support creates lasting change.',
    href: '/donate',
    type: 'campaign',
  },
];

interface AnnouncementBarProps {
  className?: string;
}

export function AnnouncementBar({ className = '' }: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);

  const activeAnnouncements = announcements.filter(a => !dismissedIds.includes(a.id));

  useEffect(() => {
    if (activeAnnouncements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeAnnouncements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeAnnouncements.length]);

  if (!isVisible || activeAnnouncements.length === 0) return null;

  const announcement = activeAnnouncements[currentIndex];

  return (
    <div
      className={cn(
        'relative w-full bg-primary/95 backdrop-blur-sm border-b border-primary/20',
        className
      )}
      role="region"
      aria-label="Announcements"
      aria-live="polite"
    >
      <div className="container-page">
        <div className="flex items-center justify-between gap-4 py-2.5">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Megaphone className="w-5 h-5 text-primary-foreground flex-shrink-0" aria-hidden="true" />
            <div className="overflow-hidden" role="status" aria-live="polite">
              <div
                className="animate-in fade-in slide-in-from-right-2 duration-300"
                key={announcement.id}
              >
                <p className="text-primary-foreground text-sm font-medium leading-snug">
                  {announcement.text}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {announcement.href && (
              <a
                href={announcement.href}
                className="text-primary-foreground hover:underline text-sm font-medium transition-colors px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30"
              >
                Learn More
              </a>
            )}

            {activeAnnouncements.length > 1 && (
              <div className="flex items-center gap-1.5" aria-label="Announcement navigation">
                {activeAnnouncements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all',
                      index === currentIndex
                        ? 'bg-primary-foreground w-6'
                        : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                    )}
                    aria-label={`Go to announcement ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            )}

            <button
              onClick={() => {
                setDismissedIds(prev => [...prev, announcement.id]);
                if (dismissedIds.length + 1 >= announcements.length) {
                  setIsVisible(false);
                } else {
                  setCurrentIndex(0);
                }
              }}
              className="p-1.5 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/20 transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}