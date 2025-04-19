import React, { useState, useEffect } from "react";
import bgImage from "../../assets/background-destination-desktop.jpg";
import moonImg from "../../assets/image-moon.webp";
import marsImg from "../../assets/image-mars.webp";
import europaImg from "../../assets/image-europa.webp";
import titanImg from "../../assets/image-titan.webp";

const destinations = [
  {
    name: "Moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: moonImg,
  },
  {
    name: "Mars",
    description: "Pack your hiking boots to tackle Olympus Mons. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: marsImg,
  },
  {
    name: "Europa",
    description: "A winter lover’s dream. Ice skating, curling, hockey or relax in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    image: europaImg,
  },
  {
    name: "Titan",
    description: "Home away from home with a dense atmosphere and views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    image: titanImg,
  },
];

export default function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const t = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(t);
  }, [currentIndex]);

  const dest = destinations[currentIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col px-6 sm:px-10 md:px-16 lg:px-32 pt-10">
        <div className="flex items-center gap-4 mt-24 mb-10">
          <span className="text-lg font-bold opacity-50 font-condensed">01</span>
          <span className="text-lg tracking-widest uppercase font-condensed">Pick your destination</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 mb-28">
          <div className={`transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
            <img src={dest.image} alt={dest.name} className="w-[170px] sm:w-[250px] md:w-[300px] lg:w-[445px]" />
          </div>

          <div className={`w-full max-w-xl text-center lg:text-left transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
            <div className="flex gap-6 justify-center lg:justify-start uppercase text-sm tracking-widest mb-4 font-condensed">
              {destinations.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`pb-2 border-b-2 transition-all ${
                    i === currentIndex ? "border-white" : "border-transparent hover:border-gray-500"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl uppercase font-bellefair">{dest.name}</h1>
            <p className="text-base sm:text-lg opacity-80 font-barlow">{dest.description}</p>

            <hr className="my-6 border-gray-600" />

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12">
              <div>
                <p className="text-sm text-gray-400 tracking-widest uppercase font-condensed">Avg. Distance</p>
                <h3 className="text-2xl font-bellefair">{dest.distance}</h3>
              </div>
              <div>
                <p className="text-sm text-gray-400 tracking-widest uppercase font-condensed">Est. Travel Time</p>
                <h3 className="text-2xl font-bellefair">{dest.travelTime}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
