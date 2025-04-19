import React, { useState } from "react";
import bgImage from "../../assets/background-crew-desktop.jpg";
import douglas from "../../assets/image-douglas-hurley.webp";
import mark from "../../assets/image-mark-shuttleworth.webp";
import victor from "../../assets/image-victor-glover.webp";
import anousheh from "../../assets/image-anousheh-ansari.webp";

const crewData = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglas,
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical...",
    image: mark,
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon...",
    image: victor,
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems...",
    image: anousheh,
  },
];
export default function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const crew = crewData[currentIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat text-white transition-all duration-[2000ms]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col px-32 pt-10">

        <div className="flex items-center gap-4 mb-10 mt-36" style={{ width: "219px", height: "34px" }}>
          <span className="text-white text-lg font-bold opacity-50">02</span>
          <span className="text-white text-lg tracking-widest uppercase">Meet your crew</span>
        </div>

        <div className="flex flex-1 items-center justify-between gap-10 flex-wrap-reverse lg:flex-nowrap mb-28">
          <div className="max-w-xl space-y-6 text-center lg:text-left transition-opacity duration-[2000ms] ease-in-out">
            <h2 className="text-2xl uppercase opacity-50">{crew.role}</h2>
            <h1 className="text-4xl uppercase font-semibold">{crew.name}</h1>
            <p className="text-lg opacity-80">{crew.bio}</p>

            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              {crewData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-[2000ms] ${
                    idx === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-auto ">
            <img
              src={crew.image}
              alt={crew.name}
              className="h-[500px] object-contain "
            />
          </div>
        </div>
      </div>
     

    </div>
  );
}

