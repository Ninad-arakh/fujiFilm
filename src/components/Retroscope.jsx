import React from "react";
import { paragraphText } from "../Constants";

const Retroscope = () => {
  return (
    <div className="w-[98.5%] h-full px-10 flex flex-col justify-start items-center leading-tight ">
      <h1 className="font-[birch] font-bold tracking-wide leading-tight -mt-10 h-[55vh] text-[25vw]  text-[#9b3e08]">
        RETROSCOPE
      </h1>
      <div className="flex w-full justify-between  h-[58vh]  ">
        <div className="w-[34%] flex flex-col gap-3">
          <img src="" alt="video" className="bg-gray-400 opacity-35 w-9/12 h-[40vh]" />
          <h2 className="text-2xl font-[calligraphic]">
            Watch the actual footage recorded on <span className="text-[#9b3e08]"> Intax </span>
          </h2>
        </div>


        <div className="w-[34%] flex flex-col justify-center gap-3">
            <p className="font-semibold text-xs font-[open-sans]">{paragraphText }</p>
            <h2 className="font-bold font-[birch] tracking-wider text-2xl">DESIGN</h2>
            <p className="font-semibold text-xs font-[open-sans] pad" >{paragraphText.slice(0, 244)}.</p>
            <p className="font-semibold text-xs font-[open-sans] pad" >{paragraphText}.</p>
        </div>
      </div>
    </div>
  );
};

export default Retroscope;
