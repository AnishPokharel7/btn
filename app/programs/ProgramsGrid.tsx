"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { programs, programCategories } from "@/data/programs";

export function ProgramsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPrograms = activeCategory === "all"
    ? programs
    : programs.filter(p => p.id === activeCategory);

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="programs-grid-heading">
      <Container size="page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            id="programs-grid-heading"
            label="ALL PROGRAMS"
            title="Comprehensive Programs for Lasting Impact"
            description="Filter by category or explore all our programs below."
            align="left"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter programs by category">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-text-secondary hover:bg-muted hover:text-foreground border border-border"
              }`}
              aria-pressed={activeCategory === "all"}
            >
              All Programs
            </button>
            {programCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-text-secondary hover:bg-muted hover:text-foreground border border-border"
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Programs">
          {filteredPrograms.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              variant="default"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No programs found in this category.</p>
          </div>
        )}
      </Container>
    </section>
  );
}