import React from "react";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";

const Body = ({navbarRef, cameraRef, textRef, imgLoad, miniCamRef}) => {
  return (
    <div className="w-full ">
      <Navbar navbarRef={navbarRef} />
      <MainContainer cameraRef={cameraRef} textRef={textRef} imgLoad={imgLoad} miniCamRef={miniCamRef} />
    </div>
  );
};

export default Body;
