import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
      <figure className='w-[400px] mx-auto'>
        <img src={project.image} alt={project.name} className='w-[100%] object-cover' />
      </figure>
    </div>
  )
}

export default ProjectCard
