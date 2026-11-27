"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, FileText, Globe, Save, Loader2, Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  status: "draft" | "published" | "archived";
  showInNav: boolean;
  order: number;
}

const initialPages: Page[] = [
  {
    id: "1",
    title: "Home",
    slug: "/",
    description: "Main landing page with hero, impact stats, programs, stories, and CTA",
    heroImage: "/logo/hero.png",
    content: "",
    seoTitle: "Better Tomorrow Nepal Foundation | Empowering Communities",
    seoDescription: "Empowering communities across Nepal through education, healthcare, women's empowerment, environmental sustainability, and humanitarian assistance.",
    ogImage: "/logo/hero.png",
    status: "published",
    showInNav: true,
    order: 1,
  },
  {
    id: "2",
    title: "About Us",
    slug: "/about",
    description: "Organization story, mission, vision, values, team, and partners",
    heroImage: "/images/about-hero.jpg",
    content: "",
    seoTitle: "About Us | Better Tomorrow Nepal Foundation",
    seoDescription: "Learn about Better Tomorrow Nepal Foundation's mission, vision, core values, team, and partners working to empower communities across Nepal.",
    ogImage: "/images/about-og.jpg",
    status: "published",
    showInNav: true,
    order: 2,
  },
  {
    id: "3",
    title: "Our Programs",
    slug: "/programs",
    description: "All programs with categories and detailed pages",
    heroImage: "/images/programs-hero.jpg",
    content: "",
    seoTitle: "Our Programs | Better Tomorrow Nepal Foundation",
    seoDescription: "Explore our diverse range of programs in education, healthcare, women empowerment, youth development, environment, and community development.",
    ogImage: "/images/programs-og.jpg",
    status: "published",
    showInNav: true,
    order: 3,
  },
  {
    id: "4",
    title: "Our Impact",
    slug: "/impact",
    description: "Impact statistics, regional breakdown, annual highlights, and SDG alignment",
    heroImage: "/images/impact-hero.jpg",
    content: "",
    seoTitle: "Our Impact | Better Tomorrow Nepal Foundation",
    seoDescription: "See the impact of our programs across Nepal. 125,000+ lives impacted, 250+ communities supported, 8 active programs, 500+ volunteers.",
    ogImage: "/images/impact-og.jpg",
    status: "published",
    showInNav: true,
    order: 4,
  },
  {
    id: "5",
    title: "Stories & News",
    slug: "/stories",
    description: "Impact stories, news articles, and blog posts",
    heroImage: "/images/stories-hero.jpg",
    content: "",
    seoTitle: "Stories & News | Better Tomorrow Nepal Foundation",
    seoDescription: "Read inspiring stories of change from communities across Nepal. Latest news, program updates, and impact reports.",
    ogImage: "/images/stories-og.jpg",
    status: "published",
    showInNav: true,
    order: 5,
  },
  {
    id: "6",
    title: "Get Involved",
    slug: "/get-involved",
    description: "Volunteer, donate, corporate partnership, and fundraising options",
    heroImage: "/images/get-involved-hero.jpg",
    content: "",
    seoTitle: "Get Involved | Better Tomorrow Nepal Foundation",
    seoDescription: "Join us in building a better tomorrow. Volunteer, donate, partner with us, or fundraise for our programs across Nepal.",
    ogImage: "/images/get-involved-og.jpg",
    status: "published",
    showInNav: true,
    order: 6,
  },
  {
    id: "7",
    title: "Donate",
    slug: "/donate",
    description: "Donation form, impact calculator, and transparency",
    heroImage: "/images/donate-hero.jpg",
    content: "",
    seoTitle: "Donate | Better Tomorrow Nepal Foundation",
    seoDescription: "Make a donation to support our programs. Your contribution directly funds education, healthcare, women empowerment, and environmental programs in Nepal.",
    ogImage: "/images/donate-og.jpg",
    status: "published",
    showInNav: true,
    order: 7,
  },
  {
    id: "8",
    title: "Contact Us",
    slug: "/contact",
    description: "Contact form, office information, and map",
    heroImage: "/images/contact-hero.jpg",
    content: "",
    seoTitle: "Contact Us | Better Tomorrow Nepal Foundation",
    seoDescription: "Get in touch with Better Tomorrow Nepal Foundation. Visit our office in Itahari, call us, or send us a message.",
    ogImage: "/images/contact-og.jpg",
    status: "published",
    showInNav: true,
    order: 8,
  },
  {
    id: "9",
    title: "Transparency",
    slug: "/transparency",
    description: "Annual reports, financial reports, policies, and registration documents",
    heroImage: "/images/transparency-hero.jpg",
    content: "",
    seoTitle: "Transparency | Better Tomorrow Nepal Foundation",
    seoDescription: "View our annual reports, audited financial statements, governance policies, and registration documents. Committed to transparency and accountability.",
    ogImage: "/images/transparency-og.jpg",
    status: "published",
    showInNav: true,
    order: 9,
  },
];

const statusOptions = [
  { value: "draft", label: "Draft", color: "bg-amber-100 text-amber-700" },
  { value: "published", label: "Published", color: "bg-emerald-100 text-emerald-700" },
  { value: "archived", label: "Archived", color: "bg-slate-100 text-slate-700" },
];

export default function PagesManagementPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPage, setEditingPage] = useState<Page | null>(null);

  const [pages, setPages] = useState<Page[]>(initialPages);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredPages = pages
    .filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.slug.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || p.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => a.order - b.order);

  const handleStatusChange = (id: string, newStatus: Page["status"]) => {
    setPages(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const handleDelete = (id: string) => {
    setPages(prev => prev.filter(p => p.id !== id));
  };

  const movePage = (id: string, direction: "up" | "down") => {
    setPages(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex(p => p.id === id);
      if (index === -1) return prev;
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= sorted.length) return prev;
      [sorted[index], sorted[newIndex]] = [sorted[newIndex], sorted[index]];
      return sorted.map((p, i) => ({ ...p, order: i + 1 }));
    });
  };

  const handleDuplicate = (item: Page) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      title: item.title + " (Copy)",
      slug: item.slug + "-copy",
      featured: false,
      status: "draft" as const,
      order: pages.length + 1,
    };
    setPages(prev => [...prev, newItem]);
  };

  const getStatusConfig = (status: Page["status"]) => {
    return statusOptions.find(s => s.value === status) || statusOptions[0];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Website Pages Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Manage public website pages and content</p>
        </div>
        <button
          onClick={() => { setEditingPage(null); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Page
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
            <input
              type="search"
              placeholder="Search pages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 min-w-[160px]"
          >
            <option value="all">All Status</option>
            {statusOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      </div>

      {/* Pages Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider w-10">Order</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Page</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">SEO Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Nav</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredPages.map((page) => {
                const statusConfig = getStatusConfig(page.status);
                return (
                  <tr key={page.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-foreground">{page.order}</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => movePage(page.id, "up")}
                            disabled={page.order === 1}
                            className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => movePage(page.id, "down")}
                            disabled={page.order === filteredPages.length}
                            className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{page.title}</div>
                      <div className="text-text-secondary text-sm line-clamp-1">{page.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-sm text-text-secondary bg-muted/50 px-2 py-1 rounded">{page.slug}</code>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-text-secondary text-sm max-w-xs truncate">{page.seoTitle}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={page.showInNav}
                          onChange={() => setPages(prev => prev.map(p => p.id === page.id ? { ...p, showInNav: !p.showInNav } : p))}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-text-secondary">Show in Nav</span>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setEditingPage(page)}
                          className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDuplicate(page)}
                          className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                          title="Duplicate"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(page.id, page.status === "published" ? "draft" : "published")}
                          className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                          title={page.status === "published" ? "Unpublish" : "Publish"}
                        >
                          <Globe className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(page.id)}
                          className="p-2 rounded-lg text-text-secondary hover:bg-rose-50 hover:text-rose-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filteredPages.length === 0 && (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-text-secondary">No pages found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingPage) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddModal(false); setEditingPage(null); }}>
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingPage ? "Edit" : "Add"} Page</h3>
              <button onClick={() => { setShowAddModal(false); setEditingPage(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Page Title <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter page title"
                    defaultValue={editingPage?.title || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Slug <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    placeholder="/page-slug"
                    defaultValue={editingPage?.slug || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Page description..."
                  defaultValue={editingPage?.description || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Hero Image</label>
                <input
                  type="text"
                  placeholder="/images/page-hero.jpg"
                  defaultValue={editingPage?.heroImage || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Page Content (HTML)</label>
                <textarea
                  rows={8}
                  placeholder="Full page content..."
                  defaultValue={editingPage?.content || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none font-mono"
                />
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4">SEO Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">SEO Title</label>
                    <input
                      type="text"
                      placeholder="Page Title | Better Tomorrow Nepal Foundation"
                      defaultValue={editingPage?.seoTitle || ""}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Open Graph Image</label>
                    <input
                      type="text"
                      placeholder="/images/page-og.jpg"
                      defaultValue={editingPage?.ogImage || ""}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-1">Meta Description</label>
                    <textarea
                      rows={3}
                      placeholder="Meta description for search engines..."
                      defaultValue={editingPage?.seoDescription || ""}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Status</label>
                  <select
                    defaultValue={editingPage?.status || "draft"}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={editingPage?.showInNav || false}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm font-medium text-foreground">Show in Navigation</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddModal(false); setEditingPage(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Page</button>
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