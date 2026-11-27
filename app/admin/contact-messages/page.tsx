"use client";

import { useState } from "react";
import { Search, MoreVertical, Edit, Trash2, Eye, Mail, MessageSquare, Check, Archive, Save, Loader2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: "unread" | "read" | "replied" | "archived";
  notes: string;
}

const initialMessages: ContactMessage[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+977-980-123456",
    subject: "Volunteer Inquiry",
    message: "I'm interested in volunteering with your education programs. Could you please provide more information about current opportunities and the application process?",
    date: "2024-11-25T10:30:00Z",
    status: "unread",
    notes: "",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+977-981-234567",
    subject: "Partnership Proposal",
    message: "Our company would like to explore corporate partnership opportunities with BTN Foundation. We're particularly interested in supporting your women's empowerment programs.",
    date: "2024-11-24T15:45:00Z",
    status: "read",
    notes: "Contacted Priya on 2024-11-25. Sent partnership proposal document.",
  },
  {
    id: "3",
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+977-982-345678",
    subject: "Donation Query",
    message: "I made a donation last week but haven't received a receipt. Could you please check the status and send me the receipt for tax purposes?",
    date: "2024-11-23T09:15:00Z",
    status: "replied",
    notes: "Receipt sent via email on 2024-11-23. Transaction ID: DON-2024-045.",
  },
  {
    id: "4",
    name: "Sunita Devi",
    email: "sunita.devi@example.com",
    phone: "+977-983-456789",
    subject: "Program Information Request",
    message: "I'd like to know more about your healthcare programs in Karnali Province. My community could benefit from mobile health clinics.",
    date: "2024-11-22T14:20:00Z",
    status: "unread",
    notes: "",
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+977-984-567890",
    subject: "Media Inquiry",
    message: "I'm a journalist from a national newspaper. I'd like to request an interview with your Executive Director about the recent climate resilience program launch.",
    date: "2024-11-21T11:00:00Z",
    status: "archived",
    notes: "Forwarded to communications team. Interview scheduled for 2024-11-28.",
  },
];

const statusOptions = [
  { value: "unread", label: "Unread", color: "bg-rose-100 text-rose-700" },
  { value: "read", label: "Read", color: "bg-blue-100 text-blue-700" },
  { value: "replied", label: "Replied", color: "bg-emerald-100 text-emerald-700" },
  { value: "archived", label: "Archived", color: "bg-slate-100 text-slate-700" },
];

export default function ContactMessagesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState<ContactMessage | null>(null);
  const [showReplyModal, setShowReplyModal] = useState<ContactMessage | null>(null);

  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const filteredMessages = messages.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || 
      m.email.toLowerCase().includes(search.toLowerCase()) || 
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: ContactMessage["status"]) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
  };

  const handleDelete = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const handleBulkAction = (action: "mark-read" | "mark-unread" | "archive" | "delete") => {
    const selectedIds = filteredMessages.map(m => m.id);
    if (selectedIds.length === 0) return;
    
    setMessages(prev => prev.map(m => {
      if (!selectedIds.includes(m.id)) return m;
      if (action === "mark-read") return { ...m, status: "read" };
      if (action === "mark-unread") return { ...m, status: "unread" };
      if (action === "archive") return { ...m, status: "archived" };
      if (action === "delete") return null;
      return m;
    }).filter(Boolean) as ContactMessage[]);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString();
  };

  const getStatusConfig = (status: ContactMessage["status"]) => {
    return statusOptions.find(s => s.value === status) || statusOptions[0];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Contact Messages</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">View and manage contact form submissions</p>
        </div>
        <div className="flex gap-2">
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

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Total Messages</p>
              <p className="text-3xl font-extrabold text-foreground mt-1">{messages.length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Unread</p>
              <p className="text-3xl font-extrabold text-foreground mt-1">{messages.filter(m => m.status === "unread").length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Replied</p>
              <p className="text-3xl font-extrabold text-foreground mt-1">{messages.filter(m => m.status === "replied").length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Archived</p>
              <p className="text-3xl font-extrabold text-foreground mt-1">{messages.filter(m => m.status === "archived").length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
              <Archive className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-card rounded-2xl border border-border p-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
          <input
            type="search"
            placeholder="Search messages by name, email, subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Sender</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredMessages.map((message) => {
                const statusConfig = getStatusConfig(message.status);
                return (
                  <tr key={message.id} className={`hover:bg-muted/30 transition-colors ${message.status === "unread" ? "bg-rose-50/30" : ""}`}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-foreground">{message.name}</div>
                        <div className="text-text-secondary text-sm">{message.email}</div>
                        {message.phone && <div className="text-text-secondary/70 text-xs">{message.phone}</div>}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <p className="font-medium text-foreground line-clamp-1">{message.subject}</p>
                        <p className="text-text-secondary text-sm line-clamp-1">{message.message}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-secondary text-sm">{formatDate(message.date)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => { setShowDetailModal(message); setShowReplyModal(null); }}
                          className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => { setShowReplyModal(message); setShowDetailModal(null); }}
                          className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                          title="Reply"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <div className="relative">
                          <button
                            className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                            onClick={() => {
                              const statuses: ContactMessage["status"][] = ["unread", "read", "replied", "archived"];
                              const currentIndex = statuses.indexOf(message.status);
                              const nextStatus = statuses[(currentIndex + 1) % statuses.length];
                              handleStatusChange(message.id, nextStatus);
                            }}
                            title="Change Status"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleDelete(message.id)}
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
        {filteredMessages.length === 0 && (
          <div className="p-12 text-center">
            <MessageSquare className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-text-secondary">No messages found</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => setShowDetailModal(null)}>
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">Message Details</h3>
              <button onClick={() => setShowDetailModal(null)} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1">Name</label>
                  <p className="font-medium text-foreground">{showDetailModal.name}</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1">Email</label>
                  <a href={`mailto:${showDetailModal.email}`} className="text-primary hover:underline">{showDetailModal.email}</a>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1">Phone</label>
                  <p className="text-text-secondary">{showDetailModal.phone || "Not provided"}</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1">Date</label>
                  <p className="text-text-secondary">{formatDate(showDetailModal.date)}</p>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1">Subject</label>
                <p className="font-medium text-foreground">{showDetailModal.subject}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1">Message</label>
                <div className="bg-muted/30 p-4 rounded-xl text-text-secondary whitespace-pre-wrap">{showDetailModal.message}</div>
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1">Internal Notes</label>
                <textarea
                  rows={3}
                  placeholder="Add internal notes..."
                  defaultValue={showDetailModal.notes}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                  onChange={(e) => {
                    const newNotes = e.target.value;
                    setMessages(prev => prev.map(m => m.id === showDetailModal.id ? { ...m, notes: newNotes } : m));
                  }}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => setShowDetailModal(null)} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Close</button>
                <button onClick={() => { setShowReplyModal(showDetailModal); setShowDetailModal(null); }} className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Reply</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => setShowReplyModal(null)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between sticky top-0 bg-card">
              <h3 className="text-lg font-bold text-foreground">Reply to {showReplyModal.name}</h3>
              <button onClick={() => setShowReplyModal(null)} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 cursor-pointer"><ChevronDown className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">To</label>
                <input type="email" value={showReplyModal.email} readOnly className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                <input type="text" defaultValue={`Re: ${showReplyModal.subject}`} className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea rows={8} placeholder="Write your reply..." className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none" />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button onClick={() => setShowReplyModal(null)} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl cursor-pointer transition-colors">Cancel</button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-[#e05700] rounded-xl cursor-pointer transition-colors">Send Reply</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
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