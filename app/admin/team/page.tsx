"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, User, UserCheck, Link as LinkedinIcon, Mail, Save, Loader2, Check, ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
  featured: boolean;
  status: "active" | "inactive";
  order: number;
}

const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Arjun Prasad Sharma",
    role: "Founder & Executive Director",
    bio: "Dr. Sharma brings over 25 years of experience in international development, having served in senior leadership roles at UNDP, UNICEF, and international NGOs. He holds a PhD in Development Studies from Kathmandu University and has authored numerous publications on community-led development in Nepal.",
    image: "/images/team/arjun.jpg",
    linkedin: "https://linkedin.com/in/arjun-sharma",
    email: "arjun.sharma@bettertomorrownepal.org",
    featured: true,
    status: "active",
    order: 1,
  },
  {
    id: "2",
    name: "Meera Khadka",
    role: "Deputy Director, Programs",
    bio: "Meera has 18 years of experience designing and managing large-scale development programs across South Asia. She previously served as Country Program Manager for an international NGO and holds a Master's in Public Policy from the National University of Singapore.",
    image: "/images/team/meera-khadka.jpg",
    linkedin: "https://linkedin.com/in/meera-khadka",
    email: "meera.khadka@bettertomorrownepal.org",
    featured: true,
    status: "active",
    order: 2,
  },
  {
    id: "3",
    name: "Rajesh Kumar Thapa",
    role: "Director, Finance & Operations",
    bio: "Rajesh is a Chartered Accountant with 20 years of experience in financial management for non-profits and social enterprises. He ensures organizational financial health, compliance, and transparency. He is a member of the Institute of Chartered Accountants of Nepal.",
    image: "/images/team/rajesh-thapa.jpg",
    linkedin: "https://linkedin.com/in/rajesh-thapa",
    email: "rajesh.thapa@bettertomorrownepal.org",
    featured: true,
    status: "active",
    order: 3,
  },
  {
    id: "4",
    name: "Dr. Sunita Sharma",
    role: "Head, Education & Child Development",
    bio: "Dr. Sharma is an education specialist with a PhD in Educational Leadership. She has led education programs for government and non-government organizations, focusing on inclusive education, girls' education, and teacher professional development.",
    image: "/images/team/sunita.jpg",
    linkedin: "https://linkedin.com/in/sunita-sharma-edu",
    email: "sunita.sharma@bettertomorrownepal.org",
    featured: false,
    status: "active",
    order: 4,
  },
  {
    id: "5",
    name: "Dr. Rajesh Thapa",
    role: "Head, Health & Wellbeing",
    bio: "A public health physician with 15 years of experience in health systems strengthening, maternal-child health, and emergency response. He has worked with WHO, Save the Children, and the Ministry of Health.",
    image: "/images/team/rajesh.jpg",
    linkedin: "https://linkedin.com/in/rajesh-thapa-md",
    email: "rajesh.thapa@bettertomorrownepal.org",
    featured: false,
    status: "active",
    order: 5,
  },
  {
    id: "6",
    name: "Priya Kandel",
    role: "Head, Women Empowerment",
    bio: "Priya is a gender and development specialist with expertise in women's economic empowerment, gender-based violence prevention, and feminist leadership. She holds a Master's in Gender Studies and has worked across Nepal and Bangladesh.",
    image: "/images/team/priya.jpg",
    linkedin: "https://linkedin.com/in/priya-kandel",
    email: "priya.kandel@bettertomorrownepal.org",
    featured: true,
    status: "active",
    order: 6,
  },
];

export default function TeamManagementPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<TeamMember | null>(null);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredTeamMembers = teamMembers
    .filter((t) => {
      const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.role.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => a.order - b.order);

  const handleStatusChange = (id: string, newStatus: "active" | "inactive") => {
    setTeamMembers(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const handleDelete = (id: string) => {
    setTeamMembers(prev => prev.filter(t => t.id !== id));
  };

  const moveMember = (id: string, direction: "up" | "down") => {
    setTeamMembers(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex(t => t.id === id);
      if (index === -1) return prev;
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= sorted.length) return prev;
      [sorted[index], sorted[newIndex]] = [sorted[newIndex], sorted[index]];
      return sorted.map((t, i) => ({ ...t, order: i + 1 }));
    });
  };

  const handleDuplicate = (item: TeamMember) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      name: item.name + " (Copy)",
      featured: false,
      status: "inactive" as const,
      order: teamMembers.length + 1,
    };
    setTeamMembers(prev => [...prev, newItem]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Team Members Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Manage team member profiles and leadership</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Team Member
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
            <input
              type="search"
              placeholder="Search team members..."
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Team Member</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredTeamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-foreground">{member.order}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => moveMember(member.id, "up")}
                          disabled={member.order === 1}
                          className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveMember(member.id, "down")}
                          disabled={member.order === filteredTeamMembers.length}
                          className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-foreground">{member.name}</div>
                        <div className="text-text-secondary text-sm line-clamp-1">{member.bio}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-text-secondary text-sm">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                        <LinkedinIcon className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-1 hover:text-primary transition-colors mt-1">
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cn(
                        member.status === "active" && "bg-emerald-100 text-emerald-700",
                        member.status === "inactive" && "bg-slate-100 text-slate-700"
                      )}`}>
                        {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                      </span>
                      {member.featured && <UserCheck className="w-4 h-4 text-secondary" />}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingItem(member)}
                        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDuplicate(member)}
                        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                        title="Duplicate"
                      >
                        <User className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(member.id, member.status === "active" ? "inactive" : "active")}
                        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                        title={member.status === "active" ? "Deactivate" : "Activate"}
                      >
                        <UserCheck className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(member.id)}
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
        {filteredTeamMembers.length === 0 && (
          <div className="p-12 text-center">
            <User className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-text-secondary">No team members found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddModal(false); setEditingItem(null); }}>
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingItem ? "Edit" : "Add"} Team Member</h3>
              <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    defaultValue={editingItem?.name || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Role <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Executive Director"
                    defaultValue={editingItem?.role || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Profile Image</label>
                  <input
                    type="text"
                    placeholder="/images/team/member.jpg"
                    defaultValue={editingItem?.image || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Status</label>
                  <select
                    defaultValue={editingItem?.status || "active"}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Biography</label>
                <textarea
                  rows={4}
                  placeholder="Professional biography..."
                  defaultValue={editingItem?.bio || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">LinkedIn Profile</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    defaultValue={editingItem?.linkedin || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="member@bettertomorrownepal.org"
                    defaultValue={editingItem?.email || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingItem?.featured || false}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">Featured on Leadership Page</span>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Team Member</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/about#our-team"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <User className="w-5 h-5" />
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