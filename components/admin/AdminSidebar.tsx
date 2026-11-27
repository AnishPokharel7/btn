"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Home,
  Users,
  Building2,
  BarChart3,
  FileText,
  MessageSquare,
  Images,
  UserCheck,
  Calendar,
  Heart,
  Globe,
  FileStack,
  Menu as MenuIcon,
  Search as SearchIcon,
  Settings,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo/logo.png";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5" aria-hidden="true" /> },
    ],
  },
  {
    label: "Content Management",
    items: [
      { label: "Homepage", href: "/admin/homepage", icon: <Home className="w-5 h-5" aria-hidden="true" /> },
      { label: "About Us", href: "/admin/about", icon: <Users className="w-5 h-5" aria-hidden="true" /> },
      { label: "Programs", href: "/admin/content/programs", icon: <Building2 className="w-5 h-5" aria-hidden="true" />, badge: "8" },
      { label: "Impact & Statistics", href: "/admin/impact", icon: <BarChart3 className="w-5 h-5" aria-hidden="true" /> },
      { label: "Stories & News", href: "/admin/stories", icon: <FileText className="w-5 h-5" aria-hidden="true" />, badge: "6" },
      { label: "Testimonials", href: "/admin/testimonials", icon: <MessageSquare className="w-5 h-5" aria-hidden="true" />, badge: "6" },
      { label: "Gallery & Media", href: "/admin/content/gallery", icon: <Images className="w-5 h-5" aria-hidden="true" />, badge: "12" },
      { label: "Team Members", href: "/admin/team", icon: <UserCheck className="w-5 h-5" aria-hidden="true" />, badge: "6" },
      { label: "Events", href: "/admin/events", icon: <Calendar className="w-5 h-5" aria-hidden="true" />, badge: "3" },
    ],
  },
  {
    label: "Engagement",
    items: [
      { label: "Get Involved", href: "/admin/get-involved", icon: <Heart className="w-5 h-5" aria-hidden="true" /> },
      { label: "Donations", href: "/admin/donations", icon: <Heart className="w-5 h-5" aria-hidden="true" />, badge: "12" },
      { label: "Contact Messages", href: "/admin/contact-messages", icon: <MessageSquare className="w-5 h-5" aria-hidden="true" />, badge: "5" },
    ],
  },
  {
    label: "Website Structure",
    items: [
      { label: "Pages", href: "/admin/pages", icon: <FileStack className="w-5 h-5" aria-hidden="true" /> },
      { label: "Navigation", href: "/admin/navigation", icon: <MenuIcon className="w-5 h-5" aria-hidden="true" /> },
      { label: "SEO Management", href: "/admin/seo", icon: <SearchIcon className="w-5 h-5" aria-hidden="true" /> },
    ],
  },
  {
    label: "Settings",
    items: [
      { label: "Site Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" aria-hidden="true" /> },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["Content Management"]);

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev => 
      prev.includes(label) ? prev.filter(g => g !== label) : [...prev, label]
    );
  };

  const isGroupExpanded = (label: string) => expandedGroups.includes(label);

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-full bg-card border-r border-border transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } flex flex-col overflow-hidden`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between h-16 px-4 border-b border-border ${collapsed ? "justify-center" : ""}`}>
        {!collapsed && (
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Image src={Logo} alt="Better Tomorrow Nepal Logo" width={32} height={32} className="w-8 h-8 object-contain" />
            <span className="font-extrabold text-foreground text-lg">Better Tomorrow Nepal</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors flex-shrink-0"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto" aria-label="Admin navigation">
        <ul className="space-y-3" role="list">
          {navGroups.map((group) => {
            const hasActiveItem = group.items.some(
              item => pathname === item.href || pathname.startsWith(item.href + "/")
            );
            const isExpanded = isGroupExpanded(group.label);

            return (
              <li key={group.label}>
                {!collapsed && (
                  <button
                    onClick={() => toggleGroup(group.label)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-text-secondary/70 uppercase tracking-wider hover:text-text-secondary transition-colors ${
                      hasActiveItem ? "text-primary" : ""
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <span>{group.label}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-text-secondary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-text-secondary" />
                    )}
                  </button>
                )}
                {(isExpanded || collapsed) && (
                  <ul className={`space-y-1 ${collapsed ? "hidden" : ""} transition-all duration-200`} role="list">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-white shadow-sm"
                                : "text-text-secondary hover:bg-muted/40 hover:text-foreground"
                            } ${collapsed ? "justify-center" : ""}`}
                            aria-current={isActive ? "page" : undefined}
                            title={collapsed ? item.label : undefined}
                          >
                            <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
                            {!collapsed && (
                              <>
                                <span className="flex-1 truncate">{item.label}</span>
                                {item.badge && (
                                  <span className="flex-shrink-0 px-2 py-0.5 text-xs font-bold rounded-full bg-secondary/20 text-secondary">
                                    {item.badge}
                                  </span>
                                )}
                              </>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className={`p-3 border-t border-border ${collapsed ? "hidden" : ""}`}>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
        >
          <span className="w-5 h-5 flex items-center justify-center">
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
          </span>
          <span>View Website</span>
        </Link>
      </div>
    </aside>
  );
}