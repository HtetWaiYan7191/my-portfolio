import React, { useEffect, useState } from 'react'
import programming from '../assets/undraw_programming_re_kg9v.svg'
import '../styles/Introduction.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { motion } from "framer-motion"

const Introduction = () => {
  return (
    <section className='intro-section-container flex-col  flex justify-around h-[100vh] items-center ' id='introduction-section'>
      <div className='intro-section flex flex-col items-center'>
          <motion.div variants={{
            hidden: {opacity:0, y:-75},
            visible: {opacity: 1, y:0},
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:1}}
    ><figure className={`intro-img-container `}>
              <img src={programming} alt="intro-image" />
          </figure>
          </motion.div>
      <motion.div variants={{
        hidden: {opacity:0, x:-70},
        visible: {opacity: 1 , x:0}
      }} 
      initial="hidden"
      animate="visible"
      transition={{duration: 0.5}}
      >
        <h2 className='text-sky-500 font-extrabold text-3xl mt-4 font-mono intro-name'>Htet Wai Yan</h2>
      <h3 className='text-sky-200 font-mono mt-3'>Full Stack Developer</h3>
      </motion.div>

      <motion.div variants={{
        hidden: {opacity:0, x:-50},
        visible: {opacity: 1 , x:0}
      }} 
      initial="hidden"
      animate="visible"
      transition={{duration: 0.5}}
      >
      <ul className='social-links flex mt-6 justify-center items-center'>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href='https://www.linkedin.com/in/htet-wai-yan19/' target='blank'><BsLinkedin/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href='https://www.instagram.com/1918hwy/' target='blank'><BsInstagram/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href='https://github.com/HtetWaiYan7191' target='blank'><BsGithub/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href='https://wellfound.com/u/htet-wai-yan-1' target='blank'><FaAngellist/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href='https://www.facebook.com/profile.php?id=100010329042751' target='blank'><BsFacebook/></a></li>
      </ul>
      </motion.div>
      </div>
    

      <div className='scrolldown-container flex flex-col'>
            <span className='text-sm text-sky-200 font-mono'>Scroll Down</span>
             <a href='#about-me-section' target=''> 
             <div className="mouse-container">
              <div className='mouse-wheel'></div>
            </div>
             </a>
      </div>
    </section>
  )
}

export default Introduction
