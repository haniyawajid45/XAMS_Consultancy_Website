/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Mail, Phone, Briefcase, Award, User, GraduationCap, Send } from "lucide-react";
import { RegistrationInput, PartnerRegistrationInput } from "../types";
import logoImg from "../assets/images/logo.jpg";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "counselling" | "partner";
}

export default function RegistrationModal({ isOpen, onClose, type }: RegistrationModalProps) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // States for Career Counselling form
  const [counsellingForm, setCounsellingForm] = useState<RegistrationInput>({
    fullName: "",
    email: "",
    phone: "",
    interest: "Career Counselling",
    educationBackground: "",
    message: "",
  });

  // States for Partner form
  const [partnerForm, setPartnerForm] = useState<PartnerRegistrationInput>({
    fullName: "",
    email: "",
    phone: "",
    expertArea: "",
    yearsOfExperience: 5,
    certifications: "",
    message: "",
  });

  const handleCounsellingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real server side submit and save in local storage as mock history
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("xam_registrations") || "[]");
      localStorage.setItem("xam_registrations", JSON.stringify([...existing, { ...counsellingForm, date: new Date().toISOString() }]));
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  const handlePartnerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real server side submit
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("xam_partners") || "[]");
      localStorage.setItem("xam_partners", JSON.stringify([...existing, { ...partnerForm, date: new Date().toISOString() }]));
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  const resetForm = () => {
    setSuccess(false);
    setCounsellingForm({
      fullName: "",
      email: "",
      phone: "",
      interest: "Career Counselling",
      educationBackground: "",
      message: "",
    });
    setPartnerForm({
      fullName: "",
      email: "",
      phone: "",
      expertArea: "",
      yearsOfExperience: 5,
      certifications: "",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
          >
            {/* Header decor band */}
            <div className="h-2 bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-800 sticky top-0 z-20" />

            <button
              id="close-modal-btn"
              onClick={resetForm}
              className="absolute top-3.5 right-3.5 z-30 text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-5 sm:p-8">
              {!success ? (
                <>
                  <div className="mb-5 sm:mb-6 flex items-start gap-3 pr-6">
                    <img src={logoImg} alt="XAMS Logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 object-cover shadow-sm shrink-0 mt-0.5" />
                    <div>
                      <h2 id="modal-title" className="text-lg sm:text-xl font-sans font-bold tracking-tight text-slate-900 leading-snug">
                        {type === "counselling"
                          ? "Consultation Portal"
                          : "Join as an ISO Auditor / Partner"}
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {type === "counselling"
                          ? "Our registration and career counselling intake form is now hosted externally on Google Forms."
                          : "Collaborate with XAMS Consultancy. We offer generous profit-sharing (up to 10%) and confidential handling."}
                      </p>
                    </div>
                  </div>

                  {type === "counselling" ? (
                    <div className="space-y-4 sm:space-y-6 pt-2">
                      <div className="p-3.5 sm:p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-xs text-blue-800 leading-relaxed">
                          To offer you a more secure, streamlined process for scheduling career counselling and organizing professional assessments, we've transitioned to Google Forms. 
                        </p>
                      </div>
                      
                      <a
                        href="https://forms.gle/5xWW6aTLYh6p7kSN6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:scale-[0.98] text-white font-sans font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer shadow-md text-sm"
                        onClick={resetForm}
                      >
                        <Send className="h-4 w-4 shrink-0" />
                        <span>Open Consultation Form</span>
                      </a>
                    </div>
                  ) : (
                    <form id="partner-form" onSubmit={handlePartnerSubmit} className="space-y-3.5 sm:space-y-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={partnerForm.fullName}
                            onChange={(e) => setPartnerForm({ ...partnerForm, fullName: e.target.value })}
                            placeholder="e.g. Wing Commander (R) Tariq"
                            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                            <input
                              type="email"
                              required
                              value={partnerForm.email}
                              onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                              placeholder="tariq@example.com"
                              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                            <input
                              type="tel"
                              required
                              value={partnerForm.phone}
                              onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                              placeholder="+92 321 9876543"
                              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                            Expertise Specialty
                          </label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={partnerForm.expertArea}
                              onChange={(e) => setPartnerForm({ ...partnerForm, expertArea: e.target.value })}
                              placeholder="e.g. ISO 9001, AS9100, EASA Part 145"
                              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                            Audit Experience (Years)
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={40}
                            required
                            value={partnerForm.yearsOfExperience}
                            onChange={(e) => setPartnerForm({ ...partnerForm, yearsOfExperience: parseInt(e.target.value) || 5 })}
                            className="w-full px-3 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                          Auditor Certifications / Accreditations
                        </label>
                        <div className="relative">
                          <Award className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={partnerForm.certifications}
                            onChange={(e) => setPartnerForm({ ...partnerForm, certifications: e.target.value })}
                            placeholder="e.g. IRCA ISO 9001 Lead Auditor, CAA Pakistan approval"
                            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                          Additional background (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={partnerForm.message}
                          onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                          placeholder="List any past AMO or aviation military squadron training..."
                          className="w-full p-3 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-amber-900 text-[10px] sm:text-[11px] leading-relaxed">
                        <strong>Confidentiality Guarantee:</strong> All partner applications are handled with strict discretion. Information regarding qualifications, references, and existing compliance activities is kept entirely confidential within XAMS Consultancy administration.
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-sans font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer shadow-md disabled:bg-slate-700 text-xs sm:text-sm"
                      >
                        {loading ? (
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            <Send className="h-4 w-4 shrink-0" />
                            <span>Submit Partner Request</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </>
              ) : (
                <div id="success-view" className="text-center py-6 sm:py-8">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
                  >
                    <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10" />
                  </motion.div>
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-sans font-bold text-slate-900">
                    Registration Submitted!
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to XAMS Consultancy. We have recorded your information.
                    Our technical coordinator will contact you shortly by phone or email.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 sm:mt-8 inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-sans font-medium py-2.5 px-6 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
