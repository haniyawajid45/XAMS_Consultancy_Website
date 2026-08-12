/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Interns() {
  return (
    <section id="internship" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
          <div className="bg-slate-950 text-white px-6 py-10 sm:px-10 sm:py-14">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-green-400 mb-3">
                We&apos;re hiring — internship program
              </p>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mb-3">
                Campus Outreach &amp; Assessment Intern
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Xams Career Counselling — Helping Class 9–12 students answer “what should I do after school?”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-slate-50">
            {[
              { label: "Location", value: "Karachi (multi-school travel)" },
              { label: "Duration", value: "3 months, extendable" },
              { label: "Commitment", value: "3–5 days / week" },
              { label: "Stipend", value: "Shared Profit + performance bonus" },
            ].map((block) => (
              <div key={block.label} className="px-6 py-6 sm:px-8 sm:py-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500 font-semibold mb-2">
                  {block.label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  {block.value}
                </p>
              </div>
            ))}
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-10 bg-white">
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">About the Role</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Xams Career Counselling runs scientific, psychologist-led career assessments (RIASEC + Big Five + Multiple Intelligences) for students in Class 9–12. We&apos;re building a team of energetic, trustworthy interns to be the face of Xams inside schools — and, after training, to help deliver the assessment itself. This is a dual role: half outreach and persuasion, half structured, supervised test administration.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">What You&apos;ll Do</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li><strong>School outreach</strong> — Visit partner schools to present Xams to students, teachers, and administrators, and convert interest into registrations.</li>
                <li><strong>Convince &amp; consult</strong> — Answer student and parent questions clearly and honestly — you are often a family&apos;s first real explanation of what the assessment does.</li>
                <li><strong>Assessment delivery</strong> — Help administer the psychometric assessment on test day: set up the room, guide students through instructions, and keep timing and conditions consistent under the supervising psychologist.</li>
                <li><strong>Data integrity</strong> — Maintain accurate registration and attendance records in line with our student data-privacy policy.</li>
                <li><strong>Reporting</strong> — Track and report your school visits, registrations, and conversion numbers on a simple weekly log.</li>
                <li><strong>Brand ambassadorship</strong> — Represent the Xams brand professionally at every school — your conduct is often the reason a principal signs on or refers us to the next school.</li>
              </ul>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Selection Criteria</h3>
                <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                  <li>Currently enrolled in or recently graduated from a Bachelor&apos;s program — Psychology, Education, Social Sciences, Business, or Marketing preferred (not mandatory).</li>
                  <li>18 years or older, comfortable engaging confidently with teenagers, teachers, and school leadership.</li>
                  <li>Able to travel locally to different school campuses on a set schedule.</li>
                  <li>Available for a minimum 3-month commitment, 3–5 days a week, including some test-day mornings.</li>
                  <li>No prior experience required — but sales, tutoring, event hosting, or counselling experience is a strong plus.</li>
                  <li>Full training on the assessment tools and delivery process is provided before your first school visit.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Skills We&apos;re Looking For</h3>
                <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                  <li><strong>Communication</strong> — Confident, persuasive verbal communication in both Urdu and English.</li>
                  <li><strong>Public speaking</strong> — Comfort speaking to a room — assemblies, classrooms, and parent groups.</li>
                  <li><strong>Empathy &amp; integrity</strong> — Warmth and patience with teenagers, plus the maturity to handle sensitive personal data responsibly.</li>
                  <li><strong>Dependability</strong> — Reliable, punctual, and organised — test-day schedules cannot slip.</li>
                  <li><strong>Digital basics</strong> — Comfortable with basic spreadsheets, forms, and professional WhatsApp/email communication.</li>
                  <li><strong>Team fit</strong> — Coachable and open to feedback from your supervising psychologist and outreach lead.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4 bg-slate-50 border border-slate-200 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-slate-900">What You&apos;ll Gain</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li>Hands-on training in administering a real psychometric assessment, under a licensed psychologist.</li>
                <li>Genuine B2B sales and client-facing experience working directly with schools.</li>
                <li>A certificate of completion and a letter of recommendation for strong performers.</li>
                <li>Performance-based bonus tied to student registrations you help bring in.</li>
                <li>A shot at a full-time offer as Xams expands to new cities.</li>
              </ul>
            </section>

            <div className="rounded-3xl bg-slate-950 text-slate-100 p-6 sm:p-8">
              <p className="text-sm leading-relaxed">
                <strong>How to apply</strong> — Send your CV and 3 lines on why you&apos;d be great in front of a room of teenagers to xamsconsultancy@gmail.com.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                Subject line: “Internship — [Your Name]” • Applications reviewed on a rolling basis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
