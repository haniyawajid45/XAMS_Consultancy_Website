/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, CheckCircle2, History, Landmark, MapPin, Globe, Compass, Cpu, AlertTriangle, EyeOff } from "lucide-react";
import auditImage from "../assets/images/quality_assurance_audit_1782052805284.jpg";

export default function AboutCompany() {
  const valuePropositions = [
    {
      title: "Our explicit attention to Safety and Quality",
      desc: "We maintain ultra-rigorous vigilance over standard checkpoints, leaving no room for operational errors or systemic compliance failure."
    },
    {
      title: "Our integrity and pride of work",
      desc: "This drives us to provide the professional service that we are proud of, maintaining complete transparency and defense-grade professional ethics."
    },
    {
      title: "Our experience, knowledge and extensive training",
      desc: "Ensures you receive effective, up-to-date solutions for your organization from globally-focused certified audit directors."
    },
    {
      title: "Our dedication to quality",
      desc: "Active support frameworks and continuous oversight to ensure your quality systems always operate with peak efficiency."
    }
  ];

  return (
    <div className="bg-white">
      {/* What We Can Do For You Section */}
      <section id="what-we-do" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image and Core QA Framework Focus boxes */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="relative group">
              {/* Blueprint styling frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-green-600 to-green-800 rounded-3xl opacity-10 filter blur-xl group-hover:opacity-15 transition pointer-events-none" />
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/80 aspect-[16/10] sm:aspect-[4/3] bg-slate-900">
                <img
                  src={auditImage}
                  alt="Aviation ISO System Audit Setup Pakistan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Technical readout Overlay on Image hover */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-900/90 text-green-400 text-[9px] sm:text-[10px] font-mono py-1 px-2 sm:px-2.5 rounded border border-slate-800">
                  ISO SEC-145 // ACTIVE AUDIT
                </div>
              </div>
            </div>

            {/* Core Companion Concepts Box for Quality Assurance branding */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-4 sm:p-6 border border-slate-850 shadow-md space-y-3 sm:space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-green-400 font-semibold block">
                Standard Frameworks
              </span>
              <h3 className="text-sm sm:text-base font-sans font-bold text-white tracking-tight border-b border-slate-800 pb-2">
                Operational QA Foundations
              </h3>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { title: "Quality Assurance", desc: "Systematic auditing and procedural excellence" },
                  { title: "PDCA Plan Do Check Act", desc: "Business Action Strategy Goal Success concept" },
                  { title: "Contract Compliance Audits", desc: "Rigorous alignment of supply chain partnerships" },
                  { title: "Quality Assurance Organizational Hierarchy", desc: "Certified responsibility matrices on corporate scales" }
                ].map((concept, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs text-slate-300">
                    <div className="h-5 w-5 rounded-full bg-green-900/50 border border-green-500/30 text-green-400 flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                      {idx + 1}
                    </div>
                    <div>
                      <strong className="text-white block font-sans text-xs">{concept.title}</strong>
                      <span className="text-[10px] text-slate-400 font-sans block">{concept.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bullet Services Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block">
              Integrated Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
              What We Can Do For You
            </h2>
            <p className="text-slate-500 text-xs sm:text-base leading-relaxed font-sans font-light">
              We translate modern civil aviation ordinances and technical safety instructions into simplified daily management patterns, ensuring your workforce is ready for both regular checks and spontaneous customer quality walkthroughs.
            </p>

            <div id="what-we-do-list" className="space-y-3 sm:space-y-3.5 pt-2 sm:pt-4">
              {[
                {
                  title: "Systems, Procedures & Hierarchy Setup",
                  desc: "Develop the organization systems, procedures and hierarchy including but not limited to the induction of aircraft to the conducting of mid-lease inspections and aircraft lease return(s)."
                },
                {
                  title: "Technical Approval & Quality Documentation",
                  desc: "Develop all the documentation required to initially obtain approval(s), and/or manage and amend the current documentation to continually assure your organizations regulatory compliance such as the Maintenance Control Manuals (MCM), Maintenance Policy Manuals (MPM), Maintenance Organization Exposition (MOE), Maintenance Schedule Approvals and Quality Assurance programs."
                },
                {
                  title: "Continuous Airworthiness Activities Management",
                  desc: "Manage and perform all continuous airworthiness activities as per the national regulatory body’s requirements."
                },
                {
                  title: "Quality Management & CAP Performance",
                  desc: "Perform all aspects of your organizations Quality Management program including, development of the audit program, performance of internal or third party audits and Corrective Action Plan (CAP) development."
                },
                {
                  title: "Comprehensive Compliance Audits",
                  desc: "Prepare comprehensive compliance audits of an Air Operator’s aircraft maintenance control or a maintenance organization’s internal quality/compliance management and tracking programs to ensure all OEM and regulatory requirements are appropriately incorporated."
                }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-3.5 items-start p-3.5 sm:p-4 bg-white border border-slate-100 rounded-xl sm:rounded-2xl hover:border-green-400 hover:shadow-sm transition-all duration-300">
                  <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-sans font-bold text-slate-900">{service.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 sm:mt-1.5 leading-relaxed font-sans">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Where We Come From Section */}
      <section id="where-we-come-from" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute bottom-[-50px] right-[-50px] text-slate-800 opacity-20 pointer-events-none select-none">
              <Landmark className="h-36 w-36 sm:h-48 sm:w-48" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-green-400 bg-green-900/40 border border-green-700/50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block">
                  Defense-Grade Heritage
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold tracking-tight">
                  Where We Come From
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  XAMS Consultancy was founded by elite systems practitioners to bring aerospace military vigilance and high-rigor airworthiness protocols to the private commercial and manufacturing sectors.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div id="origin-team-background" className="grid grid-cols-1 gap-2.5 sm:gap-3.5">
                  {[
                    "Former Pakistan Air Force Quality/Safety Auditors and professional policy makers.",
                    "Commercial Aircraft Maintenance Engineers (AME’s) with experience in fixed wing aircraft maintenance.",
                    "Aviation Quality Assurance professionals, with experience in compliance monitoring, safety management systems and risk management.",
                    "Airworthiness Management Professionals with experience in the development and management of continuous airworthiness activities.",
                    "Approved Maintenance Organizations (AMO’s) with experience with large and small propeller and jet powered, fixed and rotary wing aircraft including commuter aircraft."
                  ].map((origin, idx) => (
                    <div key={idx} className="p-3 sm:p-3.5 bg-slate-950 rounded-xl sm:rounded-2xl border border-slate-800/80 flex gap-3 items-start h-full">
                      <History className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{origin}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Work With Us Section */}
      <section id="why-us" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block mb-3">
              Competitive Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
              Why Work With Us
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-500 text-xs sm:text-base leading-relaxed font-sans font-light">
              We bridge the gap between abstract compliance checklists and real dynamic workplace alignment, providing clear and verifiable value.
            </p>
          </div>

          {/* Values Grid */}
          <div id="why-us-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {valuePropositions.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-xl bg-green-50 text-green-700 font-sans font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                  {`0${idx + 1}`}
                </div>
                <h4 className="text-sm sm:text-base font-sans font-bold text-slate-900 tracking-tight mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Where We Are Section */}
      <section id="where-we-are" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Context */}
            <div className="lg:col-span-4 space-y-2 sm:space-y-4">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block">
                Locations
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
                Where We Are
              </h2>
            </div>

            {/* Pakistan Location Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" id="locations-cards">
              {/* Islamabad hub */}
              <div className="bg-slate-50 border border-slate-100 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-green-600 transition duration-300">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 bg-white text-green-700 rounded-xl shadow-sm">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-[10px] font-mono bg-green-50 text-green-800 py-0.5 px-2 rounded-full font-bold">
                    ISLAMABAD
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 mb-1.5 sm:mb-2">Islamabad Office</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Abu Dhabi Towers, F-11/1, Islamabad, Pakistan.
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-500 flex flex-col gap-0.5 sm:gap-1">
                  <span>HOTLINE: +923200551376</span>
                  <span className="text-[10px]">EMAIL: xamconsultancy@gmail.com</span>
                </div>
              </div>

              {/* Karachi hub */}
              <div className="bg-slate-50 border border-slate-100 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-green-600 transition duration-300">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 bg-white text-green-700 rounded-xl shadow-sm">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 py-0.5 px-2 rounded-full font-bold">
                    KARACHI
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 mb-1.5 sm:mb-2">Karachi Office</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Room No 217, DHA Suffa University, Karachi, Pakistan.
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-500 flex flex-col gap-0.5 sm:gap-1">
                  <span>HOTLINE: +923200551376</span>
                  <span className="text-[10px]">EMAIL: xamconsultancy@gmail.com</span>
                </div>
              </div>

              {/* Rawalpindi hub */}
              <div className="bg-slate-50 border border-slate-100 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-green-600 transition duration-300">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 bg-white text-green-700 rounded-xl shadow-sm">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-[10px] font-mono bg-green-50 text-green-800 py-0.5 px-2 rounded-full font-bold">
                    RAWALPINDI
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 mb-1.5 sm:mb-2">Rawalpindi Office</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Rawalpindi, Pakistan.
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-500 flex flex-col gap-0.5 sm:gap-1">
                  <span>HOTLINE: +923200551376</span>
                  <span className="text-[10px]">EMAIL: xamconsultancy@gmail.com</span>
                </div>
              </div>

              {/* Abbottabad hub */}
              <div className="bg-slate-50 border border-slate-100 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-green-600 transition duration-300">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 bg-white text-green-700 rounded-xl shadow-sm">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-[10px] font-mono bg-green-50 text-green-800 py-0.5 px-2 rounded-full font-bold">
                    ABBOTTABAD
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 mb-1.5 sm:mb-2">Abbottabad Office</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Abbottabad, Pakistan.
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-500 flex flex-col gap-0.5 sm:gap-1">
                  <span>HOTLINE: +923200551376</span>
                  <span className="text-[10px]">EMAIL: xamconsultancy@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
