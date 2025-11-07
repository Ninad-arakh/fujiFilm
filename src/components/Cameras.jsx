import React from "react";
import blackCam from "../assets/images/blackCamera.png";
import whiteCam from "../assets/images/whiteCam.png";

const Cameras = () => {
  return (
    <div className="w-full h-full relative  px-8">
      <div className="flex flex-col justify-center items-center mt-28">
        <h3 className="font-[calligraphic]">Other models</h3>
        <h1 className="font-[birch] text-9xl font-bold tracking-wider">
          COLLECTION
        </h1>
      </div>
      <div className="flex justify-between items-center h-[55dvh]">
        <div className="w-[40%]  flex flex-col justify-center items-center">
          <img src={blackCam} alt="cam" className="" />
          <h4 className="-mt-18 text-sm font-semibold font-[open-sans]">
            INSTAX mini Evo
          </h4>
          <h5 className="font-bold font-[open-sans]">$566.00</h5>
        </div>

        <div className="absolute left-[47%] bottom-[16%] flex flex-col items-center justify-center">
          <h4 className="-mt-20 text-sm font-semibold font-[calligraphic]">
            INSTAX mini Evo
          </h4>
          <h5 className="font-bold font-[calligraphic]">$566.00</h5>
        </div>

        <div className="w-[40%]  flex flex-col justify-center items-center mt-5">
          <img src={whiteCam} alt="cam" className="" />
          <h4 className="-mt-20 text-sm font-semibold font-[open-sans]">
            INSTAX mini Evo
          </h4>
          <h5 className="font-bold font-[open-sans]">$566.00</h5>
        </div>
      </div>
    </div>
  );
};

export default Cameras;
