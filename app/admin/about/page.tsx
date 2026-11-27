"use client";

import { useState } from "react";
import { Plus, Trash2, Edit, Image as ImageIcon, Building2, Users, Heart, Target, Shield, Leaf, Lightbulb, Scale, Save, Loader2, Check, GripVertical, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Objective {
  id: string;
  title: string;
  description: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  type: "government" | "ngo" | "corporate" | "academic";
}

const iconOptions = [
  { value: "heart", label: "Heart" },
  { value: "shield", label: "Shield" },
  { value: "leaf", label: "Leaf" },
  { value: "users", label: "Users" },
  { value: "lightbulb", label: "Lightbulb" },
  { value: "scale", label: "Scale" },
  { value: "target", label: "Target" },
  { value: "building2", label: "Building" },
];

const initialData = {
  organization: {
    name: "Better Tomorrow Nepal Foundation",
    tagline: "Together, We Can Build a Better Tomorrow",
    mission: "To empower vulnerable communities in Nepal through sustainable development programs in education, healthcare, women's empowerment, environmental conservation, and humanitarian assistance—creating lasting, positive change for generations to come.",
    vision: "An equitable Nepal where every individual, regardless of geography, gender, or circumstance, has access to quality education, healthcare, economic opportunity, and a healthy environment—enabling them to thrive with dignity and purpose.",
    foundedYear: 2022,
    registrationNumber: "SWC-XXXXX/2022",
    address: "Parci Studio, Itahari-7, Sunsari, Koshi Province, Nepal",
    phone: "+977-980-0000000",
    email: "contact@bettertomorrownepal.org",
    socialLinks: {
      facebook: "https://facebook.com/bettertomorrownepal",
      twitter: "https://twitter.com/btn_nepal",
      instagram: "https://instagram.com/bettertomorrownepal",
      linkedin: "https://linkedin.com/company/better-tomorrow-nepal",
      youtube: "https://youtube.com/@bettertomorrownepal",
    },
  },
  story: {
    title: "Our Story",
    content: "Founded in 2022, Better Tomorrow Nepal Foundation emerged from a shared vision of creating sustainable change in Nepal's most vulnerable communities. Our journey began with a simple belief: that every individual deserves access to quality education, healthcare, and economic opportunities, regardless of their circumstances.",
    timeline: [
      { year: "2022", title: "Foundation Established", description: "Registered with Social Welfare Council and launched flagship Education and Health programs." },
      { year: "2023", title: "Program Expansion", description: "Expanded to Women Empowerment, Youth Development, and Environmental Sustainability programs." },
      { year: "2024", title: "National Reach", description: "Reached 125,000+ beneficiaries across all 7 provinces of Nepal." },
    ],
    images: ["/images/about-story-1.jpg", "/images/about-story-2.jpg"],
  },
  missionVision: {
    mission: "To empower vulnerable communities in Nepal through sustainable development programs in education, healthcare, women's empowerment, environmental conservation, and humanitarian assistance—creating lasting, positive change for generations to come.",
    vision: "An equitable Nepal where every individual, regardless of geography, gender, or circumstance, has access to quality education, healthcare, economic opportunity, and a healthy environment—enabling them to thrive with dignity and purpose.",
    images: ["/images/mission.jpg", "/images/vision.jpg"],
  },
  coreValues: [
    { id: "1", title: "Compassion", description: "We approach every community and individual with empathy, respect, and a deep commitment to human dignity.", icon: "heart" },
    { id: "2", title: "Integrity", description: "We operate with transparency, accountability, and the highest ethical standards in all our actions and decisions.", icon: "shield" },
    { id: "3", title: "Sustainability", description: "We design programs for long-term impact, environmental stewardship, and community ownership beyond our direct involvement.", icon: "leaf" },
    { id: "4", title: "Collaboration", description: "We believe in the power of partnerships—working with communities, government, NGOs, and supporters to achieve shared goals.", icon: "users" },
    { id: "5", title: "Innovation", description: "We embrace creative solutions, evidence-based practices, and continuous learning to maximize our effectiveness.", icon: "lightbulb" },
    { id: "6", title: "Equity", description: "We prioritize the most marginalized and work to address systemic inequalities in access to resources and opportunities.", icon: "scale" },
  ],
  objectives: [
    { id: "1", title: "Universal Access to Quality Education", description: "Ensure all children, especially girls and marginalized groups, complete quality primary and secondary education with relevant learning outcomes." },
    { id: "2", title: "Health for All Communities", description: "Reduce preventable mortality and morbidity by strengthening community health systems and improving access to essential healthcare services." },
    { id: "3", title: "Women's Economic & Social Empowerment", description: "Enable women to achieve economic independence, participate in decision-making, and live free from violence and discrimination." },
    { id: "4", title: "Youth as Agents of Change", description: "Equip young people with skills, opportunities, and platforms to drive innovation, entrepreneurship, and civic engagement." },
    { id: "5", title: "Resilient & Sustainable Communities", description: "Build community capacity for disaster risk reduction, climate adaptation, and sustainable natural resource management." },
    { id: "6", title: "Organizational Excellence", description: "Maintain the highest standards of governance, transparency, financial stewardship, and programmatic effectiveness." },
  ],
  teamMembers: [
    { id: "1", name: "Dr. Arjun Prasad Sharma", role: "Founder & Executive Director", bio: "Dr. Sharma brings over 25 years of experience in international development, having served in senior leadership roles at UNDP, UNICEF, and international NGOs.", image: "/images/team/arjun.jpg", linkedin: "https://linkedin.com/in/arjun-sharma", email: "arjun.sharma@bettertomorrownepal.org" },
    { id: "2", name: "Meera Khadka", role: "Deputy Director, Programs", bio: "Meera has 18 years of experience designing and managing large-scale development programs across South Asia.", image: "/images/team/meera-khadka.jpg", linkedin: "https://linkedin.com/in/meera-khadka", email: "meera.khadka@bettertomorrownepal.org" },
    { id: "3", name: "Rajesh Kumar Thapa", role: "Director, Finance & Operations", bio: "Rajesh is a Chartered Accountant with 20 years of experience in financial management for non-profits and social enterprises.", image: "/images/team/rajesh-thapa.jpg", linkedin: "https://linkedin.com/in/rajesh-thapa", email: "rajesh.thapa@bettertomorrownepal.org" },
  ],
  partners: [
    { id: "1", name: "Ministry of Health and Population", logo: "/images/partners/mohp.png", website: "https://mohp.gov.np", type: "government" },
    { id: "2", name: "UNICEF Nepal", logo: "/images/partners/unicef.png", website: "https://unicef.org/nepal", type: "ngo" },
    { id: "3", name: "Ncell Axiata Limited", logo: "/images/partners/ncell.png", website: "https://ncell.axiata.com", type: "corporate" },
  ],
};

export default function AboutManagementPage() {
  const [activeTab, setActiveTab] = useState<string>("organization");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [organization, setOrganization] = useState(initialData.organization);
  const [story, setStory] = useState(initialData.story);
  const [missionVision, setMissionVision] = useState(initialData.missionVision);
  const [coreValues, setCoreValues] = useState<CoreValue[]>(initialData.coreValues);
  const [objectives, setObjectives] = useState<Objective[]>(initialData.objectives);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialData.teamMembers);
  const [partners, setPartners] = useState<Partner[]>(initialData.partners as Partner[]);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: "organization", label: "Organization Info", icon: Building2 },
    { id: "story", label: "Our Story", icon: ImageIcon },
    { id: "mission-vision", label: "Mission & Vision", icon: Target },
    { id: "core-values", label: "Core Values", icon: Heart },
    { id: "objectives", label: "Objectives", icon: Target },
    { id: "team", label: "Team Members", icon: Users },
    { id: "partners", label: "Partners", icon: Shield },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "organization":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Organization Name</label>
                <input
                  type="text"
                  value={organization.name}
                  onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Tagline</label>
                <input
                  type="text"
                  value={organization.tagline}
                  onChange={(e) => setOrganization({ ...organization, tagline: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Mission Statement</label>
                <textarea
                  value={organization.mission}
                  onChange={(e) => setOrganization({ ...organization, mission: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Vision Statement</label>
                <textarea
                  value={organization.vision}
                  onChange={(e) => setOrganization({ ...organization, vision: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Founded Year</label>
                <input
                  type="number"
                  value={organization.foundedYear}
                  onChange={(e) => setOrganization({ ...organization, foundedYear: parseInt(e.target.value) || 2022 })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Registration Number</label>
                <input
                  type="text"
                  value={organization.registrationNumber}
                  onChange={(e) => setOrganization({ ...organization, registrationNumber: e.target.value })}
                  className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                  <textarea
                    value={organization.address}
                    onChange={(e) => setOrganization({ ...organization, address: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    value={organization.phone}
                    onChange={(e) => setOrganization({ ...organization, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    value={organization.email}
                    onChange={(e) => setOrganization({ ...organization, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-4">Social Media Links</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(organization.socialLinks).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-foreground mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <input
                      type="url"
                      value={value}
                      onChange={(e) => setOrganization({ ...organization, socialLinks: { ...organization.socialLinks, [key]: e.target.value } })}
                      className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      placeholder={`https://${key}.com/...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "story":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Story Title</label>
              <input
                type="text"
                value={story.title}
                onChange={(e) => setStory({ ...story, title: e.target.value })}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Story Content</label>
              <textarea
                value={story.content}
                onChange={(e) => setStory({ ...story, content: e.target.value })}
                rows={6}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
              />
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Timeline Events</h4>
                <button
                  onClick={() => setStory({ ...story, timeline: [...story.timeline, { year: "", title: "", description: "" }] })}
                  className="inline-flex items-center gap-2 px-3 py-2 border-2 border-dashed border-border rounded-xl text-text-secondary hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Timeline Event
                </button>
              </div>
              <div className="space-y-3">
                {story.timeline.map((event, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-foreground mb-1">Year</label>
                            <input
                              type="text"
                              value={event.year}
                              onChange={(e) => {
                                const newTimeline = [...story.timeline];
                                newTimeline[index] = { ...newTimeline[index], year: e.target.value };
                                setStory({ ...story, timeline: newTimeline });
                              }}
                              className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-foreground mb-1">Title</label>
                            <input
                              type="text"
                              value={event.title}
                              onChange={(e) => {
                                const newTimeline = [...story.timeline];
                                newTimeline[index] = { ...newTimeline[index], title: e.target.value };
                                setStory({ ...story, timeline: newTimeline });
                              }}
                              className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                            />
                          </div>
                          <div className="flex items-end">
                            <button
                              onClick={() => {
                                const newTimeline = story.timeline.filter((_, i) => i !== index);
                                setStory({ ...story, timeline: newTimeline });
                              }}
                              className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">Description</label>
                          <textarea
                            value={event.description}
                            onChange={(e) => {
                              const newTimeline = [...story.timeline];
                              newTimeline[index] = { ...newTimeline[index], description: e.target.value };
                              setStory({ ...story, timeline: newTimeline });
                            }}
                            rows={2}
                            className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-4">Story Images</h4>
              <div className="space-y-2">
                {story.images.map((img, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => {
                        const newImages = [...story.images];
                        newImages[index] = e.target.value;
                        setStory({ ...story, images: newImages });
                      }}
                      className="flex-1 px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      placeholder="/images/about-story.jpg"
                    />
                    <button
                      onClick={() => {
                        const newImages = story.images.filter((_, i) => i !== index);
                        setStory({ ...story, images: newImages });
                      }}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setStory({ ...story, images: [...story.images, ""] })}
                  className="inline-flex items-center gap-2 px-3 py-2 border-2 border-dashed border-border rounded-xl text-text-secondary hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Image
                </button>
              </div>
            </div>
          </div>
        );

      case "mission-vision":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Mission Statement</h4>
              <textarea
                value={missionVision.mission}
                onChange={(e) => setMissionVision({ ...missionVision, mission: e.target.value })}
                rows={6}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
              />
              <label className="block text-sm font-medium text-foreground mb-1">Mission Image</label>
              <input
                type="text"
                value={missionVision.images[0] || ""}
                onChange={(e) => setMissionVision({ ...missionVision, images: [e.target.value, missionVision.images[1]] })}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                placeholder="/images/mission.jpg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Vision Statement</h4>
              <textarea
                value={missionVision.vision}
                onChange={(e) => setMissionVision({ ...missionVision, vision: e.target.value })}
                rows={6}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
              />
              <label className="block text-sm font-medium text-foreground mb-1">Vision Image</label>
              <input
                type="text"
                value={missionVision.images[1] || ""}
                onChange={(e) => setMissionVision({ ...missionVision, images: [missionVision.images[0], e.target.value] })}
                className="w-full px-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                placeholder="/images/vision.jpg"
              />
            </div>
          </div>
        );

      case "core-values":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Core Values</h4>
              <button
                onClick={() => setCoreValues([...coreValues, { id: Date.now().toString(), title: "", description: "", icon: "heart" }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Value
              </button>
            </div>
            <div className="space-y-3">
              {coreValues.map((value, index) => (
                <div key={value.id} className="bg-card border border-border rounded-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Title</label>
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) => {
                          const newValues = [...coreValues];
                          newValues[index] = { ...newValues[index], title: e.target.value };
                          setCoreValues(newValues);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Icon</label>
                      <select
                        value={value.icon}
                        onChange={(e) => {
                          const newValues = [...coreValues];
                          newValues[index] = { ...newValues[index], icon: e.target.value };
                          setCoreValues(newValues);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      >
                        {iconOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-foreground mb-1">Description</label>
                      <textarea
                        value={value.description}
                        onChange={(e) => {
                          const newValues = [...coreValues];
                          newValues[index] = { ...newValues[index], description: e.target.value };
                          setCoreValues(newValues);
                        }}
                        rows={2}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        const newValues = coreValues.filter((_, i) => i !== index);
                        setCoreValues(newValues);
                      }}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "objectives":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Objectives</h4>
              <button
                onClick={() => setObjectives([...objectives, { id: Date.now().toString(), title: "", description: "" }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Objective
              </button>
            </div>
            <div className="space-y-3">
              {objectives.map((objective, index) => (
                <div key={objective.id} className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">Title</label>
                        <input
                          type="text"
                          value={objective.title}
                          onChange={(e) => {
                            const newObjectives = [...objectives];
                            newObjectives[index] = { ...newObjectives[index], title: e.target.value };
                            setObjectives(newObjectives);
                          }}
                          className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">Description</label>
                        <textarea
                          value={objective.description}
                          onChange={(e) => {
                            const newObjectives = [...objectives];
                            newObjectives[index] = { ...newObjectives[index], description: e.target.value };
                            setObjectives(newObjectives);
                          }}
                          rows={2}
                          className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const newObjectives = objectives.filter((_, i) => i !== index);
                        setObjectives(newObjectives);
                      }}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "team":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Team Members</h4>
              <button
                onClick={() => setTeamMembers([...teamMembers, { id: Date.now().toString(), name: "", role: "", bio: "", image: "", linkedin: "", email: "" }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Team Member
              </button>
            </div>
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div key={member.id} className="bg-card border border-border rounded-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => {
                          const newMembers = [...teamMembers];
                          newMembers[index] = { ...newMembers[index], name: e.target.value };
                          setTeamMembers(newMembers);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Role</label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => {
                          const newMembers = [...teamMembers];
                          newMembers[index] = { ...newMembers[index], role: e.target.value };
                          setTeamMembers(newMembers);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-foreground mb-1">Bio</label>
                      <textarea
                        value={member.bio}
                        onChange={(e) => {
                          const newMembers = [...teamMembers];
                          newMembers[index] = { ...newMembers[index], bio: e.target.value };
                          setTeamMembers(newMembers);
                        }}
                        rows={2}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Profile Image</label>
                      <input
                        type="text"
                        value={member.image}
                        onChange={(e) => {
                          const newMembers = [...teamMembers];
                          newMembers[index] = { ...newMembers[index], image: e.target.value };
                          setTeamMembers(newMembers);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        placeholder="/images/team/member.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">LinkedIn</label>
                      <input
                        type="url"
                        value={member.linkedin}
                        onChange={(e) => {
                          const newMembers = [...teamMembers];
                          newMembers[index] = { ...newMembers[index], linkedin: e.target.value };
                          setTeamMembers(newMembers);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-foreground mb-1">Email</label>
                      <input
                        type="email"
                        value={member.email}
                        onChange={(e) => {
                          const newMembers = [...teamMembers];
                          newMembers[index] = { ...newMembers[index], email: e.target.value };
                          setTeamMembers(newMembers);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        placeholder="member@bettertomorrownepal.org"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        const newMembers = teamMembers.filter((_, i) => i !== index);
                        setTeamMembers(newMembers);
                      }}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "partners":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Partners</h4>
              <button
                onClick={() => setPartners([...partners, { id: Date.now().toString(), name: "", logo: "", website: "", type: "ngo" }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Partner
              </button>
            </div>
            <div className="space-y-3">
              {partners.map((partner, index) => (
                <div key={partner.id} className="bg-card border border-border rounded-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Name</label>
                      <input
                        type="text"
                        value={partner.name}
                        onChange={(e) => {
                          const newPartners = [...partners];
                          newPartners[index] = { ...newPartners[index], name: e.target.value };
                          setPartners(newPartners);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Logo Path</label>
                      <input
                        type="text"
                        value={partner.logo}
                        onChange={(e) => {
                          const newPartners = [...partners];
                          newPartners[index] = { ...newPartners[index], logo: e.target.value };
                          setPartners(newPartners);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        placeholder="/images/partners/logo.png"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Website</label>
                      <input
                        type="url"
                        value={partner.website}
                        onChange={(e) => {
                          const newPartners = [...partners];
                          newPartners[index] = { ...newPartners[index], website: e.target.value };
                          setPartners(newPartners);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        placeholder="https://partner.org"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Type</label>
                      <select
                        value={partner.type}
                        onChange={(e) => {
                          const newPartners = [...partners];
                          newPartners[index] = { ...newPartners[index], type: e.target.value as Partner["type"] };
                          setPartners(newPartners);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      >
                        <option value="government">Government</option>
                        <option value="ngo">NGO</option>
                        <option value="corporate">Corporate</option>
                        <option value="academic">Academic</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        const newPartners = partners.filter((_, i) => i !== index);
                        setPartners(newPartners);
                      }}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <nav className="flex overflow-x-auto p-1" aria-label="About Us Management Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:bg-muted/40 hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-card rounded-2xl border border-border p-6">
        {renderTabContent()}
      </div>

      {/* Save Actions */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
        <a
          href="/about"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
          Preview Live Page
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