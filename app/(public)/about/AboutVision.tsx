import Image from "next/image";
import { Eye, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const visionPoints = [
  "Universal access to quality healthcare in underserved communities",
  "Equitable education opportunities for every child, regardless of background",
  "Sustainable environmental practices that preserve future generations",
  "Empowered women leading change across all regions we serve",
];

export default function AboutVision() {
  return (
    <section className="w-full bg-background section-padding overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-20 items-center">

          {/* Right Column: Image */}
          <div className="relative group order-1 lg:order-2">
            {/* Decorative background blob */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-muted to-secondary/10 opacity-60 blur-xl -z-10 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Image container */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_28px_65px_-15px_rgba(0,0,0,0.15)] ring-1 ring-border transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_40px_90px_-18px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/doctor.jpg"
                alt="Healthcare workers serving the community"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 lg:-left-8 bg-card/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.15)] border border-border z-10 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <p className="text-3xl font-extrabold text-foreground leading-none">
                12<span className="text-secondary">+</span>
              </p>
              <p className="text-xs sm:text-sm text-text-secondary font-medium mt-1">
                Regions Served
              </p>
            </div>

            {/* Floating badge card */}
            <div className="absolute -top-4 -right-3 sm:-right-5 lg:-right-6 bg-primary/95 backdrop-blur-sm rounded-2xl px-4 py-3.5 shadow-lg z-10 text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">
              <p className="text-2xl font-extrabold leading-none">
                5K<span className="text-secondary">+</span>
              </p>
              <p className="text-xs font-medium text-primary-foreground/80 mt-1">
                Lives Impacted
              </p>
            </div>
          </div>

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 border border-primary/20">
              <Eye className="w-3.5 h-3.5" />
              <span>Our Vision</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-foreground tracking-tight leading-[1.18] mb-5">
              An Equitable World for{" "}
              <span className="text-primary">Every Individual</span>
            </h2>

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base md:text-[1.05rem] leading-relaxed mb-8">
              We envision a world where every person — regardless of geography,
              gender, or circumstance — has access to the resources, dignity, and
              opportunity to thrive. Our healthcare programs are a direct
              expression of this belief, bringing professional medical attention
              to those who need it most.
            </p>

            {/* Vision Points */}
            <ul className="flex flex-col gap-3.5 w-full mb-9">
              {visionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm sm:text-base leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm sm:text-base transition-colors group cursor-pointer"
            >
              <span>Explore our programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}