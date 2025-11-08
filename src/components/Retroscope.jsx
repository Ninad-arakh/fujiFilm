import React from "react";
import isMobile, { paragraphText } from "../Constants";

const Retroscope = () => {
  return (
    <div className="w-[98.5%] h-full md:px-10 px-3 flex flex-col justify-start items-center leading-tight ">
      <h1 className="font-[fujifilm] font-bold tracking-wide leading-tight md:-mt-10 mt-15 md:h-[55vh] text-[12vw]  text-[#9b3e08]">
        RETROSCOPE
      </h1>

      <div className="flex w-full justify-between  md:h-[58vh]  ">
        <div className="md:w-[34%] w-[40%] flex flex-col gap-3 ">
          <img
            src=""
            alt="video"
            className="bg-gray-400 opacity-35 md:w-9/12 md:h-[40vh] h-[20vh] w-screen "
          />
          <h2 className="md:text-2xl text-sm font-[calligraphic]">
            Watch the actual footage recorded on{" "}
            <span className="text-[#9b3e08]"> Intax </span>
          </h2>
        </div>

        <div className="md:w-[34%] w-[50%] flex flex-col justify-center gap-3">
          <p className="font-semibold text-xs font-[open-sans]">
            {paragraphText}
          </p>
          <h2 className="font-bold font-[birch] tracking-wider text-2xl">
            DESIGN
          </h2>

          { !isMobile ? (<p className="font-semibold text-xs font-[open-sans] pad">
            {paragraphText.slice(0, 244)}.
          </p>) 
          : (
            <p className="font-semibold text-xs font-[open-sans] pad">
            {paragraphText.slice(0, 198)}.
          </p>
          )}
          {!isMobile && (
            <>
              <p className="font-semibold text-xs font-[open-sans] pad">
                {paragraphText}.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Retroscope;
