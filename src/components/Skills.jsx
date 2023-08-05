import React, { useState, useEffect, useRef } from "react";
import "../styles/Skills.css";
import technologies from "../techAndProjects/technologies";
import Tilt from "react-parallax-tilt";
import { motion, useInView, useAnimation } from "framer-motion";


const Skills = () => {
  const [currentStack, setCurrentStack] = useState("fullstack");
  const ref = useRef(null);
  const allSkillsRef = useRef(null);
  const isInView = useInView(ref, {once:false});
  const controls = useAnimation();

  useEffect(() => {
    if(isInView) {
      controls.start('visible')
    }
  }, [isInView])


  const techStacks = ["fullstack", "frontend", "backend", "tools"];
  const filterTechnologies = technologies.filter(
    (tech) => tech.stack === currentStack
  );

  const handleClick = (stack) => {
    setCurrentStack(stack);
  };
  return (
    <section className="skill-section-container h-[80vh] md:h-[100vh] md:pt-36 pt-32" id="skill-section">
      <motion.div 
      variants={{
        hidden: {opacity:0, y:-75},
        visible: {opacity:1, y:0}
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.5}}
      ref={ref}
      >
      <h2
        className={`text-sky-200 font-semibold font-mono text-center text-3xl about-me-title`}
      >
        TECH STACK
      </h2>
      </motion.div>
      <div className="skill-section my-10 ">
        <div className="skill-button-container flex justify-evenly md:justify-center w-[90%] mx-auto items-center">
          {techStacks.map((stack,id) => (
           <motion.div
           key={id}
           variants={{
             hidden: { opacity: 0, x: -50 }, // Slide the buttons from left to right
             visible: {
               opacity: 1,
               x: 0,
               transition: { delay: id * 0.1, duration: 0.5 }, // Apply a delay based on the button index
             },
           }}
           initial="hidden"
           animate={controls}
           ref={ref}
         >
            <button
              type="button"
              key={id}
              className={` px-3 capitalize text-white/90  md:text-xl md:hover:text-sky-400  ${
                currentStack === stack
                  ? ` text-sky-400 border-sky-500 md:text-sky-500 border d-button `
                  : `text-white`
              }  py-2  font-semibold`}
              onClick={() => handleClick(stack)}
            >
              {stack}
            </button>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
            variants={{
              hidden: {opacity:0, y:50},
              visible: {opacity:1, y:0,}
            }}
            transition={{duration: 0.7}}
            initial="hidden"
            animate={controls}
            allSkillsRef={allSkillsRef}
            >
      <div className="skill-image-container md:w-[80%] md:mx-auto grid grid-cols-4 md:grid-cols-8 gap-x-5 gap-y-6">
        {currentStack === "fullstack"
          ? technologies.map((tech) => (
              <Tilt
                key={tech.id}
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
                 key={tech.id}
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
      </motion.div>
    </section>
  );
};

export default Skills;
