import React from "react";
import { paragraphText } from "../Constants";
import photo from "../assets/images/Hawai.png"

const BottomSection = () => {
  return (
    <div className="h-full flex px-10 justify-between items-center">
      <div className=" w-6/12 p-2 shadow-2xl border-b">
        <img src={photo} alt="" />
       </div>


      <div className=" w-5/12 flex flex-col gap-4">
        <p className="font-[calligraphic] text-lg">Other models</p>
        <h1 className="font-[birch] text-8xl font-semibold tracking-widest leading-[12vh]">
          RETHINK CANVAS
        </h1>
        <p>{paragraphText}</p>

        <p className=" ">{paragraphText.slice(52, 229)}.</p>
      </div>
    </div>
  );
};

export default BottomSection;
