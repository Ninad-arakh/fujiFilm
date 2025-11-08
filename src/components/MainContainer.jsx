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
import Cameras from "./Cameras";
import BottomSection from "./BottomSection";
import SecondSection from "./SecondSection";

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
        // markers: true,
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
        end: "85.33% bottom",
        scrub: true,
        // markers: true,
        // anticipatePin: true
      },
    });
    tl4.to(cameraRef.current, {
      scale: 0.6,
      xPercent: 7,
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "68.66% top",
        end: "bottom 101%",
        scrub: true,
        // markers: true,
        // anticipatePin: true
      },
    });
    tl5.to(cameraRef.current, {
      yPercent: -200,
    });
  }, []);

  return (
    <div ref={pageRef} className="">
      {/* first 100vh screen */}
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <img
          ref={cameraRef}
          src={MainCamera}
          alt="mainCamera"
          onLoadedData={() => imgLoad()}
          className="md:w-[55vw] w-screen md:mt-[30vh] z-10 md:ml-[5vw] ml-[15vw] fixed"
        />
        <div
          ref={textRef}
          className="absolute font-bold  font-[fujifilm] md:text-[12vw] text-[12vw] text-[#9b3e08] items-center justify-center text-center w-11/12 -mt-18 md:mt-0"
        >
          <h1 className="md:leading-[15vw] leading-[40vh] ">UNLIMITED</h1>
          <h1 className="md:leading-[15vw] leading-[50vh] mt-10 md:mt-0 ">RELEASE IPA</h1>
        </div>
        <img
          src={miniCam}
          ref={miniCamRef}
          alt="miniCam"
          className="absolute md:w-[10vw] w-[20vw] opacity-80 right-[18vw] -rotate-30 top-[12vh]"
        />
      </div>

      {/* secont 100vh screen */}
      <div className="h-screen  ">
        <SecondSection />
      </div>

      {/* third 100vh screen Retroscope*/}
      <div className="h-screen">
        <Retroscope />
      </div>

      {/* fourth 100vh screen  Photos*/}
      <div className="h-screen">
        <PhotosSection />
      </div>

      {/* fifth 100vh screen cameras*/}
      <div className="h-screen">
        <Cameras />
      </div>

      {/* sixth 100vh screen */}
      <div className="h-screen">
        <BottomSection />
      </div>
    </div>
  );
};

export default MainContainer;
