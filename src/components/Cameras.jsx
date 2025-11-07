import React from 'react'
import blackCam from "../assets/images/blackCamera.png"
import whiteCam from "../assets/images/whiteCam.png"

const Cameras = () => {
  return (
    <div className='w-full h-full  flex justify-between px-8'>
        <div className='h-full  w-[40%] border flex justify-center items-center'>
            <img src={blackCam} alt="cam" className=' -ml-28' />
        </div>
        <div className='h-full  w-[40%] border flex justify-center items-center'>
            <img src={whiteCam} alt="cam" className=' -ml-20' />
        </div>
    </div>
  )
}

export default Cameras