import React from "react";
import MainCamera from "../assets/images/Main.png";
import miniCam from "../assets/images/Vectorcamera.png";

const MainContainer = ({ cameraRef, textRef, imgLoad, miniCamRef }) => {
  return (
    <div className="">
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <img
          ref={cameraRef}
          src={MainCamera}
          alt="mainCamera"
          onLoadedData={() => imgLoad()}
          className="w-[55vw] mt-[30vh] z-10 ml-[5vw]"
        />
        <div
          ref={textRef}
          className="absolute font-bold  font-[birch] text-[19vw] text-[#9b3e08] items-center justify-center text-center w-11/12"
        >
          <h1 className="leading-[15vw] tracking-widest">UNLIMITED</h1>
          <h1 className="leading-[15vw] tracking-widest">RELEASE IPA</h1>
        </div>
        <img
            src={miniCam}
            ref={miniCamRef}
            alt="miniCam"
            className="absolute w-[10vw] opacity-80 right-[18vw] -rotate-30 top-[12vh]"
          />
      </div>
    </div>
  );
};

export default MainContainer;
