import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {IoIosArrowDown} from 'react-icons/io'
import '../styles/ProjectCard.css'
import PopUpContainer from "./PopUpContainer";

const ProjectCard = ({ project, handlePopUp, openPopCard }) => {
  const [openCard, setOpenCard] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpenCard(!openCard)
    project.cardOpen = !openCard ;
  }


  return (
    <>
          <div className="project-card relative w-[300px]  overflow-hidden mx-auto">
      <figure className="rounded-md overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-[100%] object-cover"
        />
      </figure>
      <div className={`absolute text-sky-500  overflow-hidden z-10 ${project.cardOpen ? `showProject bottom-[0%]` : `hideProject bottom-[-74%]`} overflow-card bg-slate-900/80 backdrop-blur-sm  left-0 w-[100%] h-[100%]`}>
        <div className={`project title flex justify-between px-5 ${project.cardOpen ? `bg-slate-900/70 showProject` : ` bg-slate-900/90 hideProject`} items-center border-b border-b-gray-50/50 opacity-80`}>
            <h2 className=" py-1 text-[1.5rem] font-bold text-sky-300  intro-name">{project.name}</h2>
              {!project.cardOpen ? (
                 <button type="button" className="up-arrow-container" onClick={handleClick}>
                  <IoIosArrowUp className={`text-lg  text-gray-50 `}/>
                  </button>

              ) : (
                <button type="button" className="down-arrow-container" onClick={handleClick}>
                <IoIosArrowDown className="text-lg text-gray-50"/>
                </button>
              )}

        </div>
        <ul className="project-body flex  flex-wrap justify-evenly items-center py-5 ">
            {project.techStack.map((tech, id) => (
              <li key={id} className="text-sm text-sky-300 px-1 intro-name font-bold  ">{tech}</li>
            ))}
        </ul>
        <div className = "popup-btn-container flex justify-center">
        <button className="border-2 border-sky-500 bg-sky-500/20 text-sky-300 font-bold py-1 px-2 mt-5 rounded-sm" type="button" onClick={() => handlePopUp(project.id)}>
           Learn More
        </button>
        </div>
      </div>
    </div>


    </>



  );
};

export default ProjectCard;
