/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import logoImg from "../assets/images/logo.jpg";
import { Mail, PhoneCall, Facebook, Instagram, Linkedin, MessageCircle, Send, ShieldAlert, ArrowUp } from "lucide-react";

export default function Footer() {
  const email = "xamconsultancy@gmail.com";
  const phone = "+923200551376";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/people/XAM-Consultancy/100071605470266/#", color: "hover:bg-green-600 hover:text-white" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/xamconsultancy/", color: "hover:bg-pink-600 hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/xamsconsultancy/", color: "hover:bg-green-700 hover:text-white" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/923200551376", color: "hover:bg-emerald-500 hover:text-white" },
    { name: "Telegram", icon: Send, url: "https://t.me/xamconsultancy", color: "hover:bg-green-500 hover:text-white" }
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Our Services", href: "#services-section" },
    { label: "Mission & Vision", href: "#where-we-come-from" },
    { label: "Professional Team", href: "#team-section" },
    { label: "Company Profile", href: "#about-us" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 font-sans border-t border-slate-900 select-none">
      {/* Scroll to Top Circle Shortcut */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <button
          id="scroll-to-top-btn"
          onClick={handleScrollToTop}
          className="flex items-center justify-center h-10 w-10 bg-green-700 hover:bg-green-800 text-white rounded-full transition shadow-lg border border-green-600 cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 border-b border-slate-800/80 pb-8 sm:pb-12 mb-8 sm:mb-10">
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-slate-700 bg-white shrink-0">
                <img src={logoImg} alt="XAMS Consultancy Official Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm sm:text-base font-extrabold text-white tracking-wider">
                XAMS CONSULTANCY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              An Airworthiness Management &amp; QA/Compliance consultancy providing high-reliability organizational alignment and certification preparation for the aerospace and manufacturing sectors.
            </p>
            {/* Social Icons list with touch-friendly 36px/40px buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    id={`footer-social-${social.name.toLowerCase()}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-9 w-9 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Nav
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-green-400 transition duration-200 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates list */}
          <div className="md:col-span-4 space-y-3 sm:space-y-4 select-text">
            <h4 className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider font-mono">
              Office Contacts
            </h4>
            <div className="space-y-2.5 p-3.5 sm:px-3 sm:py-1 bg-slate-900/40 border border-slate-900 rounded-xl sm:rounded-2xl select-text">
              <a
                id="footer-phone"
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-white transition py-0.5"
              >
                <PhoneCall className="h-4 w-4 text-green-500 shrink-0" />
                <span>{phone}</span>
              </a>
              <div className="border-t border-slate-800/80 my-1.5 sm:my-2" />
              <a
                id="footer-email"
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-white transition py-0.5"
              >
                <Mail className="h-4 w-4 text-green-500 shrink-0" />
                <span className="font-semibold break-all text-[11px] sm:text-xs">{email}</span>
              </a>
              <div className="flex items-start gap-3 text-[11px] sm:text-xs text-slate-400 pt-1">
                <ShieldAlert className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Admin &amp; regional offices in Islamabad (Abu Dhabi Towers, F-11/1), Karachi (Room No 217, DHA Suffa University), Rawalpindi, and Abbottabad, Pakistan.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright brand strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500 font-mono tracking-wide text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} XAMS Consultancy. All rights reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="hover:underline hover:text-slate-400">Terms of Quality</a>
            <span>&middot;</span>
            <a href="#" className="hover:underline hover:text-slate-400">Confidentiality Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
