/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/logo.jpg";
import {
  Mail,
  PhoneCall,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Globe,
  Menu,
  X,
  Home,
  Briefcase,
  Target,
  Users,
  UserPlus,
  Building,
  MapPin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactEmail = "xamsconsultancy@gmail.com";
  const contactPhone = "+923200551376";

  // Lock background scroll when mobile menu drawer is expanded
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Social URLs or action handlers
  const socials = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/people/XAM-Consultancy/100071605470266/#", color: "hover:text-green-600" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/xamconsultancy/", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/xamsconsultancy/", color: "hover:text-green-700" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/923200551376", color: "hover:text-emerald-500" },
    { name: "Telegram", icon: Send, url: "https://t.me/xamconsultancy", color: "hover:text-green-500" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Auxiliary Bar for Corporate Aesthetics */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-1.5 sm:gap-2">
          {/* Quick Contacts */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-center sm:text-left text-[11px] sm:text-xs">
            <a
              id="topbar-email"
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-green-400 shrink-0" />
              <span className="font-semibold break-all">{contactEmail}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              id="topbar-phone"
              href={`tel:${contactPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold"
            >
              <PhoneCall className="h-3.5 w-3.5 text-green-400 shrink-0" />
              <span>{contactPhone}</span>
            </a>
          </div>

          {/* Socials & Locations */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 border-r border-slate-700 pr-4 mr-1">
              <Globe className="h-3 w-3 text-green-400 animate-pulse shrink-0" />
              <span>Islamabad, Karachi, Rawalpindi &amp; Abbottabad</span>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    id={`social-${social.name.toLowerCase()}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`text-slate-400 transition-colors duration-200 ${social.color}`}
                    title={social.name}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Menu */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-4 px-3 sm:px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand Logo with Official Emblem */}
          <a id="brand-logo" href="#" className="flex items-center gap-2.5 sm:gap-3 group max-w-[75%] sm:max-w-none">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm border border-slate-200 bg-white shrink-0 group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="XAMS Consultancy Official Logo" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <span className="block text-base sm:text-lg font-sans font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors truncate">
                XAMS CONSULTANCY
              </span>
              <span className="block text-[9px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider sm:tracking-widest mt-0.5 truncate">
                Excellence Through Quality, Integrity Through Compliance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-6 sm:gap-8">
            <a
              id="nav-link-home"
              href="#"
              className="text-sm font-sans font-semibold text-slate-700 hover:text-green-700 transition-colors tracking-wide"
            >
              Home
            </a>

            <a
              id="nav-link-join-us"
              href="#join-us"
              className="text-sm font-sans font-semibold text-green-700 hover:text-green-900 transition-colors tracking-wide flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full border border-green-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span>Join Us</span>
            </a>
            
            {/* Direct CTA shortcut for high converting navigation */}
            <a
              id="nav-cta-register"
              href="https://forms.gle/5xWW6aTLYh6p7kSN6"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center bg-green-700 text-white rounded-lg hover:bg-green-800 font-sans font-semibold text-xs px-3.5 py-1.5 transition-all shadow-sm"
            >
              Consultation Portal
            </a>
          </nav>

          {/* Mobile Navigation Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-slate-900" />
            ) : (
              <Menu className="h-5 w-5 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-slate-200 bg-white shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-1">
                Navigation Menu
              </div>
              
              <nav className="flex flex-col space-y-1">
                <a
                  id="mobile-nav-home"
                  href="#"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-green-50 hover:text-green-700 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Home className="h-4 w-4 text-green-600" />
                    <span>Home</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  id="mobile-nav-services"
                  href="#services-section"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-green-50 hover:text-green-700 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-green-600" />
                    <span>Services Matrix</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  id="mobile-nav-mission"
                  href="#where-we-come-from"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-green-50 hover:text-green-700 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-green-600" />
                    <span>Mission &amp; Vision</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  id="mobile-nav-team"
                  href="#team-section"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-green-50 hover:text-green-700 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-green-600" />
                    <span>Professional Team</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  id="mobile-nav-join-us"
                  href="#join-us"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-green-700 bg-green-50/80 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <UserPlus className="h-4 w-4 text-green-600" />
                    <span>Join Us / Careers</span>
                  </div>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                  </span>
                </a>

                <a
                  id="mobile-nav-about"
                  href="#about-us"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-green-50 hover:text-green-700 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Building className="h-4 w-4 text-green-600" />
                    <span>Who We Are</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  id="mobile-nav-locations"
                  href="#where-we-are"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-green-50 hover:text-green-700 font-sans font-semibold text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span>Our Locations</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
              </nav>

              {/* Consultation Portal CTA Button */}
              <div className="pt-2">
                <a
                  id="mobile-nav-cta-register"
                  href="https://forms.gle/5xWW6aTLYh6p7kSN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white rounded-xl font-sans font-bold text-sm py-3.5 px-4 shadow-md transition-all"
                >
                  <span>Consultation Portal</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Quick Contact & Social Shortcuts */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-1">
                  Direct Contacts
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${contactPhone}`}
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-slate-100 rounded-xl text-slate-800 font-semibold active:bg-slate-200 transition-colors"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span className="truncate">{contactPhone}</span>
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-slate-100 rounded-xl text-slate-800 font-semibold active:bg-slate-200 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span className="truncate">Email Us</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                        title={social.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

