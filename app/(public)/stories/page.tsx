import { Metadata } from "next";
import { StoriesHero } from "./StoriesHero";
import { StoriesFilter } from "./StoriesFilter";
import { StoriesGrid } from "./StoriesGrid";
import { StoriesCTA } from "./StoriesCTA";

export const metadata: Metadata = {
  title: "Stories & News",
  description: "Read inspiring stories of change from communities across Nepal, latest news, events, and announcements from Better Tomorrow Nepal Foundation.",
};

export default function StoriesPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">
      <StoriesHero />
      <StoriesFilter />
      <StoriesGrid />
      <StoriesCTA />
    </main>
  );
}