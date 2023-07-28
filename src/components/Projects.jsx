import React from 'react'
import projects from '../techAndProjects/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='project-section-container h-[150vh]'>
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>Recent Work</h2>
        <div className='project-section grid grid-cols-1 gap-10 my-9'>
            {
                projects.map((project) => <ProjectCard key={project.id} project={project}/> )
            }
        </div>
    </section>
  )
}

export default Projects
