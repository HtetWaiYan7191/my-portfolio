import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Carousel from "./Carousel";
import "../styles/PopUpContainer.css";

const PopUpContainer = ({ popUpProject, setOpenPopCard, openPopCard }) => {
  const carouselImagesArray = popUpProject.flatMap(
    (project) => project.carouselImage
  );

  return (
    <div
      className={`pop-up-container fixed md:flex md:justify-center md:items-center  transition-all duration-500 ease  ${
        openPopCard ? `z-40 left-0 top-0` : `  `
      } backdrop-blur-md   w-[100%] h-[100vh]  bg-slate-600/50`}
    >
      <div
        className={`pop-up-card my-[10%] transition-all duration-500 ease  ${
          openPopCard ? "show" : "hide"
        }`}
      >
        <div className={`max-w-lg bg-slate-900 pop-up pt-2 md:pt-0 pb-5 `}>
          <button
            className=" w-[100%] cross-btn-container flex justify-end md:bg-slate/800 md:hover:opacity-50"
            type="button"
            onClick={() => setOpenPopCard(!openPopCard)}
          >
            <RxCross2 className="text-2xl m-3 text-white" />
          </button>
          <Carousel>
            {carouselImagesArray.map((image, id) => (
              <img src={image} key={id} alt="carousel Image" />
            ))}
          </Carousel>
          <h2 className="text-white text-2xl ms-8 my-3 font-bold">
            {popUpProject[0].name}
          </h2>
          <ul className="flex text-sky-200 font-semibold intro-name ms-8">
            {popUpProject[0].techStack.map((tech, id) => (
              <li key={id} className="me-4">
                {tech}
              </li>
            ))}
          </ul>
          <p className="text-white/90 text-left text-sm p-7 overflow-auto h-[150px] mb-4">
            {popUpProject[0].description}
          </p>
          <div className="justify-between flex w-[85%] mx-auto mt-5">
            <a href={popUpProject[0].liveLink} target="blank">
              <button
                className="border-2 d-button border-sky-500 bg-sky-500/20 md:hover:border-sky-300 md:hover:text-white text-sky-300 font-bold py-1 px-2 mt-5 rounded-sm"
                type="button"
              >
                View Live
              </button>
            </a>
            <a href={popUpProject[0].sourceLink} target="blank">
              <button
                className="border-2 d-button border-sky-500 bg-sky-500/20 md:hover:border-sky-300 md:hover:text-white text-sky-300 font-bold py-1 px-2 mt-5 rounded-sm"
                type="button"
              >
                View Source
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpContainer;
