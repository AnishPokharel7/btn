"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/shared/Container";
import { StoryCard } from "@/components/shared/StoryCard";
import { stories, newsItems } from "@/data/stories";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allContent = [
  ...stories.map(s => ({ ...s, type: 'story' as const, slug: s.slug })),
  ...newsItems.map(n => ({ ...n, type: 'news' as const, slug: n.slug })),
];

const ITEMS_PER_PAGE = 9;

export function StoriesGrid() {
  const [selectedCategory] = useState('All');
  const [selectedType] = useState('All');
  const [searchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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

  // Reset to page 1 when filters change
  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);
  if (currentPage > totalPages) setCurrentPage(1);

  const paginatedContent = filteredContent.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="stories-grid-heading">
      <Container size="page">
        {/* Featured Story */}
        <div className="mb-12">
          {paginatedContent[0] && (
            <StoryCard
              story={paginatedContent[0]}
              variant="featured"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            />
          )}
        </div>

        {/* Other Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Stories and news">
          {paginatedContent.slice(1).map((item, index) => (
            <StoryCard
              key={`${item.type}-${item.slug}`}
              story={item}
              variant="default"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            />
          ))}
        </div>

        {paginatedContent.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-foreground mb-2">No stories found</h3>
            <p className="text-text-secondary">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl bg-card border border-border text-text-secondary hover:text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const showPage = page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1);
                if (!showPage) return (
                  <span key={`ellipsis-${page}`} className="px-3 text-text-secondary">...</span>
                );
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl font-medium transition-all ${
                      page === currentPage
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-card text-text-secondary hover:bg-muted hover:text-foreground border border-border'
                    }`}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl bg-card border border-border text-text-secondary hover:text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </nav>
        )}
      </Container>
    </section>
  );
}