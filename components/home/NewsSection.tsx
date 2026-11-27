import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { StoryCard } from '@/components/shared/StoryCard';
import { Button } from '@/components/shared/Button';
import { newsItems } from '@/data/stories';

export function NewsSection() {
  const featuredNews = newsItems.find(n => n.featured);
  const otherNews = newsItems.filter(n => !n.featured).slice(0, 3);

  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="news-heading">
      <Container size="page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            id="news-heading"
            label="NEWS & EVENTS"
            title="Latest Updates & Announcements"
            description="Stay informed about our latest programs, partnerships, events, and impact reports."
            align="left"
          />
          <Button variant="ghost" asChild>
            <Link href="/stories">View All News →</Link>
          </Button>
        </div>

        {/* Featured News */}
        {featuredNews && (
          <StoryCard
            story={featuredNews}
            variant="featured"
            className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500"
          />
        )}

        {/* Other News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherNews.map((news, index) => (
            <StoryCard
              key={news.id}
              story={news}
              variant="default"
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/stories">
              <span>View All News & Events</span>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}