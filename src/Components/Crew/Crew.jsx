import React, { useState, useEffect } from "react";
import bgImage from "../../assets/background-crew-desktop.jpg";
import douglas from "../../assets/image-douglas-hurley.webp";
import mark from "../../assets/image-mark-shuttleworth.webp";
import victor from "../../assets/image-victor-glover.webp";
import anousheh from "../../assets/image-anousheh-ansari.webp";

const crewData = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut...",
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
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => {
      setVisibleIndex(currentIndex);
      setIsFading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const crew = crewData[visibleIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col px-6 pt-20 md:px-16 lg:px-32">
        <div className="flex items-center gap-4 mb-10 mt-28">
          <span className="text-white text-lg font-bold opacity-50">02</span>
          <span className="text-white text-lg tracking-widest uppercase">Meet your crew</span>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className={`text-center lg:text-left transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
            <h2 className="text-2xl uppercase opacity-50">{crew.role}</h2>
            <h1 className="text-4xl uppercase font-bellefair mt-2 mb-4">{crew.name}</h1>
            <p className="text-lg opacity-80 max-w-xl mx-auto lg:mx-0">{crew.bio}</p>

            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              {crewData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className={`transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
            <img src={crew.image} alt={crew.name} className="h-[400px] sm:h-[500px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
