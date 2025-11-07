import React from "react";
import isMobile, { paragraphText } from "../Constants";

const SecondSection = () => {
  return (
    <div className=" flex justify-between items-center md:px-10 px-3 pt-16">
      <div className="md:w-[34%] w-[50%] md:h-[55vh] h-[80vh] flex flex-col gap-3">
        <h6 className="font-[calligraphic] text-xs md:text-lg font-semibold">
          Limited version
        </h6>
        <h1 className=" font-bold uppercase md:text-8xl text-3xl md:tracking-wider md:leading-[10.5vh] font-[birch]">
          INTAX FUJIFILM
        </h1>
        <p className="text-xs  font-normal font-[open-sans] leading-tight mb-2">
          {paragraphText}
        </p>
        <button className="md:w-[8vw] w-[20vw] mt-10 md:mt-0 mx-3 md:mx-0 md:text-2xl tracking-wider px-2 py-2 text-white bg-[#0e0e0f] font-[birch]">
          BUY NOW
        </button>
      </div>

      <div className="md:w-[27%] w-[35%] md:h-[55vh] h-[65vh] flex flex-col justify-between md:-mt-5 -mt-32 gap-2 md:gap-0">
        <div className="border-black md:border-[5px] border-2 md:h-[16vh] flex flex-col items-left px-6 justify-center gap-1">
          <div className="">
            <h2 className="font-bold text-left text-md font-[birch] tracking-wider">
              RES
            </h2>{" "}
            <p className="md:text-[8px] text-[10px] font-[open-sans] leading-tight">
              Lens Resolution
            </p>
          </div>
          <div className="w-10/12 bg-[#0e0e0f] h-0.5"></div>
          <div className="flex items-center">
            <div className="w-4/12">
              <h2 className="text-6xl font-bold font-[birch]">55%</h2>
            </div>
            {!isMobile && (
              <div className=" ml-7">
                <p className="text-[10px] font-[open-sans] leading-tight ">
                  Cameras have evolved significantly since inception, transform
                  from bulky devices
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-black md:border-[5px] border-2 md:h-[16vh] flex flex-col items-left px-6 justify-center gap-1">
          <div className="">
            <h2 className="font-bold text-left text-md font-[birch] tracking-wider">
              RES
            </h2>{" "}
            <p className="md:text-[8px] text-[10px] font-[open-sans] leading-tight">
              Lens Resolution
            </p>
          </div>
          <div className="w-10/12 bg-[#0e0e0f] h-0.5"></div>
          <div className="flex items-center">
            <div className="w-4/12">
              <h2 className="text-6xl font-bold font-[birch]">34%</h2>
            </div>
            {!isMobile && (
              <div className=" ml-7">
                <p className="text-[10px] font-[open-sans] leading-tight ">
                  Cameras have evolved significantly since inception, transform
                  from bulky devices
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-black md:border-[5px] border-2 md:h-[16vh] flex flex-col items-left px-6 justify-center gap-1">
          <div className="">
            <h2 className="font-bold text-left text-md font-[birch] tracking-wider">
              RES
            </h2>{" "}
            <p className="md:text-[8px] text-[10px] font-[open-sans] leading-tight">
              Lens Resolution
            </p>
          </div>
          <div className="w-10/12 bg-[#0e0e0f] h-0.5"></div>
          <div className="flex items-center">
            <div className="w-4/12">
              <h2 className="text-6xl font-bold font-[birch]">12%</h2>
            </div>
            {!isMobile && (
              <div className=" ml-7">
                <p className="text-[10px] font-[open-sans] leading-tight ">
                  Cameras have evolved significantly since inception, transform
                  from bulky devices
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
