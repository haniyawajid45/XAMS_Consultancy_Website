/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Mail, PhoneCall, Linkedin, ShieldCheck, Award, Briefcase, GraduationCap } from "lucide-react";
import { TeamMember } from "../types";
import zameerImg from "../assets/images/zameer.jfif";
import iftikharImg from "../assets/images/iftikar.jfif";
import xainImg from "../assets/images/xain.jfif";
import raziImg from "../assets/images/razi.jpg";

export default function Team() {
  const [activeTab, setActiveTab] = useState<{ [key: string]: "credentials" | "experience" | "contact" }>({
    "ceo-zameer": "credentials",
    "psych-razi": "credentials",
    "ops-iftikhar": "credentials",
    "it-xain": "credentials",
  });

  const toggleTab = (memberId: string, tab: "credentials" | "experience" | "contact") => {
    setActiveTab((prev) => ({ ...prev, [memberId]: tab }));
  };

  const team: (TeamMember & { subtitle?: string })[] = [
    {
      id: "ceo-zameer",
      name: "Assc. Prof. Dr. Zameer Ul Hassan",
      title: "CEO & Lead Auditor",
      image: zameerImg,
      credentials: [
        "ISO 9001:2015 Certified Lead Auditor",
        "Qualified Human Resource Specialist",
        "Qualified Leadership and Management Specialist",
        "PhD in Entrepreneurship Management",
        "30 Years of elite services at Pakistan Air Force (PAF)"
      ],
      experience: "With three decades of distinguished operations and quality management in the Pakistan Air Force (PAF), Dr. Zameer Ul Hassan is a globally-focused systems auditor who specializes in human resource deployment, entrepreneurship design, and advanced certified standards.",
      phone: "+92 333 5151710",
      email: "xameerulhasan@xamconsultancy.com",
      secondaryEmail: "xameerulhasan@gmail.com",
      linkedin: "https://linkedin.com/in/zameer-ul-hassan-6bb304aa",
    },
    {
      id: "psych-razi",
      name: "Prof. Dr. Razi Sultan Siddiqui",
      title: "Associate Dean – Faculty of Humanities & Social Sciences",
      subtitle: "Head of Department – Psychology | Director Student Counselling & Development",
      image: raziImg,
      credentials: [
        "PhD in Psychology & Postdoctoral Fellowship in Clinical Psychology",
        "MS in Management Sciences & MBA in HRM & Marketing",
        "HEC Recognized Supervisor",
        "Experienced Educator, Researcher & Clinical Psychologist",
        "Over 20 Years of University Teaching & Counselling Experience"
      ],
      experience: "Prof. Dr. Razi Sultan Siddiqui serves as Associate Dean (Faculty of Humanities & Social Sciences), Head of Department of Psychology, and Director of Student Counselling & Development at DHA Suffa University. With over 20 years of higher education experience, he specializes in psychological assessments, student career direction, and clinical development. Former visiting faculty at IoBM, SZABIST, and NUML.",
      phone: "0300-2778854",
      email: "razi@dsu.edu.pk",
      secondaryEmail: "razi_sultan@yahoo.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: "ops-iftikhar",
      name: "Iftikhar Jawed",
      title: "Director Operations",
      image: iftikharImg,
      credentials: [
        "Experienced Quality Assurance Manager / Auditor in Aviation Engineering Services",
        "Licensed Aircraft Maintenance Engineer",
        "10 Years of advanced Aviation Industry experience",
        "Expert in Approved Maintenance Organisation (AMO) setups"
      ],
      experience: "Iftikhar leads technical operations with hands-on command over civil aviation frameworks, airworthiness compliance audits, heavy mechanical installations, and standardized aircraft safety setups.",
      phone: "+92 334 3826584",
      email: "iftikharjavaid@xamconsultancy.com",
      linkedin: "https://linkedin.com/in/iftikharjawed",
    },
    {
      id: "it-xain",
      name: "Xain Ul Hassan",
      title: "Director IT",
      image: xainImg,
      credentials: [
        "Qualified Cyber Security Professional",
        "Qualified SEO Operator",
        "Certified Autopsy Operator",
        "2 Years of professional IT systems management"
      ],
      experience: "Xain maintains modern, secure document repositories, handles corporate cyber security defenses, implements high-converting tech workflows, and ensures all consulting materials match elite standards.",
      phone: "+92 333 9504410",
      email: "xainulhassan@xamconsultancy.com",
      secondaryEmail: "xainulhassan98@gmail.com",
      linkedin: "https://linkedin.com/in/xain-ul-hassan-62b25a177",
    },
  ];

  return (
    <section id="team-section" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 sm:px-3.5 py-1.5 rounded-full inline-block mb-3">
            Who Leads Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Our Professional Team
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-500 text-xs sm:text-base leading-relaxed font-sans font-light">
            Our leadership draws upon over fifty combined years of academic excellence, psychological guidance, aviation airworthiness training, and international corporate oversight.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {team.map((member) => {
            const currentTab = activeTab[member.id] || "credentials";
            return (
              <div
                key={member.id}
                id={`team-member-${member.id}`}
                className="group relative flex flex-col justify-between overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Photo and identity block */}
                <div className="flex gap-3 sm:gap-4 items-start mb-4 sm:mb-6">
                  <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-700 to-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-color" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-lg font-sans font-extrabold text-slate-900 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-blue-700 uppercase mt-0.5 sm:mt-1">
                      {member.title}
                    </p>
                    {member.subtitle && (
                      <p className="text-[10px] sm:text-[11px] font-sans font-medium text-slate-500 mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                        {member.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tab buttons to switch content */}
                <div className="grid grid-cols-3 bg-slate-200/50 p-1 rounded-xl mb-3 sm:mb-4 text-[11px] sm:text-xs font-sans font-bold text-slate-600 border border-slate-200">
                  <button
                    id={`tab-${member.id}-credentials`}
                    onClick={() => toggleTab(member.id, "credentials")}
                    className={`py-1.5 sm:py-2 px-1 rounded-lg text-center cursor-pointer transition-colors ${
                      currentTab === "credentials" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800"
                    }`}
                  >
                    Credentials
                  </button>
                  <button
                    id={`tab-${member.id}-experience`}
                    onClick={() => toggleTab(member.id, "experience")}
                    className={`py-1.5 sm:py-2 px-1 rounded-lg text-center cursor-pointer transition-colors ${
                      currentTab === "experience" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800"
                    }`}
                  >
                    Experience
                  </button>
                  <button
                    id={`tab-${member.id}-contact`}
                    onClick={() => toggleTab(member.id, "contact")}
                    className={`py-1.5 sm:py-2 px-1 rounded-lg text-center cursor-pointer transition-colors ${
                      currentTab === "contact" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-800"
                    }`}
                  >
                    Direct Contact
                  </button>
                </div>

                {/* Tab content area */}
                <div className="grow bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-inner select-text">
                  {currentTab === "credentials" && (
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="text-[10px] sm:text-xs font-mono text-slate-400 font-extrabold flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-blue-600" />
                        KEY CREDENTIALS
                      </h4>
                      <ul id={`credentials-${member.id}`} className="space-y-2">
                        {member.credentials.map((cred, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-slate-600 leading-relaxed items-start">
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentTab === "experience" && (
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="text-[10px] sm:text-xs font-mono text-slate-400 font-extrabold flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5 text-blue-600" />
                        BIOGRAPHY &amp; EXPERIENCE
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-light">
                        {member.experience}
                      </p>
                    </div>
                  )}

                  {currentTab === "contact" && (
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-[10px] sm:text-xs font-mono text-slate-400 font-extrabold flex items-center gap-1">
                        <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
                        SECURE CONTACT PATH
                      </h4>
                      <div className="space-y-2.5 sm:space-y-3">
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 hover:text-blue-700 transition"
                        >
                          <PhoneCall className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span>{member.phone}</span>
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 hover:text-blue-700 transition"
                        >
                          <Mail className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span className="break-all">{member.email}</span>
                        </a>
                        {member.secondaryEmail && (
                          <a
                            href={`mailto:${member.secondaryEmail}`}
                            className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-500 hover:text-blue-700 transition pl-6 sm:pl-7"
                          >
                            <span className="break-all text-[10px] sm:text-[11px] font-mono">{member.secondaryEmail}</span>
                          </a>
                        )}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 hover:text-blue-700 transition"
                        >
                          <Linkedin className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span>View LinkedIn Profile</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Pool of Auditors callout */}
        <div className="mt-8 sm:mt-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 shadow-sm text-slate-700 text-xs sm:text-sm font-sans font-medium">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />
            <p className="text-center sm:text-left">
              Additionally, we have a pool of specific ISO Standard qualified auditors around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
