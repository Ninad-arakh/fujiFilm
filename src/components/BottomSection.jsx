import React from "react";
import isMobile, { paragraphText } from "../Constants";
import photo from "../assets/images/Hawai.png"

const BottomSection = () => {
  return (
    <div className="h-full mt-8 flex flex-col-reverse md:flex-row md:px-10 justify-between items-center gap-4 md:gap-0">
      <div className=" md:w-6/12 p-2 shadow-2xl border-b ">
        <img src={photo} alt="" />
       </div>


      <div className=" md:w-5/12 flex flex-col  gap-1 md:gap-4  px-3 md:px-0">
        <p className="font-[calligraphic] md:text-lg">Other models</p>
        <h1 className="font-[fujifilm] md:text-8xl font-semibold  leading-[16vh]">
          RETHINK CANVAS
        </h1>
        <p className="text-lg">{paragraphText}</p>

        {!isMobile && <p className=" ">{paragraphText.slice(52, 229)}.</p>}
      </div>
    </div>
  );
};

export default BottomSection;
