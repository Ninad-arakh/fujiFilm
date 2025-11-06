import React from 'react'

const Sidebar = ({sidebarRef}) => {
  return (
    <div ref={sidebarRef} className='w-[6vw] flex flex-col items-center h-screen pt-3 gap-6 fixed left-0 top-0'>
        <i className="ri-menu-line font-bold text-2xl cursor-pointer"></i>
        <i className="ri-search-line font-bold text-2xl cursor-pointer"></i>
        <i className="ri-close-fill hidden font-bold text-2xl cursor-pointer"></i>
    </div>
  )
}

export default Sidebar