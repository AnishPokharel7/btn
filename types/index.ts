export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: NavLink[];
  external?: boolean;
}

export interface Announcement {
  id: string;
  text: string;
  href?: string;
  type: 'info' | 'campaign' | 'urgent';
}

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon?: string;
  outcomes: string[];
  beneficiaries: string;
  location: string;
  status: 'active' | 'planned' | 'completed';
  category: string;
  href: string;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description?: string;
  icon?: string;
}

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  location: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image?: string;
  program?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  featured?: boolean;
  slug: string;
  location?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  type: 'government' | 'ngo' | 'corporate' | 'academic';
}

export interface OrganizationInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  foundedYear: number;
  registrationNumber: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
}

export interface Approach {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GetInvolvedOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  ctaText: string;
}

export type IconName = 
  | 'heart' | 'gift' | 'book' | 'heart-pulse' | 'graduation-cap' | 'tree' | 'package'
  | 'users' | 'home' | 'target' | 'leaf' | 'shield' | 'building' | 'briefcase' | 'lightbulb'
  | 'calendar' | 'scale' | 'globe' | 'music' | 'trophy' | 'cake' | 'award' | 'check';

export interface DonationImpact {
  amount: number;
  description: string;
  icon: IconName;
}

export interface TransparencyDocument {
  id: string;
  title: string;
  type: 'annual-report' | 'financial-report' | 'policy' | 'audit' | 'registration';
  year: number;
  url: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface DonationFormData {
  fullName: string;
  email: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  isAnonymous: boolean;
}