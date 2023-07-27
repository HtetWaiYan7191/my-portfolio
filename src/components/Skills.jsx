import React, { useState } from 'react'
import '../styles/Skills.css';
import technologies from '../techAndProjects/technologies';

const Skills = () => {
    const [fullStack, setFullStack] = useState(true);
    const [frontEnd, setFrontEnd] = useState(false);
    const [backEnd, setBackEnd] = useState(false);
    const [tools, setTools] = useState(false);

    const techStacks = ['fullstack','frontend','backend','tools'];

    // const filterTechnologies = technologies.filter((tech) => tech.stack === 'frontend');

    const handleFullStack = () => {
        setFullStack(!fullStack)
        setFrontEnd(false)
        setBackEnd(false)
        setTools(false)
    }

    const handleFrontEnd = () => {
        setFullStack(false)
        setFrontEnd(true)
        setBackEnd(false)
        setTools(false)
    }

    const handleBackEnd = () => {
        setFullStack(false)
        setFrontEnd(false)
        setBackEnd(true)
        setTools(false)
    }

    const handleTools = () => {
        setFullStack(false)
        setFrontEnd(false)
        setBackEnd(false)
        setTools(true)
    }
  return (
    <section className='skill-section-container h-[100vh]'>
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>TECH STACK</h2>
      <div className='skill-section my-10 '>
           <div className='skill-button-container flex justify-evenly w-[90%] mx-auto items-center'>
            <button type="button" className={` relative  px-3 py-2  font-semibold ${fullStack ? `bg-slate-900 text-sky-500 ` : `text-white`}`} onClick={handleFullStack}>FullStack</button>
            <button type="button" className={` relative  px-3 py-2  font-semibold ${frontEnd ? `bg-slate-900 text-sky-500 ` : `text-white`}`} onClick={handleFrontEnd}>FrontEnd</button>
            <button type="button" className={` relative  px-3 py-2  font-semibold ${backEnd ? `bg-slate-900 text-sky-500 ` : `text-white`}`} onClick={handleBackEnd}>BackEnd</button>
            <button type="button" className={` relative  px-3 py-2   font-semibold ${tools ? `bg-slate-900 text-sky-500 ` : `text-white`}`} onClick={handleTools}>Tools</button>
           </div>
      </div>
      <div className='skill-image-container'>

      </div>
    </section>
  )
}

export default Skills
