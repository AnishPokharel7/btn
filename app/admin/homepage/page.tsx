"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  GripVertical,
  Eye,
  Edit,
  Image as ImageIcon,
  BarChart2,
  FileText,
  MessageSquare,
  Heart,
  Users,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Save,
  Loader2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HomepageSection {
  id: string;
  type: "announcement" | "hero" | "impact-stats" | "about-preview" | "programs" | "stories" | "testimonials" | "final-cta";
  label: string;
  icon: React.ReactNode;
  enabled: boolean;
  order: number;
  content: Record<string, any>;
}

const initialSections: HomepageSection[] = [
  {
    id: "announcement",
    type: "announcement",
    label: "Announcement Bar",
    icon: <FileText className="w-5 h-5" />,
    enabled: true,
    order: 1,
    content: {
      text: "Join us in making a difference! Support our programs across Nepal.",
      ctaText: "Learn More",
      ctaLink: "/about",
      enabled: true,
    },
  },
  {
    id: "hero",
    type: "hero",
    label: "Hero Section",
    icon: <ImageIcon className="w-5 h-5" />,
    enabled: true,
    order: 2,
    content: {
      heading: "Together, We Can Build",
      highlightedText: "Better Tomorrow",
      description: "Empowering communities, creating opportunities, and building a future where everyone has the chance to thrive through education, healthcare, women's empowerment, and environmental sustainability.",
      primaryButtonText: "Explore Our Work",
      primaryButtonLink: "/programs",
      secondaryButtonText: "Support Our Mission",
      secondaryButtonLink: "/donate",
      backgroundImage: "/logo/hero.png",
      enabled: true,
    },
  },
  {
    id: "impact-stats",
    type: "impact-stats",
    label: "Impact Statistics",
    icon: <BarChart2 className="w-5 h-5" />,
    enabled: true,
    order: 3,
    content: {
      stats: [
        { id: "1", value: "125K+", label: "Lives Impacted", suffix: "", description: "Individuals directly benefited", icon: "users" },
        { id: "2", value: "250+", label: "Communities", suffix: "+", description: "Rural and urban communities", icon: "home" },
        { id: "3", value: "8", label: "Active Programs", suffix: "", description: "Comprehensive programs", icon: "target" },
        { id: "4", value: "500+", label: "Volunteers", suffix: "+", description: "Dedicated volunteers", icon: "heart" },
      ],
      enabled: true,
    },
  },
  {
    id: "about-preview",
    type: "about-preview",
    label: "About Preview",
    icon: <Users className="w-5 h-5" />,
    enabled: true,
    order: 4,
    content: {
      heading: "Who We Are",
      description: "Better Tomorrow Nepal Foundation is a non-profit organization dedicated to empowering vulnerable communities across Nepal through sustainable development programs.",
      image: "/images/about.jpg",
      ctaText: "Learn More About Us",
      ctaLink: "/about",
      enabled: true,
    },
  },
  {
    id: "programs",
    type: "programs",
    label: "Programs Grid",
    icon: <BarChart2 className="w-5 h-5" />,
    enabled: true,
    order: 5,
    content: {
      heading: "Our Programs",
      description: "Explore our diverse range of programs designed to create lasting impact across Nepal.",
      showCount: 4,
      enabled: true,
    },
  },
  {
    id: "stories",
    type: "stories",
    label: "Stories Section",
    icon: <FileText className="w-5 h-5" />,
    enabled: true,
    order: 6,
    content: {
      heading: "Stories of Impact",
      description: "Read inspiring stories from communities we've worked with across Nepal.",
      showCount: 3,
      enabled: true,
    },
  },
  {
    id: "testimonials",
    type: "testimonials",
    label: "Testimonials",
    icon: <MessageSquare className="w-5 h-5" />,
    enabled: true,
    order: 7,
    content: {
      heading: "Voices of Change",
      description: "Hear from the people whose lives have been transformed by our programs.",
      showCount: 3,
      enabled: true,
    },
  },
  {
    id: "final-cta",
    type: "final-cta",
    label: "Final CTA",
    icon: <Heart className="w-5 h-5" />,
    enabled: true,
    order: 8,
    content: {
      heading: "Ready to Make a Difference?",
      description: "Join us in building a better tomorrow for communities across Nepal. Your support can change lives.",
      buttonText: "Donate Now",
      buttonLink: "/donate",
      backgroundImage: "/images/cta-bg.jpg",
      enabled: true,
    },
  },
];

export default function HomepageManagementPage() {
  const [sections, setSections] = useState<HomepageSection[]>(initialSections);
  const [expandedSection, setExpandedSection] = useState<string | null>("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleSection = (id: string) => {
    setSections(prev => prev.map(s => 
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const moveSection = (id: string, direction: "up" | "down") => {
    setSections(prev => {
      const index = prev.findIndex(s => s.id === id);
      if (index === -1) return prev;
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      const newSections = [...prev];
      [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
      return newSections.map((s, i) => ({ ...s, order: i + 1 }));
    });
  };

  const updateSectionContent = (id: string, content: Record<string, any>) => {
    setSections(prev => prev.map(s => 
      s.id === id ? { ...s, content: { ...s.content, ...content } } : s
    ));
  };

  const renderSectionEditor = (section: HomepageSection) => {
    const isExpanded = expandedSection === section.id;

    switch (section.type) {
      case "announcement":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("announcement", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Announcement Bar</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Announcement Text</label>
                <input
                  type="text"
                  value={section.content.text}
                  onChange={(e) => updateSectionContent("announcement", { text: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  placeholder="Enter announcement text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">CTA Text</label>
                <input
                  type="text"
                  value={section.content.ctaText}
                  onChange={(e) => updateSectionContent("announcement", { ctaText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  placeholder="CTA button text"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">CTA Link</label>
                <input
                  type="text"
                  value={section.content.ctaLink}
                  onChange={(e) => updateSectionContent("announcement", { ctaLink: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  placeholder="/about"
                />
              </div>
            </div>
          </div>
        );

      case "hero":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("hero", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Hero Section</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Main Heading</label>
                <input
                  type="text"
                  value={section.content.heading}
                  onChange={(e) => updateSectionContent("hero", { heading: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Highlighted Text</label>
                <input
                  type="text"
                  value={section.content.highlightedText}
                  onChange={(e) => updateSectionContent("hero", { highlightedText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  value={section.content.description}
                  onChange={(e) => updateSectionContent("hero", { description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Primary Button Text</label>
                <input
                  type="text"
                  value={section.content.primaryButtonText}
                  onChange={(e) => updateSectionContent("hero", { primaryButtonText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Primary Button Link</label>
                <input
                  type="text"
                  value={section.content.primaryButtonLink}
                  onChange={(e) => updateSectionContent("hero", { primaryButtonLink: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Secondary Button Text</label>
                <input
                  type="text"
                  value={section.content.secondaryButtonText}
                  onChange={(e) => updateSectionContent("hero", { secondaryButtonText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Secondary Button Link</label>
                <input
                  type="text"
                  value={section.content.secondaryButtonLink}
                  onChange={(e) => updateSectionContent("hero", { secondaryButtonLink: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Background Image</label>
                <input
                  type="text"
                  value={section.content.backgroundImage}
                  onChange={(e) => updateSectionContent("hero", { backgroundImage: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  placeholder="/logo/hero.png"
                />
                <p className="text-xs text-text-secondary/70 mt-1">Enter image path (e.g., /images/hero.jpg)</p>
              </div>
            </div>
          </div>
        );

      case "impact-stats":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("impact-stats", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Impact Statistics</span>
              </label>
            </div>
            <div className="space-y-3">
              {section.content.stats.map((stat: any, index: number) => (
                <div key={stat.id} className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-medium text-foreground">Statistic {index + 1}</h5>
                    <button
                      onClick={() => {
                        setSections(prev => prev.map(s => 
                          s.id === section.id 
                            ? { ...s, content: { ...s.content, stats: s.content.stats.filter((_: any, i: number) => i !== index) } }
                            : s
                        ));
                      }}
                      className="p-1 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Value</label>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => {
                          const newStats = [...section.content.stats];
                          newStats[index] = { ...newStats[index], value: e.target.value };
                          updateSectionContent("impact-stats", { stats: newStats });
                        }}
                        className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...section.content.stats];
                          newStats[index] = { ...newStats[index], label: e.target.value };
                          updateSectionContent("impact-stats", { stats: newStats });
                        }}
                        className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Suffix</label>
                      <input
                        type="text"
                        value={stat.suffix}
                        onChange={(e) => {
                          const newStats = [...section.content.stats];
                          newStats[index] = { ...newStats[index], suffix: e.target.value };
                          updateSectionContent("impact-stats", { stats: newStats });
                        }}
                        className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Icon</label>
                      <select
                        value={stat.icon}
                        onChange={(e) => {
                          const newStats = [...section.content.stats];
                          newStats[index] = { ...newStats[index], icon: e.target.value };
                          updateSectionContent("impact-stats", { stats: newStats });
                        }}
                        className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      >
                        <option value="users">Users</option>
                        <option value="home">Home</option>
                        <option value="target">Target</option>
                        <option value="heart">Heart</option>
                        <option value="book">Book</option>
                        <option value="tree">Tree</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                    <input
                      type="text"
                      value={stat.description}
                      onChange={(e) => {
                        const newStats = [...section.content.stats];
                        newStats[index] = { ...newStats[index], description: e.target.value };
                        updateSectionContent("impact-stats", { stats: newStats });
                      }}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={() => {
                  const newStat = {
                    id: Date.now().toString(),
                    value: "0",
                    label: "New Stat",
                    suffix: "",
                    description: "",
                    icon: "users",
                  };
                  updateSectionContent("impact-stats", { stats: [...section.content.stats, newStat] });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed border-border rounded-xl text-text-secondary hover:border-primary hover:text-primary transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Statistic
              </button>
            </div>
          </div>
        );

      case "about-preview":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("about-preview", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable About Preview</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Section Heading</label>
                <input
                  type="text"
                  value={section.content.heading}
                  onChange={(e) => updateSectionContent("about-preview", { heading: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">CTA Text</label>
                <input
                  type="text"
                  value={section.content.ctaText}
                  onChange={(e) => updateSectionContent("about-preview", { ctaText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  value={section.content.description}
                  onChange={(e) => updateSectionContent("about-preview", { description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">CTA Link</label>
                <input
                  type="text"
                  value={section.content.ctaLink}
                  onChange={(e) => updateSectionContent("about-preview", { ctaLink: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Image</label>
                <input
                  type="text"
                  value={section.content.image}
                  onChange={(e) => updateSectionContent("about-preview", { image: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  placeholder="/images/about.jpg"
                />
              </div>
            </div>
          </div>
        );

      case "programs":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("programs", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Programs Section</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Section Heading</label>
                <input
                  type="text"
                  value={section.content.heading}
                  onChange={(e) => updateSectionContent("programs", { heading: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Number of Programs to Show</label>
                <input
                  type="number"
                  value={section.content.showCount}
                  onChange={(e) => updateSectionContent("programs", { showCount: parseInt(e.target.value) || 4 })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  min="1"
                  max="8"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  value={section.content.description}
                  onChange={(e) => updateSectionContent("programs", { description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
            </div>
          </div>
        );

      case "stories":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("stories", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Stories Section</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Section Heading</label>
                <input
                  type="text"
                  value={section.content.heading}
                  onChange={(e) => updateSectionContent("stories", { heading: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Number of Stories to Show</label>
                <input
                  type="number"
                  value={section.content.showCount}
                  onChange={(e) => updateSectionContent("stories", { showCount: parseInt(e.target.value) || 3 })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  min="1"
                  max="6"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  value={section.content.description}
                  onChange={(e) => updateSectionContent("stories", { description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
            </div>
          </div>
        );

      case "testimonials":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("testimonials", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Testimonials Section</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Section Heading</label>
                <input
                  type="text"
                  value={section.content.heading}
                  onChange={(e) => updateSectionContent("testimonials", { heading: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Number of Testimonials to Show</label>
                <input
                  type="number"
                  value={section.content.showCount}
                  onChange={(e) => updateSectionContent("testimonials", { showCount: parseInt(e.target.value) || 3 })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  min="1"
                  max="6"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  value={section.content.description}
                  onChange={(e) => updateSectionContent("testimonials", { description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
            </div>
          </div>
        );

      case "final-cta":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={section.content.enabled}
                  onChange={() => updateSectionContent("final-cta", { enabled: !section.content.enabled })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Final CTA</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Heading</label>
                <input
                  type="text"
                  value={section.content.heading}
                  onChange={(e) => updateSectionContent("final-cta", { heading: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Button Text</label>
                <input
                  type="text"
                  value={section.content.buttonText}
                  onChange={(e) => updateSectionContent("final-cta", { buttonText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  value={section.content.description}
                  onChange={(e) => updateSectionContent("final-cta", { description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Button Link</label>
                <input
                  type="text"
                  value={section.content.buttonLink}
                  onChange={(e) => updateSectionContent("final-cta", { buttonLink: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Background Image</label>
                <input
                  type="text"
                  value={section.content.backgroundImage}
                  onChange={(e) => updateSectionContent("final-cta", { backgroundImage: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  placeholder="/images/cta-bg.jpg"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Section List & Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sections List */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl border border-border overflow-hidden sticky top-24 h-[calc(100vh-8rem)]">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-foreground">Homepage Sections</h3>
              <span className="text-xs text-text-secondary px-2 py-0.5 bg-muted rounded-full">
                {sections.filter(s => s.enabled).length} / {sections.length} enabled
              </span>
            </div>
            <div className="p-3 overflow-y-auto h-[calc(100%-60px)]">
              <ul className="space-y-2" role="list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200",
                        expandedSection === section.id
                          ? "bg-primary/10 border border-primary/30"
                          : "hover:bg-muted/40 border border-transparent"
                      )}
                    >
                      <GripVertical className="w-5 h-5 text-text-secondary/50 flex-shrink-0 cursor-grab" />
                      <span className={cn(
                        "flex-1 text-sm font-medium truncate",
                        section.enabled ? "text-foreground" : "text-text-secondary/60 line-through"
                      )}>
                        {section.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={section.enabled}
                            onChange={() => toggleSection(section.id)}
                            className="sr-only peer"
                          />
                          <div className={cn(
                            "w-9 h-5 rounded-full transition-colors peer-focus:ring-2 peer-focus:ring-primary/20",
                            section.enabled ? "bg-secondary" : "bg-muted"
                          )} />
                          <div className={cn(
                            "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform",
                            section.enabled ? "translate-x-4" : "translate-x-0"
                          )} />
                        </label>
                        <button
                          onClick={() => moveSection(section.id, "up")}
                          disabled={section.order === 1}
                          className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveSection(section.id, "down")}
                          disabled={section.order === sections.length}
                          className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section Editor */}
        <div className="lg:col-span-2 space-y-6">
          {expandedSection ? (
            sections.map((section) => 
              section.id === expandedSection && (
                <div key={section.id} className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{section.label}</h3>
                        <p className="text-sm text-text-secondary">Configure this section's content and settings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setExpandedSection(null)}
                        className="p-2 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    {renderSectionEditor(section)}
                  </div>
                </div>
              )
            )
          ) : (
            <div className="bg-card rounded-2xl border border-border p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Select a Section to Edit</h3>
              <p className="text-text-secondary">Click on a section from the left sidebar to configure its content and settings.</p>
            </div>
          )}
        </div>
      </div>

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
          Preview Live Site
        </a>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all disabled:opacity-50 cursor-pointer"
        >
          {saving ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving...
            </>
          ) : saved ? (
            <>
              <Check className="w-5 h-5" />
              Saved!
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
}