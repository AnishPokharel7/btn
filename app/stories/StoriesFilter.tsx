"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/shared/Container";
import { stories, newsItems } from "@/data/stories";

const allContent = [
  ...stories.map(s => ({ ...s, type: 'story' as const })),
  ...newsItems.map(n => ({ ...n, type: 'news' as const })),
];

const categories = ['All', 'Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Youth Development', 'Program Launch', 'Partnership', 'Event', 'Report', 'Humanitarian'];
const types = ['All', 'Stories', 'News'];

export function StoriesFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContent = useMemo(() => {
    return allContent.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesType = selectedType === 'All' ||
        (selectedType === 'Stories' && item.type === 'story') ||
        (selectedType === 'News' && item.type === 'news');
      const matchesSearch = searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.location?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  return (
    <section className="w-full py-8 md:py-12 bg-muted/30 border-y border-border" aria-labelledby="filter-heading">
      <Container size="page">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <label htmlFor="story-search" className="sr-only">Search stories and news</label>
            <input
              id="story-search"
              type="search"
              placeholder="Search stories, news, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl bg-card border border-border text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-card text-text-secondary hover:bg-muted hover:text-foreground border border-border'
                  }`}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2" role="group" aria-label="Filter by type">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedType === type
                      ? 'bg-secondary text-secondary-foreground shadow-sm'
                      : 'bg-card text-text-secondary hover:bg-muted hover:text-foreground border border-border'
                  }`}
                  aria-pressed={selectedType === type}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-text-secondary text-sm">
            Showing <span className="font-semibold text-foreground">{filteredContent.length}</span> of {allContent.length} items
          </p>
          {(selectedCategory !== 'All' || selectedType !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="text-sm text-primary hover:underline font-medium"
            >
              Clear all filters
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}