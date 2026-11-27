"use client";

import { useState } from "react";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, FileText, Calendar, Tag, User, Globe, Save, Loader2, Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  status: "draft" | "published" | "archived";
  location: string;
  tags: string[];
}

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  featured: boolean;
  status: "draft" | "published" | "archived";
  location: string;
}

const initialStories: Story[] = [
  {
    id: "1",
    slug: "anitas-journey",
    title: "Anita's Journey: From Dropout to Dreamer",
    excerpt: "How a scholarship program changed the trajectory of a young girl's life in rural Nepal.",
    content: "<p>Anita Tamang, 14, from a remote village in Sindhupalchok district, had almost given up on her education...</p>",
    image: "/images/education.jpg",
    author: "Sunita Sharma",
    authorRole: "Education Program Coordinator",
    authorImage: "/images/team/sunita.jpg",
    category: "Education",
    date: "2024-11-15",
    readTime: "5 min read",
    featured: true,
    status: "published",
    location: "Sindhupalchok, Bagmati Province",
    tags: ["education", "scholarship", "girls-education"],
  },
  {
    id: "2",
    slug: "mobile-clinic-saves-lives",
    title: "Mobile Health Clinic Brings Hope to Remote Villages",
    excerpt: "Our mobile health unit reaches communities where the nearest hospital is a two-day walk away.",
    content: "<p>In the mountainous regions of Karnali Province, accessing healthcare has historically meant a grueling journey...</p>",
    image: "/images/healthcare.jpg",
    author: "Dr. Rajesh Thapa",
    authorRole: "Health Program Lead",
    authorImage: "/images/team/rajesh.jpg",
    category: "Healthcare",
    date: "2024-10-28",
    readTime: "6 min read",
    featured: false,
    status: "published",
    location: "Jumla, Karnali Province",
    tags: ["healthcare", "mobile-clinic", "rural-health"],
  },
  {
    id: "3",
    slug: "women-cooperative-success",
    title: "Women's Cooperative Transforms Village Economy",
    excerpt: "How a group of 25 women built a thriving enterprise that now supports 150 families.",
    content: "<p>In a small village in Doti district, Sudurpashchim Province, a group of 25 women gathered under a tree...</p>",
    image: "/images/women.jpg",
    author: "Priya Kandel",
    authorRole: "Women Empowerment Program Manager",
    authorImage: "/images/team/priya.jpg",
    category: "Women Empowerment",
    date: "2024-10-10",
    readTime: "7 min read",
    featured: true,
    status: "published",
    location: "Doti, Sudurpashchim Province",
    tags: ["women-empowerment", "cooperative", "economic-development"],
  },
];

const initialNews: NewsItem[] = [
  {
    id: "1",
    slug: "climate-resilience-karnali",
    title: "BTN Foundation Launches New Climate Resilience Program in Karnali",
    excerpt: "A three-year initiative to build climate-adaptive capacity in 20 vulnerable mountain communities.",
    content: "<p>Full article content...</p>",
    image: "/images/environment.jpg",
    category: "Program Launch",
    date: "2024-11-20",
    author: "Communications Team",
    readTime: "3 min read",
    featured: true,
    status: "published",
    location: "Karnali Province",
  },
  {
    id: "2",
    slug: "annual-report-2024",
    title: "Annual Impact Report 2024 Published",
    excerpt: "Our comprehensive report detailing reach, outcomes, and financial stewardship across all programs.",
    content: "<p>Full article content...</p>",
    image: "/images/children.jpg",
    category: "Report",
    date: "2024-11-10",
    author: "Monitoring & Evaluation Team",
    readTime: "4 min read",
    featured: false,
    status: "published",
    location: "Kathmandu, Nepal",
  },
];

const categories = ["Education", "Healthcare", "Women Empowerment", "Environment", "Youth Development", "Community Development", "Humanitarian", "Program Launch", "Report", "Partnership", "Event"];

export default function StoriesManagementPage() {
  const [activeTab, setActiveTab] = useState<string>("stories");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Story | NewsItem | null>(null);

  const [stories, setStories] = useState<Story[]>(initialStories);
  const [news, setNews] = useState<NewsItem[]>(initialNews);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredStories = stories.filter((s) => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || s.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || s.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const filteredNews = news.filter((n) => {
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || n.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || n.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleStatusChange = (id: string, newStatus: "draft" | "published" | "archived", type: "story" | "news") => {
    if (type === "story") {
      setStories(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    } else {
      setNews(prev => prev.map(n => n.id === id ? { ...n, status: newStatus } : n));
    }
  };

  const handleDelete = (id: string, type: "story" | "news") => {
    if (type === "story") {
      setStories(prev => prev.filter(s => s.id !== id));
    } else {
      setNews(prev => prev.filter(n => n.id !== id));
    }
  };

  const handleDuplicate = (item: Story | NewsItem, type: "story" | "news") => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      slug: `${item.slug}-copy`,
      title: `${item.title} (Copy)`,
      status: "draft" as const,
    };
    if (type === "story") {
      setStories(prev => [...prev, newItem as Story]);
    } else {
      setNews(prev => [...prev, newItem as NewsItem]);
    }
  };

  const renderItemRow = (item: Story | NewsItem, type: "story" | "news") => {
    const isStory = type === "story";
    return (
      <tr key={item.id} className="hover:bg-muted/30 transition-colors">
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="font-medium text-foreground">{item.title}</div>
              <div className="text-text-secondary text-sm">{item.excerpt}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cn(
            item.category === "Education" && "bg-primary/10 text-primary",
            item.category === "Healthcare" && "bg-rose-100 text-rose-700",
            item.category === "Women Empowerment" && "bg-purple-100 text-purple-700",
            item.category === "Environment" && "bg-emerald-100 text-emerald-700",
            item.category === "Program Launch" && "bg-blue-100 text-blue-700",
            item.category === "Report" && "bg-orange-100 text-orange-700",
            item.category === "Partnership" && "bg-indigo-100 text-indigo-700",
            item.category === "Event" && "bg-pink-100 text-pink-700",
            "bg-slate-100 text-slate-700"
          )}`}>
            {item.category}
          </span>
        </td>
        <td className="px-6 py-4 text-text-secondary">{item.author}</td>
        <td className="px-6 py-4 text-text-secondary">{new Date(item.date).toLocaleDateString()}</td>
        <td className="px-6 py-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cn(
            item.status === "published" && "bg-emerald-100 text-emerald-700",
            item.status === "draft" && "bg-amber-100 text-amber-700",
            item.status === "archived" && "bg-slate-100 text-slate-700"
          )}`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            {item.featured && <span className="ml-1">★</span>}
          </span>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setEditingItem(item)}
              className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
              title="Edit"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDuplicate(item, type)}
              className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
              title="Duplicate"
            >
              <FileText className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                onClick={() => handleStatusChange(item.id, item.status === "published" ? "draft" : "published", type)}
                className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                title={item.status === "published" ? "Unpublish" : "Publish"}
              >
                {item.status === "published" ? <Eye className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
              </button>
            </div>
            <button
              onClick={() => handleDelete(item.id, type)}
              className="p-2 rounded-lg text-text-secondary hover:bg-rose-50 hover:text-rose-500 transition-colors"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            {activeTab === "stories" ? "Stories Management" : "News Management"}
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">
            {activeTab === "stories" ? "Create, edit, and manage impact stories" : "Manage news articles and announcements"}
          </p>
        </div>
        <button
          onClick={() => {
            setEditingItem(null);
            setShowAddModal(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          {activeTab === "stories" ? "Add Story" : "Add News"}
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <nav className="flex overflow-x-auto p-1" aria-label="Content Type Tabs">
          <button
            onClick={() => setActiveTab("stories")}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
              activeTab === "stories"
                ? "bg-primary text-white shadow-sm"
                : "text-text-secondary hover:bg-muted/40 hover:text-foreground"
            )}
          >
            <FileText className="w-4 h-4" />
            Stories ({stories.length})
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
              activeTab === "news"
                ? "bg-primary text-white shadow-sm"
                : "text-text-secondary hover:bg-muted/40 hover:text-foreground"
            )}
          >
            <Globe className="w-4 h-4" />
            News ({news.length})
          </button>
        </nav>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
            <input
              type="search"
              placeholder={`Search ${activeTab}...`}
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
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 min-w-[180px]"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {activeTab === "stories" ? (
                filteredStories.map((story) => renderItemRow(story, "story"))
              ) : (
                filteredNews.map((newsItem) => renderItemRow(newsItem, "news"))
              )}
            </tbody>
          </table>
        </div>
        {(activeTab === "stories" ? filteredStories : filteredNews).length === 0 && (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-text-secondary">No {activeTab} found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddModal(false); setEditingItem(null); }}>
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingItem ? "Edit" : "Add"} {activeTab === "stories" ? "Story" : "News"}</h3>
              <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Title <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter title"
                    defaultValue={editingItem?.title || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Slug</label>
                  <input
                    type="text"
                    placeholder="auto-generated-from-title"
                    defaultValue={editingItem?.slug || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                  <select
                    defaultValue={editingItem?.category || categories[0]}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Status</label>
                  <select
                    defaultValue={editingItem?.status || "draft"}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Excerpt</label>
                <textarea
                  rows={3}
                  placeholder="Brief summary..."
                  defaultValue={editingItem?.excerpt || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Content</label>
                <textarea
                  rows={10}
                  placeholder="Full content (HTML supported)..."
                  defaultValue={editingItem?.content || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none font-mono"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Featured Image</label>
                  <input
                    type="text"
                    placeholder="/images/article.jpg"
                    defaultValue={editingItem?.image || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Kathmandu, Nepal"
                    defaultValue={editingItem?.location || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>
              {activeTab === "stories" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Author</label>
                    <input type="text" placeholder="Author Name" defaultValue={(editingItem as Story)?.author || ""} className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Author Role</label>
                    <input type="text" placeholder="Program Coordinator" defaultValue={(editingItem as Story)?.authorRole || ""} className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Author Image</label>
                    <input type="text" placeholder="/images/team/author.jpg" defaultValue={(editingItem as Story)?.authorImage || ""} className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-1">Tags (comma-separated)</label>
                    <input type="text" placeholder="education, scholarship, girls-education" defaultValue={(editingItem as Story)?.tags?.join(", ") || ""} className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Read Time</label>
                    <input type="text" placeholder="5 min read" defaultValue={(editingItem as Story)?.readTime || ""} className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked={(editingItem as Story)?.featured || false} className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                      <span className="text-sm font-medium text-foreground">Featured</span>
                    </label>
                  </div>
                </div>
              )}
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save {activeTab === "stories" ? "Story" : "News"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}