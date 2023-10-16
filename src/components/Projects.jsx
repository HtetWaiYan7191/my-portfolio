import React, { useEffect, useRef, useState } from 'react';
import projects from '../techAndProjects/projects';
import ProjectCard from './ProjectCard';
import PopUpContainer from './PopUpContainer';
import { motion, useInView, useAnimation } from 'framer-motion';

const Projects = () => {
  const [openPopCard, setOpenPopCard] = useState(false);
  const [popUpId, setPopUpId] = useState(1);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const firstDivIsInView = useInView(firstDivRef, { once: false });
  const secondDivIsInView = useInView(secondDivRef, { once: false });
  const firstDivControls = useAnimation();
  const secondDivControls = useAnimation();

  useEffect(() => {
    if (firstDivIsInView) {
      firstDivControls.start('visible');
    }
    if (secondDivIsInView) {
      secondDivControls.start('visible');
    }
  }, [firstDivIsInView, secondDivIsInView]);

  const popUpProject = projects.filter((project) => project.id === popUpId);

  const handlePopUp = (id) => {
    setPopUpId(id);
    setOpenPopCard(!openPopCard);
  };

  return (
    <section className='project-section-container relative  md:h-[130vh] lg:h-[150vh] md:pt-36 pt-32' id='project-section'>
      <div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate={firstDivControls}
          transition={{ duration: 0.5 }}
          ref={firstDivRef}
        >
          <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title'>Recent Work</h2>
        </motion.div>
      </div>
      <div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={secondDivControls}
          transition={{ duration: 0.8 }}
          ref={secondDivRef}
        >
          <div className='project-section grid grid-cols-1 md:grid-cols-3 md:gap-10 md:w-[90%] md:mx-auto gap-10 my-9'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} handlePopUp={handlePopUp} openPopCard={openPopCard} />
            ))}
          </div>
        </motion.div>
      </div>
      {/* popup */}
      <PopUpContainer openPopCard={openPopCard} popUpProject={popUpProject} setOpenPopCard={setOpenPopCard} />
    </section>
  );
};

export default Projects;
