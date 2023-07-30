import React, { useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Carousel = () => {
    const [curr, setCurr] = useState(0)

  return (
    <div className=' overflow-hidden relative'>
        <div className="flex"></div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
      </div>
      <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
        <BsChevronLeft className='text-2xl'/>
      </button>
      <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
        <BsChevronRight className='text-2xl'/>
      </button>
    </div>
  )
}

export default Carousel
