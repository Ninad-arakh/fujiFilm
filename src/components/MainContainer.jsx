import React, { useEffect, useRef } from "react";
import MainCamera from "../assets/images/Main.png";
import miniCam from "../assets/images/Vectorcamera.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Retroscope from "./Retroscope";
import { paragraphText } from "../Constants";
import PhotosSection from "./PhotosSection";

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
        end: "33.33% bottom",
        scrub: true,
        // markers: true,
        // anticipatePin: true
      },
    });
    tl.to(cameraRef.current, {
      rotate: 90,
      scale: 1.1,
      y: 10,
      x: -10,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "16.66% top",
        end: "50% bottom",
        scrub: true,
        // markers: true,
        // anticipatePin: true
      },
    });
    tl2.to(cameraRef.current, {
      rotate: 70,
      scale: 0.8,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "34.33% top",
        end: "66.66% bottom",
        scrub: true,
        markers: true,
        // anticipatePin: true
      },
    });
    tl3.to(cameraRef.current, {
      rotate: 0,
      scale: 1.1,
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "51% top",
        end: "83.33% bottom",
        scrub: true,
        // markers: true,
        // anticipatePin: true
      },
    });
    tl4.to(cameraRef.current, {
      scale:0.6
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "66.66% top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        // anticipatePin: true
      },
    });
    tl5.to(cameraRef.current, {
      yPercent: -100
    });
  }, []);

  return (
    <div ref={pageRef} className="">
      {/* first 100vh screen */}
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

      {/* secont 100vh screen */}
      <div className="h-screen  flex justify-between items-center px-10 ">
        <div className="w-[34%] h-[55vh] -mt-5 flex flex-col gap-3">
          <h6 className="font-[calligraphic] font-semibold">Limited version</h6>
          <h1 className=" font-bold uppercase text-8xl tracking-wider leading-[13.5vh] font-[birch]">
            INTAX FUJIFILM
          </h1>
          <p className="text-xs font-normal font-[open-sans] leading-tight mb-2">
            {paragraphText}
          </p>
          <button className="w-[8vw] text-2xl tracking-wider px-2 py-2 text-white bg-[#0e0e0f] font-[birch]">
            BUY NOW
          </button>
        </div>

        <div className="w-[27%] h-[55vh] flex flex-col justify-between -mt-5">
          <div className="border-black border-[5px] h-[16vh] flex flex-col items-left px-6 justify-center gap-1">
            <div className="">
              <h2 className="font-bold text-left text-md font-[birch] tracking-wider">
                RES
              </h2>{" "}
              <p className="text-[8px] font-[open-sans] leading-tight">
                Lens Resolution
              </p>
            </div>
            <div className="w-10/12 bg-[#0e0e0f] h-0.5"></div>
            <div className="flex items-center">
              <div className="w-4/12">
                <h2 className="text-6xl font-bold font-[birch]">55%</h2>
              </div>
              <div className="ml-7">
                <p className="text-[10px] font-[open-sans] leading-tight ">
                  Cameras have evolved significantly since inception, transform
                  from bulky devices
                </p>
              </div>
            </div>
          </div>

          <div className="border-black border-[5px] h-[16vh] flex flex-col items-left px-6 justify-center gap-1">
            <div className="">
              <h2 className="font-bold text-left text-md font-[birch] tracking-wider">
                RES
              </h2>{" "}
              <p className="text-[8px] font-[open-sans] leading-tight">
                Lens Resolution
              </p>
            </div>
            <div className="w-10/12 bg-[#0e0e0f] h-0.5"></div>
            <div className="flex items-center">
              <div className="w-4/12">
                <h2 className="text-6xl font-bold font-[birch]">34%</h2>
              </div>
              <div className="ml-7">
                <p className="text-[10px] font-[open-sans] leading-tight ">
                  Cameras have evolved significantly since inception, transform
                  from bulky devices
                </p>
              </div>
            </div>
          </div>

          <div className="border-black border-[5px] h-[16vh] flex flex-col items-left px-6 justify-center gap-1">
            <div className="">
              <h2 className="font-bold text-left text-md font-[birch] tracking-wider">
                RES
              </h2>{" "}
              <p className="text-[8px] font-[open-sans] leading-tight">
                Lens Resolution
              </p>
            </div>
            <div className="w-10/12 bg-[#0e0e0f] h-0.5"></div>
            <div className="flex items-center">
              <div className="w-4/12">
                <h2 className="text-6xl font-bold font-[birch]">12%</h2>
              </div>
              <div className="ml-7">
                <p className="text-[10px] font-[open-sans] leading-tight ">
                  Cameras have evolved significantly since inception, transform
                  from bulky devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third 100vh screen Retroscope*/}
      <div className="h-screen">
        <Retroscope />
      </div>

      {/* fourth 100vh screen  Photos*/}
      <div className="h-screen">
        <PhotosSection />
      </div>

      {/* fifth 100vh screen */}
      <div className="h-screen"></div>

      {/* sixth 100vh screen */}
      <div className="h-screen"></div>
    </div>
  );
};

export default MainContainer;
