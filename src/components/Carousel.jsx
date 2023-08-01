import React, { useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Carousel = ({children:carouselImage}) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? carouselImage.length - 1 : curr -1));

    const next = () => setCurr((curr) => (curr === carouselImage.length - 1 ? 0 : curr + 1))

  return (
    <div className=' overflow-hidden relative w-[95%] md:w-[100%] mx-auto'>
        <div className="flex transition-transform ease-out duration-500 " style = {{transform:`translateX(-${curr*100}%)`}}>{carouselImage}</div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
      <button onClick={prev} className=' p-1 rounded-full shadow bg-gray-300/80 text-gray-800 hover:bg-gray-300'>
        <BsChevronLeft size={15} className=''/>
      </button>
      <button onClick={next} className=' p-1 rounded-full shadow bg-gray-300/80 text-gray-800 hover:bg-gray-300'>
        <BsChevronRight size={15} className=''/>
      </button>
      </div>

      <div className='absolute bottom-3 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
            {carouselImage.map((_, i) => (
              <div key={i} className={`transition-all duration-500 w-2 h-2   rounded-full
                  ${curr === i ? "p-1 bg-sky-500" : "bg-opacity-50 bg-slate-900"} `} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
