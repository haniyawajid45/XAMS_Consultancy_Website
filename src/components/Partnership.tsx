/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Lock, Coins, ArrowRight, ShieldCheck, Check } from "lucide-react";

interface PartnershipProps {
  onOpenQAProfessional: () => void;
  onOpenCareerCounsellingProfessional: () => void;
}

export default function Partnership({ onOpenQAProfessional, onOpenCareerCounsellingProfessional }: PartnershipProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
      {/* Visual blueprint background grid */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl ring-1 ring-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left pitch description */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-900/40 to-green-900/40 border border-green-700/40 rounded-full px-3.5 sm:px-4.5 py-1 text-[11px] sm:text-xs text-green-400 font-mono tracking-wider uppercase">
                <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse shrink-0" />
                <span>Auditor &amp; QA Network Expansion</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold tracking-tight">
                Be Our Partners
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-sans font-light">
                ISO standards auditors and QA professionals are welcome to become our business partners. Bring business to our platform and share our profits.
              </p>

              {/* Commission bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div id="referral-terms" className="flex items-start gap-3 bg-slate-950/60 border border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                  <Coins className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-sans">2% Contract Share</h4>
                    <p className="text-xs text-slate-300 mt-0.5 sm:mt-1 leading-relaxed">
                      Earn 2% of contractual value on bringing business to us. Increase your share by actively participating in our activities.
                    </p>
                  </div>
                </div>

                <div id="active-auditor-terms" className="flex items-start gap-3 bg-slate-950/60 border border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                  <Coins className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-sans">10% Professional Share</h4>
                    <p className="text-xs text-slate-300 mt-0.5 sm:mt-1 leading-relaxed">
                      We share 10% of contractual value to Lead Auditors and QA professionals who will work with us. Earnings may vary according to active participation level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security lock notice */}
              <div className="flex gap-2.5 items-start text-xs text-slate-300 bg-slate-950/40 border border-slate-900 p-3.5 sm:p-4 rounded-xl leading-relaxed">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 shrink-0 mt-0.5" />
                <p className="text-[11px] sm:text-xs">
                  Share your intentions by clicking the link below. Your professional details are sacred to us and are kept confidential. We keep you in our pool of select professionals for sharing our profit by working hand-in-hand in specialized industries
                </p>
              </div>
            </div>

            {/* Right graphic visual + CTA button */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-700 to-green-900 p-5 sm:p-8 text-center text-white shadow-xl">
                {/* Decorative circle glow */}
                <div className="absolute inset-0 bg-white/5 rounded-xl sm:rounded-2xl filter blur-3xl pointer-events-none" />

                <h3 className="text-lg sm:text-xl font-sans font-black tracking-wide uppercase mb-1.5 sm:mb-2">
                  Ready to Collaborate?
                </h3>
                <p className="text-xs text-green-100 leading-relaxed mb-4 sm:mb-6 font-sans font-light">
                  Align your expert qualifications with our prestige project portfolio and multiply your consulting outreach.
                </p>

                {/* Qualification Check-list */}
                <div className="text-left space-y-2 mb-6 sm:mb-8 bg-black/25 p-3.5 sm:p-4 rounded-xl">
                  {[
                    "ISO 9001, AS9100 or IRCA Lead",
                    "Aero Technical or AME Background",
                    "Commitment to Safety Standards"
                  ].map((check, i) => (
                    <div key={i} className="flex gap-2 items-center text-xs text-green-200">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/30 text-green-300 text-[10px] shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="truncate">{check}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-5 grid gap-3">
                  <button
                    id="join-qa-professional-btn"
                    onClick={onOpenQAProfessional}
                    className="group w-full flex items-center justify-center gap-2 bg-white text-green-900 hover:bg-green-50 active:scale-[0.98] font-sans font-extrabold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-wider text-xs sm:text-sm"
                  >
                    <span>Join us as QA Professional</span>
                    <ArrowRight className="h-4 w-4 text-green-900 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id="join-career-counselling-professional-btn"
                    onClick={onOpenCareerCounsellingProfessional}
                    className="group w-full flex items-center justify-center gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20 active:scale-[0.98] font-sans font-extrabold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-wider text-xs sm:text-sm"
                  >
                    <span>Join us as Career Counselling Professional</span>
                    <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
