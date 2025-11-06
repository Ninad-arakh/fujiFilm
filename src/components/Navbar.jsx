import React from "react";

const Navbar = ({navbarRef}) => {
  return (
    <div ref={navbarRef} className=" w-[93%] flex justify-between px-4 pt-3 items-center fixed">
      <div className=" flex flex-col items-center">
        <h1 className="text-[#9b3e08] text-4xl font-bold font-[birch] tracking-wide">
          FUJIFILM
        </h1>
        <p className="text-[#0e0e0f] leading-[0.1vw] text-[10px] tracking-[0.3vw] text-center font-[open-serif]">
          SINCE 1905
        </p>
      </div>

      <button className="font-[birch] border px-6 py-2 bg-[#9b3e08] text-white font-bold rounded-sm fixed right-4 top-1 tracking-wider">
        BUY NOW
      </button>
    </div>
  );
};

export default Navbar;
