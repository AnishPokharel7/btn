"use client";

import { useState } from "react";
import { Save, Loader2, Check, Globe, Search, Share2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SEOPage {
  id: string;
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: "summary" | "summary_large_image";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  robots: string;
  structuredData: string;
}

const initialSEOPages: SEOPage[] = [
  {
    id: "1",
    path: "/",
    title: "Better Tomorrow Nepal Foundation | Empowering Communities",
    description: "Empowering communities across Nepal through education, healthcare, women's empowerment, environmental sustainability, and humanitarian assistance.",
    ogTitle: "Better Tomorrow Nepal Foundation | Empowering Communities",
    ogDescription: "Empowering communities across Nepal through sustainable development programs.",
    ogImage: "/logo/hero.png",
    twitterCard: "summary_large_image",
    twitterTitle: "Better Tomorrow Nepal Foundation",
    twitterDescription: "Empowering communities across Nepal through sustainable development programs.",
    twitterImage: "/logo/hero.png",
    canonicalUrl: "https://bettertomorrownepal.org",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "name": "Better Tomorrow Nepal Foundation",
  "url": "https://bettertomorrownepal.org",
  "logo": "https://bettertomorrownepal.org/logo/logo.png",
  "description": "Empowering communities across Nepal through education, healthcare, women's empowerment, environmental sustainability, and humanitarian assistance."
}`,
  },
  {
    id: "2",
    path: "/about",
    title: "About Us | Better Tomorrow Nepal Foundation",
    description: "Learn about Better Tomorrow Nepal Foundation's mission, vision, core values, team, and partners working to empower communities across Nepal.",
    ogTitle: "About Us | Better Tomorrow Nepal Foundation",
    ogDescription: "Learn about our mission, vision, core values, team, and partners.",
    ogImage: "/images/about-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "About Us | Better Tomorrow Nepal Foundation",
    twitterDescription: "Learn about our mission, vision, core values, team, and partners.",
    twitterImage: "/images/about-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/about",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us",
  "description": "Learn about Better Tomorrow Nepal Foundation's mission, vision, core values, team, and partners."
}`,
  },
  {
    id: "3",
    path: "/programs",
    title: "Our Programs | Better Tomorrow Nepal Foundation",
    description: "Explore our diverse range of programs in education, healthcare, women empowerment, youth development, environment, and community development.",
    ogTitle: "Our Programs | Better Tomorrow Nepal Foundation",
    ogDescription: "Explore our diverse range of programs creating lasting impact across Nepal.",
    ogImage: "/images/programs-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Our Programs | Better Tomorrow Nepal Foundation",
    twitterDescription: "Explore our diverse range of programs creating lasting impact across Nepal.",
    twitterImage: "/images/programs-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/programs",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Programs",
  "description": "Explore our diverse range of programs in education, healthcare, women empowerment, youth development, environment, and community development."
}`,
  },
  {
    id: "4",
    path: "/impact",
    title: "Our Impact | Better Tomorrow Nepal Foundation",
    description: "See the impact of our programs across Nepal. 125,000+ lives impacted, 250+ communities supported, 8 active programs, 500+ volunteers.",
    ogTitle: "Our Impact | Better Tomorrow Nepal Foundation",
    ogDescription: "125,000+ lives impacted across 250+ communities through 8 active programs.",
    ogImage: "/images/impact-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Our Impact | Better Tomorrow Nepal Foundation",
    twitterDescription: "125,000+ lives impacted across 250+ communities through 8 active programs.",
    twitterImage: "/images/impact-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/impact",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Impact",
  "description": "See the impact of our programs across Nepal."
}`,
  },
  {
    id: "5",
    path: "/stories",
    title: "Stories & News | Better Tomorrow Nepal Foundation",
    description: "Read inspiring stories of change from communities across Nepal. Latest news, program updates, and impact reports.",
    ogTitle: "Stories & News | Better Tomorrow Nepal Foundation",
    ogDescription: "Read inspiring stories of change from communities across Nepal.",
    ogImage: "/images/stories-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Stories & News | Better Tomorrow Nepal Foundation",
    twitterDescription: "Read inspiring stories of change from communities across Nepal.",
    twitterImage: "/images/stories-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/stories",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Stories & News",
  "description": "Read inspiring stories of change from communities across Nepal."
}`,
  },
  {
    id: "6",
    path: "/get-involved",
    title: "Get Involved | Better Tomorrow Nepal Foundation",
    description: "Join us in building a better tomorrow. Volunteer, donate, partner with us, or fundraise for our programs across Nepal.",
    ogTitle: "Get Involved | Better Tomorrow Nepal Foundation",
    ogDescription: "Join us in building a better tomorrow. Volunteer, donate, partner with us, or fundraise.",
    ogImage: "/images/get-involved-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Get Involved | Better Tomorrow Nepal Foundation",
    twitterDescription: "Join us in building a better tomorrow. Volunteer, donate, partner with us, or fundraise.",
    twitterImage: "/images/get-involved-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/get-involved",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Get Involved",
  "description": "Join us in building a better tomorrow. Volunteer, donate, partner with us, or fundraise for our programs across Nepal."
}`,
  },
  {
    id: "7",
    path: "/donate",
    title: "Donate | Better Tomorrow Nepal Foundation",
    description: "Make a donation to support our programs. Your contribution directly funds education, healthcare, women empowerment, and environmental programs in Nepal.",
    ogTitle: "Donate | Better Tomorrow Nepal Foundation",
    ogDescription: "Make a donation to support our programs in education, healthcare, women empowerment, and environment.",
    ogImage: "/images/donate-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Donate | Better Tomorrow Nepal Foundation",
    twitterDescription: "Make a donation to support our programs in education, healthcare, women empowerment, and environment.",
    twitterImage: "/images/donate-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/donate",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Donate",
  "description": "Make a donation to support our programs."
}`,
  },
  {
    id: "8",
    path: "/contact",
    title: "Contact Us | Better Tomorrow Nepal Foundation",
    description: "Get in touch with Better Tomorrow Nepal Foundation. Visit our office in Itahari, call us, or send us a message.",
    ogTitle: "Contact Us | Better Tomorrow Nepal Foundation",
    ogDescription: "Get in touch with Better Tomorrow Nepal Foundation.",
    ogImage: "/images/contact-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Contact Us | Better Tomorrow Nepal Foundation",
    twitterDescription: "Get in touch with Better Tomorrow Nepal Foundation.",
    twitterImage: "/images/contact-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/contact",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "description": "Get in touch with Better Tomorrow Nepal Foundation."
}`,
  },
  {
    id: "9",
    path: "/transparency",
    title: "Transparency | Better Tomorrow Nepal Foundation",
    description: "View our annual reports, audited financial statements, governance policies, and registration documents. Committed to transparency and accountability.",
    ogTitle: "Transparency | Better Tomorrow Nepal Foundation",
    ogDescription: "View our annual reports, audited financial statements, governance policies, and registration documents.",
    ogImage: "/images/transparency-og.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Transparency | Better Tomorrow Nepal Foundation",
    twitterDescription: "View our annual reports, audited financial statements, governance policies, and registration documents.",
    twitterImage: "/images/transparency-og.jpg",
    canonicalUrl: "https://bettertomorrownepal.org/transparency",
    robots: "index, follow",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Transparency",
  "description": "View our annual reports, audited financial statements, governance policies, and registration documents."
}`,
  },
];

const globalSettings = {
  siteName: "Better Tomorrow Nepal Foundation",
  siteUrl: "https://bettertomorrownepal.org",
  defaultOgImage: "/logo/hero.png",
  twitterHandle: "@btn_nepal",
  facebookAppId: "",
  googleSiteVerification: "google-site-verification-code",
  defaultRobots: "index, follow",
  sitemapEnabled: true,
  rssEnabled: false,
};

export default function SEOManagementPage() {
  const [activeTab, setActiveTab] = useState<string>("pages");
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [editingPage, setEditingPage] = useState<SEOPage | null>(null);
  const [showGlobalSettings, setShowGlobalSettings] = useState(false);

  const [seoPages, setSeoPages] = useState<SEOPage[]>(initialSEOPages);
  const [globals, setGlobals] = useState(globalSettings);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: "pages", label: "Page SEO", icon: Globe },
    { id: "global", label: "Global Settings", icon: Search },
  ];

  const filteredPages = seoPages.filter((page) => {
    const matchesSearch = page.path.toLowerCase().includes(search.toLowerCase()) || 
      page.title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const handlePageUpdate = (id: string, field: keyof SEOPage, value: string) => {
    setSeoPages(prev => prev.map(page => page.id === id ? { ...page, [field]: value } : page));
  };

  const handleGlobalUpdate = (field: keyof typeof globals, value: string) => {
    setGlobals(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">SEO Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Manage SEO settings for all pages</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { setEditingPage(null); }}
            className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
          >
            <Globe className="w-5 h-5" />
            Add Page
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <nav className="flex overflow-x-auto p-1" aria-label="SEO Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setShowGlobalSettings(tab.id === "global"); }}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:bg-muted/40 hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === "pages" && (
        <>
          {/* Search */}
          <div className="bg-card rounded-2xl border border-border p-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
              <input
                type="search"
                placeholder="Search pages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
          </div>

          {/* Pages List */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Page</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">SEO Title</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Meta Description</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">OG Image</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredPages.map((page) => (
                    <tr key={page.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <code className="text-sm text-foreground bg-muted/50 px-2 py-1 rounded">{page.path}</code>
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={page.title}
                          onChange={(e) => handlePageUpdate(page.id, "title", e.target.value)}
                          className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={page.description}
                          onChange={(e) => handlePageUpdate(page.id, "description", e.target.value)}
                          className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={page.ogImage}
                          onChange={(e) => handlePageUpdate(page.id, "ogImage", e.target.value)}
                          className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setEditingPage(page)}
                            className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                            title="Edit Full"
                          >
                            <Globe className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setShowGlobalSettings(true)}
                            className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                            title="Global Settings"
                          >
                            <Search className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === "global" && (
        <div className="bg-card rounded-2xl border border-border p-6 space-y-8">
          <h3 className="font-semibold text-foreground">Global SEO Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Site Name</label>
              <input
                type="text"
                value={globals.siteName}
                onChange={(e) => handleGlobalUpdate("siteName", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Site URL</label>
              <input
                type="url"
                value={globals.siteUrl}
                onChange={(e) => handleGlobalUpdate("siteUrl", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Default OG Image</label>
              <input
                type="text"
                value={globals.defaultOgImage}
                onChange={(e) => handleGlobalUpdate("defaultOgImage", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Twitter Handle</label>
              <input
                type="text"
                value={globals.twitterHandle}
                onChange={(e) => handleGlobalUpdate("twitterHandle", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Facebook App ID</label>
              <input
                type="text"
                value={globals.facebookAppId}
                onChange={(e) => handleGlobalUpdate("facebookAppId", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Google Site Verification</label>
              <input
                type="text"
                value={globals.googleSiteVerification}
                onChange={(e) => handleGlobalUpdate("googleSiteVerification", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Default Robots</label>
              <select
                value={globals.defaultRobots}
                onChange={(e) => handleGlobalUpdate("defaultRobots", e.target.value)}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              >
                <option value="index, follow">Index, Follow</option>
                <option value="noindex, follow">Noindex, Follow</option>
                <option value="index, nofollow">Index, Nofollow</option>
                <option value="noindex, nofollow">Noindex, Nofollow</option>
              </select>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h4 className="font-semibold text-foreground mb-4">Sitemap & Feeds</h4>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={globals.sitemapEnabled}
                  onChange={(e) => handleGlobalUpdate("sitemapEnabled", e.target.checked.toString())}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable Sitemap Generation</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={globals.rssEnabled}
                  onChange={(e) => handleGlobalUpdate("rssEnabled", e.target.checked.toString())}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-foreground">Enable RSS Feed</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Edit Page Modal */}
      {editingPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => setEditingPage(null)}>
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">Edit SEO: {editingPage.path}</h3>
              <button onClick={() => setEditingPage(null)} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Page Path</label>
                  <input type="text" value={editingPage.path} readOnly className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground cursor-not-allowed" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">SEO Title <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    value={editingPage.title}
                    onChange={(e) => handlePageUpdate(editingPage.id, "title", e.target.value)}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                  <p className="text-xs text-text-secondary/70 mt-1">Recommended: 50-60 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Meta Description <span className="text-rose-500">*</span></label>
                  <textarea
                    rows={3}
                    value={editingPage.description}
                    onChange={(e) => handlePageUpdate(editingPage.id, "description", e.target.value)}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                  />
                  <p className="text-xs text-text-secondary/70 mt-1">Recommended: 150-160 characters</p>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4">Open Graph (Facebook/LinkedIn)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">OG Title</label>
                    <input
                      type="text"
                      value={editingPage.ogTitle}
                      onChange={(e) => handlePageUpdate(editingPage.id, "ogTitle", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">OG Description</label>
                    <textarea
                      rows={3}
                      value={editingPage.ogDescription}
                      onChange={(e) => handlePageUpdate(editingPage.id, "ogDescription", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">OG Image</label>
                    <input
                      type="text"
                      value={editingPage.ogImage}
                      onChange={(e) => handlePageUpdate(editingPage.id, "ogImage", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4">Twitter Card</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Twitter Card Type</label>
                    <select
                      value={editingPage.twitterCard}
                      onChange={(e) => handlePageUpdate(editingPage.id, "twitterCard", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    >
                      <option value="summary">Summary</option>
                      <option value="summary_large_image">Summary Large Image</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Twitter Title</label>
                    <input
                      type="text"
                      value={editingPage.twitterTitle}
                      onChange={(e) => handlePageUpdate(editingPage.id, "twitterTitle", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Twitter Description</label>
                    <textarea
                      rows={3}
                      value={editingPage.twitterDescription}
                      onChange={(e) => handlePageUpdate(editingPage.id, "twitterDescription", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Twitter Image</label>
                    <input
                      type="text"
                      value={editingPage.twitterImage}
                      onChange={(e) => handlePageUpdate(editingPage.id, "twitterImage", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4">Advanced</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Canonical URL</label>
                    <input
                      type="url"
                      value={editingPage.canonicalUrl}
                      onChange={(e) => handlePageUpdate(editingPage.id, "canonicalUrl", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Robots</label>
                    <input
                      type="text"
                      value={editingPage.robots}
                      onChange={(e) => handlePageUpdate(editingPage.id, "robots", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-1">Structured Data (JSON-LD)</label>
                    <textarea
                      rows={8}
                      value={editingPage.structuredData}
                      onChange={(e) => handlePageUpdate(editingPage.id, "structuredData", e.target.value)}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none font-mono"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => setEditingPage(null)} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save SEO Settings</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <Globe className="w-5 h-5" />
          Preview Website
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