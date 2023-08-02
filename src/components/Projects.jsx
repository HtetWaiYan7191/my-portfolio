import React, {useState} from 'react'
import projects from '../techAndProjects/projects'
import ProjectCard from './ProjectCard'
import PopUpContainer from './PopUpContainer';


const Projects = () => {
  const [openPopCard, setOpenPopCard] = useState(false);
  const [popUpId, setPopUpId] = useState(1);

  const popUpProject = projects.filter((project) => project.id === popUpId);

  const handlePopUp = (id) => {
    setPopUpId(id)
    setOpenPopCard(!openPopCard);
  }
  return (
    <section className='project-section-container relative h-[240vh] md:h-[130vh] lg:h-[150vh]' id='project-section'>
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>Recent Work</h2>
        <div className='project-section grid grid-cols-1 md:grid-cols-3 md:gap-10 md:w-[90%] md:mx-auto gap-10 my-9'>
            {
                projects.map((project) => <ProjectCard key={project.id} project={project} handlePopUp={handlePopUp} openPopCard={openPopCard}/> )
            }
        </div>
                  {/* popup */}
                 
                    <PopUpContainer openPopCard={openPopCard} popUpProject={popUpProject} setOpenPopCard={setOpenPopCard}/>
                 
        

    </section>
  )
}

export default Projects
