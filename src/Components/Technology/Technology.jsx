import React, { useState } from "react";
import bgTechnology from "../../assets/technology-bg.jpg";
import technologyImg1 from "../../assets/Technology Image - A.jpg";
import technologyImg2 from "../../assets/Technology Image - B.jpg";
import technologyImg3 from "../../assets/Technology Image - C.jpg";

const technologyData = [
  {
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space...",
    image: technologyImg1,
  },
  {
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft...",
    image: technologyImg2,
  },
  {
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule...",
    image: technologyImg3,
  },
];

export default function Technology() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const technology = technologyData[selectedIndex]; // Clean access like technology.image

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat text-white pt-36 transition-all duration-[2000ms]"
      style={{ backgroundImage: `url(${bgTechnology})` }}
    >
      <div className="flex flex-col px-6 md:px-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-white text-lg font-bold opacity-50">03</span>
          <span className="text-white text-lg tracking-widest uppercase">Space Launch 101</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="flex lg:flex-col gap-6">
              {[1, 2, 3].map((num, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-12 h-12 rounded-full border-2 text-xl font-bold ${
                    selectedIndex === i
                      ? "bg-white text-black"
                      : "border-white text-white hover:bg-white/20"
                  } transition-all duration-500`}
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="max-w-xl text-center lg:text-left space-y-6">
              <p className="uppercase text-white/50 tracking-widest text-md">The terminology…</p>
              <h2 className="text-4xl uppercase font-semibold">{technology.title}</h2>
              <p className="text-lg text-white/80">{technology.description}</p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={technology.image}
              alt={technology.title}
              className="h-[500px] object-contain transition-opacity duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
