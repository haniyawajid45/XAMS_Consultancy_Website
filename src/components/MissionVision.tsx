/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Target, Eye, ShieldCheck, CheckCircle2, GraduationCap, Building2, Sparkles } from "lucide-react";

export default function MissionVision() {
  const missionBullets = [
    {
      title: "Student Career Alignment",
      desc: "To support students in choosing the right career path that aligns with their personal strengths and interests.",
      icon: GraduationCap,
      color: "text-sky-400 bg-sky-950/60 border-sky-800/60",
    },
    {
      title: "Audit Criteria Integration",
      desc: "Direct integration of industry audit criteria as per international standards",
      icon: ShieldCheck,
      color: "text-blue-400 bg-blue-950/60 border-blue-800/60",
    },
    {
      title: "Custom QMS & HSE Frameworks",
      desc: "On-site, active hand-holding to design custom QMS layouts & HSE compliance programs.",
      icon: Building2,
      color: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
    },
    {
      title: "Active Industry Partnership",
      desc: "To help businesses and industry to achieve ISO standards and HSE compliance by becoming active partners.",
      icon: CheckCircle2,
      color: "text-indigo-400 bg-indigo-950/60 border-indigo-800/60",
    },
  ];

  return (
    <section id="where-we-come-from" className="relative py-12 sm:py-16 lg:py-20 bg-slate-900 overflow-hidden text-white">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-950/80 border border-blue-800/50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block">
            Strategic Direction
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-white tracking-tight">
            Our Vision &amp; Mission
          </h2>
          <p className="text-slate-400 text-xs sm:text-base font-light">
            Guiding students toward optimal career paths while empowering global industries with ISO standards and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Vision Card (First - 5 Columns) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-8 lg:p-10 shadow-2xl group hover:border-indigo-600/50 transition-all duration-300">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-indigo-900/40 text-indigo-400 border border-indigo-700/50 shadow-md">
                  <Eye className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 px-2.5 py-1 rounded-full">
                  Target Horizon
                </span>
              </div>

              <div>
                <span className="block text-[11px] sm:text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold mb-1">
                  Our Vision
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold text-white tracking-tight">
                  Vision Statement
                </h3>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-900/40 shadow-inner">
                <p className="text-white text-base sm:text-lg lg:text-xl font-sans font-bold leading-relaxed">
                  "To become a leading Carrier Support &amp; ISO Standards Consultancy Firm."
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                <h4 className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">Strategic Pillars</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 sm:p-3 rounded-xl border border-slate-800">
                    <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Personality-Aligned Career Guidance</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 sm:p-3 rounded-xl border border-slate-800">
                    <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Comprehensive ISO &amp; HSE Compliance</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 sm:p-3 rounded-xl border border-slate-800">
                    <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Active Industrial Partnership</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-900 text-slate-500 text-[10px] sm:text-xs font-mono">
              <span>EST. BENCHMARK</span>
              <span className="text-indigo-400 font-bold">GLOBAL LEADERSHIP</span>
            </div>
          </div>

          {/* Mission Card (Second - 7 Columns) */}
          <div className="lg:col-span-7 relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-8 lg:p-10 shadow-2xl group hover:border-blue-600/50 transition-all duration-300">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-900/40 text-blue-400 border border-blue-700/50 shadow-md">
                  <Target className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-950/80 text-blue-300 border border-blue-800/60 px-2.5 py-1 rounded-full">
                  Execution Objectives
                </span>
              </div>

              <div>
                <span className="block text-[11px] sm:text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold mb-1">
                  Our Mission
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold text-white tracking-tight">
                  Mission Statement
                </h3>
              </div>

              {/* Bullet Points List */}
              <div className="space-y-2.5 sm:space-y-3">
                {missionBullets.map((bullet, idx) => {
                  const IconComp = bullet.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-800/50 transition-colors"
                    >
                      <div className={`p-1.5 sm:p-2 rounded-lg border shrink-0 mt-0.5 ${bullet.color}`}>
                        <IconComp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h4 className="text-[11px] sm:text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                          {bullet.title}
                        </h4>
                        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-light">
                          {bullet.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-900 text-slate-500 text-[10px] sm:text-xs font-mono">
              <span>ALIGNMENT AUDIT</span>
              <span className="text-blue-400 font-bold">100% REGULATORY &amp; CAREER READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

