import { useEffect, useState, useRef } from "react";
import React from "react";
import "../styles/AboutMe.css";
import { motion, useInView, useAnimation } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:false});
  const controls = useAnimation();

  useEffect(() => {
    if(isInView) {
      controls.start('visible')
    }
  } ,[isInView])

  return (
    <section
      className="about-me-container  md:h-[80vh] lg:h-[100vh] md:pt-36 pt-32 "
      id="about-me-section"
    >
      <motion.div
      variants={{
        hidden: {opacity:0, x:-55},
        visible: {opacity:1, x:0}
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.5}}
      ref={ref}>
      <h2
        className={`text-sky-200 font-semibold font-mono text-center text-3xl about-me-title transition-all duration-700 ease 
         `}
      >
        About Me
      </h2>
      </motion.div>
      <motion.div variants={{
        hidden: {opacity:0, y:75},
        visible: {opacity:1, y:0}
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.5}}
      ref={ref}
      
      >
      <div  className="about-me-card p-5 mt-5 md:w-[50%] mx-auto md:border md:border-cyan-400 md:p-10 md:rounded-md md:mt-10 md:transition-all duration-200 ease md:bg-slate-900 md:hover:shadow-lg md:hover:shadow-sky-500">
        <p
          className={`text-justify text-gray-300 para-1 transition-all duration-700 ease `}
        >
          I am a full-stack developer with expertise in{" "}
          <span className="text-effect">React, Redux, and Rails </span>to create
          tailored software solutions for diverse businesses.
        </p>

        <p
          className={`text-justify text-gray-300 mt-8 para-2 transition-all duration-700 ease `}
        >
          Over the past months, I have worked on various projects, collaborating
          with developers from around the world to develop APIs and web pages.
        </p>
        <a href="https://drive.google.com/file/d/1qS5bK2p9yM3MJplNNE7nZsxf-VXeZhaV/view?usp=sharing" target="blank">
          <button
            className={`border-2 border-white/90 hover:border-sky-500 bg-slate-900 text-white/90 font-bold py-1 px-2 mt-5 rounded-sm d-button `}
            type="button"
          >
            Resume
          </button>
        </a>
      </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
