import React, { useState } from 'react'
import '../styles/Skills.css';
import technologies from '../techAndProjects/technologies';

const Skills = () => {

   const [currentStack, setCurrentStack] = useState('fullstack');

    const techStacks = ['fullstack','frontend','backend','tools'];
    const filterTechnologies = technologies.filter((tech) => tech.stack === currentStack);
    console.log(filterTechnologies)

    const handleClick = (stack) => {
      setCurrentStack(stack);
    }
  return (
    <section className='skill-section-container h-[100vh]'>
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>TECH STACK</h2>
      <div className='skill-section my-10 '>
           <div className='skill-button-container flex justify-evenly w-[90%] mx-auto items-center'>
            {techStacks.map((stack) => (
                <button type="button" key={stack} className={` px-3 capitalize ${currentStack === stack ? `bg-slate-900 text-sky-500` : `text-white`}  py-2  font-semibold`} onClick={() => handleClick(stack)}>{stack}</button>
            ))}
           </div>
      </div>
      <div className='skill-image-container grid grid-cols-4 gap-x-5 gap-y-6'>
              {
                currentStack === 'fullstack' ? (
                    technologies.map((tech) => (
                        <figure key={tech.icon} className='border-slate-900 shadow-sky-600 hover:shadow-sky-600/50 shadow-md border rounded-br-3xl  bg-slate-900 hover:bg-slate-900/50 flex justify-center p-5'>
                          <img src={tech.icon} className='skill-icons' alt="" />
                        </figure>
                    ))
                ) : (
                  filterTechnologies.map((tech) => (
                  <figure className='border-slate-900 shadow-sky-600 hover:shadow-sky-600/50 shadow-md border rounded-br-3xl  bg-slate-900 hover:bg-slate-900/50 flex justify-center p-5'>
                    <img src={tech.icon} className='' alt={tech.stack} />
                  </figure>
                  ))
                )
              }
      </div>
    </section>
  )
}

export default Skills
