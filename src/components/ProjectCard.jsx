import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {IoIosArrowDown} from 'react-icons/io'
import '../styles/ProjectCard.css'

const ProjectCard = ({ project }) => {
  const [openCard, setOpenCard] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if(!openCard) {
      e.target.parentNode.parentNode.parentNode.classList.remove('transition-show-project')
      e.target.parentNode.parentNode.parentNode.classList.add('showProject')
      setOpenCard(!openCard)
    } else {
      e.target.parentNode.parentNode.parentNode.classList.add('transition-show-project')
      e.target.parentNode.parentNode.parentNode.classList.remove('showProject')
      setOpenCard(!openCard)
    }
  }
  return (
    <div className="project-card relative w-[300px]  overflow-hidden mx-auto">
      <figure className="rounded-md overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-[100%] object-cover"
        />
      </figure>
      <div className="absolute text-sky-500  overflow-hidden z-10 overflow-card bg-slate-900/80 backdrop-blur-sm transition-show-project left-0 w-[100%] h-[100%]">
        <div className="project title flex justify-between px-5  items-center border-b border-b-gray-50/50 opacity-80 ">
            <h2 className=" py-2 text-[1.5rem] font-bold text-sky-300  intro-name">{project.name}</h2>
              {!openCard ? (
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
              <li key={id} className="text-sm text-sky-300 px-1 intro-name  ">{tech}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
