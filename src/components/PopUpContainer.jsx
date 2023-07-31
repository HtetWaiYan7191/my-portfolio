import React from 'react'
import {RxCross2} from 'react-icons/rx'
import Carousel from './Carousel'

const PopUpContainer = ({popUpProject, setOpenPopCard}) => {
    const carouselImagesArray = popUpProject.flatMap((project) => project.carouselImage);
    console.log(carouselImagesArray);

  return (
    <div className="pop-up-container fixed  z-40 backdrop-blur-md   left-0 top-0 w-[100%] h-[100vh]  bg-slate-600/50">
    <div className="pop-up-card">
        <button className=' w-[100%] cross-btn-container flex justify-end' type='button' onClick={() => setOpenPopCard(false)}>
            <RxCross2 className='text-2xl m-3 text-white'/>
        </button>
        <div className='max-w-lg'>
            <Carousel>
                {carouselImagesArray.map((image, id) => (
                    <img src={image} key={id} alt="carousel Image" />
                ))}
            </Carousel>
        </div>
        





    </div>  
      <div className="pop-up-overlay">
      </div>
    </div>
  )
}

export default PopUpContainer
