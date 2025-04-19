import React, { useState } from "react";
import bgImage from "../../assets/background-destination-desktop.jpg";
import moonImg from "../../assets/image-moon.webp";
import marsImg from "../../assets/image-mars.webp";
import europaImg from "../../assets/image-europa.webp";
import titanImg from "../../assets/image-titan.webp";

const destinations = [
  {
    name: "Moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip...",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: moonImg,
  },
  {
    name: "Mars",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons...",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: marsImg,
  },
  {
    name: "Europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream...",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    image: europaImg,
  },
  {
    name: "Titan",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home...",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    image: titanImg,
  },
];

export default function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const destination = destinations[currentIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat text-white transition-all duration-[2000ms]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col px-32 pt-10">
        <div className="flex items-center gap-4 mb-10 mt-36">
          <span className="text-white text-lg font-bold opacity-50">01</span>
          <span className="text-white text-lg tracking-widest uppercase">Pick your destination</span>
        </div>

        <div className="flex flex-1 items-center justify-between gap-10 flex-wrap-reverse lg:flex-nowrap mb-28">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img src={destination.image} alt={destination.name} className="h-[445px] object-contain" />
          </div>

          {/* Right: Content */}
          <div className="max-w-xl space-y-6 text-center lg:text-left transition-opacity duration-[2000ms] ease-in-out">
            {/* Tabs */}
            <div className="flex gap-8 justify-center lg:justify-start uppercase text-white text-sm tracking-widest mb-4">
              {destinations.map((dest, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`pb-2 border-b-2 transition-all ${
                    idx === currentIndex ? "border-white" : "border-transparent hover:border-gray-500"
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </div>

            <h1 className="text-7xl uppercase font-semibold">{destination.name}</h1>
            <p className="text-lg opacity-80">{destination.description}</p>

            <hr className="my-6 border-gray-600" />

            {/* Stats */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-12 text-center lg:text-left">
              <div>
                <p className="uppercase text-sm text-gray-400 tracking-widest">Avg. Distance</p>
                <h3 className="text-2xl">{destination.distance}</h3>
              </div>
              <div>
                <p className="uppercase text-sm text-gray-400 tracking-widest">Est. Travel Time</p>
                <h3 className="text-2xl">{destination.travelTime}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
