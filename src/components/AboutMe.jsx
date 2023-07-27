import React from 'react'
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className='about-me-container h-[100vh]'>
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>About Me</h2>
      <div className='about-me-card p-5 mt-5'>
        <p className='text-justify text-gray-300 para-1 '>
         I am a full-stack developer  with expertise in  <span className='text-effect'>React, Redux, 
         and Rails </span>to create tailored software solutions for diverse businesses.
        </p>

        <p className='text-justify text-gray-300 mt-8 para-2 '>
        Over the past months, I have worked on various projects, 
        collaborating with developers from around the world to develop 
        APIs and web pages.
        </p>

        <button class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-2 mt-5">
            Resume
        </button>
      </div>
    </section>
  )
}

export default AboutMe
