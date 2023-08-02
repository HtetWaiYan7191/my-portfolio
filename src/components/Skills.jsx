import React, { useState, useEffect } from "react";
import "../styles/Skills.css";
import technologies from "../techAndProjects/technologies";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [currentStack, setCurrentStack] = useState("fullstack");

  const techStacks = ["fullstack", "frontend", "backend", "tools"];
  const filterTechnologies = technologies.filter(
    (tech) => tech.stack === currentStack
  );
  console.log(filterTechnologies);

  const handleClick = (stack) => {
    setCurrentStack(stack);
  };
  return (
    <section className="skill-section-container h-[80vh]" id="skill-section">
      <h2
        className={`text-sky-200 font-semibold font-mono text-center text-3xl about-me-title`}
      >
        TECH STACK
      </h2>
      <div className="skill-section my-10 ">
        <div className="skill-button-container flex justify-evenly md:justify-center w-[90%] mx-auto items-center">
          {techStacks.map((stack) => (
            <button
              type="button"
              key={stack}
              className={` px-3 capitalize text-white/90 md:hover:border-b-sky-400  md:text-xl md:hover:text-sky-400 md:hover:border-b ${
                currentStack === stack
                  ? `  text-sky-500 md:text-sky-500 `
                  : `text-white`
              }  py-2  font-semibold`}
              onClick={() => handleClick(stack)}
            >
              {stack}
            </button>
          ))}
        </div>
      </div>
      <div className="skill-image-container md:w-[80%] md:mx-auto grid grid-cols-4 md:grid-cols-8 gap-x-5 gap-y-6">
        {currentStack === "fullstack"
          ? technologies.map((tech) => (
              <Tilt
                glareEnable={false}
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                perspective={1000}
              >
                <figure
                  key={tech.icon}
                  className="border-slate-900   shadow-sky-600  md:shadow-blue-300 md:shadow-md md:hover:shadw-blue-500 hover:shadow-sky-600/50 shadow-md border rounded-br-3xl md:rounded-br-[30%] md:w-32 md:h-32  bg-slate-900  flex justify-center p-5"
                >
                  <img src={tech.icon} className="skill-icons" alt="" />
                </figure>
              </Tilt>
            ))
          : filterTechnologies.map((tech) => (
              <Tilt
                glareEnable={false}
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                perspective={1000}
              >
                <figure className="border-slate-900  shadow-sky-600 md:shadow-blue-300 md:hover:shadow-blue-500 hover:shadow-sky-600/50 shadow-md border rounded-br-3xl  bg-slate-900  flex justify-center p-5">
                  <img
                    src={tech.icon}
                    className="skill-icons"
                    alt={tech.stack}
                  />
                </figure>
              </Tilt>
            ))}
      </div>
    </section>
  );
};

export default Skills;
