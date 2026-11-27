"use client";

import { useState } from "react";
import { Plus, Trash2, BarChart3, MapPin, Target, Heart, Users, Home, Book, Trees, Save, Loader2, Check, ChevronUp, ChevronDown, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactStat {
  id: string;
  label: string;
  value: string;
  suffix: string;
  description: string;
  icon: string;
  enabled: boolean;
  order: number;
}

interface RegionalImpact {
  id: string;
  province: string;
  districts: number;
  beneficiaries: string;
  programs: string[];
  highlight: string;
}

interface AnnualHighlight {
  id: string;
  year: number;
  title: string;
  achievements: string[];
  totalBeneficiaries: string;
  totalExpenditure: string;
}

interface SDGAlignment {
  id: string;
  goal: number;
  title: string;
  programs: string[];
}

const initialImpactStats: ImpactStat[] = [
  { id: "1", label: "People Reached", value: "125,000", suffix: "+", description: "Individuals directly benefited from our programs", icon: "users", enabled: true, order: 1 },
  { id: "2", label: "Communities Supported", value: "250", suffix: "+", description: "Rural and urban communities across Nepal", icon: "home", enabled: true, order: 2 },
  { id: "3", label: "Active Programs", value: "8", suffix: "", description: "Comprehensive programs addressing key development areas", icon: "target", enabled: true, order: 3 },
  { id: "4", label: "Volunteers & Partners", value: "500", suffix: "+", description: "Dedicated volunteers and institutional partners", icon: "heart", enabled: true, order: 4 },
];

const initialRegionalImpact: RegionalImpact[] = [
  { id: "1", province: "Koshi Province", districts: 6, beneficiaries: "35,000+", programs: ["Education", "Health", "Women Empowerment", "Environment"], highlight: "Rural Smart School Initiative in 12 schools" },
  { id: "2", province: "Madhesh Province", districts: 4, beneficiaries: "28,000+", programs: ["Health", "Education", "Livelihood", "Humanitarian"], highlight: "Maternal health camps in 15 municipalities" },
  { id: "3", province: "Bagmati Province", districts: 5, beneficiaries: "22,000+", programs: ["Youth Development", "Environment", "Community Development"], highlight: "Youth entrepreneurship incubator in Kathmandu" },
  { id: "4", province: "Gandaki Province", districts: 3, beneficiaries: "15,000+", programs: ["Environment", "Education", "Women Empowerment"], highlight: "Annapurna conservation area watershed project" },
  { id: "5", province: "Lumbini Province", districts: 4, beneficiaries: "18,000+", programs: ["Education", "Health", "Livelihood"], highlight: "Vocational training center in Rupandehi" },
  { id: "6", province: "Karnali Province", districts: 3, beneficiaries: "12,000+", programs: ["Health", "Education", "Humanitarian"], highlight: "Mobile health clinics in remote mountain districts" },
  { id: "7", province: "Sudurpashchim Province", districts: 3, beneficiaries: "10,000+", programs: ["Community Development", "Women Empowerment", "Environment"], highlight: "Women-led cooperatives in Doti and Achham" },
];

const initialAnnualHighlights: AnnualHighlight[] = [
  { id: "1", year: 2024, title: "Expanding Reach & Deepening Impact", achievements: ["Launched 3 new vocational training centers", "Reached 15,000 additional children through education programs", "Established 50 women's savings and credit cooperatives", "Planted 100,000 native saplings in degraded landscapes", "Responded to monsoon floods in 12 districts"], totalBeneficiaries: "125,000+", totalExpenditure: "NPR 85 Million" },
  { id: "2", year: 2023, title: "Building Resilient Communities", achievements: ["Completed 20 school infrastructure projects", "Provided healthcare to 25,000 people through mobile clinics", "Trained 500 youth in digital skills and entrepreneurship", "Supported 1,000 families with livelihood recovery post-earthquake", "Launched climate adaptation pilot in 10 communities"], totalBeneficiaries: "98,000+", totalExpenditure: "NPR 72 Million" },
  { id: "3", year: 2022, title: "Foundation & Growth", achievements: ["Established organizational governance and policies", "Launched flagship Education and Health programs", "Built partnerships with 5 international NGOs", "Registered with Social Welfare Council", "Reached first 25,000 beneficiaries"], totalBeneficiaries: "25,000+", totalExpenditure: "NPR 35 Million" },
];

const initialSDGAlignment: SDGAlignment[] = [
  { id: "1", goal: 1, title: "No Poverty", programs: ["Livelihood", "Women Empowerment", "Community Development"] },
  { id: "2", goal: 3, title: "Good Health & Well-being", programs: ["Health", "Humanitarian"] },
  { id: "3", goal: 4, title: "Quality Education", programs: ["Education", "Youth Development"] },
  { id: "4", goal: 5, title: "Gender Equality", programs: ["Women Empowerment", "Education"] },
  { id: "5", goal: 6, title: "Clean Water & Sanitation", programs: ["Community Development", "Health"] },
  { id: "6", goal: 8, title: "Decent Work & Economic Growth", programs: ["Livelihood", "Youth Development"] },
  { id: "7", goal: 10, title: "Reduced Inequalities", programs: ["Women Empowerment", "Community Development"] },
  { id: "8", goal: 13, title: "Climate Action", programs: ["Environment", "Community Development"] },
  { id: "9", goal: 15, title: "Life on Land", programs: ["Environment"] },
  { id: "10", goal: 17, title: "Partnerships for the Goals", programs: ["All Programs"] },
];

const iconOptions = [
  { value: "users", label: "Users", icon: Users },
  { value: "home", label: "Home", icon: Home },
  { value: "target", label: "Target", icon: Target },
  { value: "heart", label: "Heart", icon: Heart },
  { value: "book", label: "Book", icon: Book },
  { value: "tree", label: "Tree", icon: Trees },
  { value: "map-pin", label: "Map Pin", icon: MapPin },
  { value: "bar-chart", label: "Bar Chart", icon: BarChart3 },
];

export default function ImpactManagementPage() {
  const [activeTab, setActiveTab] = useState<string>("stats");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expandedStat, setExpandedStat] = useState<string | null>(null);

  const [impactStats, setImpactStats] = useState<ImpactStat[]>(initialImpactStats);
  const [regionalImpact, setRegionalImpact] = useState<RegionalImpact[]>(initialRegionalImpact);
  const [annualHighlights, setAnnualHighlights] = useState<AnnualHighlight[]>(initialAnnualHighlights);
  const [sdgAlignment, setSdgAlignment] = useState<SDGAlignment[]>(initialSDGAlignment);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: "stats", label: "Impact Statistics", icon: BarChart3 },
    { id: "regional", label: "Regional Impact", icon: MapPin },
    { id: "annual", label: "Annual Highlights", icon: Target },
    { id: "sdg", label: "SDG Alignment", icon: Heart },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "stats":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Key Impact Statistics</h4>
              <button
                onClick={() => setImpactStats([...impactStats, { id: Date.now().toString(), label: "", value: "", suffix: "", description: "", icon: "users", enabled: true, order: impactStats.length + 1 }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Statistic
              </button>
            </div>
            <div className="space-y-3">
              {impactStats.map((stat, index) => (
                <div key={stat.id} className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <GripVertical className="w-5 h-5 text-text-secondary/50 flex-shrink-0 cursor-grab mt-1" />
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">Label</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...impactStats];
                              newStats[index] = { ...newStats[index], label: e.target.value };
                              setImpactStats(newStats);
                            }}
                            className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">Value</label>
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...impactStats];
                              newStats[index] = { ...newStats[index], value: e.target.value };
                              setImpactStats(newStats);
                            }}
                            className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">Suffix</label>
                          <input
                            type="text"
                            value={stat.suffix}
                            onChange={(e) => {
                              const newStats = [...impactStats];
                              newStats[index] = { ...newStats[index], suffix: e.target.value };
                              setImpactStats(newStats);
                            }}
                            className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">Icon</label>
                          <select
                            value={stat.icon}
                            onChange={(e) => {
                              const newStats = [...impactStats];
                              newStats[index] = { ...newStats[index], icon: e.target.value };
                              setImpactStats(newStats);
                            }}
                            className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                          >
                            {iconOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">Description</label>
                        <input
                          type="text"
                          value={stat.description}
                          onChange={(e) => {
                            const newStats = [...impactStats];
                            newStats[index] = { ...newStats[index], description: e.target.value };
                            setImpactStats(newStats);
                          }}
                          className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        />
                      </div>
                      <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={stat.enabled}
                            onChange={() => {
                              const newStats = [...impactStats];
                              newStats[index] = { ...newStats[index], enabled: !newStats[index].enabled };
                              setImpactStats(newStats);
                            }}
                            className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-foreground">Enabled</span>
                        </label>
                        <div className="flex items-center gap-1 ml-auto">
                          <button
                            onClick={() => index > 0 && setImpactStats(prev => {
                              const newStats = [...prev];
                              [newStats[index], newStats[index - 1]] = [newStats[index - 1], newStats[index]];
                              return newStats.map((s, i) => ({ ...s, order: i + 1 }));
                            })}
                            disabled={index === 0}
                            className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => index < impactStats.length - 1 && setImpactStats(prev => {
                              const newStats = [...prev];
                              [newStats[index], newStats[index + 1]] = [newStats[index + 1], newStats[index]];
                              return newStats.map((s, i) => ({ ...s, order: i + 1 }));
                            })}
                            disabled={index === impactStats.length - 1}
                            className="p-1 text-text-secondary/50 hover:text-text-secondary disabled:opacity-30"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setImpactStats(prev => prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, order: i + 1 })))}
                            className="p-1 text-text-secondary/50 hover:text-rose-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "regional":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Regional Impact</h4>
              <button
                onClick={() => setRegionalImpact([...regionalImpact, { id: Date.now().toString(), province: "", districts: 0, beneficiaries: "", programs: [], highlight: "" }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Region
              </button>
            </div>
            <div className="space-y-4">
              {regionalImpact.map((region, index) => (
                <div key={region.id} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h5 className="font-medium text-foreground">{region.province || `Region ${index + 1}`}</h5>
                    <button
                      onClick={() => setRegionalImpact(prev => prev.filter((_, i) => i !== index))}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Province</label>
                      <input
                        type="text"
                        value={region.province}
                        onChange={(e) => {
                          const newRegions = [...regionalImpact];
                          newRegions[index] = { ...newRegions[index], province: e.target.value };
                          setRegionalImpact(newRegions);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Districts</label>
                      <input
                        type="number"
                        value={region.districts}
                        onChange={(e) => {
                          const newRegions = [...regionalImpact];
                          newRegions[index] = { ...newRegions[index], districts: parseInt(e.target.value) || 0 };
                          setRegionalImpact(newRegions);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Beneficiaries</label>
                      <input
                        type="text"
                        value={region.beneficiaries}
                        onChange={(e) => {
                          const newRegions = [...regionalImpact];
                          newRegions[index] = { ...newRegions[index], beneficiaries: e.target.value };
                          setRegionalImpact(newRegions);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                        placeholder="35,000+"
                      />
                    </div>
                    <div className="lg:col-span-1">
                      <label className="block text-xs font-medium text-foreground mb-1">Highlight</label>
                      <input
                        type="text"
                        value={region.highlight}
                        onChange={(e) => {
                          const newRegions = [...regionalImpact];
                          newRegions[index] = { ...newRegions[index], highlight: e.target.value };
                          setRegionalImpact(newRegions);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-foreground mb-1">Programs (comma-separated)</label>
                    <input
                      type="text"
                      value={region.programs.join(", ")}
                      onChange={(e) => {
                        const newRegions = [...regionalImpact];
                        newRegions[index] = { ...newRegions[index], programs: e.target.value.split(",").map(p => p.trim()).filter(Boolean) };
                        setRegionalImpact(newRegions);
                      }}
                      className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      placeholder="Education, Health, Women Empowerment"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "annual":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Annual Highlights</h4>
              <button
                onClick={() => setAnnualHighlights([...annualHighlights, { id: Date.now().toString(), year: new Date().getFullYear(), title: "", achievements: [], totalBeneficiaries: "", totalExpenditure: "" }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Year
              </button>
            </div>
            <div className="space-y-4">
              {annualHighlights.map((year, index) => (
                <div key={year.id} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h5 className="font-medium text-foreground">{year.year} - {year.title || "Annual Report"}</h5>
                    <button
                      onClick={() => setAnnualHighlights(prev => prev.filter((_, i) => i !== index))}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Year</label>
                      <input
                        type="number"
                        value={year.year}
                        onChange={(e) => {
                          const newYears = [...annualHighlights];
                          newYears[index] = { ...newYears[index], year: parseInt(e.target.value) || new Date().getFullYear() };
                          setAnnualHighlights(newYears);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Title</label>
                      <input
                        type="text"
                        value={year.title}
                        onChange={(e) => {
                          const newYears = [...annualHighlights];
                          newYears[index] = { ...newYears[index], title: e.target.value };
                          setAnnualHighlights(newYears);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Total Beneficiaries</label>
                      <input
                        type="text"
                        value={year.totalBeneficiaries}
                        onChange={(e) => {
                          const newYears = [...annualHighlights];
                          newYears[index] = { ...newYears[index], totalBeneficiaries: e.target.value };
                          setAnnualHighlights(newYears);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-foreground mb-1">Total Expenditure</label>
                      <input
                        type="text"
                        value={year.totalExpenditure}
                        onChange={(e) => {
                          const newYears = [...annualHighlights];
                          newYears[index] = { ...newYears[index], totalExpenditure: e.target.value };
                          setAnnualHighlights(newYears);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Key Achievements</label>
                    <div className="space-y-2">
                      {year.achievements.map((achievement, aIndex) => (
                        <div key={aIndex} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={achievement}
                            onChange={(e) => {
                              const newYears = [...annualHighlights];
                              newYears[index] = { ...newYears[index], achievements: newYears[index].achievements.map((a, i) => i === aIndex ? e.target.value : a) };
                              setAnnualHighlights(newYears);
                            }}
                            className="flex-1 px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                          />
                          <button
                            onClick={() => {
                              const newYears = [...annualHighlights];
                              newYears[index] = { ...newYears[index], achievements: newYears[index].achievements.filter((_, i) => i !== aIndex) };
                              setAnnualHighlights(newYears);
                            }}
                            className="p-1 text-text-secondary hover:text-rose-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const newYears = [...annualHighlights];
                          newYears[index] = { ...newYears[index], achievements: [...newYears[index].achievements, ""] };
                          setAnnualHighlights(newYears);
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 border-2 border-dashed border-border rounded-xl text-text-secondary hover:border-primary hover:text-primary transition-colors text-sm mt-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add Achievement
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "sdg":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">SDG Alignment</h4>
              <button
                onClick={() => setSdgAlignment([...sdgAlignment, { id: Date.now().toString(), goal: 0, title: "", programs: [] }])}
                className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-[#e05700] text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add SDG
              </button>
            </div>
            <div className="space-y-4">
              {sdgAlignment.map((sdg, index) => (
                <div key={sdg.id} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h5 className="font-medium text-foreground">SDG {sdg.goal}: {sdg.title || "Untitled"}</h5>
                    <button
                      onClick={() => setSdgAlignment(prev => prev.filter((_, i) => i !== index))}
                      className="p-2 text-text-secondary hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Goal Number</label>
                      <input
                        type="number"
                        value={sdg.goal}
                        onChange={(e) => {
                          const newSdgs = [...sdgAlignment];
                          newSdgs[index] = { ...newSdgs[index], goal: parseInt(e.target.value) || 0 };
                          setSdgAlignment(newSdgs);
                        }}
                        min={1}
                        max={17}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-foreground mb-1">Goal Title</label>
                      <input
                        type="text"
                        value={sdg.title}
                        onChange={(e) => {
                          const newSdgs = [...sdgAlignment];
                          newSdgs[index] = { ...newSdgs[index], title: e.target.value };
                          setSdgAlignment(newSdgs);
                        }}
                        className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Related Programs (comma-separated)</label>
                    <input
                      type="text"
                      value={sdg.programs.join(", ")}
                      onChange={(e) => {
                        const newSdgs = [...sdgAlignment];
                        newSdgs[index] = { ...newSdgs[index], programs: e.target.value.split(",").map(p => p.trim()).filter(Boolean) };
                        setSdgAlignment(newSdgs);
                      }}
                      className="w-full px-3 py-2 bg-muted/40 border border-border rounded-xl text-sm text-foreground placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
                      placeholder="Education, Health, Women Empowerment"
                    />
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
        <nav className="flex overflow-x-auto p-1" aria-label="Impact Management Tabs">
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
          href="/impact"
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