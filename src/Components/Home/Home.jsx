import React from 'react';
import bgImage from "../../assets/background-home-desktop.jpg"; // Path to your image

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Left Column (6 Columns) */}
          <div className="col-span-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-[32px] font-normal font-barlow-condensed tracking-[4px] leading-[100%] text-black">
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <span>SPACE</span>
            <p className="text-gray-600">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          {/* Right Column (6 Columns) */}
          <div className="col-span-6 flex justify-center items-center">
            <button
              type="button"
              className="w-[272px] h-[272px] border-8 border-white rounded-full bg-white text-black text-[32px] font-normal uppercase tracking-[-0.02em] font-bellefair transition duration-300 relative overflow-hidden"
            >
              {/* Yellow Blur Span (Appears Outside the Button) */}
              <span className="absolute inset-0 bg-yellow-500 opacity-0 hover:opacity-70 backdrop-blur-md rounded-full transition-all duration-300 scale-150 pointer-events-none"></span>
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
