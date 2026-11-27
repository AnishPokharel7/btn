import type { ImpactStat } from '@/types';

export const impactStats: ImpactStat[] = [
  {
    id: 'people-reached',
    label: 'People Reached',
    value: '125,000',
    suffix: '+',
    description: 'Individuals directly benefited from our programs',
    icon: 'users',
  },
  {
    id: 'communities',
    label: 'Communities Supported',
    value: '250',
    suffix: '+',
    description: 'Rural and urban communities across Nepal',
    icon: 'home',
  },
  {
    id: 'programs',
    label: 'Active Programs',
    value: '8',
    description: 'Comprehensive programs addressing key development areas',
    icon: 'target',
  },
  {
    id: 'volunteers',
    label: 'Volunteers & Partners',
    value: '500',
    suffix: '+',
    description: 'Dedicated volunteers and institutional partners',
    icon: 'heart',
  },
];

export const impactByRegion = [
  {
    province: 'Koshi Province',
    districts: 6,
    beneficiaries: '35,000+',
    programs: ['Education', 'Health', 'Women Empowerment', 'Environment'],
    highlight: 'Rural Smart School Initiative in 12 schools',
  },
  {
    province: 'Madhesh Province',
    districts: 4,
    beneficiaries: '28,000+',
    programs: ['Health', 'Education', 'Livelihood', 'Humanitarian'],
    highlight: 'Maternal health camps in 15 municipalities',
  },
  {
    province: 'Bagmati Province',
    districts: 5,
    beneficiaries: '22,000+',
    programs: ['Youth Development', 'Environment', 'Community Development'],
    highlight: 'Youth entrepreneurship incubator in Kathmandu',
  },
  {
    province: 'Gandaki Province',
    districts: 3,
    beneficiaries: '15,000+',
    programs: ['Environment', 'Education', 'Women Empowerment'],
    highlight: 'Annapurna conservation area watershed project',
  },
  {
    province: 'Lumbini Province',
    districts: 4,
    beneficiaries: '18,000+',
    programs: ['Education', 'Health', 'Livelihood'],
    highlight: 'Vocational training center in Rupandehi',
  },
  {
    province: 'Karnali Province',
    districts: 3,
    beneficiaries: '12,000+',
    programs: ['Health', 'Education', 'Humanitarian'],
    highlight: 'Mobile health clinics in remote mountain districts',
  },
  {
    province: 'Sudurpashchim Province',
    districts: 3,
    beneficiaries: '10,000+',
    programs: ['Community Development', 'Women Empowerment', 'Environment'],
    highlight: 'Women-led cooperatives in Doti and Achham',
  },
];

export const annualHighlights = [
  {
    year: 2024,
    title: 'Expanding Reach & Deepening Impact',
    achievements: [
      'Launched 3 new vocational training centers',
      'Reached 15,000 additional children through education programs',
      'Established 50 women\'s savings and credit cooperatives',
      'Planted 100,000 native saplings in degraded landscapes',
      'Responded to monsoon floods in 12 districts',
    ],
    totalBeneficiaries: '125,000+',
    totalExpenditure: 'NPR 85 Million',
  },
  {
    year: 2023,
    title: 'Building Resilient Communities',
    achievements: [
      'Completed 20 school infrastructure projects',
      'Provided healthcare to 25,000 people through mobile clinics',
      'Trained 500 youth in digital skills and entrepreneurship',
      'Supported 1,000 families with livelihood recovery post-earthquake',
      'Launched climate adaptation pilot in 10 communities',
    ],
    totalBeneficiaries: '98,000+',
    totalExpenditure: 'NPR 72 Million',
  },
  {
    year: 2022,
    title: 'Foundation & Growth',
    achievements: [
      'Established organizational governance and policies',
      'Launched flagship Education and Health programs',
      'Built partnerships with 5 international NGOs',
      'Registered with Social Welfare Council',
      'Reached first 25,000 beneficiaries',
    ],
    totalBeneficiaries: '25,000+',
    totalExpenditure: 'NPR 35 Million',
  },
];

export const sdgAlignment = [
  { goal: 1, title: 'No Poverty', programs: ['Livelihood', 'Women Empowerment', 'Community Development'] },
  { goal: 3, title: 'Good Health & Well-being', programs: ['Health', 'Humanitarian'] },
  { goal: 4, title: 'Quality Education', programs: ['Education', 'Youth Development'] },
  { goal: 5, title: 'Gender Equality', programs: ['Women Empowerment', 'Education'] },
  { goal: 6, title: 'Clean Water & Sanitation', programs: ['Community Development', 'Health'] },
  { goal: 8, title: 'Decent Work & Economic Growth', programs: ['Livelihood', 'Youth Development'] },
  { goal: 10, title: 'Reduced Inequalities', programs: ['Women Empowerment', 'Community Development'] },
  { goal: 13, title: 'Climate Action', programs: ['Environment', 'Community Development'] },
  { goal: 15, title: 'Life on Land', programs: ['Environment'] },
  { goal: 17, title: 'Partnerships for the Goals', programs: ['All Programs'] },
];