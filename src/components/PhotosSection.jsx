import React from 'react'
import car from "../assets/images/retro car.png"
import tv from "../assets/images/Tv.png"
import house from "../assets/images/vintageHouse.png"
import isMobile from '../Constants'

const PhotosSection = () => {
  return (
    <div className='w-full h-full flex justify-between mt-10'>
        <div className='md:w-4/12 flex flex-col items-center justify-between '>
            <img src={tv} alt="photo1" className='w-6/12 -rotate-20 origin-top-lft shadow-2xl' />
            <img src={car} alt="photo1" className='w-6/12 rotate-20 origin-center-left ml-5 shadow-2xl' />
        </div>
        {!isMobile && <div className='w-4/12 flex justify-center items-center'>
            <img src={house} alt="photo1" className='w-10/12 -rotate-5 origin-top-lft shadow-2xl' />
        </div>}
    </div>
  )
}

export default PhotosSection