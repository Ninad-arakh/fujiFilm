import React, { useEffect, useRef } from "react";
import MainCamera from "../assets/images/Main.png";
import miniCam from "../assets/images/Vectorcamera.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = ({ cameraRef, textRef, imgLoad, miniCamRef }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
        // anticipatePin: true
      },
    });

    tl.to(cameraRef.current, {
      rotate: 90,
      scale: 1.1,
      y: 10,
      x: -10,
    });
  }, []);

  return (
    <div ref={pageRef} className="">
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <img
          ref={cameraRef}
          src={MainCamera}
          alt="mainCamera"
          onLoadedData={() => imgLoad()}
          className="w-[55vw] mt-[30vh] z-10 ml-[5vw] fixed"
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
      <div className="h-screen  flex justify-between items-center px-10 ">
        <div className="w-[34%] h-[55vh] -mt-5 flex flex-col gap-3">
          <h6 className="font-[calligraphic] font-semibold">Limited version</h6>
          <h1 className=" font-bold uppercase text-8xl tracking-wider leading-[10.5vh] font-[birch]">
            INTAX FUJIFILM
          </h1>
          <p className="text-xs font-normal font-[open-sans] leading-tight mb-2">
            Cameras have evolved significantly since their inception,
            transforming from bulky devices to sleek, portable gadgets. Today
            digital cameras offer high-resolution images and advanced features
            that cater to both amateur and professional photographers. With the
            rise of smartphone cameras, capturing stunnig photos has never been
            easier, allowing everyone to document their lives in the vivid
            detail.
          </p>
          <button className="w-[8vw] text-2xl tracking-wider px-2 py-2 text-white bg-[#0e0e0f] font-[birch]">
            BUY NOW
          </button>
        </div>
        <div className="w-[27%] h-[55vh] flex flex-col justify-between -mt-5">
          <div className="border-black border-[5px] h-[16vh]"></div>
          <div className="border-black border-[5px] h-[16vh]"></div>
          <div className="border-black border-[5px] h-[16vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
