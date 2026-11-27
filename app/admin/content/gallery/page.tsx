"use client";

import Image from "next/image";
import { Search, MoreVertical, Edit, Trash2, Eye, Upload, X, Image as LucideImage } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  category: "Education" | "Healthcare" | "Environment" | "Women's Empowerment";
  src: string;
  alt: string;
  uploadedAt: string;
  uploadedBy: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Educational Books & Supplies",
    category: "Education",
    src: "/images/education.jpg",
    alt: "Stack of textbooks and educational supplies",
    uploadedAt: "2024-03-15",
    uploadedBy: "Admin",
  },
  {
    id: "2",
    title: "Healthcare Clinic & Vaccination",
    category: "Healthcare",
    src: "/images/healthcare.jpg",
    alt: "Healthcare worker providing medical care",
    uploadedAt: "2024-03-10",
    uploadedBy: "Content Manager",
  },
  {
    id: "3",
    title: "Tree Planting & Seedlings",
    category: "Environment",
    src: "/images/environment.jpg",
    alt: "Hands holding a green seedling in soil",
    uploadedAt: "2024-03-05",
    uploadedBy: "Admin",
  },
  {
    id: "4",
    title: "Smart Classroom Learning",
    category: "Education",
    src: "/images/school.jpg",
    alt: "Children engaged in classroom learning",
    uploadedAt: "2024-02-28",
    uploadedBy: "Content Manager",
  },
  {
    id: "5",
    title: "Clean Water Community Access",
    category: "Healthcare",
    src: "/images/water.jpg",
    alt: "Clean water facility for local village",
    uploadedAt: "2024-02-20",
    uploadedBy: "Admin",
  },
  {
    id: "6",
    title: "Joyful Smiling Children",
    category: "Education",
    src: "/images/children.jpg",
    alt: "Smiling children celebrating together",
    uploadedAt: "2024-02-15",
    uploadedBy: "Content Manager",
  },
];

const categories = ["All", "Education", "Healthcare", "Environment", "Women's Empowerment"] as const;

function CategoryBadge({ category }: { category: GalleryItem["category"] }) {
  const colors: Record<GalleryItem["category"], string> = {
    Education: "bg-primary/10 text-primary",
    Healthcare: "bg-rose-100 text-rose-700",
    Environment: "bg-emerald-100 text-emerald-700",
    "Women's Empowerment": "bg-purple-100 text-purple-700",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors[category]}`}>
      {category}
    </span>
  );
}

function ActionDropdown({ item }: { item: GalleryItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className="p-2 rounded-lg text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
        aria-label="More actions"
        aria-expanded={open}
      >
        <MoreVertical className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-card rounded-xl border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 z-10">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/40 w-full text-left">
            <Eye className="w-4 h-4" /> View
          </button>
          <Link href={`/admin/content/gallery/${item.id}/edit`} className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/40">
            <Edit className="w-4 h-4" /> Edit
          </Link>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 w-full text-left">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<typeof categories[number]>("All");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.alt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleSelect = (id: string) => {
    setSelectedItems((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Gallery Management</h2>
          <p className="text-text-secondary text-sm md:text-base mt-1">Manage gallery images and media</p>
        </div>
        <div className="flex items-center gap-3">
          <button
          onClick={() => setUploadModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <Upload className="w-5 h-5" />
            Upload Images
          </button>
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70 w-5 h-5" />
            <input
              type="search"
              placeholder="Search images..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  categoryFilter === cat
                    ? "bg-primary text-white"
                    : "bg-muted/40 text-text-secondary hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-3 mb-6 flex items-center justify-between">
          <span className="text-sm text-secondary font-medium">{selectedItems.length} selected</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-rose-500 hover:bg-rose-50 rounded-lg">Delete</button>
            <button onClick={() => setSelectedItems([])} className="p-1.5 text-text-secondary hover:text-foreground"><X className="w-5 h-5" /></button>
          </div>
        </div>
      )}

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {filteredItems.map((item) => (
            <label
              key={item.id}
              className={`relative group cursor-pointer aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                selectedItems.includes(item.id) ? "border-secondary ring-2 ring-secondary/20" : "border-border hover:border-primary/50"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="absolute top-2 left-2 z-10 w-5 h-5 accent-secondary bg-card border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-semibold w-full truncate block">{item.title}</span>
              </div>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                <CategoryBadge category={item.category} />
              </div>
              <ActionDropdown item={item} />
            </label>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="p-12 text-center">
            <LucideImage className="w-12 h-12 text-border mx-auto mb-4" aria-hidden="true" />
            <p className="text-text-secondary">No images found</p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200" onClick={() => setUploadModalOpen(false)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground">Upload Images</h3>
              <button onClick={() => setUploadModalOpen(false)} className="p-2 rounded-lg text-text-secondary hover:bg-muted/40"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors mb-4">
                <Upload className="w-12 h-12 text-text-secondary/70 mx-auto mb-3" />
                <p className="text-text-secondary mb-1">Drag & drop images here, or click to browse</p>
                <p className="text-xs text-text-secondary/70">Supports: JPG, PNG, WebP (max 5MB each)</p>
                <input type="file" multiple accept="image/*" className="hidden" id="gallery-upload" />
                <button onClick={() => document.getElementById("gallery-upload")?.click()} className="mt-3 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90">Browse Files</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                  <select className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15">
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Environment">Environment</option>
                    <option value="Women&apos;s Empowerment">Women&apos;s Empowerment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Alt Text (for accessibility)</label>
                  <input type="text" placeholder="Describe the image..." className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setUploadModalOpen(false)} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-muted/40 rounded-xl">Cancel</button>
                <button className="px-4 py-2.5 text-sm font-medium text-white bg-secondary hover:bg-[#e05700] rounded-xl">Upload Images</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}