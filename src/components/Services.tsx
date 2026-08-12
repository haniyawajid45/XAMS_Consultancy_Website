/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Award, Settings, ShieldCheck, FileCheck, Users, TrendingUp, Network, Briefcase, Search, ArrowRight, GraduationCap, Compass, Brain, FileText } from "lucide-react";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "ISO & Compliance" | "HR & Management" | "Career Selection Counselling">("All");

  const services = [
    {
      id: "iso-standards",
      title: "In achieving ISO industry standards",
      description: "Comprehensive pathway design and material advisory services to prepare, audit, and successfully secure ISO corporate standard credentials.",
      category: "ISO & Compliance",
      icon: Award,
    },
    {
      id: "qa-setups",
      title: "In establishing customized Quality Assurance setups as per ISO Standards at enterprise level",
      description: "Enterprise-level formulation of standard operational manuals and testing criteria aligned specifically with international standards.",
      category: "ISO & Compliance",
      icon: Settings,
    },
    {
      id: "iso-audits",
      title: "ISO Standards audits (aviation, manufacturing, pharmaceutical, support, services industries)",
      description: "Rigorous evaluation and stress-testing of procedural safety pipelines within aviation, manufacturing, pharmaceutical, and services industries.",
      category: "ISO & Compliance",
      icon: ShieldCheck,
    },
    {
      id: "contract-compliance",
      title: "Contract Compliance Audits",
      description: "Independent reviews verifying engineering, operational, and supplier frameworks match strictly against statutory and mutual contract mandates.",
      category: "ISO & Compliance",
      icon: FileCheck,
    },
    {
      id: "hrd",
      title: "Human Resource Development",
      description: "High-tier executive mentorship and custom aerospace maintenance engineer training to bridge advanced technical operational competencies.",
      category: "HR & Management",
      icon: Users,
    },
    {
      id: "shrm",
      title: "Strategic Human Resource Management",
      description: "Developing robust organizational talent acquisition, retention structures, and staff hierarchy charts for security-sensitive engineering teams.",
      category: "HR & Management",
      icon: TrendingUp,
    },
    {
      id: "leadership",
      title: "Leadership and Team Management",
      description: "Immersive group dynamic simulation and communication coaching to align ground crew coordination with cockpit command systems.",
      category: "HR & Management",
      icon: Network,
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship Management",
      description: "Fostering startup innovation within local aerospace sectors, facilitating technology transfer, and managing specialized consulting risk.",
      category: "HR & Management",
      icon: Briefcase,
    },
    {
      id: "career-selection-assessment",
      title: "Career Selection Assessment",
      description: "A scientific career assessment for Class 9–12 students combining interests, personality, and individual strengths to identify suitable career directions.",
      category: "Career Selection Counselling",
      icon: GraduationCap,
    },
    {
      id: "riasec-assessment",
      title: "RIASEC Interest Assessment",
      description: "Identifies a student’s genuine interests across six work-related personality and career categories.",
      category: "Career Selection Counselling",
      icon: Compass,
    },
    {
      id: "personality-intelligence-assessment",
      title: "Personality & Intelligence Assessment",
      description: "Uses the Big Five Personality and Multiple Intelligences frameworks to understand working style, temperament, abilities, and real-world strengths.",
      category: "Career Selection Counselling",
      icon: Brain,
    },
    {
      id: "career-report-counselling",
      title: "Career Report & Counselling Session",
      description: "Provides an individual career report, followed by a guided parent-student session and professional career counselling.",
      category: "Career Selection Counselling",
      icon: FileText,
    },
  ];

  // Filtering logic
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services-section" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block mb-3">
            Core Service Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Where We Are Your Partners
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-500 text-xs sm:text-base leading-relaxed font-sans font-light">
            We are dedicated to helping businesses, students, and organizations achieve global excellence and career clarity. Explore our integrated ISO, QA, HR, and Career Counselling service suites.
          </p>
        </div>

        {/* Searching and Tab Controls */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-between items-center mb-8 sm:mb-10 max-w-5xl mx-auto">
          {/* Category Tabs with horizontal touch scroll for mobile */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar flex flex-nowrap md:flex-wrap justify-start md:justify-center bg-slate-200/60 p-1 sm:p-1.5 rounded-xl border border-slate-200 gap-1">
            {(["All", "ISO & Compliance", "HR & Management", "Career Selection Counselling"] as const).map((cat) => (
              <button
                key={cat}
                id={`cat-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 sm:px-5 py-2 text-xs sm:text-sm font-sans font-semibold rounded-lg transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              id="service-search-input"
              type="text"
              placeholder="Filter services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon container */}
                    <div className="mb-4 sm:mb-5 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <span className="block text-[10px] uppercase font-mono tracking-widest text-green-500 font-semibold mb-1">
                      {service.category}
                    </span>

                    <h3 className="text-sm sm:text-base font-sans font-bold text-slate-900 group-hover:text-green-700 tracking-tight transition-colors mb-2.5 sm:mb-3 min-h-0 sm:min-h-[3.5rem] line-clamp-3">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light mb-4 sm:mb-6 line-clamp-4">
                      {service.description}
                    </p>
                  </div>

                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-400 italic font-mono text-xs sm:text-sm">
                No services match your current criteria. Please try another search keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
