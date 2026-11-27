import type { NavLink } from '@/types';

export const mainNavigation: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Programs', href: '/programs' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Stories', href: '/stories' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  about: [
    { label: 'Our Story', href: '/about#our-story' },
    { label: 'Mission & Vision', href: '/about#mission-vision' },
    { label: 'Core Values', href: '/about#core-values' },
    { label: 'Our Team', href: '/about#our-team' },
    { label: 'Partners', href: '/about#partners' },
  ],
  programs: [
    { label: 'Education & Child Development', href: '/programs#education' },
    { label: 'Health & Wellbeing', href: '/programs#health' },
    { label: 'Women Empowerment', href: '/programs#women' },
    { label: 'Youth Development', href: '/programs#youth' },
    { label: 'Community Development', href: '/programs#community' },
    { label: 'Environmental Sustainability', href: '/programs#environment' },
  ],
  getInvolved: [
    { label: 'Volunteer', href: '/get-involved#volunteer' },
    { label: 'Donate', href: '/donate' },
    { label: 'Corporate Partnership', href: '/get-involved#corporate' },
    { label: 'Fundraise', href: '/get-involved#fundraise' },
  ],
  resources: [
    { label: 'Annual Reports', href: '/transparency#reports' },
    { label: 'Financial Reports', href: '/transparency#financials' },
    { label: 'Policies', href: '/transparency#policies' },
    { label: 'News & Events', href: '/stories' },
    { label: 'FAQ', href: '/faq' },
  ],
};

export const socialLinks = {
  facebook: 'https://facebook.com/bettertomorrownepal',
  twitter: 'https://twitter.com/btn_nepal',
  instagram: 'https://instagram.com/bettertomorrownepal',
  linkedin: 'https://linkedin.com/company/better-tomorrow-nepal',
  youtube: 'https://youtube.com/@bettertomorrownepal',
};