import type { OrganizationInfo, CoreValue, Objective, Approach, TeamMember, Partner, GetInvolvedOption, DonationImpact, TransparencyDocument } from '@/types';

export const organizationInfo: OrganizationInfo = {
  name: 'Better Tomorrow Nepal Foundation',
  tagline: 'Together, We Can Build a Better Tomorrow',
  mission: 'To empower vulnerable communities in Nepal through sustainable development programs in education, healthcare, women\'s empowerment, environmental conservation, and humanitarian assistance—creating lasting, positive change for generations to come.',
  vision: 'An equitable Nepal where every individual, regardless of geography, gender, or circumstance, has access to quality education, healthcare, economic opportunity, and a healthy environment—enabling them to thrive with dignity and purpose.',
  foundedYear: 2022,
  registrationNumber: 'SWC-XXXXX/2022',
  address: 'Parci Studio, Itahari-7, Sunsari, Koshi Province, Nepal',
  phone: '+977-980-0000000',
  email: 'contact@bettertomorrownepal.org',
  socialLinks: {
    facebook: 'https://facebook.com/bettertomorrownepal',
    twitter: 'https://twitter.com/btn_nepal',
    instagram: 'https://instagram.com/bettertomorrownepal',
    linkedin: 'https://linkedin.com/company/better-tomorrow-nepal',
    youtube: 'https://youtube.com/@bettertomorrownepal',
  },
};

export const coreValues: CoreValue[] = [
  {
    id: 'compassion',
    title: 'Compassion',
    description: 'We approach every community and individual with empathy, respect, and a deep commitment to human dignity.',
    icon: 'heart',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We operate with transparency, accountability, and the highest ethical standards in all our actions and decisions.',
    icon: 'shield',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description: 'We design programs for long-term impact, environmental stewardship, and community ownership beyond our direct involvement.',
    icon: 'leaf',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We believe in the power of partnerships—working with communities, government, NGOs, and supporters to achieve shared goals.',
    icon: 'users',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We embrace creative solutions, evidence-based practices, and continuous learning to maximize our effectiveness.',
    icon: 'lightbulb',
  },
  {
    id: 'equity',
    title: 'Equity',
    description: 'We prioritize the most marginalized and work to address systemic inequalities in access to resources and opportunities.',
    icon: 'scale',
  },
];

export const objectives: Objective[] = [
  {
    id: 'obj-1',
    title: 'Universal Access to Quality Education',
    description: 'Ensure all children, especially girls and marginalized groups, complete quality primary and secondary education with relevant learning outcomes.',
  },
  {
    id: 'obj-2',
    title: 'Health for All Communities',
    description: 'Reduce preventable mortality and morbidity by strengthening community health systems and improving access to essential healthcare services.',
  },
  {
    id: 'obj-3',
    title: 'Women\'s Economic & Social Empowerment',
    description: 'Enable women to achieve economic independence, participate in decision-making, and live free from violence and discrimination.',
  },
  {
    id: 'obj-4',
    title: 'Youth as Agents of Change',
    description: 'Equip young people with skills, opportunities, and platforms to drive innovation, entrepreneurship, and civic engagement.',
  },
  {
    id: 'obj-5',
    title: 'Resilient & Sustainable Communities',
    description: 'Build community capacity for disaster risk reduction, climate adaptation, and sustainable natural resource management.',
  },
  {
    id: 'obj-6',
    title: 'Organizational Excellence',
    description: 'Maintain the highest standards of governance, transparency, financial stewardship, and programmatic effectiveness.',
  },
];

export const approaches: Approach[] = [
  {
    id: 'participatory',
    title: 'Participatory Development',
    description: 'Communities are not beneficiaries—they are partners. We use participatory rural appraisal, community-led planning, and social accountability tools to ensure local ownership.',
    icon: 'users',
  },
  {
    id: 'evidence-based',
    title: 'Evidence-Based Programming',
    description: 'Our interventions are grounded in rigorous needs assessments, baseline surveys, and global best practices. We monitor, evaluate, and adapt based on data.',
    icon: 'bar-chart',
  },
  {
    id: 'systems-change',
    title: 'Systems Strengthening',
    description: 'Rather than creating parallel structures, we strengthen existing government systems—schools, health facilities, local governance—for sustainable service delivery.',
    icon: 'network',
  },
  {
    id: 'gender-transformative',
    title: 'Gender-Transformative Approach',
    description: 'We address root causes of gender inequality by engaging men and boys, transforming social norms, and building women\'s leadership at all levels.',
    icon: 'venus',
  },
  {
    id: 'localization',
    title: 'Localization & Capacity Building',
    description: 'We invest in local organizations, community groups, and government institutions—transferring skills, resources, and decision-making power.',
    icon: 'target',
  },
  {
    id: 'partnerships',
    title: 'Multi-Stakeholder Partnerships',
    description: 'We leverage collective impact through partnerships with government, NGOs, private sector, academia, and international agencies.',
    icon: 'handshake',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Arjun Prasad Sharma',
    role: 'Founder & Executive Director',
    bio: 'Dr. Sharma brings over 25 years of experience in international development, having served in senior leadership roles at UNDP, UNICEF, and international NGOs. He holds a PhD in Development Studies from Kathmandu University and has authored numerous publications on community-led development in Nepal.',
    image: '/images/team/arjun.jpg',
    linkedin: 'https://linkedin.com/in/arjun-sharma',
    email: 'arjun.sharma@bettertomorrownepal.org',
  },
  {
    id: 'team-2',
    name: 'Meera Khadka',
    role: 'Deputy Director, Programs',
    bio: 'Meera has 18 years of experience designing and managing large-scale development programs across South Asia. She previously served as Country Program Manager for an international NGO and holds a Master\'s in Public Policy from the National University of Singapore.',
    image: '/images/team/meera-khadka.jpg',
    linkedin: 'https://linkedin.com/in/meera-khadka',
    email: 'meera.khadka@bettertomorrownepal.org',
  },
  {
    id: 'team-3',
    name: 'Rajesh Kumar Thapa',
    role: 'Director, Finance & Operations',
    bio: 'Rajesh is a Chartered Accountant with 20 years of experience in financial management for non-profits and social enterprises. He ensures organizational financial health, compliance, and transparency. He is a member of the Institute of Chartered Accountants of Nepal.',
    image: '/images/team/rajesh-thapa.jpg',
    linkedin: 'https://linkedin.com/in/rajesh-thapa',
    email: 'rajesh.thapa@bettertomorrownepal.org',
  },
  {
    id: 'team-4',
    name: 'Dr. Sunita Sharma',
    role: 'Head, Education & Child Development',
    bio: 'Dr. Sharma is an education specialist with a PhD in Educational Leadership. She has led education programs for government and non-government organizations, focusing on inclusive education, girls\' education, and teacher professional development.',
    image: '/images/team/sunita.jpg',
    linkedin: 'https://linkedin.com/in/sunita-sharma-edu',
    email: 'sunita.sharma@bettertomorrownepal.org',
  },
  {
    id: 'team-5',
    name: 'Dr. Rajesh Thapa',
    role: 'Head, Health & Wellbeing',
    bio: 'A public health physician with 15 years of experience in health systems strengthening, maternal-child health, and emergency response. He has worked with WHO, Save the Children, and the Ministry of Health.',
    image: '/images/team/rajesh.jpg',
    linkedin: 'https://linkedin.com/in/rajesh-thapa-md',
    email: 'rajesh.thapa@bettertomorrownepal.org',
  },
  {
    id: 'team-6',
    name: 'Priya Kandel',
    role: 'Head, Women Empowerment',
    bio: 'Priya is a gender and development specialist with expertise in women\'s economic empowerment, gender-based violence prevention, and feminist leadership. She holds a Master\'s in Gender Studies and has worked across Nepal and Bangladesh.',
    image: '/images/team/priya.jpg',
    linkedin: 'https://linkedin.com/in/priya-kandel',
    email: 'priya.kandel@bettertomorrownepal.org',
  },
];

export const partners: Partner[] = [
  {
    id: 'partner-1',
    name: 'Ministry of Health and Population',
    logo: '/images/partners/mohp.png',
    website: 'https://mohp.gov.np',
    type: 'government',
  },
  {
    id: 'partner-2',
    name: 'Ministry of Education, Science and Technology',
    logo: '/images/partners/moest.png',
    website: 'https://moest.gov.np',
    type: 'government',
  },
  {
    id: 'partner-3',
    name: 'Social Welfare Council',
    logo: '/images/partners/swc.png',
    website: 'https://swc.gov.np',
    type: 'government',
  },
  {
    id: 'partner-4',
    name: 'UNICEF Nepal',
    logo: '/images/partners/unicef.png',
    website: 'https://unicef.org/nepal',
    type: 'ngo',
  },
  {
    id: 'partner-5',
    name: 'Save the Children Nepal',
    logo: '/images/partners/savethechildren.png',
    website: 'https://savethechildren.org.np',
    type: 'ngo',
  },
  {
    id: 'partner-6',
    name: 'World Wildlife Fund Nepal',
    logo: '/images/partners/wwf.png',
    website: 'https://wwfnepal.org',
    type: 'ngo',
  },
  {
    id: 'partner-7',
    name: 'Ncell Axiata Limited',
    logo: '/images/partners/ncell.png',
    website: 'https://ncell.axiata.com',
    type: 'corporate',
  },
  {
    id: 'partner-8',
    name: 'Standard Chartered Bank Nepal',
    logo: '/images/partners/sc.png',
    website: 'https://sc.com/np',
    type: 'corporate',
  },
  {
    id: 'partner-9',
    name: 'Kathmandu University',
    logo: '/images/partners/ku.png',
    website: 'https://ku.edu.np',
    type: 'academic',
  },
  {
    id: 'partner-10',
    name: 'Tribhuvan University',
    logo: '/images/partners/tu.png',
    website: 'https://tu.edu.np',
    type: 'academic',
  },
];

export const getInvolvedOptions: GetInvolvedOption[] = [
  {
    id: 'volunteer',
    title: 'Become a Volunteer',
    description: 'Join our community of changemakers. Contribute your time, skills, and passion to programs that transform lives across Nepal.',
    icon: 'heart',
    href: '/get-involved#volunteer',
    ctaText: 'Apply to Volunteer',
  },
  {
    id: 'donate',
    title: 'Make a Donation',
    description: 'Your contribution—large or small—directly funds programs that reach the most vulnerable communities. Every rupee makes a difference.',
    icon: 'gift',
    href: '/donate',
    ctaText: 'Donate Now',
  },
  {
    id: 'corporate',
    title: 'Corporate Partnership',
    description: 'Align your business with purpose. Partner with us on CSR initiatives, employee engagement, cause marketing, or strategic philanthropy.',
    icon: 'building',
    href: '/get-involved#corporate',
    ctaText: 'Explore Partnership',
  },
  {
    id: 'fundraise',
    title: 'Fundraise for Us',
    description: 'Organize a fundraiser—birthday campaigns, marathon runs, community events, or online challenges. We\'ll support you every step of the way.',
    icon: 'users',
    href: '/get-involved#fundraise',
    ctaText: 'Start Fundraising',
  },
];

export const donationImpacts: DonationImpact[] = [
  {
    amount: 1000,
    description: 'Provides school supplies for 5 children for one year',
    icon: 'book',
  },
  {
    amount: 2500,
    description: 'Funds one mobile health clinic visit serving 50+ patients',
    icon: 'heart-pulse',
  },
  {
    amount: 5000,
    description: 'Supports vocational training for one youth for 3 months',
    icon: 'graduation-cap',
  },
  {
    amount: 10000,
    description: 'Establishes a women\'s savings group with seed capital',
    icon: 'users',
  },
  {
    amount: 25000,
    description: 'Plants 100 native saplings in degraded forest land',
    icon: 'tree',
  },
  {
    amount: 50000,
    description: 'Funds emergency relief kit for 10 flood-affected families',
    icon: 'package',
  },
];

export const transparencyDocuments: TransparencyDocument[] = [
  {
    id: 'doc-1',
    title: 'Annual Report 2024',
    type: 'annual-report',
    year: 2024,
    url: '/documents/annual-report-2024.pdf',
    description: 'Comprehensive overview of programs, impact, governance, and financials for FY 2024.',
  },
  {
    id: 'doc-2',
    title: 'Annual Report 2023',
    type: 'annual-report',
    year: 2023,
    url: '/documents/annual-report-2023.pdf',
    description: 'Comprehensive overview of programs, impact, governance, and financials for FY 2023.',
  },
  {
    id: 'doc-3',
    title: 'Audited Financial Statements 2024',
    type: 'financial-report',
    year: 2024,
    url: '/documents/financial-statements-2024.pdf',
    description: 'Independent auditor\'s report and financial statements for FY 2024.',
  },
  {
    id: 'doc-4',
    title: 'Audited Financial Statements 2023',
    type: 'financial-report',
    year: 2023,
    url: '/documents/financial-statements-2023.pdf',
    description: 'Independent auditor\'s report and financial statements for FY 2023.',
  },
  {
    id: 'doc-5',
    title: 'Child Safeguarding Policy',
    type: 'policy',
    year: 2024,
    url: '/documents/child-safeguarding-policy.pdf',
    description: 'Our commitment and procedures to protect children in all our programs and operations.',
  },
  {
    id: 'doc-6',
    title: 'Gender Equality & Social Inclusion Policy',
    type: 'policy',
    year: 2024,
    url: '/documents/gesi-policy.pdf',
    description: 'Framework for promoting gender equality and social inclusion across all organizational work.',
  },
  {
    id: 'doc-7',
    title: 'Anti-Corruption & Fraud Prevention Policy',
    type: 'policy',
    year: 2023,
    url: '/documents/anti-corruption-policy.pdf',
    description: 'Policies and procedures to prevent, detect, and respond to corruption and fraud.',
  },
  {
    id: 'doc-8',
    title: 'SWC Registration Certificate',
    type: 'registration',
    year: 2022,
    url: '/documents/swc-registration.pdf',
    description: 'Official registration with the Social Welfare Council of Nepal.',
  },
  {
    id: 'doc-9',
    title: 'PAN & Tax Exemption Certificate',
    type: 'registration',
    year: 2022,
    url: '/documents/tax-exemption.pdf',
    description: 'Permanent Account Number and income tax exemption certificate from IRD.',
  },
];

export const governanceStructure = {
  board: [
    { name: 'Dr. Arjun Prasad Sharma', role: 'Chairperson', expertise: 'International Development' },
    { name: 'Prof. Meena Acharya', role: 'Vice Chairperson', expertise: 'Gender & Economics' },
    { name: 'Mr. Bishnu Prasad Gautam', role: 'Treasurer', expertise: 'Finance & Governance' },
    { name: 'Dr. Sunita Sharma', role: 'Member Secretary', expertise: 'Education' },
    { name: 'Ms. Radha Devi Sharma', role: 'Member', expertise: 'Community Development' },
    { name: 'Mr. Kumar Khadka', role: 'Member', expertise: 'Law & Human Rights' },
    { name: 'Dr. Ram Chandra Bhusal', role: 'Member', expertise: 'Public Health' },
  ],
  advisoryCouncil: [
    { name: 'Dr. Kul Chandra Gautam', role: 'Senior Advisor', background: 'Former Deputy Executive Director, UNICEF' },
    { name: 'Ms. Bandana Rana', role: 'Advisor', background: 'Former Member, UN CEDAW Committee' },
    { name: 'Dr. Madan Prasad Shrestha', role: 'Advisor', background: 'Former Secretary, Government of Nepal' },
  ],
};