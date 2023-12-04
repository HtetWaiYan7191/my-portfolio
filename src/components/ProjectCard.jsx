import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {IoIosArrowDown} from 'react-icons/io'
import '../styles/ProjectCard.css'
import PopUpContainer from "./PopUpContainer";

const ProjectCard = ({ project, handlePopUp, openPopCard }) => {
  const [openCard, setOpenCard] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOpenCard(!openCard)
    setIsHovered(!openCard)
    project.cardOpen = !openCard ;
  }


  return (
    <>
          <div className="project-card relative w-[300px] md:w-auto  overflow-hidden mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <figure className="rounded-md overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-[100%] object-cover"
        />
      </figure>
      <div className={`absolute text-sky-500  ${isHovered ? `showProject md:bottom-[0%] md:block` : `hideProject md:bottom-[-100%] `}  overflow-hidden z-10 ${project.cardOpen ? `showProject bottom-[0%]` : `hideProject bottom-[-74%]`} overflow-card bg-slate-900/80 backdrop-blur-sm  left-0 w-[100%] h-[100%]`}>
        <div className={`project title flex justify-between md:justify-center px-5 ${project.cardOpen ? `bg-slate-900 showProject` : ` bg-slate-900/90 hideProject`} items-center  opacity-80`}>
            <h2 className=" py-1 text-[1.3rem] md:py-3  md:text-[1.7rem] font-bold text-sky-300  intro-name">{project.name}</h2>
              {!project.cardOpen ? (
                 <button type="button" className="up-arrow-container" onClick={handleClick}>
                  <IoIosArrowUp className={`text-lg  text-gray-50 md:hidden `}/>
                  </button>

              ) : (
                <button type="button" className="down-arrow-container" onClick={handleClick}>
                <IoIosArrowDown className="text-lg text-gray-50 md:hidden"/>
                </button>
              )}

        </div>
        <ul className={`project-body flex ${!project.cardOpen && !isHovered && ' bg-slate-900/70  transition-all'} flex-wrap justify-evenly items-center py-5`} >
            {project.techStack.map((tech, id) => (
              <li key={id} className="text-sm md:text-lg text-sky-300 px-1 intro-name font-bold  ">{tech}</li>
            ))}
        </ul>
        <div className = "popup-btn-container flex justify-center">
        <button className="border-2 d-button border-sky-500 bg-sky-500/20 md:hover:border-sky-300 md:hover:text-white text-sky-300 font-bold py-1 px-2 mt-5 rounded-sm" type="button" onClick={() => handlePopUp(project.id)}>
           Learn More
        </button>
        </div>
      </div>
    </div>


    </>



  );
};

export default ProjectCard;
