import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/background-home-desktop.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-12 gap-8 p-8">

          <div className="col-span-12 lg:col-span-6 p-4 rounded-lg text-white text-center lg:text-left">
            <h2 className="text-[32px] font-normal font-barlow-condensed tracking-[4px] leading-[100%] text-gray-400">
              SO, YOU WANT TO TRAVEL TO
              <span className="block font-bellefair text-[100px] md:text-[150px] text-white leading-none mt-4">
                SPACE
              </span>
            </h2>
            <p className="text-gray-400 mt-6 text-base md:text-lg">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
            <div className="home-img flex items-center justify-center">
              <div className="wrapper rounded-full relative group flex justify-center items-center">
                <Link to="/destination">
                  <div className="md:w-[272px] md:h-[272px] z-0 flex justify-center items-center rounded-full bg-white w-[172px] h-[172px]">
                    <p className="cursor-pointer font-bellefair font-normal text-[#0B0D17] text-[22px] md:text-[32px] uppercase tracking-wider">
                      Explore
                    </p>
                    <div className="md:w-[372px] md:h-[372px] w-[272px] h-[272px] absolute bg-gray-200 opacity-0 pointer-events-none group-hover:opacity-30 rounded-full transition-all duration-500 z-10"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
