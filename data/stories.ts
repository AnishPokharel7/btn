import type { Story, NewsItem, Testimonial } from '@/types';

export const stories: Story[] = [
  {
    slug: 'anita-education-journey',
    title: 'Anita\'s Journey: From Dropout to Dreamer',
    excerpt: 'How a scholarship program changed the trajectory of a young girl\'s life in rural Nepal.',
    content: `
      <p>Anita Tamang, 14, from a remote village in Sindhupalchok district, had almost given up on her education. As the eldest of four children in a family struggling to make ends meet, she was expected to help with household chores and farm work instead of attending school.</p>
      
      <p>"I used to watch other children walk to school in their uniforms while I stayed home," Anita recalls. "I wanted to learn, to read, to become something—but there was no money for books, uniforms, or even the small school fees."</p>
      
      <p>In 2023, Better Tomorrow Nepal Foundation\'s Education & Child Development program identified Anita as one of the at-risk children in her community. Through our scholarship initiative, she received full educational support including uniforms, books, stationery, and a stipend for her family to offset the opportunity cost of her attending school.</p>
      
      <p>The transformation was remarkable. Within six months, Anita\'s attendance improved from 40% to 95%. Her grades rose dramatically, and she discovered a passion for science. "Now I want to become a nurse," she says with determination. "I want to help other children in my village stay healthy so they can go to school too."</p>
      
      <p>Anita\'s story is one of thousands. In the past year alone, our education program has supported over 3,000 children like Anita across Nepal, with a particular focus on girls, children with disabilities, and those from economically marginalized communities.</p>
      
      <p>"Education is not just about individual transformation," says our Education Program Manager. "When a girl like Anita stays in school, the ripple effect touches her family, her future children, and her entire community. That\'s the power of investing in education."</p>
    `,
    image: '/images/education.jpg',
    author: 'Sunita Sharma',
    authorRole: 'Education Program Coordinator',
    authorImage: '/images/team/sunita.jpg',
    category: 'Education',
    date: '2024-11-15',
    readTime: '5 min read',
    featured: true,
    location: 'Sindhupalchok, Bagmati Province',
  },
  {
    slug: 'mobile-clinic-saves-lives',
    title: 'Mobile Health Clinic Brings Hope to Remote Villages',
    excerpt: 'Our mobile health unit reaches communities where the nearest hospital is a two-day walk away.',
    content: `
      <p>In the mountainous regions of Karnali Province, accessing healthcare has historically meant a grueling journey—often two or three days on foot—to reach the nearest health facility. For pregnant women, elderly patients, and children with acute illnesses, this distance can be life-threatening.</p>
      
      <p>Since 2023, Better Tomorrow Nepal Foundation has operated mobile health clinics that bring essential medical services directly to these underserved communities. Each clinic is staffed with a doctor, nurses, and health assistants, equipped with diagnostic tools, medicines, and vaccines.</p>
      
      <p>"Before the mobile clinic came, we had no choice but to rely on traditional healers or simply hope for the best," shares Kamala Devi, a mother of three from Jumla district. "When my youngest son had high fever and difficulty breathing last winter, the mobile clinic team diagnosed him with pneumonia and gave him antibiotics right there in our village. He recovered within days."</p>
      
      <p>In 2024, our mobile clinics conducted 120 health camps across 40 remote villages, serving over 18,000 patients. Services included antenatal care, child immunizations, treatment for common illnesses, family planning counseling, and health education sessions.</p>
      
      <p>The impact extends beyond immediate treatment. Our health teams train local female community health volunteers (FCHVs) to provide basic care and health education between clinic visits, creating a sustainable health support network within each community.</p>
      
      <p>"We\'re not just treating patients," explains Dr. Rajesh Thapa, our Health Program Lead. "We\'re building health literacy and local capacity so communities can better care for themselves long after our clinic moves to the next village."</p>
    `,
    image: '/images/healthcare.jpg',
    author: 'Dr. Rajesh Thapa',
    authorRole: 'Health Program Lead',
    authorImage: '/images/team/rajesh.jpg',
    category: 'Healthcare',
    date: '2024-10-28',
    readTime: '6 min read',
    featured: false,
    location: 'Jumla, Karnali Province',
  },
  {
    slug: 'women-cooperative-success',
    title: 'Women\'s Cooperative Transforms Village Economy',
    excerpt: 'How a group of 25 women built a thriving enterprise that now supports 150 families.',
    content: `
      <p>In a small village in Doti district, Sudurpashchim Province, a group of 25 women gathered under a tree every month to save whatever little they could—sometimes just 10 or 20 rupees. What started as a modest savings group has grown into a thriving cooperative that now manages over 2 million rupees in capital and supports 150 families.</p>
      
      <p>"We never imagined we could run a business," says Ganga Devi, the cooperative\'s chairperson. "We were just housewives, dependent on our husbands\' irregular income from seasonal labor. Now we make decisions, we earn, and our voices matter in the community."</p>
      
      <p>Better Tomorrow Nepal Foundation\'s Women Empowerment program provided the initial support: financial literacy training, business planning workshops, seed capital, and ongoing mentorship. The women chose to invest in goat farming and vegetable cultivation—activities compatible with their household responsibilities and local market demand.</p>
      
      <p>Within two years, the cooperative established a collective goat farm with 200 improved-breed goats and 2 hectares of commercial vegetable production. They secured contracts with local markets and a regional supermarket chain, ensuring stable income for all members.</p>
      
      <p>The ripple effects are profound. Member households report 60% average income increase. Children\'s school attendance has improved. Domestic violence incidents have decreased. And the women now hold leadership positions in local ward committees and school management committees.</p>
      
      <p>"This is what empowerment looks like in practice," says our Women Empowerment Program Manager. "It\'s not just about income—it\'s about agency, dignity, and changing power dynamics at the household and community level."</p>
    `,
    image: '/images/women.jpg',
    author: 'Priya Kandel',
    authorRole: 'Women Empowerment Program Manager',
    authorImage: '/images/team/priya.jpg',
    category: 'Women Empowerment',
    date: '2024-10-10',
    readTime: '7 min read',
    featured: true,
    location: 'Doti, Sudurpashchim Province',
  },
  {
    slug: 'youth-digital-skills',
    title: 'Digital Skills Open New Doors for Rural Youth',
    excerpt: 'A coding bootcamp in Rupandehi helps young people access global freelance opportunities.',
    content: `
      <p>For many young people in rural Nepal, the path after high school is uncertain. Limited local job opportunities, expensive higher education, and lack of career guidance often lead to migration—either to urban centers for low-paying jobs or overseas as migrant workers.</p>
      
      <p>Our Youth Development program piloted a Digital Skills Bootcamp in Rupandehi district, Lumbini Province, targeting unemployed and underemployed youth aged 18-28. The intensive 12-week program covered web development, digital marketing, graphic design, and freelancing fundamentals.</p>
      
      <p>"I had a bachelor\'s degree but no practical skills," shares Prakash Chaudhary, 24, one of the first cohort graduates. "After the bootcamp, I built a portfolio and started getting freelance web development projects from clients in the US and Australia. Now I earn more working from my village than I would in a city office job."</p>
      
      <p>Of the 50 graduates from the first cohort, 38 secured freelance work or remote employment within three months, with average monthly earnings of NPR 45,000-80,000. Several have started their own digital agencies, employing other local youth.</p>
      
      <p>The program includes a 6-month post-training mentorship phase, connecting graduates with industry mentors and providing access to coworking spaces, high-speed internet, and ongoing skill upgradation workshops.</p>
      
      <p>"Digital skills are the great equalizer," says our Youth Program Coordinator. "They allow young people to participate in the global economy without leaving their communities. That\'s transformative for rural Nepal."</p>
    `,
    image: '/images/school.jpg',
    author: 'Bikash Shrestha',
    authorRole: 'Youth Program Coordinator',
    authorImage: '/images/team/bikash.jpg',
    category: 'Youth Development',
    date: '2024-09-22',
    readTime: '5 min read',
    featured: false,
    location: 'Rupandehi, Lumbini Province',
  },
  {
    slug: 'community-forest-restoration',
    title: 'Community-Led Forest Restoration in the Himalayas',
    excerpt: 'Local communities restore 500 hectares of degraded forest land, protecting biodiversity and livelihoods.',
    content: `
      <p>In the foothills of the Annapurna range, communities in Kaski district have witnessed the degradation of their surrounding forests over decades—due to unsustainable harvesting, forest fires, and climate change impacts. The loss of forest cover led to soil erosion, reduced water availability, increased landslide risk, and loss of biodiversity.</p>
      
      <p>Better Tomorrow Nepal Foundation\'s Environmental Sustainability program partnered with 12 community forest user groups to implement a large-scale restoration initiative. The approach combined scientific forest management with traditional ecological knowledge.</p>
      
      <p>"Our ancestors knew which trees to plant where, and when," explains Bir Bahadur Gurung, chairperson of the Machhapuchhre Community Forest User Group. "We combined that wisdom with modern techniques like contour planting, check dams for erosion control, and assisted natural regeneration."</p>
      
      <p>Over three years, the communities planted 100,000 native saplings, constructed 50 check dams, established firebreaks, and implemented sustainable harvesting plans. The restored forest now provides improved water regulation for downstream agriculture, reduced landslide incidents, and habitat for wildlife including leopards, deer, and numerous bird species.</p>
      
      <p>The program also established forest-based enterprises—medicinal plant cultivation, honey production, and ecotourism—generating income for 300+ households while incentivizing continued conservation.</p>
      
      <p>"Conservation succeeds when it aligns with community livelihoods," notes our Environment Program Lead. "People protect what they value and benefit from. This model is now being replicated in other districts."</p>
    `,
    image: '/images/environment.jpg',
    author: 'Dr. Meera Joshi',
    authorRole: 'Environment Program Lead',
    authorImage: '/images/team/meera.jpg',
    category: 'Environment',
    date: '2024-09-05',
    readTime: '6 min read',
    featured: true,
    location: 'Kaski, Gandaki Province',
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'BTN Foundation Launches New Climate Resilience Program in Karnali',
    excerpt: 'A three-year initiative to build climate-adaptive capacity in 20 vulnerable mountain communities.',
    content: '<p>Full article content...</p>',
    image: '/images/environment.jpg',
    category: 'Program Launch',
    date: '2024-11-20',
    author: 'Communications Team',
    readTime: '3 min read',
    featured: true,
    slug: 'climate-resilience-karnali',
    location: 'Karnali Province',
  },
  {
    id: 'news-2',
    title: 'Annual Impact Report 2024 Published',
    excerpt: 'Our comprehensive report detailing reach, outcomes, and financial stewardship across all programs.',
    content: '<p>Full article content...</p>',
    image: '/images/children.jpg',
    category: 'Report',
    date: '2024-11-10',
    author: 'Monitoring & Evaluation Team',
    readTime: '4 min read',
    featured: false,
    slug: 'annual-report-2024',
    location: 'Kathmandu, Nepal',
  },
  {
    id: 'news-3',
    title: 'Partnership Agreement Signed with Ministry of Health',
    excerpt: 'Collaboration to strengthen primary healthcare services in 15 underserved municipalities.',
    content: '<p>Full article content...</p>',
    image: '/images/healthcare.jpg',
    category: 'Partnership',
    date: '2024-10-25',
    author: 'Partnerships Team',
    readTime: '3 min read',
    featured: false,
    slug: 'moh-partnership',
    location: 'Kathmandu, Nepal',
  },
  {
    id: 'news-4',
    title: 'Youth Innovation Challenge 2024 Winners Announced',
    excerpt: 'Five youth-led social enterprises receive seed funding and mentorship to scale their solutions.',
    content: '<p>Full article content...</p>',
    image: '/images/school.jpg',
    category: 'Event',
    date: '2024-10-15',
    author: 'Youth Program Team',
    readTime: '4 min read',
    featured: false,
    slug: 'youth-challenge-2024',
    location: 'Kathmandu, Nepal',
  },
  {
    id: 'news-5',
    title: 'Monsoon Flood Response: Reaching 5,000 Affected Families',
    excerpt: 'Emergency relief distribution and early recovery support across 12 flood-affected districts.',
    content: '<p>Full article content...</p>',
    image: '/images/water.jpg',
    category: 'Humanitarian',
    date: '2024-09-30',
    author: 'Emergency Response Team',
    readTime: '5 min read',
    featured: false,
    slug: 'flood-response-2024',
    location: 'Madhesh & Koshi Provinces',
  },
  {
    id: 'news-6',
    title: 'Women\'s Leadership Summit Concludes in Kathmandu',
    excerpt: '200 women leaders from across Nepal gather to share experiences and advocate for policy change.',
    content: '<p>Full article content...</p>',
    image: '/images/women.jpg',
    category: 'Event',
    date: '2024-09-15',
    author: 'Women Empowerment Team',
    readTime: '4 min read',
    featured: false,
    slug: 'women-leadership-summit',
    location: 'Kathmandu, Nepal',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Before BTN Foundation\'s support, my daughter had to drop out of school. Today, she\'s the top student in her class and dreams of becoming a teacher. This program didn\'t just change her life—it changed our whole family\'s future.',
    author: 'Ram Bahadur Tamang',
    role: 'Father of scholarship recipient',
    location: 'Sindhupalchok, Bagmati Province',
    program: 'Education & Child Development',
  },
  {
    id: 'testimonial-2',
    quote: 'The mobile health clinic saved my grandson\'s life when he had severe pneumonia. The doctors came to our village with medicines and equipment. We didn\'t have to walk two days to the hospital. I will never forget their kindness.',
    author: 'Aama Devi',
    role: 'Grandmother, patient family',
    location: 'Jumla, Karnali Province',
    program: 'Health & Wellbeing',
  },
  {
    id: 'testimonial-3',
    quote: 'Joining the women\'s cooperative gave me confidence I never knew I had. Now I manage our group\'s accounts, speak in ward meetings, and my husband respects my opinions. We are building something together.',
    author: 'Sita Kumari',
    role: 'Cooperative treasurer',
    location: 'Doti, Sudurpashchim Province',
    program: 'Women Empowerment',
  },
  {
    id: 'testimonial-4',
    quote: 'The digital skills bootcamp was a turning point. I went from unemployed to earning in dollars from my village. Now I\'m training other young people in my community. The ripple effect is real.',
    author: 'Prakash Chaudhary',
    role: 'Freelance web developer, bootcamp graduate',
    location: 'Rupandehi, Lumbini Province',
    program: 'Youth Development',
  },
  {
    id: 'testimonial-5',
    quote: 'Our community forest was dying. BTN Foundation didn\'t just give us trees—they gave us knowledge, tools, and a plan. Now our water sources are recharged, landslides have stopped, and we have income from forest products.',
    author: 'Bir Bahadur Gurung',
    role: 'Community Forest User Group Chairperson',
    location: 'Kaski, Gandaki Province',
    program: 'Environmental Sustainability',
  },
  {
    id: 'testimonial-6',
    quote: 'During last year\'s floods, BTN Foundation was the first organization to reach our village with relief supplies. They didn\'t just distribute materials—they stayed to help us rebuild. That\'s true partnership.',
    author: 'Maya Devi',
    role: 'Flood-affected community member',
    location: 'Saptari, Madhesh Province',
    program: 'Humanitarian Assistance',
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find(s => s.slug === slug);
}

export function getFeaturedStories(): Story[] {
  return stories.filter(s => s.featured);
}

export function getStoriesByCategory(category: string): Story[] {
  return stories.filter(s => s.category.toLowerCase() === category.toLowerCase());
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find(n => n.slug === slug);
}

export function getFeaturedNews(): NewsItem[] {
  return newsItems.filter(n => n.featured);
}

export function getNewsByCategory(category: string): NewsItem[] {
  return newsItems.filter(n => n.category.toLowerCase() === category.toLowerCase());
}