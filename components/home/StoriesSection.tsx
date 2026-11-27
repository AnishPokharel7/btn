import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { StoryCard } from '@/components/shared/StoryCard';
import { Button } from '@/components/shared/Button';
import { getFeaturedStories, getStoriesByCategory } from '@/data/stories';

export function StoriesSection() {
  const featuredStory = getFeaturedStories()[0];
  const otherStories = getStoriesByCategory('Education').slice(0, 2);

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="stories-heading">
      <Container size="page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            id="stories-heading"
            label="STORIES FROM THE COMMUNITY"
            title="Voices of Change"
            description="Real stories from the communities we serve — stories of resilience, hope, and transformation."
            align="left"
          />
          <Button variant="ghost" asChild>
            <Link href="/stories">Read All Stories →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Story */}
          {featuredStory && (
            <StoryCard
              story={featuredStory}
              variant="featured"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            />
          )}

          {/* Other Stories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherStories.map((story, index) => (
              <StoryCard
                key={story.slug}
                story={story}
                variant="default"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {['Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Youth Development'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/stories">
              <span>Explore All Stories</span>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}