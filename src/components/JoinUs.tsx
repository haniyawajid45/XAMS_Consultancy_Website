/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, ShieldCheck, ExternalLink, UserPlus, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function JoinUs() {
  const [activeTab, setActiveTab] = useState<"all" | "counsellor" | "qahse" | "internship">("all");

  const opportunities = [
    {
      id: "counsellor",
      title: "Career Counselling Professionals",
      category: "Career Guidance & Psychology",
      badge: "Open Position",
      icon: GraduationCap,
      color: "from-green-600 to-green-700",
      accentBg: "bg-green-50 text-green-700 border-green-200",
      iconBg: "bg-green-100 text-green-700",
      description:
        "We are looking for experienced career counsellors to join our team and help us guide students towards their ideal career paths. If you are passionate about helping others reach their full potential and have a background in career guidance through psychological assessments, please apply through the link below.",
      highlights: [
        "Guide students (Class 9-12) toward optimal career paths",
        "Conduct RIASEC & Big Five personality assessments",
        "Conduct guided parent-student counselling sessions",
      ],
      link: "https://forms.gle/fkbdjZ3SdkAihBav6",
      ctaText: "Apply as Career Counsellor",
    },
    {
      id: "qahse",
      title: "QA & HSE Professionals",
      category: "Quality Assurance & Industrial Safety",
      badge: "Open Position",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-700",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
      description:
        "We are looking for a QA & HSE professional to join our team at XAMS Consultancy to help the industry grow through established quality assurance and health and safety standards. Please join our pool of talent by filling out this form:",
      highlights: [
        "Implement ISO 9001, 14001, 45001 & HSE frameworks",
        "Conduct compliance audits & regulatory validations",
        "Assist industrial clients in safety performance elevation",
      ],
      link: "https://forms.gle/Cew8EfN75WRdYCDq8",
      ctaText: "Join QA & HSE Talent Pool",
    },
    {
      id: "internship",
      title: "Apply for Internship",
      category: "Campus Outreach & Assessment",
      badge: "Open Position",
      icon: UserPlus,
      color: "from-green-600 to-cyan-700",
      accentBg: "bg-green-50 text-green-700 border-green-200",
      iconBg: "bg-green-100 text-green-700",
      description:
        "Join XAMS Consultancy as an internship candidate to support campus outreach, student assessment delivery, and career counselling preparation. Apply now to gain hands-on experience and mentorship.",
      highlights: [
        "Support campus outreach and school engagement",
        "Assist with assessment administration and student follow-up",
        "Learn career counselling techniques from experienced professionals",
      ],
      link: "https://forms.gle/8qqVutLLGu6LWGbQA",
      ctaText: "Apply for Internship",
    },
  ];

  const filteredOpportunities =
    activeTab === "all"
      ? opportunities
      : opportunities.filter((op) => op.id === activeTab);

  return (
    <section id="join-us" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-600/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-green-400 uppercase tracking-widest bg-green-950/80 border border-green-800/60 px-3 sm:px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <UserPlus className="h-3.5 w-3.5 text-green-400 shrink-0" />
            <span>Careers &amp; Talent Pool</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-white tracking-tight">
            Join Us
          </h2>
          <p className="text-slate-300 text-xs sm:text-base font-light">
            Become a part of XAMS Consultancy. We are expanding our team of passionate professionals in Career Guidance and Quality Assurance.
          </p>
        </div>

        {/* Tab Controls with horizontal touch scroll for mobile */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="w-full sm:w-auto overflow-x-auto no-scrollbar flex flex-nowrap justify-start sm:justify-center bg-slate-950 p-1 sm:p-1.5 rounded-2xl border border-slate-800 gap-1 sm:gap-1.5 shadow-xl">
            <button
              id="join-tab-all"
              onClick={() => setActiveTab("all")}
              className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-sans font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                activeTab === "all"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>All Openings</span>
            </button>

            <button
              id="join-tab-counsellor"
              onClick={() => setActiveTab("counsellor")}
              className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-sans font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                activeTab === "counsellor"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Career Counselling Professionals</span>
            </button>

            <button
              id="join-tab-qahse"
              onClick={() => setActiveTab("qahse")}
              className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-sans font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                activeTab === "qahse"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>QA &amp; HSE Professionals</span>
            </button>

            <button
              id="join-tab-internship"
              onClick={() => setActiveTab("internship")}
              className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-sans font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                activeTab === "internship"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Internship</span>
            </button>
          </div>
        </div>

        {/* Opportunity Cards Grid */}
        <div className={`grid grid-cols-1 ${filteredOpportunities.length > 1 ? "lg:grid-cols-2" : "max-w-3xl mx-auto"} gap-6 sm:gap-8`}>
          {filteredOpportunities.map((op) => {
            const Icon = op.icon;
            return (
              <div
                key={op.id}
                className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 p-5 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 group"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${op.iconBg} shadow-inner`}>
                      <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full border ${op.accentBg}`}>
                      {op.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="block text-[10px] sm:text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                      {op.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold text-white tracking-tight">
                      {op.title}
                    </h3>
                  </div>

                  {/* Description Box */}
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-800/80">
                    <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-sans font-light select-text">
                      {op.description}
                    </p>
                  </div>

                  {/* Role Highlights */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Role Focus &amp; Responsibilities
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {op.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Link CTA */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="text-[10px] sm:text-xs font-mono text-slate-400">
                    <span>XAMS CAREER PORTAL</span>
                  </div>
                  <a
                    id={`join-apply-btn-${op.id}`}
                    href={op.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r ${op.color} hover:opacity-95 active:scale-[0.98] text-white font-sans font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all shadow-lg cursor-pointer`}
                  >
                    <span>{op.ctaText}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
