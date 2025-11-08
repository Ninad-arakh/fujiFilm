import React from "react";
import blackCam from "../assets/images/blackCamera.png";
import whiteCam from "../assets/images/whiteCam.png";

const Cameras = () => {
  return (
    <div className="w-full h-full relative px-8">
      <div className="flex flex-col justify-center items-center absolute md:relative bottom-12 left-[30%] md:left-0  md:mt-28">
        <h3 className="font-[calligraphic]">Other models</h3>
        <h1 className="font-[fujifilm] md:text-9xl text-4xl font-bold ">
          COLLECTION
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:h-[55dvh] h-[80vh] mt-10 ">
        <div className="md:w-[40%] w-[65vw] ml-6 md:ml-0 flex flex-col justify-center items-center ">
          <img src={blackCam} alt="cam" className="" />
          <h4 className="md:-mt-18 -mt-11 md:text-sm text-[8px] font-semibold font-[open-sans]">
            INSTAX mini Evo
          </h4>
          <h5 className="font-bold font-[open-sans] text-[10px] md:text-lg">$566.00</h5>
        </div>

        <div className="absolute md:left-[47%] left-[45%] md:-bottom-[16%] top-[46%] flex flex-col items-center justify-center">
          <h4 className="md:-mt-20 md:text-sm text-[8px]  font-semibold font-[calligraphic]">
            INSTAX mini Evo
          </h4>
          <h5 className="font-bold font-[calligraphic] text-[10px] md:text-lg">$566.00</h5>
        </div>

        <div className="md:w-[40%] w-[65vw] ml-4 md:ml-0 flex flex-col justify-center items-center  ">
          <img src={whiteCam} alt="cam" className="" />
          <h4 className="md:-mt-20 -mt-11 md:text-sm text-[8px] font-semibold font-[open-sans]">
            INSTAX mini Evo
          </h4>
          <h5 className="font-bold font-[open-sans] text-[10px] md:text-lg">$566.00</h5>
        </div>
      </div>
    </div>
  );
};

export default Cameras;
