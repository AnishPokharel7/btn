"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Heart, Users, Building2, UserCheck, Gift, Save, Loader2, Check, ChevronDown, GripVertical, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface GetInvolvedOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  ctaText: string;
  featured: boolean;
  status: "active" | "inactive";
  order: number;
}

const iconOptions = [
  { value: "heart", label: "Heart" },
  { value: "gift", label: "Gift" },
  { value: "users", label: "Users" },
  { value: "building2", label: "Building" },
  { value: "user-check", label: "User Check" },
  { value: "book", label: "Book" },
  { value: "target", label: "Target" },
];

const initialOptions: GetInvolvedOption[] = [
  {
    id: "1",
    title: "Become a Volunteer",
    description: "Join our community of changemakers. Contribute your time, skills, and passion to programs that transform lives across Nepal.",
    icon: "heart",
    href: "/get-involved#volunteer",
    ctaText: "Apply to Volunteer",
    featured: true,
    status: "active",
    order: 1,
  },
  {
    id: "2",
    title: "Make a Donation",
    description: "Your contribution—large or small—directly funds programs that reach the most vulnerable communities. Every rupee makes a difference.",
    icon: "gift",
    href: "/donate",
    ctaText: "Donate Now",
    featured: true,
    status: "active",
    order: 2,
  },
  {
    id: "3",
    title: "Corporate Partnership",
    description: "Align your business with purpose. Partner with us on CSR initiatives, employee engagement, cause marketing, or strategic philanthropy.",
    icon: "building2",
    href: "/get-involved#corporate",
    ctaText: "Explore Partnership",
    featured: true,
    status: "active",
    order: 3,
  },
  {
    id: "4",
    title: "Fundraise for Us",
    description: "Organize a fundraiser—birthday campaigns, marathon runs, community events, or online challenges. We'll support you every step of the way.",
    icon: "users",
    href: "/get-involved#fundraise",
    ctaText: "Start Fundraising",
    featured: false,
    status: "active",
    order: 4,
  },
];

const initialDonationImpacts = [
  { id: "1", amount: 1000, description: "Provides school supplies for 5 children for one year", icon: "book" },
  { id: "2", amount: 2500, description: "Funds one mobile health clinic visit serving 50+ patients", icon: "heart" },
  { id: "3", amount: 5000, description: "Supports vocational training for one youth for 3 months", icon: "user-check" },
  { id: "4", amount: 10000, description: "Establishes a women's savings group with seed capital", icon: "users" },
  { id: "5", amount: 25000, description: "Plants 100 native saplings in degraded forest land", icon: "target" },
  { id: "6", amount: 50000, description: "Funds emergency relief kit for 10 flood-affected families", icon: "gift" },
];

export default function GetInvolvedManagementPage() {
  const [activeTab, setActiveTab] = useState<string>("options");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [options, setOptions] = useState<GetInvolvedOption[]>(initialOptions);
  const [donationImpacts, setDonationImpacts] = useState(initialDonationImpacts);
  const [editingOption, setEditingOption] = useState<GetInvolvedOption | null>(null);
  const [showAddOptionModal, setShowAddOptionModal] = useState(false);
  const [editingImpact, setEditingImpact] = useState<typeof initialDonationImpacts[0] | null>(null);
  const [showAddImpactModal, setShowAddImpactModal] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: "options", label: "Get Involved Options", icon: Heart },
    { id: "impacts", label: "Donation Impacts", icon: Gift },
  ];

  const handleOptionStatusChange = (id: string, newStatus: "active" | "inactive") => {
    setOptions(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const handleOptionDelete = (id: string) => {
    setOptions(prev => prev.filter(o => o.id !== id));
  };

  const moveOption = (id: string, direction: "up" | "down") => {
    setOptions(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex(o => o.id === id);
      if (index === -1) return prev;
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= sorted.length) return prev;
      [sorted[index], sorted[newIndex]] = [sorted[newIndex], sorted[index]];
      return sorted.map((o, i) => ({ ...o, order: i + 1 }));
    });
  };

  const handleImpactDelete = (id: string) => {
    setDonationImpacts(prev => prev.filter(i => i.id !== id));
  };

  const renderOptionIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      heart: <Heart className="w-5 h-5" />,
      gift: <Gift className="w-5 h-5" />,
      users: <Users className="w-5 h-5" />,
      building2: <Building2 className="w-5 h-5" />,
      "user-check": <UserCheck className="w-5 h-5" />,
      book: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      target: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    };
    return icons[iconName] || icons.heart;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Get Involved Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Configure volunteer, fundraising, and partnership options</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { setEditingOption(null); setShowAddOptionModal(true); }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            Add Option
          </button>
          <button
            onClick={() => { setEditingImpact(null); setShowAddImpactModal(true); }}
            className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Impact
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <nav className="flex overflow-x-auto p-1" aria-label="Get Involved Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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

      {/* Tab Content */}
      <div className="bg-card rounded-2xl border border-border p-6">
        {activeTab === "options" && (
          <div className="space-y-4">
            <div className="space-y-3">
              {options.map((option) => (
                <div key={option.id} className="bg-muted/30 border border-border rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <GripVertical className="w-5 h-5 text-text-secondary/50 flex-shrink-0 cursor-grab mt-1" />
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {renderOptionIcon(option.icon)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">{option.title}</h4>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={option.featured}
                              onChange={() => setOptions(prev => prev.map(o => o.id === option.id ? { ...o, featured: !o.featured } : o))}
                              className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                            />
                            <span className="text-xs text-text-secondary">Featured</span>
                          </label>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${cn(
                            option.status === "active" && "bg-emerald-100 text-emerald-700",
                            option.status === "inactive" && "bg-slate-100 text-slate-700"
                          )}`}>
                            {option.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm">{option.description}</p>
                      <div className="flex items-center gap-3 text-sm text-text-secondary">
                        <span>CTA: {option.ctaText}</span>
                        <span>Link: {option.href}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveOption(option.id, "up")}
                        disabled={option.order === 1}
                        className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => moveOption(option.id, "down")}
                        disabled={option.order === options.length}
                        className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingOption(option)}
                        className="p-2 text-text-secondary hover:text-foreground transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOptionDelete(option.id)}
                        className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "impacts" && (
          <div className="space-y-4">
            <div className="space-y-3">
              {donationImpacts.map((impact) => (
                <div key={impact.id} className="bg-muted/30 border border-border rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const icons: Record<string, React.ReactNode> = {
                          book: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                          heart: <Heart className="w-5 h-5" />,
                          "user-check": <UserCheck className="w-5 h-5" />,
                          users: <Users className="w-5 h-5" />,
                          target: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                          gift: <Gift className="w-5 h-5" />,
                        };
                        return icons[impact.icon] || icons.heart;
                      })()}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-foreground text-lg">NPR {impact.amount.toLocaleString()}</span>
                          <span className="text-text-secondary text-sm ml-2">{impact.description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingImpact(impact)}
                        className="p-2 text-text-secondary hover:text-foreground transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleImpactDelete(impact.id)}
                        className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Option Modal */}
      {(showAddOptionModal || editingOption) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddOptionModal(false); setEditingOption(null); }}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingOption ? "Edit" : "Add"} Get Involved Option</h3>
              <button onClick={() => { setShowAddOptionModal(false); setEditingOption(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Title <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  placeholder="Become a Volunteer"
                  defaultValue={editingOption?.title || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Description..."
                  defaultValue={editingOption?.description || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Icon</label>
                  <select
                    defaultValue={editingOption?.icon || "heart"}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    {iconOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">CTA Text</label>
                  <input
                    type="text"
                    placeholder="Apply to Volunteer"
                    defaultValue={editingOption?.ctaText || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Link</label>
                  <input
                    type="text"
                    placeholder="/get-involved#volunteer"
                    defaultValue={editingOption?.href || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Status</label>
                  <select
                    defaultValue={editingOption?.status || "active"}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingOption?.featured || false}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">Featured Option</span>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddOptionModal(false); setEditingOption(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Option</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Impact Modal */}
      {(showAddImpactModal || editingImpact) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddImpactModal(false); setEditingImpact(null); }}>
          <div className="bg-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingImpact ? "Edit" : "Add"} Donation Impact</h3>
              <button onClick={() => { setShowAddImpactModal(false); setEditingImpact(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Amount (NPR) <span className="text-rose-500">*</span></label>
                  <input
                    type="number"
                    placeholder="1000"
                    defaultValue={editingImpact?.amount || 1000}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                    min="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Icon</label>
                  <select
                    defaultValue={editingImpact?.icon || "heart"}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    {iconOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Description <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  placeholder="Provides school supplies for 5 children for one year"
                  defaultValue={editingImpact?.description || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddImpactModal(false); setEditingImpact(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Impact</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/get-involved"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <Heart className="w-5 h-5" />
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