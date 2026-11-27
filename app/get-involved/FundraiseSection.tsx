import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ArrowRight, Heart, Cake, Trophy, Users, Globe, Music, BookOpen } from "lucide-react";
import Link from "next/link";

const fundraiserIdeas = [
  {
    id: 'birthday',
    title: 'Birthday Fundraiser',
    icon: Cake,
    description: 'Celebrate your special day by asking friends and family to donate instead of gifts. We\'ll help you set up a personalized campaign page.',
    steps: ['Create your page', 'Share with network', 'Track progress', 'Celebrate impact'],
  },
  {
    id: 'challenge',
    title: 'Fitness Challenge',
    icon: Trophy,
    description: 'Run a marathon, cycle across Nepal, trek to Everest Base Camp, or create your own fitness challenge. Turn your passion into purpose.',
    steps: ['Choose your challenge', 'Set fundraising goal', 'Train & fundraise', 'Complete & celebrate'],
  },
  {
    id: 'community',
    title: 'Community Event',
    icon: Users,
    description: 'Organize a bake sale, charity dinner, cultural evening, auction, or concert in your community, school, or workplace.',
    steps: ['Plan your event', 'Register with us', 'Promote & sell tickets', 'Host & donate proceeds'],
  },
  {
    id: 'digital',
    title: 'Digital Campaign',
    icon: Globe,
    description: 'Launch an online campaign for a specific cause — emergency relief, girls\' education, forest restoration. We provide tools and promotion.',
    steps: ['Choose a cause', 'Build campaign page', 'Share on social media', 'Engage donors globally'],
  },
  {
    id: 'creative',
    title: 'Creative Fundraising',
    icon: Music,
    description: 'Art exhibition, music concert, poetry slam, photography auction — use your creative talents to raise funds and awareness.',
    steps: ['Conceptualize event', 'Recruit artists', 'Sell tickets/art', 'Donate proceeds'],
  },
  {
    id: 'corporate-fundraise',
    title: 'Workplace Giving',
    icon: BookOpen,
    description: 'Engage colleagues through dress-down days, lunch-and-learns, office challenges, or matching gift campaigns.',
    steps: ['Get management buy-in', 'Plan activities', 'Engage colleagues', 'Celebrate collective impact'],
  },
];

export function FundraiseSection() {
  return (
    <section id="fundraise" className="w-full section-padding bg-muted/30" aria-labelledby="fundraise-heading">
      <Container size="page">
        <SectionHeading
          id="fundraise-heading"
          label="FUNDRAISE FOR US"
          title="Start Your Own Fundraiser"
          description="Turn your passion into impact. Whether it's a birthday, marathon, community event, or creative project — we'll support you every step of the way."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fundraiserIdeas.map((idea, index) => (
            <article
              key={idea.id}
              className="group p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <idea.icon className="w-7 h-7" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{idea.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-5">{idea.description}</p>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-foreground text-sm">How It Works:</h4>
                <ol className="space-y-1 text-sm text-text-secondary">
                  {idea.steps.map((step, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">{sIndex + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact?subject=Fundraising Inquiry">
                  <span>Start This Fundraiser</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          ))}
        </div>

        {/* Support Promise */}
        <div className="bg-primary rounded-3xl p-6 md:p-8 lg:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">We&apos;ve Got Your Back</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Heart, title: 'Personalized Page', desc: 'Custom fundraising page with your story, photos, and progress tracker' },
              { icon: Users, title: 'Promotion Support', desc: 'Social media templates, email scripts, and shout-outs on our channels' },
              { icon: Trophy, title: 'Milestone Recognition', desc: 'Certificates, thank-you videos, and impact updates at every milestone' },
              { icon: Globe, title: 'Global Reach', desc: 'Secure online donations from anywhere in the world, in multiple currencies' },
            ].map((support, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                  <support.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="font-bold mb-1">{support.title}</h4>
                <p className="text-white/80 text-sm">{support.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact?subject=Fundraising Inquiry">
                <span>Start Fundraising Today</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}