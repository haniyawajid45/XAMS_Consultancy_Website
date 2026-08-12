/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import virtualUniversity from "../assets/images/virtual_university.png";
import universityOfPeshawar from "../assets/images/university_of_peshawar.png";
import ndu from "../assets/images/NDU.png";
import airUniversity from "../assets/images/au.png";
import hec from "../assets/images/HEC.png";
import dhaSuffa from "../assets/images/DHA_SUFFA_UNI.png";
import coventryUniversity from "../assets/images/conventry_college.png";
import britishCouncil from "../assets/images/british_council.png";
import armyBurnHall from "../assets/images/army_burn_hall_college.png";
import erasmus from "../assets/images/Erasmus_UNI.png";
import mitt from "../assets/images/MITT.png";
import who from "../assets/images/WHO.png";
import spainBusiness from "../assets/images/spain_buss_school.png";
import udemy from "../assets/images/udemy.png";
import eduta from "../assets/images/eduta.png";
import unicef from "../assets/images/unicef.png";
import cambridge from "../assets/images/uocambridge.png";
import nutech from "../assets/images/NUTECH.png";
import fbise from "../assets/images/fbise.png";
import nust from "../assets/images/NUST.png";
import numl from "../assets/images/NUML.png";
import nup from "../assets/images/NUP.png";
import pakAirForce from "../assets/images/Pak_air_force.png";
import politecnico from "../assets/images/politecnico.png";
import cqiIrqa from "../assets/images/CQI-IRQA.png";
import ad from "../assets/images/AD.png";
import niup from "../assets/images/NIUP.png";
import berlin from "../assets/images/Berlin.png";
import sapsAviation from "../assets/images/SAPS_aviation_college.png";
import collegeFlying from "../assets/images/College_flying_training.png";
import airWarCollege from "../assets/images/air_war_college.png";
import alison from "../assets/images/alison.png";

export default function Partners() {
  const rows = [
    [
      { name: "Virtual University", image: virtualUniversity },
      { name: "University of Peshawar", image: universityOfPeshawar },
      { name: "National Defence University", image: ndu },
      { name: "NUML", image: numl },
      { name: "DHA SUFFA University", image: dhaSuffa },
      { name: "College of Flying Training", image: collegeFlying },
      { name: "Pakistan Air Force", image: pakAirForce },
      { name: "HEC Pakistan", image: hec },
    ],
    [
      { name: "SAPS Aviation College", image: sapsAviation },
      { name: "Ministry of IT & Telecom", image: mitt },
      { name: "World Health Organization", image: who },
      { name: "Erasmus University Rotterdam", image: erasmus },
      { name: "Air War College", image: airWarCollege },
    ],
    [
      { name: "Coventry University", image: coventryUniversity },
      { name: "British Council", image: britishCouncil },
      { name: "Army Burn Hall College", image: armyBurnHall },
      { name: "SPAIN Business School", image: spainBusiness },
      { name: "Udemy", image: udemy },
    ],
    [
      { name: "EDUTA", image: eduta },
      { name: "University of Cambridge", image: cambridge },
      { name: "Alison", image: alison },
      { name: "NUP", image: nup },
      { name: "NUTech", image: nutech },
      { name: "NIUP", image: niup },

    ],
    [
      { name: "UNICEF", image: unicef },
      { name: "FBISE", image: fbise },
      { name: "Air Defence", image: ad },
      { name: "Politecnico Milano", image: politecnico },
    ],
    [
      { name: "CQI IRQA", image: cqiIrqa },
      { name: "Berlin University", image: berlin },
      { name: "NUST", image: nust },
      { name: "Air University", image: airUniversity },
    ],
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Collaborators
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {row.map((partner, idx) => (
                <div key={idx} className="group flex items-center justify-center p-1 sm:p-2">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-14 sm:h-16 xl:h-20 object-contain transition-transform duration-300 ease-out transform group-hover:-translate-y-1 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
