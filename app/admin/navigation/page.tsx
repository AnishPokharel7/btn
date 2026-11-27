"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, Menu, ChevronDown, ChevronUp, GripVertical, ExternalLink, Save, Loader2, Check, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
  external: boolean;
  parentId: string | null;
  order: number;
  enabled: boolean;
  isCTA: boolean;
}

const initialNavItems: NavItem[] = [
  { id: "1", label: "Home", href: "/", external: false, parentId: null, order: 1, enabled: true, isCTA: false },
  { id: "2", label: "About Us", href: "/about", external: false, parentId: null, order: 2, enabled: true, isCTA: false },
  { id: "3", label: "Our Programs", href: "/programs", external: false, parentId: null, order: 3, enabled: true, isCTA: false },
  { id: "4", label: "Education", href: "/programs/education", external: false, parentId: "3", order: 1, enabled: true, isCTA: false },
  { id: "5", label: "Healthcare", href: "/programs/health", external: false, parentId: "3", order: 2, enabled: true, isCTA: false },
  { id: "6", label: "Women Empowerment", href: "/programs/women", external: false, parentId: "3", order: 3, enabled: true, isCTA: false },
  { id: "7", label: "Youth Development", href: "/programs/youth", external: false, parentId: "3", order: 4, enabled: true, isCTA: false },
  { id: "8", label: "Our Impact", href: "/impact", external: false, parentId: null, order: 4, enabled: true, isCTA: false },
  { id: "9", label: "Stories", href: "/stories", external: false, parentId: null, order: 5, enabled: true, isCTA: false },
  { id: "10", label: "Get Involved", href: "/get-involved", external: false, parentId: null, order: 6, enabled: true, isCTA: false },
  { id: "11", label: "Volunteer", href: "/get-involved#volunteer", external: false, parentId: "10", order: 1, enabled: true, isCTA: false },
  { id: "12", label: "Donate", href: "/donate", external: false, parentId: "10", order: 2, enabled: true, isCTA: true },
  { id: "13", label: "Corporate Partnership", href: "/get-involved#corporate", external: false, parentId: "10", order: 3, enabled: true, isCTA: false },
  { id: "14", label: "Fundraise", href: "/get-involved#fundraise", external: false, parentId: "10", order: 4, enabled: true, isCTA: false },
  { id: "15", label: "Contact", href: "/contact", external: false, parentId: null, order: 7, enabled: true, isCTA: false },
];

export default function NavigationManagementPage() {
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<NavItem | null>(null);
  const [expandedParents, setExpandedParents] = useState<string[]>([]);

  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredItems = navItems.filter((item) => {
    const matchesSearch = item.label.toLowerCase().includes(search.toLowerCase()) || item.href.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const rootItems = filteredItems.filter(item => item.parentId === null).sort((a, b) => a.order - b.order);

  const getChildren = (parentId: string) => {
    return filteredItems.filter(item => item.parentId === parentId).sort((a, b) => a.order - b.order);
  };

  const handleStatusChange = (id: string) => {
    setNavItems(prev => prev.map(item => item.id === id ? { ...item, enabled: !item.enabled } : item));
  };

  const handleDelete = (id: string) => {
    // Also delete children
    const childrenIds = navItems.filter(item => item.parentId === id).map(c => c.id);
    const idsToDelete = [id, ...childrenIds];
    setNavItems(prev => prev.filter(item => !idsToDelete.includes(item.id)));
  };

  const moveItem = (id: string, direction: "up" | "down") => {
    setNavItems(prev => {
      const item = prev.find(i => i.id === id);
      if (!item) return prev;
      
      const siblings = prev.filter(i => i.parentId === item.parentId).sort((a, b) => a.order - b.order);
      const index = siblings.findIndex(i => i.id === id);
      if (index === -1) return prev;
      
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= siblings.length) return prev;
      
      const newSiblings = [...siblings];
      [newSiblings[index], newSiblings[newIndex]] = [newSiblings[newIndex], newSiblings[index]];
      
      return prev.map(item => {
        const sibling = newSiblings.find(s => s.id === item.id);
        if (sibling) return { ...item, order: sibling.order };
        return item;
      });
    });
  };

  const handleDuplicate = (item: NavItem) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      label: item.label + " (Copy)",
      enabled: false,
      order: navItems.filter(i => i.parentId === item.parentId).length + 1,
    };
    setNavItems(prev => [...prev, newItem]);
  };

  const toggleParent = (parentId: string) => {
    setExpandedParents(prev => prev.includes(parentId) ? prev.filter(id => id !== parentId) : [...prev, parentId]);
  };

  const isParentExpanded = (parentId: string) => expandedParents.includes(parentId);

  const renderItemRow = (item: NavItem, level: number = 0) => {
    const children = getChildren(item.id);
    const hasChildren = children.length > 0;
    const isExpanded = isParentExpanded(item.id);

    return (
      <tbody key={item.id}>
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-foreground text-sm">{item.order}</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveItem(item.id, "up")}
                  disabled={item.order === 1}
                  className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => moveItem(item.id, "down")}
                  disabled={item.order === navItems.filter(i => i.parentId === item.parentId).length}
                  className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              {level > 0 && <ChevronLeft className="w-4 h-4 text-text-secondary/50 ml-2" />}
            </div>
          </td>
          <td className="px-6 py-3">
            <div className="flex items-center gap-2">
              {hasChildren && (
                <button
                  onClick={() => toggleParent(item.id)}
                  className="p-1 text-text-secondary/50 hover:text-text-secondary"
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>
              )}{' '}
              <span className={cn(
                "font-medium truncate",
                item.enabled ? "text-foreground" : "text-text-secondary/60 line-through"
              )}>
                {item.label}
                {item.isCTA && <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-secondary/10 text-secondary rounded">CTA</span>}
                {item.external && <ExternalLink className="w-3 h-3 ml-1 text-text-secondary/50" />}
              </span>
            </div>
          </td>
          <td className="px-6 py-3">
            <code className="text-sm text-text-secondary bg-muted/50 px-2 py-1 rounded">{item.href}</code>
          </td>
          <td className="px-6 py-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={item.enabled}
                onChange={() => handleStatusChange(item.id)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-text-secondary">{item.enabled ? "Enabled" : "Disabled"}</span>
            </label>
          </td>
          <td className="px-6 py-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setEditingItem(item)}
                className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                title="Edit"
              >
                <Edit className="w-4 h-4" />
              </button>
              {hasChildren && (
                <button
                  onClick={() => { setEditingItem(null); setShowAddModal(true); }}
                  className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                  title="Add Child"
                >
                  <Plus className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => handleDuplicate(item)}
                className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                title="Duplicate"
              >
                <Menu className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 rounded-lg text-text-secondary hover:bg-rose-50 hover:text-rose-500 transition-colors"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
        {hasChildren && isExpanded && (
          <>
            {children.map(child => renderItemRow(child, level + 1))}
          </>
        )}
      </tbody>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Navigation Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Configure website navigation menus</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>

      {/* Search */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
          <input
            type="search"
            placeholder="Search menu items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>

      {/* Navigation Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider w-16">Order</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Menu Item</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">URL / Route</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            {rootItems.map((item) => renderItemRow(item))}
          </table>
        </div>
        {rootItems.length === 0 && (
          <div className="p-12 text-center">
            <Menu className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-text-secondary">No menu items found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddModal(false); setEditingItem(null); }}>
          <div className="bg-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingItem ? "Edit" : "Add"} Menu Item</h3>
              <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Label <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  placeholder="Menu Label"
                  defaultValue={editingItem?.label || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">URL / Route <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  placeholder="/about or https://external.com"
                  defaultValue={editingItem?.href || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Parent Menu</label>
                <select
                  defaultValue={editingItem?.parentId || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                >
                  <option value="">Top Level (No Parent)</option>
                  {navItems.filter(i => i.parentId === null && i.id !== editingItem?.id).map(parent => (
                    <option key={parent.id} value={parent.id}>{parent.label}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Display Order</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue={editingItem?.order || 1}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingItem?.enabled ?? true}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">Enabled</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingItem?.external ?? false}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">External Link</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingItem?.isCTA ?? false}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">CTA Button Style</span>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Menu Item</button>
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
          <Menu className="w-5 h-5" />
          Preview Navigation
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