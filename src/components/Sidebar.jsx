import React from "react";
import isMobile from "../Constants";

const Sidebar = ({ sidebarRef }) => {


  return (
    !isMobile && (
      <div
        ref={sidebarRef}
        className="w-[6vw] flex md:flex-col items-center md:h-screen pt-3 gap-6 fixed md:left-0 top-0 right-2"
      >
        <i className="ri-menu-line font-bold text-2xl cursor-pointer"></i>
        <i className="ri-search-line font-bold text-2xl cursor-pointer"></i>
        <i className="ri-close-fill hidden font-bold text-2xl cursor-pointer"></i>
      </div>
    )
  );
};

export default Sidebar;
