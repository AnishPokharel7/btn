"use client";

import { Bell, Sun, Moon, LogOut, User, ChevronDown, Menu, Settings, ExternalLink, ChevronRight, LayoutDashboard, Home, Users, Building2, BarChart3, FileText, MessageSquare, Images, UserCheck, Calendar, Heart, Globe, FileStack, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/homepage": "Homepage Management",
  "/admin/about": "About Us Management",
  "/admin/content/programs": "Programs Management",
  "/admin/impact": "Impact & Statistics",
  "/admin/stories": "Stories & News",
  "/admin/testimonials": "Testimonials",
  "/admin/content/gallery": "Gallery & Media",
  "/admin/team": "Team Members",
  "/admin/events": "Events",
  "/admin/get-involved": "Get Involved",
  "/admin/donations": "Donations",
  "/admin/contact-messages": "Contact Messages",
  "/admin/pages": "Website Pages",
  "/admin/navigation": "Navigation Management",
  "/admin/seo": "SEO Management",
  "/admin/settings": "Site Settings",
  "/admin/users": "User Management",
};

const pageDescriptions: Record<string, string> = {
  "/admin/dashboard": "Overview of your organization's activity and performance",
  "/admin/homepage": "Manage homepage sections, hero, stats, and featured content",
  "/admin/about": "Edit organization story, mission, vision, values, team, and partners",
  "/admin/content/programs": "Create, edit, and manage programs and their details",
  "/admin/impact": "Update impact statistics and regional breakdowns",
  "/admin/stories": "Publish and manage stories, news, and blog posts",
  "/admin/testimonials": "Manage beneficiary and partner testimonials",
  "/admin/content/gallery": "Upload and organize images and media assets",
  "/admin/team": "Manage team member profiles and leadership",
  "/admin/events": "Create and manage events and workshops",
  "/admin/get-involved": "Configure volunteer, fundraising, and partnership options",
  "/admin/donations": "Track donations, campaigns, and donor information",
  "/admin/contact-messages": "View and manage contact form submissions",
  "/admin/pages": "Manage public website pages and content",
  "/admin/navigation": "Configure website navigation menus",
  "/admin/seo": "Manage SEO settings for all pages",
  "/admin/settings": "Configure organization details, branding, and integrations",
  "/admin/users": "Manage admin users and permissions",
};

export default function AdminHeader() {
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (notificationMenuRef.current && !notificationMenuRef.current.contains(event.target as Node)) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: "New donation received", message: "₹5,000 from Rajesh Kumar", time: "5 min ago", read: false },
    { id: 2, title: "Project updated", message: "Rural Smart School Initiative progress updated", time: "1 hour ago", read: false },
    { id: 3, title: "New volunteer signup", message: "Priya Sharma registered for Healthcare drive", time: "3 hours ago", read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;
  const pageTitle = pageTitles[pathname] || "Admin Panel";
  const pageDescription = pageDescriptions[pathname] || "Manage your organization's content and settings";

  interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Admin", href: "/admin/dashboard" }];
    
    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      if (index === segments.length - 1) {
        breadcrumbs.push({ label: pageTitle, href: currentPath, isCurrent: true });
      } else {
        const title = pageTitles[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
        breadcrumbs.push({ label: title, href: currentPath });
      }
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="fixed top-0 left-64 right-0 z-30 h-16 bg-card/95 backdrop-blur-md border-b border-border transition-all duration-300 lg:left-64">
      <div className="h-full max-w-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Breadcrumbs & Page Title */}
        <div className="flex-1 min-w-0">
          <nav className="flex items-center gap-1.5 text-sm mb-1 overflow-x-auto pb-1" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-nowrap">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-text-secondary/50 flex-shrink-0" aria-hidden="true" />}
                  {crumb.isCurrent ? (
                    <span className="font-semibold text-foreground truncate">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-text-secondary hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-lg md:text-xl font-bold text-foreground truncate">{pageTitle}</h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden md:flex">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search..."
                className="w-[200px] md:w-[280px] pl-10 pr-4 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 transition-all"
              />
            </div>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationMenuRef}>
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative p-2.5 rounded-xl text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
              aria-label="Notifications"
              aria-expanded={notificationOpen}
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {notificationOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-card rounded-2xl border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                  {unreadCount > 0 && (
                    <button className="text-xs text-primary hover:underline">Mark all read</button>
                  )}
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <button
                      key={notif.id}
                      className={`w-full px-4 py-3 text-left hover:bg-muted/40 transition-colors border-b border-border/50 last:border-0 ${!notif.read ? "bg-primary/5" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bell className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm">{notif.title}</p>
                          <p className="text-text-secondary text-xs mt-0.5 truncate">{notif.message}</p>
                          <p className="text-text-secondary/70 text-[11px] mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-border">
                  <Link href="/admin/notifications" className="text-sm font-medium text-primary hover:underline block text-center">View all notifications</Link>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl hover:bg-muted/40 transition-colors"
              aria-expanded={userMenuOpen}
              aria-label="User menu"
            >
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:block font-medium text-foreground text-sm">Admin</span>
              <ChevronDown className="w-4 h-4 text-text-secondary hidden sm:block" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-card rounded-2xl border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-border">
                  <p className="font-semibold text-foreground text-sm">Administrator</p>
                  <p className="text-xs text-text-secondary">admin@bettertomorrownepal.org</p>
                </div>
                <Link href="/admin/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors">
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <hr className="my-1 border-border" />
                <a
                  href="/"
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:bg-muted/40 hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Website
                </a>
                <hr className="my-1 border-border" />
                <button className="flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 transition-colors w-full">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
      )}
      {mobileMenuOpen && (
        <aside className="lg:hidden fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border flex flex-col animate-in slide-in-from-left duration-300">
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">BTN</span>
              </div>
              <span className="font-extrabold text-foreground text-lg">Admin</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl text-text-secondary hover:bg-muted/40">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex-1 py-4 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {navGroups.flatMap((group) => [
                <li key={`group-${group.label}`} className="px-3 py-2 text-xs font-semibold text-text-secondary/70 uppercase tracking-wider">
                  {group.label}
                </li>,
                ...group.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive ? "bg-primary text-white" : "text-text-secondary hover:bg-muted/40 hover:text-foreground"
                        }`}
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span>{item.label}</span>
                        {item.badge && <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded-full bg-secondary/20 text-secondary">{item.badge}</span>}
                      </Link>
                    </li>
                  );
                })
              ])}
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
}

const navGroups = [
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
      { label: "Navigation", href: "/admin/navigation", icon: <Menu className="w-5 h-5" aria-hidden="true" /> },
      { label: "SEO Management", href: "/admin/seo", icon: <Search className="w-5 h-5" aria-hidden="true" /> },
    ],
  },
  {
    label: "Settings",
    items: [
      { label: "Site Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" aria-hidden="true" /> },
    ],
  },
];