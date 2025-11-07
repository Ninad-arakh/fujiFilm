import React, { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import isMobile from "./Constants";

const App = () => {
  // const [imgLoaded, setImgLoaded] = useState(false);
  const cameraRef = useRef(null);
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const miniCamRef = useRef(null);

  const tl = gsap.timeline();

  const startAnimation = () => {
    tl.to(cameraRef.current, {
      delay: 1,
      scale: 0.9,
      duration: 1.1,
      rotate: 30,
      transformOrigin: "45% 35%",
      ease: "power2.out",
    });

    tl.from(
      textRef.current,
      {
        opacity: 0,
        scale: 0,
        duration: 1,
        transformOrigin: "center center",
        ease: "power2.out",
      },
      "<-=0.1"
    );

    tl.from(
      navbarRef.current,
      {
        yPercent: -100,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    tl.from(
      sidebarRef.current,
      {
        xPercent: -100,
        duration: 1,
      },
      "<"
    );

    tl.from(
      lineRef.current,
      {
        x: -100,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    tl.from(
      miniCamRef.current,
      {
        scale: 0,
        duration: 1,
        position: "absolute",
        ease: "power2.out",
      },
      "<"
    );
  };

  useGSAP(() => {
    startAnimation();
  }, []);

  return (
    <div className="w-full bg-[#f1e5d1] flex box-border">
      <Sidebar sidebarRef={sidebarRef} />
      <div
        ref={lineRef}
        className="flex h-screen justify-center items-center fixed left-[6vw] "
      >
        {!isMobile && (
          <div className="w-[0.3vw] h-[95vh] bg-[#0e0e0f] rounded-full"></div>
        )}
      </div>
      <div className="relative w-full md:ml-[7vw] z-0 ">
        <Body
          cameraRef={cameraRef}
          navbarRef={navbarRef}
          textRef={textRef}
          miniCamRef={miniCamRef}
        />
      </div>
    </div>
  );
};

export default App;
