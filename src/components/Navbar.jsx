import React from "react";

const Navbar = ({navbarRef}) => {
  return (
    <div ref={navbarRef} className="md:w-[93%] w-screen flex justify-between px-4 pt-3 items-center fixed">
      <div className=" flex flex-col items-center">
        <h1 className="text-[#9b3e08] md:text-4xl text-2xl font-bold font-[fujifilm] ">
          FUJIFILM
        </h1>
        <p className="text-[#0e0e0f] text-[10px] tracking-[0.7vw] text-center font-[open-serif]">
          SINCE 1905
        </p>
      </div>

      <button className="font-[birch] px-6 py-2 bg-[#9b3e08] text-white font-bold rounded-sm fixed right-4 md:top-1 top-3 tracking-wider">
        BUY NOW
      </button>
    </div>
  );
};

export default Navbar;
