/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import Footer from "./components/Footer";

export default function App() {
  const openCounselling = () => {
    window.open("https://forms.gle/5xWW6aTLYh6p7kSN6", "_blank", "noopener,noreferrer");
  };

  const openQAProfessional = () => {
    window.open("https://forms.gle/Cew8EfN75WRdYCDq8", "_blank", "noopener,noreferrer");
  };

  const openCareerCounsellingProfessional = () => {
    window.open("https://forms.gle/fkbdjZ3SdkAihBav6", "_blank", "noopener,noreferrer");
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
      </main>

      {/* 12. Corporate Footer & Social grids */}
      <Footer />
    </div>
  );
}

