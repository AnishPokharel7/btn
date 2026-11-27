"use client";

import { useState } from "react";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye, MessageSquare, Star, User, Save, Loader2, Check, ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
  program: string;
  featured: boolean;
  status: "draft" | "published" | "archived";
  order: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Before BTN Foundation's support, my daughter had to drop out of school. Today, she's the top student in her class and dreams of becoming a teacher. This program didn't just change her life—it changed our whole family's future.",
    author: "Ram Bahadur Tamang",
    role: "Father of scholarship recipient",
    location: "Sindhupalchok, Bagmati Province",
    image: "/images/testimonials/ram.jpg",
    program: "Education & Child Development",
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "2",
    quote: "The mobile health clinic saved my grandson's life when he had severe pneumonia. The doctors came to our village with medicines and equipment. We didn't have to walk two days to the hospital. I will never forget their kindness.",
    author: "Aama Devi",
    role: "Grandmother, patient family",
    location: "Jumla, Karnali Province",
    image: "/images/testimonials/aama.jpg",
    program: "Health & Wellbeing",
    featured: false,
    status: "published",
    order: 2,
  },
  {
    id: "3",
    quote: "Joining the women's cooperative gave me confidence I never knew I had. Now I manage our group's accounts, speak in ward meetings, and my husband respects my opinions. We are building something together.",
    author: "Sita Kumari",
    role: "Cooperative treasurer",
    location: "Doti, Sudurpashchim Province",
    image: "/images/testimonials/sita.jpg",
    program: "Women Empowerment",
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "4",
    quote: "The digital skills bootcamp was a turning point. I went from unemployed to earning in dollars from my village. Now I'm training other young people in my community. The ripple effect is real.",
    author: "Prakash Chaudhary",
    role: "Freelance web developer, bootcamp graduate",
    location: "Rupandehi, Lumbini Province",
    image: "/images/testimonials/prakash.jpg",
    program: "Youth Development",
    featured: false,
    status: "published",
    order: 4,
  },
  {
    id: "5",
    quote: "Our community forest was dying. BTN Foundation didn't just give us trees—they gave us knowledge, tools, and a plan. Now our water sources are recharged, landslides have stopped, and we have income from forest products.",
    author: "Bir Bahadur Gurung",
    role: "Community Forest User Group Chairperson",
    location: "Kaski, Gandaki Province",
    image: "/images/testimonials/bir.jpg",
    program: "Environmental Sustainability",
    featured: true,
    status: "published",
    order: 5,
  },
  {
    id: "6",
    quote: "During last year's floods, BTN Foundation was the first organization to reach our village with relief supplies. They didn't just distribute materials—they stayed to help us rebuild. That's true partnership.",
    author: "Maya Devi",
    role: "Flood-affected community member",
    location: "Saptari, Madhesh Province",
    image: "/images/testimonials/maya.jpg",
    program: "Humanitarian Assistance",
    featured: false,
    status: "published",
    order: 6,
  },
];

const programs = [
  "Education & Child Development",
  "Health & Wellbeing",
  "Women Empowerment",
  "Youth Development",
  "Community Development",
  "Environmental Sustainability",
  "Livelihood & Skill Development",
  "Humanitarian Assistance",
];

export default function TestimonialsManagementPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [programFilter, setProgramFilter] = useState("all");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);

  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredTestimonials = testimonials
    .filter((t) => {
      const matchesSearch = t.quote.toLowerCase().includes(search.toLowerCase()) || t.author.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || t.status === statusFilter;
      const matchesProgram = programFilter === "all" || t.program === programFilter;
      return matchesSearch && matchesStatus && matchesProgram;
    })
    .sort((a, b) => a.order - b.order);

  const handleStatusChange = (id: string, newStatus: "draft" | "published" | "archived") => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const handleDelete = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const moveTestimonial = (id: string, direction: "up" | "down") => {
    setTestimonials(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex(t => t.id === id);
      if (index === -1) return prev;
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= sorted.length) return prev;
      [sorted[index], sorted[newIndex]] = [sorted[newIndex], sorted[index]];
      return sorted.map((t, i) => ({ ...t, order: i + 1 }));
    });
  };

  const handleDuplicate = (item: Testimonial) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      quote: item.quote + " (Copy)",
      author: item.author + " (Copy)",
      featured: false,
      status: "draft" as const,
      order: testimonials.length + 1,
    };
    setTestimonials(prev => [...prev, newItem]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Testimonials Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Manage beneficiary and partner testimonials</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Testimonial
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
            <input
              type="search"
              placeholder="Search testimonials..."
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
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 min-w-[200px]"
          >
            <option value="all">All Programs</option>
            {programs.map((prog) => <option key={prog} value={prog}>{prog}</option>)}
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider w-10">Order</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Testimonial</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredTestimonials.map((testimonial) => (
                <tr key={testimonial.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-foreground">{testimonial.order}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => moveTestimonial(testimonial.id, "up")}
                          disabled={testimonial.order === 1}
                          className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveTestimonial(testimonial.id, "down")}
                          disabled={testimonial.order === filteredTestimonials.length}
                          className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground line-clamp-2">{testimonial.quote}</p>
                        <p className="text-text-secondary text-sm mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-text-secondary text-sm">{testimonial.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {testimonial.program}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cn(
                      testimonial.status === "published" && "bg-emerald-100 text-emerald-700",
                      testimonial.status === "draft" && "bg-amber-100 text-amber-700",
                      testimonial.status === "archived" && "bg-slate-100 text-slate-700"
                    )}`}>
                      {testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}
                      {testimonial.featured && <Star className="w-3 h-3 ml-1 fill-current" />}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingItem(testimonial)}
                        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDuplicate(testimonial)}
                        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                        title="Duplicate"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(testimonial.id, testimonial.status === "published" ? "draft" : "published")}
                        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                        title={testimonial.status === "published" ? "Unpublish" : "Publish"}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="p-2 rounded-lg text-text-secondary hover:bg-rose-50 hover:text-rose-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTestimonials.length === 0 && (
          <div className="p-12 text-center">
            <MessageSquare className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-text-secondary">No testimonials found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddModal(false); setEditingItem(null); }}>
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingItem ? "Edit" : "Add"} Testimonial</h3>
              <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Quote <span className="text-rose-500">*</span></label>
                <textarea
                  rows={5}
                  placeholder="Enter the testimonial quote..."
                  defaultValue={editingItem?.quote || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Author Name <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Author Name"
                    defaultValue={editingItem?.author || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Role</label>
                  <input
                    type="text"
                    placeholder="Father of scholarship recipient"
                    defaultValue={editingItem?.role || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Sindhupalchok, Bagmati Province"
                    defaultValue={editingItem?.location || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Program</label>
                  <select
                    defaultValue={editingItem?.program || programs[0]}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    {programs.map((prog) => <option key={prog} value={prog}>{prog}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Profile Image</label>
                  <input
                    type="text"
                    placeholder="/images/testimonials/author.jpg"
                    defaultValue={editingItem?.image || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
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
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingItem?.featured || false}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">Featured Testimonial</span>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Testimonial</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/about#testimonials"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <Eye className="w-5 h-5" />
          Preview on Website
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