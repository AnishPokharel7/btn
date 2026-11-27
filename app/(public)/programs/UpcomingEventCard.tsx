"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  Heart,
  Share2,
  Check,
  Users,
  ArrowRight,
  Maximize2,
  X,
  ShieldCheck,
  Award,
  Clock,
} from "lucide-react";

export interface EventData {
  id: string;
  title: string;
  badgeText: string;
  category: string;
  quote: string;
  date: string;
  location: string;
  city: string;
  organizer: string;
  image: string;
  description: string;
  highlights: {
    title: string;
    description: string;
    icon: "heart" | "award" | "shield";
  }[];
  registrationUrl: string;
}

export const defaultUpcomingEvent: EventData = {
  id: "blood-donation-itahari",
  title: "Blood Donation Program",
  badgeText: "Upcoming Drive",
  category: "Healthcare Initiative",
  quote: "Raise our hand together for a better Tomorrow.",
  date: "Organizing Soon",
  location: "Itahari, Sunsari",
  city: "Koshi Province, Nepal",
  organizer: "Better Tomorrow Nepal Foundation",
  image: "/images/upevent.png",
  description:
    "Join our community blood donation drive in Itahari. A single donation can give someone a second chance at life and save up to 3 precious lives.",
  highlights: [
    {
      title: "Save Up to 3 Lives",
      description:
        "One single blood donation separates into critical red cells, platelets, and plasma.",
      icon: "heart",
    },
    {
      title: "Second Chance at Life",
      description:
        "Directly assists local emergency trauma victims, maternal care, and surgical patients.",
      icon: "shield",
    },
    {
      title: "Be a Community Hero",
      description:
        "Receive donor certification and health checkup by certified medical volunteers.",
      icon: "award",
    },
  ],
  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfV39BVLOhuJ2iFS3WWAcaZPGFVyWatiUU6HQ-Gp0CGMejv5g/viewform",
};

interface UpcomingEventCardProps {
  event?: EventData;
  className?: string;
}

export default function UpcomingEventCard({
  event = defaultUpcomingEvent,
  className = "",
}: UpcomingEventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback if clipboard API fails
      }
    }
  };

  return (
    <>
      <div
        className={`w-full bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Event Poster with Badges & Preview */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 p-6 sm:p-8 flex flex-col items-center justify-center overflow-hidden group">
            {/* Background ambient glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none" />

            {/* Poster Frame Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                className="object-cover object-top"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Floating Badge on Poster */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-bold tracking-wide uppercase shadow-lg border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  {event.badgeText}
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-medium border border-white/15">
                  <MapPin className="w-3 h-3 text-secondary" />
                  {event.location.split(",")[0]}
                </span>
              </div>

              {/* Bottom Quick Overlay Action */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-primary text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-primary" />
                  <span>View Full Poster</span>
                </button>
              </div>
            </div>

            <p className="text-white/60 text-xs mt-4 text-center hidden sm:block">
              Click poster or button above to expand high-resolution view
            </p>
          </div>

          {/* Right Column: Event Details & Content */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-card">
            <div>
              {/* Header Badges & Category */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide uppercase">
                  {event.category}
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  Open for Volunteers
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Free Health Screening
                </span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold text-foreground tracking-tight leading-tight mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h2>

              <p className="text-secondary font-semibold italic text-sm sm:text-base mb-4 flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-secondary" />
                &ldquo;{event.quote}&rdquo;
              </p>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Key Event Metadata Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary block">
                      Date &amp; Schedule
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">
                      {event.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">
                      {event.location}, {event.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100/80 text-rose-600 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary block">
                      Impact Target
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">
                      100+ Donors &bull; Save 300+ Lives
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-muted text-foreground flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary block">
                      Organizer
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">
                      {event.organizer}
                    </span>
                  </div>
                </div>
              </div>

              {/* Three Impact Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {event.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-muted/30 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {item.icon === "heart" && (
                        <Heart className="w-4 h-4 text-rose-600 fill-rose-100" />
                      )}
                      {item.icon === "shield" && (
                        <ShieldCheck className="w-4 h-4 text-primary" />
                      )}
                      {item.icon === "award" && (
                        <Award className="w-4 h-4 text-secondary" />
                      )}
                      <h4 className="text-xs font-bold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 pt-4 border-t border-border">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Register as Donor / Volunteer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all hover:border-primary/40 cursor-pointer"
                >
                  <span>Contact Coordinator</span>
                </Link>
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-text-secondary hover:text-foreground transition-all cursor-pointer"
                  title="Share event link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">
                        Link Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-primary" />
                      <span>Share Event</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High Resolution Poster Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-primary rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold uppercase">
                  {event.badgeText}
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base truncate">
                  {event.title} — Official Poster
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image Container */}
            <div className="relative w-full flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/60 min-h-[420px] max-h-[70vh]">
              <div className="relative w-full max-w-[460px] aspect-[3/4]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 95vw, 600px"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-black/30 text-xs sm:text-sm text-white/80">
              <span>Organized by {event.organizer}</span>
              <div className="flex items-center gap-3">
                <Link
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xs transition-colors"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
