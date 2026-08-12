/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Compass } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section id="about-us" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block">
            Corporate Dossier
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Who We Are
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light select-text">
            XAMS Consultancy specialises in two distinct areas of professional management. Career choice counselling consultancy for young students and Quality Assurance/Compliance monitoring and management services to industry to improve their safety performance and regulatory compliance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
            <div className="flex gap-2.5 items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Career Counselling</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Optimized personality-aligned student guidance.</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">QA &amp; Compliance</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">ISO, HSE &amp; regulatory safety performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          {/* Visual tech layout block */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-600/5 rounded-full blur-2xl pointer-events-none" />
          <div className="bg-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-slate-800 select-none pointer-events-none">
              <Compass className="h-20 w-20 sm:h-28 sm:w-28 opacity-10" />
            </div>
            <h3 className="text-base sm:text-lg font-sans font-extrabold uppercase tracking-wide text-green-400 mb-4 sm:mb-6">
              Technical Mastery Blueprint
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: "Standard Quality Assurance", val: "Continuous Safety Inspections" },
                { title: "Certifications Managed", val: "ISO 9001, AS9100, ISO 14001, OHS" },
                { title: "Client Approval Rate", val: "100% On-Time System Validation" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-0 border-b border-slate-800 pb-2.5 sm:pb-3">
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono">{stat.title}</span>
                  <span className="text-xs sm:text-xs text-white font-sans font-bold">{stat.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 p-3 rounded-xl bg-green-900/30 border border-green-800/50 text-[10px] sm:text-[11px] leading-relaxed text-green-200">
              <strong>Pre-compliance note:</strong> Our templates conform to global aircraft hangar checklists, guaranteeing zero compliance gaps.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
