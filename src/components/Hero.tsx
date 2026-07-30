/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, GraduationCap, ChevronRight, CheckCircle } from "lucide-react";
import heroBanner from "../assets/images/aviation_hero_banner_1782052783947.jpg";
import logoImg from "../assets/images/logo.jpg";

interface HeroProps {
  onOpenCounselling: () => void;
}

export default function Hero({ onOpenCounselling }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-16 lg:py-28 text-white">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={heroBanner}
          alt="XAM Consultancy Aerospace ISO Support"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-50 contrast-125 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      {/* Decorative colored grid backdrop */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left main text column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-4 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/50 rounded-full pl-2 pr-3.5 py-1 text-[11px] sm:text-xs text-blue-300 font-mono tracking-wider sm:tracking-widest uppercase max-w-full truncate">
            <img src={logoImg} alt="XAMS Emblem" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-blue-400 object-cover shrink-0" />
            <span className="truncate">Accurate Guidance &amp; ISO Mastery</span>
          </div>

          <h1 id="hero-tagline" className="text-2xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.25]">
            Elite Career Guidance &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">ISO Standards</span> Consultancy
          </h1>

          <p id="hero-description" className="text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl font-sans font-light">
            Career Counselling is a process that will help you to know and understand yourself and the world of work in order to make career, educational, and life decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              id="cta-counselling-btn"
              onClick={onOpenCounselling}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 active:scale-[0.98] text-white font-sans font-semibold px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-900/35 transition-all cursor-pointer text-sm sm:text-base text-center"
            >
              <GraduationCap className="h-5 w-5 shrink-0" />
              <span>Register For Career Counselling</span>
              <ChevronRight className="h-4 w-4 shrink-0 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="cta-learn-more"
              href="#services-section"
              className="flex items-center justify-center text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-300 transition-colors py-3 sm:py-3.5 px-5 sm:px-6 border border-slate-700 rounded-xl bg-slate-900/40 hover:bg-slate-950/60 text-center"
            >
              Explore ISO Services
            </a>
          </div>

          {/* Verification labels */}
          <div className="pt-4 sm:pt-6 grid grid-cols-2 gap-3 sm:gap-4 border-t border-slate-800/80">
            <div>
              <span className="block text-lg sm:text-2xl font-extrabold text-blue-400">100%</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-wider block">Confidential counselling</span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-extrabold text-blue-400">Audit-Ready</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-wider block">ISO Compliance guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* Right graphical preview / teaser card column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-5 sm:p-8 shadow-2xl backdrop-blur-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-base sm:text-lg font-sans font-bold text-slate-200 border-b border-slate-800 pb-2.5 mb-3.5">
              Our Operational Framework
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  step: "01",
                  title: "Self Exploration & Assessment",
                  desc: "We align your strengths with national & global market standards."
                },
                {
                  step: "02",
                  title: "Strategic Action Plan",
                  desc: "Defining actionable paths across aviation, engineering or management."
                },
                {
                  step: "03",
                  title: "Professional Onboarding",
                  desc: "Connect directly with leading defense and corporate organizations."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 text-xs font-mono font-bold mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-sans font-bold text-slate-100">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust prompt */}
            <div className="mt-5 sm:mt-6 p-3 rounded-lg bg-blue-950/40 border border-blue-900/30 flex items-center gap-2.5 sm:gap-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400 shrink-0" />
              <p className="text-[10px] sm:text-[11px] text-slate-300 leading-relaxed">
                ISO consultancy, Compliance auditing, and Airworthiness audits led by certified former Air Force technical officers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
