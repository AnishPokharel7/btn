import { PageHero } from "@/components/shared/PageHero";
import { Sparkles } from "lucide-react";

export function ContactHero() {
  return (
    <PageHero
      title="Contact Us"
      description="Have questions about our programs, volunteer opportunities, partnerships, or donations? Reach out to our team in Itahari and let's build a better tomorrow together."
      image="/images/children.jpg"
      imageAlt="Community meeting in Nepal"
      badge="We'd Love to Hear From You"
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>Response within 24 hours</span>
        </span>
      </div>
    </PageHero>
  );
}