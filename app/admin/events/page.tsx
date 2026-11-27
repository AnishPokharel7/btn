"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, Calendar, MapPin, User, Link as LinkIcon, Save, Loader2, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  registrationLink: string;
  capacity: number;
  registered: number;
  category: string;
  featured: boolean;
  status: "draft" | "published" | "archived" | "completed";
}

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Women's Leadership Summit 2024",
    description: "Annual gathering of women leaders from across Nepal to share experiences, build networks, and advocate for policy change. This year's theme: 'Breaking Barriers, Building Futures'.",
    image: "/images/events/women-summit.jpg",
    location: "Hotel Yak & Yeti, Kathmandu",
    startDate: "2024-09-15",
    endDate: "2024-09-15",
    startTime: "09:00",
    endTime: "17:00",
    registrationLink: "https://events.bettertomorrownepal.org/women-summit-2024",
    capacity: 200,
    registered: 187,
    category: "Summit",
    featured: true,
    status: "completed",
  },
  {
    id: "2",
    title: "Youth Innovation Challenge 2024",
    description: "A nationwide competition for young innovators to present solutions for community development challenges. Winners receive seed funding and mentorship.",
    image: "/images/events/youth-challenge.jpg",
    location: "Virtual & Kathmandu",
    startDate: "2024-10-15",
    endDate: "2024-10-17",
    startTime: "10:00",
    endTime: "16:00",
    registrationLink: "https://events.bettertomorrownepal.org/youth-challenge-2024",
    capacity: 100,
    registered: 94,
    category: "Competition",
    featured: true,
    status: "published",
  },
  {
    id: "3",
    title: "Climate Resilience Workshop Series",
    description: "Series of workshops in Karnali Province to build community capacity for climate adaptation and disaster risk reduction.",
    image: "/images/events/climate-workshop.jpg",
    location: "Multiple districts, Karnali Province",
    startDate: "2024-11-20",
    endDate: "2024-11-25",
    startTime: "09:00",
    endTime: "15:00",
    registrationLink: "https://events.bettertomorrownepal.org/climate-workshops",
    capacity: 50,
    registered: 32,
    category: "Workshop",
    featured: false,
    status: "published",
  },
];

const categories = ["Workshop", "Summit", "Competition", "Training", "Conference", "Community Event", "Fundraiser", "Webinar"];

export default function EventsManagementPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Event | null>(null);

  const [events, setEvents] = useState<Event[]>(initialEvents);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredEvents = events.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) || e.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || e.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || e.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleStatusChange = (id: string, newStatus: Event["status"]) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const handleDelete = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const handleDuplicate = (item: Event) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      title: item.title + " (Copy)",
      featured: false,
      status: "draft" as const,
    };
    setEvents(prev => [...prev, newItem]);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Events Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Create and manage events and workshops</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Event
        </button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
            <input
              type="search"
              placeholder="Search events..."
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
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 min-w-[160px]"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cn(
                  event.status === "published" && "bg-emerald-100 text-emerald-700",
                  event.status === "draft" && "bg-amber-100 text-amber-700",
                  event.status === "completed" && "bg-blue-100 text-blue-700",
                  event.status === "archived" && "bg-slate-100 text-slate-700"
                )}`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {event.category}
                </span>
              </div>
              {event.featured && (
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-1">{event.title}</h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">{event.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <User className="w-4 h-4" />
                  <span>{event.registered} / {event.capacity} registered</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <button
                  onClick={() => setEditingItem(event)}
                  className="flex-1 py-2 px-3 text-sm font-medium text-text-secondary hover:bg-muted/40 hover:text-foreground rounded-xl transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDuplicate(event)}
                  className="p-2 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                  title="Duplicate"
                >
                  <LinkIcon className="w-4 h-4" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => handleStatusChange(event.id, event.status === "published" ? "draft" : "published")}
                    className="p-2 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                    title={event.status === "published" ? "Unpublish" : "Publish"}
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="p-2 rounded-xl text-text-secondary hover:bg-rose-50 hover:text-rose-500 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="bg-card rounded-2xl border border-border p-12 text-center">
          <Calendar className="w-12 h-12 text-border mx-auto mb-4" />
          <p className="text-text-secondary">No events found</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => { setShowAddModal(false); setEditingItem(null); }}>
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">{editingItem ? "Edit" : "Add"} Event</h3>
              <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Event Title <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  placeholder="Enter event title"
                  defaultValue={editingItem?.title || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  rows={4}
                  placeholder="Event description..."
                  defaultValue={editingItem?.description || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Start Date</label>
                  <input
                    type="date"
                    defaultValue={editingItem?.startDate || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">End Date</label>
                  <input
                    type="date"
                    defaultValue={editingItem?.endDate || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Start Time</label>
                  <input
                    type="time"
                    defaultValue={editingItem?.startTime || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">End Time</label>
                  <input
                    type="time"
                    defaultValue={editingItem?.endTime || ""}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
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
                  <label className="block text-sm font-medium text-foreground mb-1">Capacity</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue={editingItem?.capacity || 50}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Registration Link</label>
                <input
                  type="url"
                  placeholder="https://events.example.com/registration"
                  defaultValue={editingItem?.registrationLink || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Featured Image</label>
                <input
                  type="text"
                  placeholder="/images/events/event.jpg"
                  defaultValue={editingItem?.image || ""}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={editingItem?.featured || false}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-foreground">Featured Event</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <select
                    defaultValue={editingItem?.status || "draft"}
                    className="w-auto px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="completed">Completed</option>
                    <option value="archived">Archived</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Save Event</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/events"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <Calendar className="w-5 h-5" />
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