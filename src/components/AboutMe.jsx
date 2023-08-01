import { useEffect, useState } from "react";
import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  // const [isScroll, setIsScroll] = useState(false);
  // useEffect(() => {
  //   // Function to handle the scroll event
  //   const handleScroll = () => {
  //     // Define the point at which the animation should start
  //     const startAnimationAt = 100; // Adjust this value as needed

  //     // Get the scroll position
  //     const scrollPosition = window.scrollY;

  //     // Check if the user has scrolled past the defined point
  //     if (scrollPosition > startAnimationAt) {
  //       // Add a class to trigger the animation
  //       setIsScroll(true);
  //     } else {
  //       // Remove the class when scrolling back up
  //       setIsScroll(false);
  //     }
  //   };
  //   // Add the scroll event listener
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="about-me-container h-[60vh] md:h-[90vh] " id="about-me-section">
      <h2
        className={`text-sky-200 font-semibold font-mono text-center text-3xl about-me-title transition-all duration-700 ease 
         `}
      >
        About Me
      </h2>
      <div className="about-me-card p-5 mt-5 md:w-[50%] mx-auto md:border md:border-cyan-400 md:p-10 md:rounded-md md:mt-10 md:transition-all duration-200 ease md:bg-slate-900 md:hover:shadow-lg md:hover:shadow-sky-500">
        <p className={`text-justify text-gray-300 para-1 transition-all duration-700 ease `}>
          I am a full-stack developer with expertise in{" "}
          <span className="text-effect">React, Redux, and Rails </span>to create
          tailored software solutions for diverse businesses.
        </p>

        <p className={`text-justify text-gray-300 mt-8 para-2 transition-all duration-700 ease `} >
          Over the past months, I have worked on various projects, collaborating
          with developers from around the world to develop APIs and web pages.
        </p>

        <button
          className={`border-2 border-white/90 hover:border-sky-500 bg-slate-900 text-white/90 font-bold py-1 px-2 mt-5 rounded-sm d-button `}
          type="button"
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
