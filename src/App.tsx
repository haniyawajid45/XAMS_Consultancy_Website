import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import Team from "./components/Team";
import Partnership from "./components/Partnership";
import Interns from "./components/Interns";
import JoinUs from "./components/JoinUs";
import AboutCompany from "./components/AboutCompany";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import pamphlet from "./assets/images/pamphlet.jpeg";

export default function App() {
  const [showPamphlet, setShowPamphlet] = useState(false);
  const [isClosingPamphlet, setIsClosingPamphlet] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPamphlet(true);
    }, 3500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const openCounselling = () => {
    window.open("https://forms.gle/5xWW6aTLYh6p7kSN6", "_blank", "noopener,noreferrer");
  };

  const openQAProfessional = () => {
    window.open("https://forms.gle/Cew8EfN75WRdYCDq8", "_blank", "noopener,noreferrer");
  };

  const openCareerCounsellingProfessional = () => {
    window.open("https://forms.gle/fkbdjZ3SdkAihBav6", "_blank", "noopener,noreferrer");
  };

  const handleClosePamphlet = () => {
    if (isClosingPamphlet) return;
    setIsClosingPamphlet(true);
    window.setTimeout(() => {
      setShowPamphlet(false);
      setIsClosingPamphlet(false);
    }, 480); // matches exit animation duration below
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 antialiased overflow-x-hidden">
      {/* 1. Header & Navigation Contacts */}
      <Header />

      <main className="grow">
        {/* 2. Hero banner & Call to action */}
        <Hero onOpenCounselling={openCounselling} />

        {/* 3. Who We Are Section */}
        <WhoWeAre />

        {/* 4. Where We Are Your Partners Section */}
        <Services />

        {/* 4. Mission & Vision Section (Two column layout) */}
        <MissionVision />

        {/* 5. Professional Team Section (CEO, Ops, IT cards with tabs) */}
        <Team />

        {/* 6. Become Our Partners Section (referral and auditor share) */}
        <Partnership
          onOpenQAProfessional={openQAProfessional}
          onOpenCareerCounsellingProfessional={openCareerCounsellingProfessional}
        />

        {/* 7. Internship Section */}
        <Interns />

        {/* 8. Join Us - Career Openings & Talent Pool */}
        <JoinUs />

        {/* 8 - 12. Consolidated Company Profile sections */}
        <AboutCompany />

        {/* 13. Partners & Collaborations Section */}
        <Partners />
      </main>

      {/* 12. Corporate Footer & Social grids */}
      <Footer />

      {showPamphlet && (
        <div
          onClick={handleClosePamphlet}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4 sm:p-6 ${
            isClosingPamphlet ? "animate-overlay-fade-out" : "animate-overlay-fade"
          }`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`relative w-full max-w-[30rem] sm:max-w-[36rem] max-h-[88vh] overflow-hidden rounded-[1.75rem] bg-slate-950/95 border border-white/10 shadow-[0_28px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl ${
              isClosingPamphlet ? "animate-popup-exit" : "animate-popup-entrance"
            }`}
          >
            <button
              type="button"
              onClick={handleClosePamphlet}
              className="absolute top-3.5 right-3.5 z-20 flex h-10 w-10 items-center justify-center text-white transition hover:text-slate-200"
              aria-label="Close pamphlet popup"
            >
              <span className="text-xl font-semibold">×</span>
            </button>

            <button
              type="button"
              onClick={openCounselling}
              className="relative block w-full overflow-hidden focus:outline-none"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_20%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_18%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.08),transparent_22%)] pointer-events-none" />
              <img
                src={pamphlet}
                alt="Pamphlet advertisement"
                className="w-full max-h-[84vh] object-contain"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}